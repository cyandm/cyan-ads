<?php
$instagram_images = [];
for ($i = 1; $i <= 12; $i++) {
    array_push(
        $instagram_images,
        [
            'image' => get_field("instagram_image_$i"),
            'text' => get_field("instagram_text_$i"),
            'desc' => get_field("instagram_desc_$i")
        ]

    );
}

$instagram_link = get_field('instagram_link');

use Cyan\Theme\Helpers\Icon;

?>



<?php if (!empty($instagram_images)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-2xl font-semibold md:text-4xl md:font-bold">نمونه کارهای اینستاگرام</div>

                <?php if ($instagram_link): ?>

                    <a href="<?php echo $instagram_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

                <div class="flex gap-2">

                    <button id="instagramPrev"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Arrow,-Right') ?>
                        </div>
                    </button>

                    <button id="instagramNext"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Left-1') ?>
                        </div>
                    </button>

                </div>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="true" navigation-next-el="#instagramNext" navigation-prev-el="#instagramPrev" class="w-full">

                <?php foreach ($instagram_images as $instagram_image): ?>

                    <?php if ($instagram_image['image']): ?>

                        <swiper-slide style="max-width:330px" class="max-md:!max-w-[265px] swiper-gallery">

                            <?php 
                                $full_image_url = wp_get_attachment_image_url($instagram_image['image'], 'full');
                                $image_meta = wp_get_attachment_metadata($instagram_image['image']);
                                $actual_width = $image_meta['width'] ?? 720;
                                $actual_height = $image_meta['height'] ?? 720;
                            ?>
                            <a href="<?php echo $full_image_url ?>" 
                               data-pswp-width="<?php echo $actual_width ?>"
                               data-pswp-height="<?php echo $actual_height ?>">
                                <div class="swiper-wrapper border border-white border-opacity-40 p-3">
                                    <?php echo wp_get_attachment_image($instagram_image['image'], 'full', false, ['class' => 'object-cover object-center h-90 w-full']); ?>

                                    <p class="text-white mt-2 text-base font-normal"><?php echo $instagram_image['text']; ?></p>
                                    <p class="text-white mt-2 text-sm font-normal"><?php echo $instagram_image['desc']; ?></p>
                                </div>
                            </a>

                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach; ?>

            </swiper-container>

        </div>

    </section>

<?php endif; ?>