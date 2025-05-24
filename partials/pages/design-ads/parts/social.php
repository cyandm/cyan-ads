<?php
$social_images = [];

for ($i = 1; $i <= 12; $i++) {
    array_push(
        $social_images,
        get_field("social_image_$i")
    );
}

$social_link = get_field('social_link');

use Cyan\Theme\Helpers\Icon;
?>

<?php if (!empty($social_images)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-2xl font-semibold md:text-4xl md:font-bold">جادوی رشد در اینستاگرام</div>

                <?php if ($social_link): ?>

                    <a href="<?php echo $social_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

                <div class="flex gap-2">

                    <button id="socialPrev"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Arrow,-Right') ?>
                        </div>
                    </button>

                    <button id="socialNext"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Left-1') ?>
                        </div>
                    </button>

                </div>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="true" navigation-next-el="#socialNext" navigation-prev-el="#socialPrev" class="w-full">

                <?php foreach ($social_images as $social_image): ?>

                    <?php if ($social_image): ?>

                        <swiper-slide style="max-width:330px" class="max-md:!max-w-[265px] swiper-gallery">

                            <?php 
                                $full_image_url = wp_get_attachment_image_url($social_image, 'full');
                                $image_meta = wp_get_attachment_metadata($social_image);
                                $actual_width = $image_meta['width'] ?? 720;
                                $actual_height = $image_meta['height'] ?? 720;
                            ?>
                            <a href="<?php echo $full_image_url ?>" 
                               data-pswp-width="<?php echo $actual_width ?>"
                               data-pswp-height="<?php echo $actual_height ?>">
                                <div class="swiper-wrapper border border-white border-opacity-40 p-3">
                                    <?php echo wp_get_attachment_image($social_image, 'full', false, ['class' => 'object-cover object-center h-80 w-full']); ?>
                                </div>
                            </a>

                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach; ?>

            </swiper-container>

        </div>

    </section>

<?php endif; ?>