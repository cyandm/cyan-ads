<?php
$website_images = [];
for ($i = 1; $i <= 12; $i++) {
    array_push(
        $website_images,
        [
            'image' => get_field("website_image_$i"),
            'text' => get_field("website_title_$i"),
            'description' => get_field("website_description_$i"),
            'url' => get_field("website_preview_$i")
        ]

    );
}

$website_link = get_field('website_link');
?>



<?php if (!empty($website_images)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-2xl font-semibold md:text-4xl md:font-bold">طراحی وب سایت</div>

                <?php if ($website_link): ?>

                    <a href="<?php echo $website_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="false" class="w-full">

                <?php foreach ($website_images as $website_image): ?>

                    <?php if ($website_image['image']): ?>

                        <swiper-slide style="max-width:330px" class="max-md:!max-w-[265px]">

                            <a href="<?php echo $website_image['url'] ?>">
                                <div class="swiper-wrapper border border-white border-opacity-40 p-3 text-center">
                                    <?php echo wp_get_attachment_image($website_image['image'], 'full', false, ['class' => 'object-cover object-center h-56 md:h-80 md:w-80']); ?>

                                    <p class="text-white mt-2 text-base font-normal"><?php echo $website_image['text'] ?></p>
                                    <p class="text-white mt-2 text-sm font-normal"><?php echo $website_image['description'] ?></p>

                                </div>
                            </a>

                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach; ?>

            </swiper-container>

        </div>

    </section>

<?php endif; ?>