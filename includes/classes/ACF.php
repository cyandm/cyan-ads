<?php

/**
 * ACF Class
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Validators;
use Cyan\Theme\Helpers\ACF\AcfGroup;


class ACF
{

	public static function init()
	{
		$isDev = ENVIRONMENT === 'development';
		$isDev ? null : add_filter('acf/settings/show_admin', '__return_false', 100);

		if (! function_exists('acf_add_local_field_group')) {
			return;
		}


		add_action('acf/include_fields', [__CLASS__, 'registerAllACF']);
	}

	/**
	 * Register all ACF fields for the individual post types, taxonomies, page templates, and menu items
	 * @return void
	 */
	public static function registerAllACF()
	{
		self::forSeoAds();
		self::forDesignAds();
		self::forPortfolio();
		self::forPlan();
		self::forPost();
	}

	private static function forSeoAds()
	{

		$acfGroup = new AcfGroup();

		#region Header Section
		$acfGroup->layoutFields->addTab('header_tab', 'هدر');

		$acfGroup->contentFields->addImage('logo_header', 'لوگو', ['width' => '50%']);

		$acfGroup->basicFields->addText('counseling_phone', 'تلفن', ['width' => '50%']);


		for ($i = 1; $i <= 8; $i++) {
			$acfGroup->relationshipFields->addLink("menu_items_$i", "منو: آیتم $i", ['width' => '25%']);
		}
		#endregion

		#region Hero Section
		$acfGroup->layoutFields->addTab('hero_tab', 'هیرو');

		$acfGroup->basicFields->addText('main_title_desktop', 'تایتل اصلی دسکتاپ', [
			'width' => '50%',
		]);
		$acfGroup->basicFields->addText('main_title_mobile', 'تایتل اصلی موبایل', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('sub_title', 'تایتل فرعی', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('btn_title', 'متن دکمه', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('btn_call_title', 'متن دکمه تماس', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('btn_call_num', 'شماره تماس', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('title_analyze_popup', 'تایتل پاپ آپ فرم آنالیز کسب و کار', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('subtitle_analyze_popup', 'ساب تایتل پاپ آپ فرم آنالیز کسب و کار', [
			'width' => '50%',
		]);

		#endregion

		#region Customers Right
		$acfGroup->layoutFields->addTab('customers_right', 'اسلایدشو مشتریان (راست) ');

		$acfGroup->basicFields->addText('swiper_title', 'تایتل اسلایدشو', [
			'width' => '100%',
		]);

		for ($i = 1; $i <= 10; $i++) {


			$acfGroup->contentFields->addImage("customer_logo_img_right_$i", "لوگو $i", [
				'width' => '50%'
			], "customer_logo_img_right_$i");

			$acfGroup->basicFields->addText("customer_logo_title_right_$i", "تایتل لوگو $i", [
				'width' => '50%'
			], "customer_logo_title_right_$i");
		}
		#endregion

		#region Customers Left
		$acfGroup->layoutFields->addTab('customers_left', 'اسلایدشو مشتریان (چپ)');

		for ($i = 1; $i <= 10; $i++) {


			$acfGroup->contentFields->addImage("customer_logo_img_left_$i", "لوگو $i", [
				'width' => '50%'
			], "customer_logo_img_left_$i");

			$acfGroup->basicFields->addText("customer_logo_title_left_$i", "تایتل لوگو $i", [
				'width' => '50%'
			], "customer_logo_title_left_$i");
		}

		$acfGroup->layoutFields->addTab("views", "ویدئو نظرات");

		$acfGroup->basicFields->addText('views_title', 'تایتل نظرات', [
			'width' => '100%'
		]);

		for ($i = 1; $i <= 24; $i++) {

			$acfGroup->contentFields->addImage("view_video_cover_$i", "کاور ویدئو نظرات $i", [
				"width" => "25%"
			]);

			$acfGroup->contentFields->addFile("view_video_file_$i", "فایل ویدئو نظرات $i", [
				'width' => '25%'
			]);

			$acfGroup->basicFields->addText("name_$i", "نام $i", [
				'width' => '25%'
			]);

			$acfGroup->basicFields->addText("position_$i", "معرفی $i", [
				"width" => "25%"
			]);
		}
		#endregion

		#region Steps
		$acfGroup->layoutFields->addTab("steps", "قدم ها");

		$acfGroup->basicFields->addText('steps_title', 'تایتل قدم ها', [
			'width' => '100%'
		]);

		$acfGroup->basicFields->addText('step_1', 'قدم اول', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_1_description', 'توضیحات قدم اول', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_2', 'قدم دوم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_2_description', 'توضیحات قدم دوم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_3', 'قدم سوم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_3_description', 'توضیحات قدم سوم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_4', 'قدم چهارم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_4_description', 'توضیحات قدم چهارم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_5', 'قدم پنجم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_5_description', 'توضیحات قدم پنجم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_6', 'قدم ششم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_6_description', 'توضیحات قدم ششم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_7', 'قدم هفتم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_7_description', 'توضیحات قدم هفتم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_8', 'قدم هشتم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_8_description', 'توضیحات قدم هشتم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_9', 'قدم نهم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_9_description', 'توضیحات قدم نهم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('step_10', 'قدم دهم', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addTextarea('step_10_description', 'توضیحات قدم دهم', [
			'width' => '50%'
		]);
		#endregion

		#region SEO Services
		$acfGroup->layoutFields->addTab('seo-services', 'انواع خدمات سئو');

		$acfGroup->basicFields->addText('seo_services_title', 'تایتل انواع خدمات', [
			'width' => '100%'
		]);

		for ($i = 1; $i <= 4; $i++) {

			$acfGroup->basicFields->addText('seo_services_tab_' . $i, 'تایتل تب ' . $i, [
				'width' => '50%'
			]);

			$acfGroup->basicFields->addTextarea('seo_services_content_' . $i, 'محتوا تب ' . $i, [
				'width' => '50%'
			]);
		}
		#endregion

		#region Videos
		$acfGroup->layoutFields->addTab("videos", "ویدئوهای آموزشی");

		$acfGroup->basicFields->addText('videos_title', 'تایتل ویدئو', [
			'width' => '100%'
		]);


		for ($i = 1; $i <= 10; $i++) {

			$acfGroup->contentFields->addImage("video_cover_$i", "کاور ویدئو $i", [
				"width" => "25%"
			]);

			$acfGroup->contentFields->addFile("video_file_$i", "فایل ویدئو $i", [
				'width' => '25%'
			]);

			$acfGroup->basicFields->addText("title_$i", "تایتل $i", [
				'width' => '25%'
			]);

			$acfGroup->basicFields->addText("sub_title_$i", "تایتل فرعی $i", [
				"width" => "25%"
			]);
		}
		#endregion

		#region Web Team

		$acfGroup->layoutFields->addTab("web-team-slideShow", "تیم طراحی");

		$acfGroup->basicFields->addText("web_team_title", "تایتل تیم طراحی", [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('view_all_btn_title', ' متن مشاهده همه', [
			'width' => '50%'
		]);

		$acfGroup->basicFields->addText('view_all_btn_link', 'لینک مشاهده همه', [
			'width' => '50%'
		]);

		for ($i = 1; $i <= 24; $i++) {

			$acfGroup->contentFields->addImage("desktop_sample_card_image_$i", "عکس کارت دسکتاپ $i", [
				"width" => "20%"
			]);

			$acfGroup->contentFields->addImage("mobile_sample_card_image_$i", "عکس کارت موبایل $i", [
				"width" => "20%"
			]);

			$acfGroup->contentFields->addImage("swiper_card_image_$i", "اسلایدشو عکس کارت $i", [
				"width" => "20%",
			]);

			$acfGroup->basicFields->addText("card_btn_title_$i", "متن دکمه $i", [
				'width' => '20%',
			]);


			$acfGroup->advanceFields->addColorPicker("card_btn_color_$i", "رنگ دکمه $i", [
				'transparent' => '20%',
				'width' => '20%'
			]);
		}

		#endregion

		#region FAQ

		$acfGroup->layoutFields->addTab('FAQ ', 'سوالات متداول');

		$acfGroup->basicFields->addText('faq_main_title', 'تایتل سوالات متداول', []);

		for ($i = 1; $i <= 10; $i++) {

			$acfGroup->basicFields->addText("faq_title_$i", "تایتل سوال $i", [
				'width' => '50%'
			]);


			$acfGroup->basicFields->addTextarea("faq_txt_$i", "متن سوال $i", [
				'width' => '50%',
			]);
		}

		#endregion

		#region comments

		$acfGroup->layoutFields->addTab('seo-comments', 'نظرات در مورد سئو');

		$acfGroup->basicFields->addText('seo_comments_title', 'تایتل نظرات سئو', []);

		for ($i = 1; $i <= 4; $i++) {

			$acfGroup->contentFields->addImage("seo_image_$i", "عکس $i", [
				"width" => "33.3%"
			]);

			$acfGroup->basicFields->addText("seo_name_$i", "اسم $i", [
				"width" => "33.3%"
			]);

			$acfGroup->basicFields->addTextarea("seo_comment_$i", "نظر $i", [
				'width' => '33.3%'
			]);
		}
		#endregion

		#region Footer

		$acfGroup->layoutFields->addTab('seo-footer', 'تنظیمات فوتر');

		$acfGroup->contentFields->addImage("seo_footer_bg", "تصویر پس زمینه فوتر", ['width' => '100%'], "seo_footer_bg");

		$acfGroup->layoutFields->addAccordion('footer_menu', 'منو فوتر');

		for ($i = 1; $i <= 8; $i++) {
			$acfGroup->relationshipFields->addLink("footer_menu_$i", "منو فوتر: آیتم $i", [], "footer_menu_$i");
		}

		$acfGroup->layoutFields->addAccordion('address', 'آدرس', [], 'address');

		$acfGroup->basicFields->addTextarea('seo_address', 'آدرس ', ['width' => '100%'], 'seo_address');

		for ($i = 1; $i <= 4; $i++) {
			$acfGroup->contentFields->addImage("seo_address_map_$i", "تصویر نقشه آدرس $i", ['width' => '50%'], "seo_address_map_$i");
			$acfGroup->basicFields->addUrl("seo_address_map_link_$i", "لینک نقشه آدرس $i", ['width' => '50%'], "seo_address_map_link_$i");
		}

		$acfGroup->layoutFields->addAccordion('phone', 'تلفن', [], 'phone');

		for ($i = 1; $i <= 4; $i++) {
			$acfGroup->basicFields->addText("seo_phone_$i", "تلفن $i", ['width' => '50%'], "seo_phone_$i");
		}

		$acfGroup->layoutFields->addAccordion('social', 'شبکه های اجتماعی', [], 'phone');

		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->contentFields->addImage("seo_social_$i", "تصویر شبکه اجتماعی $i", ['width' => '50%'], "seo_social_$i");
			$acfGroup->basicFields->addUrl("seo_social_link_$i", "لینک شبکه اجتماعی $i", ['width' => '50%'], "seo_social_link_$i");
		}
		#endregion

		$acfGroup->setLocation('page_template', '==', 'templates/seo-ads.php');

		$acfGroup->register('Page');
	}

	private static function forDesignAds()
	{

		$acfGroup = new AcfGroup();

		#region Header Section
		// $acfGroup->layoutFields->addTab('header', 'هدر');

		// $acfGroup->basicFields->addText('contact_btn_text_desktop', 'متن دکمه تماس دسکتاپ', ['width' => '50%']);
		// $acfGroup->basicFields->addText('contact_btn_text_mobile', 'متن دکمه تماس موبایل', ['width' => '50%']);
		// $acfGroup->basicFields->addText('contact_btn_phone', 'شماره تماس', ['width' => '50%']);

		// $acfGroup->contentFields->addImage("image_logo", "لوگو", ['width' => '50%']);

		// for ($i = 1; $i <= 8; $i++) {
		// 	$acfGroup->relationshipFields->addLink("menu_header_$i", "منو: آیتم $i", [], "menu_header_$i");
		// }
		#endregion


		#region Hero Section
		$acfGroup->layoutFields->addTab('hero', 'هیرو');

		$acfGroup->contentFields->addImage('hero-image', 'عکس هیرو', ['width' => '50%'], 'hero-image');
		$acfGroup->contentFields->addImage('hero-image-ribbon', 'عکس نوار هیرو', ['width' => '50%'], 'hero-image-ribbon');
		$acfGroup->basicFields->addText('hero-short-title', 'تایتل کوتاه هیرو', [], 'hero-short-title');
		$acfGroup->basicFields->addText('hero-long-title', 'تایتل بلند هیرو', [], 'hero-long-title');
		#endregion

		#region web design slider
		$acfGroup->layoutFields->addTab('webdesign_slider', 'اسلایدر مراحل طراحی سایت');
		$acfGroup->contentFields->addImage('webdesign_slider_img', 'عکس کنار اسلایدر', ['width' => '50%'], 'webdesign_slider_img');
		$acfGroup->basicFields->addText('webdesign_slider_title', 'تایتل اسلایدر', ['width' => '50%'], 'webdesign_slider_title');

		for ($i = 1; $i <= 8; $i++) {
			$acfGroup->basicFields->addText("webdesign_slider_level_$i", "عنوان مراحل $i", [], "webdesign_slider_level_$i");
			$acfGroup->basicFields->addText("webdesign_slider_describtion_$i", "متن مراحل $i", [], "webdesign_slider_describtion_$i");
		}
		#endregion

		#region social
		$acfGroup->layoutFields->addTab('social', 'شبکه های اجتماعی');

		$acfGroup->basicFields->addUrl('social_link', 'لینک دکمه مشاهده همه شبکه های اجتماعی (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("social_image_$i", "عکس شبکه اجتماعی $i", [], "social_image_$i");
		}
		#endregion

		#region brand
		$acfGroup->layoutFields->addTab('brand', 'طراحی لوگو و برندینگ');

		$acfGroup->basicFields->addUrl('brand_link', 'لینک دکمه مشاهده همه برند ها (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("brand_image_$i", "عکس برند $i", [], "brand_image_$i");
			$acfGroup->basicFields->addText("brand_text_$i", "متن برند $i", [], "brand_text_$i");
		}
		#endregion

		#region advertising
		$acfGroup->layoutFields->addTab('advertising', 'تیزر تبلیغاتی و عکاسی');

		$acfGroup->basicFields->addUrl('advertising_link', 'لینک دکمه مشاهده همه تبلیغات (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("advertising_image_$i", "عکس کاور ویدیو تبلیغاتی $i", [], "advertising_image_$i");
			$acfGroup->contentFields->addFile("advertising_video_$i", "ویدیو تبلیغاتی $i", [], "advertising_video_$i");
		}
		#endregion


		#region motion
		$acfGroup->layoutFields->addTab('motion', 'موشن گرافیک');

		$acfGroup->basicFields->addUrl('motion_link', 'لینک دکمه مشاهده همه موشن گرافیک (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("motion_image_$i", "عکس کاور ویدیو موشن گرافیک $i", [], "motion_image_$i");
			$acfGroup->contentFields->addFile("motion_video_$i", "ویدیو موشن گرافیک $i", [], "motion_video_$i");
		}
		#endregion


		#region website
		$acfGroup->layoutFields->addTab('website', 'طراحی وبسایت');

		$acfGroup->basicFields->addText('website_link', 'لینک دکمه مشاهده همه وب سایت (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("website_image_$i", "عکس وب سایت $i", [], "website_image_$i");
			$acfGroup->basicFields->addText("website_title_$i", "متن وب سایت $i", [], "website_title_$i");
			$acfGroup->basicFields->addText("website_description_$i", "متن توضیحات وب سایت $i", [], "website_description_$i");
			$acfGroup->basicFields->addText("website_preview_$i", "لینک نمونه کار $i", [], "website_description_$i");
		}
		#endregion


		#region services
		$acfGroup->layoutFields->addTab('service', 'خدمات');

		$acfGroup->basicFields->addText('service_title', 'تایتل خدمات', ['width' => '50%']);
		$acfGroup->basicFields->addText('service_description', 'توضیحات خدمات', ['width' => '50%']);

		$acfGroup->contentFields->addImage("service_character_image", "عکس کاراکتر خدمات", ['width' => '50%'], "service_character_image");

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("service_image_$i", "عکس خدمت $i", [], "service_image_$i");
		}
		#endregion

		#region customer video
		$acfGroup->layoutFields->addTab('customer_video', 'ویدیو مشتریان');

		$acfGroup->basicFields->addUrl('customer_video_link', 'لینک دکمه مشاهده همه مشتریان (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("customer_video_image_$i", "عکس کاور ویدیو مشتریان $i", [], "customer_video_image_$i");
			$acfGroup->contentFields->addFile("customer_video_file_$i", "ویدیو مشتریان $i", [], "customer_video_file_$i");
			$acfGroup->basicFields->addText("customer_video_name_$i", 'نام مشتری', ['width' => '50%'], "customer_video_name_$i");
			$acfGroup->basicFields->addText("customer_video_desc_$i", 'شرکت و موسسه/سمت', ['width' => '50%'], "customer_video_desc_$i");
		}
		#endregion

		#region customers
		$acfGroup->layoutFields->addTab('customer', 'مشتری');

		$acfGroup->basicFields->addText('customer_title', 'تایتل مشتری', ['width' => '50%']);
		$acfGroup->basicFields->addText('customer_description', 'توضیحات مشتری', ['width' => '50%']);

		$acfGroup->contentFields->addImage("customer_character_image", "عکس کاراکتر مشتری", ['width' => '50%'], "customer_character_image");

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("customer_image_$i", "عکس مشتری $i", [], "customer_image_$i");
		}
		#endregion

		#region instagram
		$acfGroup->layoutFields->addTab('instagram', 'نمونه کار اینستاگرام');

		$acfGroup->basicFields->addUrl('instagram_link', 'لینک دکمه مشاهده همه نمونه کار اینستاگرام (درصورت خالی بودن دکمه نمایش داده نمی شود)', ['width' => '50%']);

		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage("instagram_image_$i", "عکس پیج $i", [], "instagram_image_$i");
			$acfGroup->basicFields->addText("instagram_text_$i", "نام پیج $i", [], "instagram_text_$i");
			$acfGroup->basicFields->addText("instagram_desc_$i", "توضیحات $i", [], "instagram_desc_$i");
		}
		#endregion

		#region plan
		$acfGroup->layoutFields->addTab('plans', 'تعرفه ها');

		$acfGroup->basicFields->addText("plan_title", "تایتل تعرفه ها", [], "plan_title");
		$acfGroup->basicFields->addText("plan_subtitle", "تایتل در پرانتز", [], "plan_subtitle");
		$acfGroup->basicFields->addText("plan_title_modal", "تایتل متن پاپ آپ دریافت پکیج", [], "plan_title_modal");
		$acfGroup->basicFields->addText("plan_subtitle_modal", "متن توضیحات پاپ آپ دریافت پکیج", [], "plan_subtitle_modal");

		#endregion

		#region contact
		$acfGroup->layoutFields->addTab('contact', 'دریافت مشاوره');

		$acfGroup->basicFields->addText("contact_title", "تایتل دریافت مشاوره", [], "contact_title");
		$acfGroup->basicFields->addText("contact_subtitle", "زیر تایتل دریافت مشاوره", [], "contact_subtitle");
		$acfGroup->contentFields->addImage("contact_img", "عکس دریافت مشاوره", [], "contact_img");
		#endregion

		#region footer
		$acfGroup->layoutFields->addTab('footer', 'فوتر');

		$acfGroup->contentFields->addImage("footer_logo", "عکس لوگو فوتر", [], "footer_logo");

		for ($i = 1; $i <= 8; $i++) {
			$acfGroup->relationshipFields->addLink("footer_menu_$i", "منو فوتر: آیتم $i", [], "footer_menu_$i");
		}
		#endregion

		$acfGroup->setLocation('page_template', '==', 'templates/design-ads.php');

		$acfGroup->register('home page settings');
	}

	private static function forPortfolio()
	{
		$acfGroup = new AcfGroup();

		$acfGroup->layoutFields->addTab("portfoliotab", "اطلاعات نمونه کار");

		$acfGroup->basicFields->addText('portfolio_description', 'توضیحات نمونه کار', [
			'width' => '100%',
		]);

		$acfGroup->contentFields->addImage("portfolio_image_desktop", "عکس تمام صفحه نونه کار دسکتاپ", ['width' => '100%']);
		$acfGroup->contentFields->addImage("portfolio_image_mobile", "عکس تمام صفحه نونه کار موبایل", ['width' => '100%']);

		$acfGroup->setLocation('post_type', '==', 'portfolio');

		$acfGroup->register('نمونه کار');
	}

	private static function forPlan()
	{
		$acfGroup = new AcfGroup();

		#region plans
		$acfGroup->layoutFields->addTab('plans', 'تعرفه ها');

		$acfGroup->basicFields->addText("plan_name", "نام تعرفه", [], "plan_name");
		$acfGroup->basicFields->addText("plan_name_more", "متن داخل پرانتز", [], "plan_name_more");
		$acfGroup->basicFields->addText("plan_desc", "توضیحات تعرفه", [], "plan_desc");
		$acfGroup->basicFields->addText("plan_price", "مبلغ تعرفه", [], "plan_price");

		$abilities = [
			'one' => 'آیا برای این تعرفه شامل میشود؟',
			'two' => 'آیا برای این تعرفه شامل میشود؟',
			'three' => 'آیا برای این تعرفه شامل میشود؟',
			'four' => 'آیا برای این تعرفه شامل میشود؟',
			'five' => 'آیا برای این تعرفه شامل میشود؟',
			'six' => 'آیا برای این تعرفه شامل میشود؟',
			'seven' => 'آیا برای این تعرفه شامل میشود؟',
			'eight' => 'آیا برای این تعرفه شامل میشود؟',
			'nine' => 'آیا برای این تعرفه شامل میشود؟',
			'ten' => 'آیا برای این تعرفه شامل میشود؟',
			'eleven' => 'آیا برای این تعرفه شامل میشود؟',
			'twelve' => 'آیا برای این تعرفه شامل میشود؟',
			'thirteen' => 'آیا برای این تعرفه شامل میشود؟',
			'fourteen' => 'آیا برای این تعرفه شامل میشود؟',
			'fifteen' => 'آیا برای این تعرفه شامل میشود؟',
			'sixteen' => 'آیا برای این تعرفه شامل میشود؟',
			'seventeen' => 'آیا برای این تعرفه شامل میشود؟',
			'eighteen' => 'آیا برای این تعرفه شامل میشود؟',
		];

		foreach ($abilities as $key => $label) {
			$acfGroup->basicFields->addText("plan_ability_{$key}_text", "متن قابلیت", [], "plan_ability_{$key}_text");
			$acfGroup->choiceFields->addRadio(
				"plan_ability_{$key}",
				$label,
				['choices' => ['inactive' => 'غیرفعال', 'active' => 'فعال'], 'width' => '33'],
				"plan_ability_{$key}"
			);
		}

		$acfGroup->choiceFields->addRadio("plan_ability_suggest", "پلن پیشنهادی", ['choices' => ['inactive' => 'غیرفعال', 'active' => 'فعال'], 'width' => '50'], "plan_ability_suggest");

		$acfGroup->setLocation('post_type', '==', 'plan');

		$acfGroup->register('تعرفه');
		#endregion
	}

	private static function forPost()
	{
		$acfGroup = new AcfGroup();

		$acfGroup->contentFields->addTextEditor('subtitle', 'تیکه متن کنار عکس (لطفا این تیکه متن را از قسمت ادیتور وردپرس حذف کنید که از تکرار جلوگیری شود)');

		$acfGroup->setLocation('post_type', '==', 'post');

		$acfGroup->register('subtitle');
	}
}
