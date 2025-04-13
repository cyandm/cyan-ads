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
?>



<?php if (!empty($brand_images)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-xl font-semibold md:text-4xl md:font-bold">طراحی لوگو و برندینگ</div>

                <?php if ($brand_link): ?>

                    <a href="<?php echo $brand_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="false" class="w-full">

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