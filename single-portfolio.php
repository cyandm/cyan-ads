<?php get_header(null, array('hide' => 'hidden')); ?>

<?php

use Cyan\Theme\Helpers\Icon;

$portfolio_image_desktop = get_field('portfolio_image_desktop');
$portfolio_image_mobile = get_field('portfolio_image_mobile');
?>

<main>
    <section>
        <div class="w-full relative">
            <a href="javascript:history.back()" class="fixed top-8 right-8 max-sm:top-4 max-sm:right-4 bg-gray-200 backdrop-blur-xl text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-500 z-50 flex flex-row gap-2 justify-center items-center">
                <span class="size-7 rotate-180">
                    <?php Icon::print('Exit,-Log-out-1') ?>
                </span>
                بازگشت
            </a>
            <?php echo wp_get_attachment_image($portfolio_image_desktop, 'full', false, ['class' => 'w-full max-md:hidden']); ?>
            <?php echo wp_get_attachment_image($portfolio_image_mobile, 'full', false, ['class' => 'w-full md:hidden']); ?>
        </div>
        <div>

        </div>
    </section>
</main>