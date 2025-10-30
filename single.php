<?php
/*
Template Name: Single
Description: A template for displaying a single post type.
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#single-hierarchy
*/

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

get_header(null, array(
	'bg-color' => 'bg-[#000827] text-white',
	'menu_text_color' => 'text-white hover:text-gray-200',
));

$subtitle = get_field('subtitle');

$categories = get_the_category();
$category_ids = array();

if ($categories) {
	foreach ($categories as $category) {
		$category_ids[] = $category->term_id;
	}
}

$tags = wp_get_post_tags(get_the_ID());
$tag_ids = array();

if ($tags) {
	foreach ($tags as $tag) {
		$tag_ids[] = $tag->term_id;
	}
}

$related_posts = new WP_Query(array(
	'category__in' => $category_ids,
	'tag__in' => $tag_ids,
	'post__not_in' => array(get_the_ID()),
	'posts_per_page' => 4,
	'orderby' => 'ASC',
	'ignore_sticky_posts' => 1
));

if (!$related_posts->have_posts()) {
	$related_posts = new WP_Query(array(
		'post__not_in' => array(get_the_ID()),
		'posts_per_page' => 4,
		'orderby' => 'ASC',
		'ignore_sticky_posts' => 1
	));
}
?>

<main class="container single-post">

	<section class="mt-16 flex gap-5 max-lg:flex-col max-lg:mt-8">

		<div class="w-[calc(55%-0.625rem)] max-lg:w-full">
			<?php the_post_thumbnail('full', ['class' => 'w-full h-full object-cover rounded-3xl']); ?>
		</div>

		<div class="w-[calc(45%-0.625rem)] flex flex-col gap-6 max-lg:w-full max-lg:[&_p:first-of-type]:mb-0">
			<div class="flex justify-between p-3 bg-white/40 backdrop-blur-xl rounded-2xl text-xs font-normal">

				<div class="flex gap-1 justify-center items-center ">
					<span class="size-4 bg-[#09CDF8] shadow-[inset_0_0_9px_0_#ffffff73,_0_4px_12px_0_#30d2f482] rounded-full">
					</span>
					<?php the_author(); ?>
				</div>

				<div class="flex gap-1 justify-center items-center ">
					<span class="size-6">
						<?php icon::print('calendar-schedule-1-1'); ?>
					</span>
					<?php echo get_the_date(); ?>
				</div>

			</div>

			<div class="[&_h2]:text-xl [&_h2]:font-medium [&_h2]:leading-8 [&_h2]:mb-1 [&_p]:text-base [&_p]:font-normal [&_p]:text-[#bcbfc9] [&_p]:mb-6">
				<h1 class="text-2xl font-medium">
					<?php the_title() ?>
				</h1>

				<?php
				if ($subtitle) {
					echo $subtitle;
				} elseif (current_user_can('edit_posts')) {
					echo '<span class="text-white">تیکه متن کنار عکس را از قسمت ACF وارد کنید</span>';
				}
				?>
			</div>

		</div>

	</section>

	<section class="mt-6 mb-20">
		<div class="content"><?php the_content() ?></div>
	</section>

	<section class="mt-20 mb-20 flex flex-col gap-4">
		<div class="text-2xl font-medium">مطالب مرتبط</div>

		<?php if ($related_posts->have_posts()) : ?>

			<swiper-container slides-per-view="4" space-between="16" breakpoints='{"0": { "slidesPerView": 1.15, "spaceBetween": 8 }, "520": { "slidesPerView": 1.5 }, "640": { "slidesPerView": 2.15 }, "1024": { "slidesPerView": 3.15 }, "1280": { "slidesPerView": 4 }}'
				class="w-full">

				<?php while ($related_posts->have_posts()) : $related_posts->the_post(); ?>

					<swiper-slide>

						<?php Templates::getCard('blog') ?>

					</swiper-slide>

				<?php endwhile; ?>

			</swiper-container>

		<?php else : ?>
			<p class="text-white">پست مرتبطی یافت نشد.</p>
		<?php endif;

		wp_reset_postdata();
		?>


	</section>

</main>

<?php Templates::getPage('seo-ads/footer'); ?>