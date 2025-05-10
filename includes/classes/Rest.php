<?php

/**
 * Rest API
 * this class is used to register rest routes and handle requests
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use WP_REST_Request;
use WP_REST_Response;

class Rest
{

	protected static $namespace = 'cyn/v1';

	public static function init()
	{
		add_action('rest_api_init', [__CLASS__, 'registerRoutes']);
	}

	public static function registerRoutes()
	{
		self::makeRoute('/form', 'POST', [__CLASS__, 'createForm']);
	}

	public static function createForm(WP_REST_Request $request)
	{

		$body = $request->get_body_params();

		$name = isset($body['name']) ? sanitize_text_field($body['name']) : '';
		$last_name = isset($body['last_name']) ? sanitize_text_field($body['last_name']) : '';
		$phone = isset($body['phone']) ? sanitize_text_field($body['phone']) : '';
		$email = isset($body['email']) ? sanitize_text_field($body['email']) : '';
		$plan = isset($body['plan']) ? sanitize_text_field($body['plan']) : '';
		$keywords = isset($body['keywords']) ? sanitize_text_field($body['keywords']) : '';
		$address_website = isset($body['address_website']) ? sanitize_text_field($body['address_website']) : '';
		$budget = isset($body['budget']) ? sanitize_text_field($body['budget']) : '';


		$new_post = wp_insert_post([
			'post_type' => 'form',
			'post_title' => $name . ' ' . $last_name,
			'post_status' => 'private',
			'meta_input' => [
				'_name' => $name,
				'_last_name' => $last_name,
				'_phone' => $phone,
				'_email' => $email,
				'_plan' => $plan,
				'_keywords' => $keywords,
				'_address_website' => $address_website,
				'_budget' => $budget,
			]
		]);

		if (is_wp_error($new_post)) {
			return new WP_REST_Response('Something went wrong, please try again!', 500);
		}

		return new WP_REST_Response('form created successfully!');
	}

	/**
	 * make route
	 * @param string $route route path
	 * @param string $methods GET, POST, PUT, DELETE, etc.
	 * @param callable $callback callback function
	 * @param callable $permission_callback permission callback function
	 * @return void
	 */
	private static function makeRoute($route, $methods, $callback, $permission_callback = '__return_true')
	{
		register_rest_route(self::$namespace, $route, [
			'methods' => $methods,
			'callback' => $callback,
			'permission_callback' => $permission_callback
		]);
	}
}
