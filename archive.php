<?php
/*
Template Name: Archive
Description: A template for displaying an archive of post types
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#archive-hierarchy

*/

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

$uncategorized = get_category_by_slug('uncategorized');

$categories = get_categories([
	'orderby' => 'name',
	'order'   => 'ASC',
	'exclude' => $uncategorized ? [$uncategorized->term_id] : [],
]);

get_header(null, array(
	'bg-color' => 'bg-[#000827] text-white',
	'menu_text_color' => 'text-white hover:text-gray-200',
));
?>


<main class="container">

	<section class="my-10">

		<div class="w-full">

			<!-- <form id="search-form" action="<//?php echo home_url(); ?>" method="get">
				<div class="relative">
					<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
						<div class="size-6 text-cynLighter ">
							<//?php icon::print('Search,-Loupe'); ?>
						</div>
					</div>
					<input type="search"
						id="email-address-icon"
						name="s"
						value="<//?php the_search_query() ?>"
						class="bg-cynLightGrey mt-6 rounded-4xl font-base hover:text-black pr-11 block p-2.5 w-full"
						placeholder="جستجو کن">
				</div>
			</form> -->


			<div class="text-white font-bold text-xl flex gap-10 rounded-4xl mt-6 max-lg:flex-wrap">

				<?php
				$posts_page_id = (int) get_option('page_for_posts');
				$all_posts_url = $posts_page_id ? get_permalink($posts_page_id) : get_post_type_archive_link('post');
				$is_category_archive = is_category();
				$current_category_id = $is_category_archive ? get_queried_object_id() : 0;
				?>


				<div class="flex items-center justify-center gap-6">

					<!-- لینک همه -->
					<a href="<?php echo esc_url($all_posts_url); ?>" class="relative text-center text-xl font-medium transition-all duration-300 <?php echo !$is_category_archive ? 'text-white after:content-[\'\'] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[4px] after:bg-[#27BFEF] after:rounded-full' : 'text-[#A3A3A3] hover:text-white after:content-[\'\'] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[4px] after:bg-[#27BFEF] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300'; ?>">
						<span>همه</span>
					</a>

					<!-- لیست دسته‌بندی‌ها -->
					<?php foreach ($categories as $category): ?>
						<?php if (!empty($category->name)): ?>
							<?php $is_active = ($current_category_id === $category->term_id); ?>

							<a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" class="relative text-center text-xl font-medium transition-all duration-300 <?php echo $is_active ? 'text-white after:content-[\'\'] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[4px] after:bg-[#27BFEF] after:rounded-full' : 'text-[#A3A3A3] hover:text-white after:content-[\'\'] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[4px] after:bg-[#27BFEF] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300'; ?>">
								<span><?php echo esc_html($category->name); ?></span>
							</a>

						<?php endif; ?>
					<?php endforeach;
					wp_reset_postdata();
					?>
				</div>
			</div>

	</section>

	<section class="grid grid-cols-4 gap-4 max-lg:gap-6 max-lg:grid max-lg:grid-cols-2 max-md:grid max-md:grid-cols-1 max-xl:grid max-xl:grid-cols-3">
		<?php if (have_posts()): ?>
			<?php while (have_posts()) : the_post();

				Templates::getCard('blog');

			endwhile ?>

		<?php else : ?>
			<p>پستی دریافت نشد!</p>
		<?php endif; ?>
	</section>

	<section class="mt-6 mb-10">
		<div class="flex items-center justify-end gap-1 [&_a]:transition-all [&_a]:duration-300">
			<?php
			global $wp_query;
			$query = $args['query'] ?? $wp_query;


			$big = 999999999;

			$pagination = paginate_links([
				'screen_reader_text' => ' ',
				'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
				'total' => $query->max_num_pages,
				'aria_current' => 'page',
				'show_all' => false,
				'prev_next' => true,
				'type' => 'array',
				'prev_text' => '&lt;',
				'next_text' => '&gt;',
			]);

			if ($pagination) {
				foreach ($pagination as $link) {
					if (strpos($link, 'current') !== false) {
						echo str_replace(
							'<span',
							'<a href="#" class="w-10 h-10 rounded-xl bg-[#27BFEF] text-white flex items-center justify-center"',
							str_replace('</span>', '</a>', $link)
						);
					} elseif (strpos($link, 'prev') !== false) {
						echo str_replace(
							'<a',
							'<a class="w-10 h-10 rounded-xl bg-white text-[#00458A] text-xl flex items-center justify-center border-r-2 border-b-2 border-sky-400"',
							$link
						);
					} elseif (strpos($link, 'next') !== false) {
						echo str_replace(
							'<a',
							'<a class="w-10 h-10 rounded-xl bg-white text-[#00458A] text-xl flex items-center justify-center border-r-2 border-b-2 border-sky-400"',
							$link
						);
					} else {
						echo str_replace(
							'<a',
							'<a class="w-10 h-10 rounded-xl bg-[#808597] text-white flex items-center justify-center hover:bg-[#27BFEF]"',
							$link
						);
					}
				}
			}
			?>
		</div>
	</section>

</main>

<?php Templates::getPage('seo-ads/footer'); ?>