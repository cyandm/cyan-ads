<?php
get_header(null, array('menu_text_color' => 'text-white hover:text-gray-200'));

use Cyan\Theme\Helpers\Templates;

$portfolio_image_desktop = get_field('portfolio_image_desktop');
$portfolio_image_mobile = get_field('portfolio_image_mobile');
?>

<main class="bg-[#000B30] pt-40 pb-10 -mt-32">
    <section class="container py-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                
                    <a href="<?php echo get_permalink(); ?>">
                        <div class="border border-white border-opacity-40 p-3">
                            <?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'full', false, ['class' => 'object-cover object-center h-[313px] w-full']); ?>

                            <p class="text-white mt-2 text-base font-normal"><?php the_title(); ?></p>
                            <p class="text-white mt-2 text-sm font-normal"><?php echo get_field('portfolio_description', get_the_ID()) ?></p>
                        </div>
                    </a>

                <?php endwhile; ?>

                <?php the_posts_pagination(); ?>

            <?php else : ?>
                <p><?php _e('No portfolio items found.', 'cyan-ads'); ?></p>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php Templates::getPage('seo-ads/footer'); ?>