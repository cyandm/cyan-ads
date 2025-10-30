<?php

/**
 * Customize
 * this class is used to register customize in theme
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Customize
{

	private static $wpCustomize;

	public static function init()
	{
		add_action('customize_register', [__CLASS__, 'register']);
	}

	public static function register($wp_customize)
	{
		self::$wpCustomize = $wp_customize;
		self::registerPanelPopUpForm();
		self::registerPanelCustomCode();
		self::registerPanelHeader();
	}

	private static function addControl($section, $type, $id, $label, $description = '')
	{

		self::$wpCustomize->add_setting(
			$id,
			['type' => 'option']
		);


		if ($type == "file") {
			self::$wpCustomize->add_control(
				new \WP_Customize_Upload_Control(
					self::$wpCustomize,
					$id,
					[
						'label' => $label,
						'section' => $section,
						'settings' => $id,
						'description' => $description,
					]
				)
			);
		}

		if ($type != 'file') {
			self::$wpCustomize->add_control(
				$id,
				[
					'label' => $label,
					'section' => $section,
					'settings' => $id,
					'type' => $type,
					'description' => $description,
				]
			);
		}
	}

	private static function registerPanelHeader()
	{
		self::$wpCustomize->add_panel(
			'headerItems',
			[
				'title' => 'تنظیمات هدر',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'headerLogo',
			[
				'title' => 'لوگوی هدر',
				'priority' => 1,
				'panel' => 'headerItems'
			]
		);

		self::addControl('headerLogo', 'file', "cyn_header_logo", "لوگوی هدر");

		self::$wpCustomize->add_section(
			'header_phone_call',
			[
				'title' => 'تلفن',
				'priority' => 1,
				'panel' => 'headerItems'
			]
		);

		self::addControl('header_phone_call', 'text', "cyn_header_phone_number", "شماره تلفن");

		self::$wpCustomize->add_section(
			'link_whatsapp',
			[
				'title' => 'واتس اپ',
				'priority' => 1,
				'panel' => 'headerItems'
			]
		);

		self::addControl('link_whatsapp', 'text', "cyn_link_whatsapp", "لینک واتس اپ");

		self::$wpCustomize->add_section(
			'header_items_menu',
			[
				'title' => 'آیتم های منو',
				'priority' => 1,
				'panel' => 'headerItems'
			]
		);

		for ($num = 1; $num <= 8; $num++) {
			self::addControl('header_items_menu', 'text', "cyn_header_menu_title_" . $num, "تایتل آیتم" . $num);
			self::addControl('header_items_menu', 'url', "cyn_header_menu_link_" . $num, "لینک آیتم" . $num);
		}
	}

	private static function registerPanelPopUpForm()
	{
		self::$wpCustomize->add_panel(
			'popUp_form',
			[
				'title' => 'تنظیمات پاپ آپ فرم',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'form_title',
			[
				'title' => 'تایتل فرم پاپ آپ',
				'priority' => 1,
				'panel' => 'popUp_form'
			]
		);

		self::addControl('form_title', 'text', "cyn_form_title", "تایتل فرم");

		self::$wpCustomize->add_section(
			'form_phone_call',
			[
				'title' => 'شماره تماس',
				'priority' => 1,
				'panel' => 'popUp_form'
			]
		);

		self::addControl('form_phone_call', 'text', "cyn_form_phone_title", "تایتل شماره تماس");

		self::addControl('form_phone_call', 'text', "cyn_form_phone_number", "شماره تماس");
	}

	private static function registerPanelCustomCode()
	{
		self::$wpCustomize->add_panel(
			'custom_code',
			[
				'title' => 'تنظیمات کدهای سفارشی',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'head_section',
			[
				'title' => 'داخل تگ head',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);


		for ($i = 1; $i <= 10; $i++) {
			self::addControl('head_section', 'textarea', "cyn_head_code_$i", "کد سفارشی $i");
		}

		self::$wpCustomize->add_section(
			'start_body_section',
			[
				'title' => 'ابتدای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('start_body_section', 'textarea', "cyn_start_body_code_$i", "کد سفارشی $i");
		}


		self::$wpCustomize->add_section(
			'end_body_section',
			[
				'title' => 'انتهای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('end_body_section', 'textarea', "cyn_end_body_code_$i", "کد سفارشی $i");
		}
	}
}
