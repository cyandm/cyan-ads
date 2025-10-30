<?php
/*
Template Name: 404
Description: A template for displaying a 404 error page.
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#404-not-found-hierarchy
*/

get_header(null, array(
	'bg-color' => 'bg-[#000827] text-white',
	'menu_text_color' => 'text-white hover:text-gray-200',
));
?>

<main class="container min-h-[80vh] flex flex-col items-center justify-center text-center text-white">
	<h1 class="text-7xl font-bold text-[#27BFEF] mb-4">404</h1>
	<h2 class="text-2xl font-semibold mb-2">صفحه مورد نظر یافت نشد</h2>
	<p class="text-gray-300 mb-6">ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.</p>
	<a href="<?php echo esc_url(home_url('/')); ?>" class="px-6 py-3 bg-[#27BFEF] text-white rounded-xl hover:bg-[#1aa7d4] transition-all">
		بازگشت به صفحه اصلی
	</a>
</main>

<?php get_footer();
