<?php

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

$steps_title = get_field('steps_title');

$steps = [];

for ($i = 1; $i <= 10; $i++) {

    array_push($steps, [
        'title' => get_field("step_" . $i),
        'description' => get_field("step_" . $i . "_description"),
    ]);
}
?>

<section class="bg-bottom bg-no-repeat bg-[#000B30] max-md:bg-gradient-to-b from-[#00386B] to-[#001C47] flex pb-12 md:px-11" id="steps">

    <div class="container flex justify-between md:!bg-none bg-no-repeat bg-left-top relative">

        <div class="max-w-[50%] flex flex-col justify-center py-16 max-lg:max-w-[65%] max-md:min-w-[100%]">

            <p class="text-white text-2xl font-bold mb-8"><?php echo $steps_title ?></p>

            <swiper-container class="grid custom-swiper h-[478px] max-md:h-[682px]"
                grid-rows="3"
                space-between="16"
                pagination="true"
                pagination-clickable="true"
                pagination-el="#steps-pagination">

                <?php foreach ($steps as $step) : ?>

                    <?php if (!empty($step['title']) && !empty($step['description'])): ?>

                        <swiper-slide class="flex flex-col gap-4">

                            <div class="flex gap-1 items-center">

                                <img src="<?php echo THEME_IMAGES_URI . '/steps.svg' ?>" alt="Step Number" class="w-11 h-11">

                                <p class="text-[#FF8585] text-2xl font-bold"><?php echo $step['title'] ?></p>

                            </div>

                            <p class="text-white text-xl font-normal"><?php echo $step['description'] ?></p>

                        </swiper-slide>

                    <?php endif ?>

                <?php endforeach; ?>

            </swiper-container>

            <div id="steps-pagination" class="flex gap-1 md:mt-8 max-md:mt-4 max-md:justify-center [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:bg-[#FFFFFF]/60 [&>.swiper-pagination-bullet]:w-24 [&>.swiper-pagination-bullet]:h-[6px] [&>.swiper-pagination-bullet]:duration-500 [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-[#FF8585]"></div>

        </div>

        <div class="min-w-[25%] flex justify-center max-md:hidden items-start">

            <?php
            Templates::getPage('seo-ads/svg-desktop');
            ?>

        </div>

        <div class="absolute flex justify-center md:hidden items-start left-2 bottom-5">

            <?php
            Templates::getPage('seo-ads/svg-mobile');
            ?>

        </div>

    </div>

</section>