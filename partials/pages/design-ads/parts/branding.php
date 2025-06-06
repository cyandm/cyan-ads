<?php
$brand_images = [];
for ($i = 1; $i <= 12; $i++) {
    array_push(
        $brand_images,
        [
            'image' => get_field("brand_image_$i"),
            'text' => get_field("brand_text_$i")
        ]

    );
}

$brand_link = get_field('brand_link');

use Cyan\Theme\Helpers\Icon;

?>



<?php if (!empty($brand_images)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-2xl font-semibold md:text-4xl md:font-bold">هر برندی یه امضا داره</div>

                <?php if ($brand_link): ?>

                    <a href="<?php echo $brand_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

                <div class="flex gap-2">

                    <button id="brandPrev"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Arrow,-Right') ?>
                        </div>
                    </button>

                    <button id="brandNext"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Left-1') ?>
                        </div>
                    </button>

                </div>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="true" navigation-next-el="#brandNext" navigation-prev-el="#brandPrev" class="w-full">

                <?php foreach ($brand_images as $brand_image): ?>

                    <?php if ($brand_image['image']): ?>

                        <swiper-slide style="max-width:330px" class="max-md:!max-w-[265px] swiper-gallery">

                            <a href="<?php echo wp_get_attachment_image_url($brand_image['image'], 'full') ?>" data-pswp-width="720"
                                data-pswp-height="720">
                                <div class="swiper-wrapper border border-white border-opacity-40 p-3">
                                    <?php echo wp_get_attachment_image($brand_image['image'], 'full', false, ['class' => 'object-cover object-center h-56 md:h-80 md:w-80']); ?>

                                    <p class="text-white text-center mt-2 text-base font-normal"><?php echo $brand_image['text'] ?></p>

                                </div>
                            </a>

                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach; ?>

            </swiper-container>

        </div>

    </section>

<?php endif; ?>