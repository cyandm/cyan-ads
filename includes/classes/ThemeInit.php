<?php
/**
 * Theme initialization
 * this file is used to initialize the theme and its assets,
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class ThemeInit {

	private static $isDev;
	private static $version;


	public static function init() {
		self::$isDev = ENVIRONMENT === 'development';
		self::$version = self::$isDev ? time() : THEME_VERSION;

		//Initialize theme
		add_action( 'init', [ __CLASS__, 'removeUnnecessaryAssets' ] );

		//Scripts
		add_action( 'wp_enqueue_scripts', [ __CLASS__, 'frontendEnqueueScripts' ] );
		add_action( 'admin_enqueue_scripts', [ __CLASS__, 'adminEnqueueScripts' ] );

		//Theme Support
		self::themeSupport( [ 'general', 'woocommerce' ] );

		//Logout user
		self::logoutUser();

		//Allow SVG
		self::allowSvg();
	}

	public static function removeUnnecessaryAssets() {
		//Remove login errors
		add_filter( 'login_errors', '__return_null' );

		//Remove block editor
		add_filter( 'use_block_editor_for_post', '__return_false', 10 );
		add_filter( 'use_block_editor_for_post_type', '__return_false', 10 );

		//Remove wp-embed
		remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
		remove_action( 'wp_head', 'wp_oembed_add_host_js' );

		//Remove wp-embed script
		wp_deregister_script( 'wp-embed' );

		//Remove wp-block-library
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
		wp_dequeue_style( 'wc-block-style' );

		//Remove wp-polyfill
		wp_dequeue_script( 'wp-polyfill' );
		wp_dequeue_script( 'wp-polyfill-polyfill-file' );
		wp_dequeue_script( 'wp-polyfill-polyfill-json' );
		wp_dequeue_script( 'wp-polyfill-polyfill-url' );

		//Remove Emojis
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'wp_head', 'wp_generator' );
		remove_action( 'wp_head', 'rsd_link' );
		remove_action( 'wp_head', 'wlwmanifest_link' );
	}

	public static function themeSupport( $capabilities = [ 'general' ] ) {

		if ( in_array( 'general', $capabilities ) ) {
			//General theme support
			add_theme_support( 'custom-logo' );
			add_theme_support( 'post-thumbnails' );
			add_theme_support( 'title-tag' );
			add_theme_support( 'automatic-feed-links' );
			add_theme_support( 'html5', [ 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ] );
		}

		if ( in_array( 'woocommerce', $capabilities ) ) {
			//WooCommerce
			add_theme_support( 'woocommerce' );
			add_theme_support( 'wc-product-gallery-zoom' );
			add_theme_support( 'wc-product-gallery-lightbox' );
			add_theme_support( 'wc-product-gallery-slider' );
		}
	}

	public static function frontendEnqueueScripts() {

		$css_path = self::$isDev ? '/css/dist/cyn-theme-style.css' : '/css/dist/cyn-theme-style.min.css';
		$js_path = self::$isDev ? '/js/dist/cyn-theme-script.bundle.js' : '/js/dist/cyn-theme-script.bundle.min.js';
		$js_css_path = self::$isDev ? '/js/dist/cyn-theme-script.bundle.css' : '/js/dist/cyn-theme-script.bundle.min.css';

		//Enqueue styles
		wp_enqueue_style( THEME_SLUG, THEME_ASSETS_URI . $css_path, [], self::$version );
		wp_enqueue_style( THEME_SLUG . '-js', THEME_ASSETS_URI . $js_css_path, [], self::$version );

		//Enqueue scripts
		wp_enqueue_script( THEME_SLUG, THEME_ASSETS_URI . $js_path, [ 'jquery' ], self::$version, true );

		//Localize scripts
		wp_localize_script( THEME_SLUG, 'themeData', [ 
			'ajaxUrl' => admin_url( 'admin-ajax.php' ),
			'restUrl' => get_rest_url(),
			'nonce' => wp_create_nonce( 'theme_nonce' ),
		] );
	}

	/**
	 * Admin enqueue scripts
	 * Build theme is not effective on this files
	 * @return void
	 */
	public static function adminEnqueueScripts() {
		//Enqueue admin styles
		wp_enqueue_style( THEME_SLUG . '-admin', THEME_URI . '/assets/css/admin.css', [], self::$version );

		//Enqueue admin scripts
		wp_enqueue_script( THEME_SLUG . '-admin', THEME_URI . '/assets/js/admin.js', [ 'jquery' ], self::$version, true );
	}

	public static function logoutUser() {
		add_action( 'wp_logout', function () {
			wp_redirect( home_url() );
			exit();
		} );
	}

	public static function allowSvg() {

		add_filter( 'wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {
			$filetype = wp_check_filetype( $filename, $mimes );

			return [ 
				'ext' => $filetype['ext'],
				'type' => $filetype['type'],
				'proper_filename' => $data['proper_filename']
			];
		}, 10, 4 );

		add_filter( 'upload_mimes', function ($mimes) {
			$mimes['svg'] = 'image/svg+xml';
			return $mimes;
		}, 10, 1 );
	}
}

