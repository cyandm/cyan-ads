<?php
$webDesign_slider_img = get_field('webdesign_slider_img');
$webDesign_slider_title = get_field('webdesign_slider_title');

$webDesign_sliders = [];

for ($i = 1; $i <= 8; $i++) {

    array_push($webDesign_sliders, [
        'title' => get_field("webdesign_slider_level_" . $i),
        'description' => get_field("webdesign_slider_describtion_" . $i),
    ]);
}

use Cyan\Theme\Helpers\Icon;
?>

<section class="container flex justify-center items-center gap-9 max-md:flex-col max-md:mt-8 max-md:mb-4">

    <div class="w-[30%] max-md:w-full">
        <?php echo wp_get_attachment_image($webDesign_slider_img, 'full') ?>
    </div>

    <div class="w-[70%] max-md:w-full">

        <div class="flex justify-between">
            <p class="font-bold text-4xl max-md:text-2xl"><?php echo $webDesign_slider_title ?></p>

            <div class="flex gap-3 max-lg:hidden">

                <button id="webPrev"
                    class="bg-transparent p-3 border border-white cursor-pointer">
                    <div class="text-white size-4">
                        <?php icon::print('Arrow,-Right') ?>
                    </div>
                </button>

                <button id="webNext"
                    class="bg-transparent p-3 border border-white cursor-pointer">
                    <div class="text-white size-4">
                        <?php icon::print('Left-1') ?>
                    </div>
                </button>

            </div>
        </div>

        <swiper-container slides-per-view=1 space-between="5" loop="true" pagination="false"
            navigation="true" navigation-next-el="#webNext" navigation-prev-el="#webPrev" class="w-full swiper-webdesign-level">

            <?php foreach ($webDesign_sliders as $webDesign_slider): ?>

                <?php if (!empty($webDesign_slider['title']) && !empty($webDesign_slider['description'])): ?>

                    <swiper-slide class="w-full">

                        <p class="text-white text-3xl max-md:text-xl font-medium pb-3 pt-8"><?php echo $webDesign_slider['title'] ?></p>

                        <p class="text-white/75 text-2xl max-md:text-base font-normal leading-10"><?php echo $webDesign_slider['description'] ?></p>

                    </swiper-slide>

                <?php endif; ?>

            <?php endforeach; ?>

        </swiper-container>

    </div>

</section>

<section class="container lg:hidden max-md:mb-8">
    <div class="flex gap-3 justify-center items-center">

        <button id="webPrev"
            class="bg-transparent p-3 border border-white cursor-pointer">
            <div class="text-white size-4">
                <?php icon::print('Arrow,-Right') ?>
            </div>
        </button>

        <button id="webNext"
            class="bg-transparent p-3 border border-white cursor-pointer">
            <div class="text-white size-4">
                <?php icon::print('Left-1') ?>
            </div>
        </button>

    </div>
</section>