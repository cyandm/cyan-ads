<?php

/**
 * Cyan Theme Functions
 * this file is used to initialize the theme
 * @package CyanTheme
 */



//Constants
define('THEME_DIR', get_template_directory());
define('THEME_URI', get_template_directory_uri());
define('THEME_VERSION', '2.2.2');
define('ENVIRONMENT', 'production'); //development, production
define('THEME_SLUG', 'cyn-theme');
define('THEME_NAME', 'Cyan Theme');

define('THEME_ASSETS_DIR', THEME_DIR . '/assets');
define('THEME_ASSETS_URI', THEME_URI . '/assets');

define('THEME_IMAGES_DIR', THEME_DIR . '/assets/image');
define('THEME_IMAGES_URI', THEME_URI . '/assets/image');

add_filter('big_image_size_threshold', '__return_false');

//Autoload
include_once THEME_DIR . '/vendor/autoload.php';

//Setup Theme
Cyan\Theme\Classes\Setup::init();
