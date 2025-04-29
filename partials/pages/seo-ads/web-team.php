<?php

use Cyan\Theme\Helpers\Icon;


$webTeamCards = [];

for ($i = 1; $i <= 24; $i++) {
    $desktopSampleCardImage = get_field("desktop_sample_card_image_$i");
    $mobileSampleCardImage = get_field("mobile_sample_card_image_$i");
    $btnTitle = get_field("card_btn_title_$i");
    $btnColor = get_field("card_btn_color_$i");
    $slideShowCardImage = get_field("swiper_card_image_$i");

    // Error handling: Check if required fields are empty
    if (empty($btnTitle)) {
        continue; // Skip this iteration if button title is empty
    }

    array_push($webTeamCards, [
        'desktop_sample_card_image' => $desktopSampleCardImage,
        'mobile_sample_card_image' => $mobileSampleCardImage,
        'btn_title' => $btnTitle,
        "btn_color" => $btnColor,
        'swiper_card_image' => $slideShowCardImage,
        'number_button' => $i,
    ]);
}

?>

<section class="bg-[#000B30] md:p-11 max-md:py-8 overflow-hidden" id="about-us">

    <div class="container flex flex-col md:flex-row md:gap-9 gap-3 md:px-4 max-md:py-8 max-md:justify-center">

        <!-- Mobile Title -->
        <div class="text-white text-xl font-bold md:hidden mb-6">
            <?php echo get_field('web_team_title') ?>
        </div>

        <!-- Cards -->
        <div class="flex flex-col md:flex-row md:w-[45%] items-center">
            <swiper-container class="w-[310px] max-lg:w-[240px] max-md:w-[200px]" effect="cards" grab-cursor="true" autoplay="true" autoplay-delay="2000" centeredSlides="true" centeredSlidesBounds="true">

                <?php foreach ($webTeamCards as $webTeamCard): ?>

                    <?php if ($webTeamCard['swiper_card_image']): ?>

                        <swiper-slide class="bg-slate-800 w-40 h-full rounded-[1.5rem]">
                            <?php echo wp_get_attachment_image($webTeamCard['swiper_card_image'], 'full', false, ['class' => 'w-full object-cover']) ?>
                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach ?>

            </swiper-container>
        </div>

        <!-- Desktop Content -->
        <div class="hidden md:flex flex-col justify-center gap-9 md:w-[55%]">

            <div class="space-y-7">
                <!--Desktop Title -->
                <div class="text-white text-4xl hidden md:block">
                    <?php echo get_field('web_team_title') ?>
                </div>

                <!-- Buttons -->

                <div class="transition-all duration-500 overflow-hidden parent-buttons" style="height: 176px;">

                    <div class="flex flex-col md:flex-row flex-wrap gap-3 div-buttons">

                        <?php foreach ($webTeamCards as $webTeamCard): ?>

                            <button id="<?php echo 'button_' . $webTeamCard['number_button']; ?>" class="bg-[var(--bg-color)] rounded-md" style="--bg-color: <?php echo $webTeamCard['btn_color'] . '33' ?>" modal-opener data-modal-name="sample-view-modal_<?php echo $webTeamCard['number_button'] ?>">

                                <div class="text-white text-base py-3 px-4 rounded-md flex flex-row gap-2 items-center justify-center">

                                    <?php echo $webTeamCard['btn_title'] ?>

                                    <div class="size-6 text-white ">
                                        <?php Icon::print('Send,-Share-1') ?>
                                    </div>

                                </div>
                            </button>

                        <?php endforeach ?>
                    </div>

                </div>
            </div>

            <div class="flex flex-row justify-end">

                <button class="handler_show_more_btn bg-white rounded-lg p-1 border-b-4 border-[#3CC9F5] border-r-4 text-[#00458A] text-[20px] py-3 px-4 flex flex-row gap-2 items-center justify-center">

                    <div class="size-6 text-[#00458A] ">
                        <?php Icon::print('Notebook,-Notepad') ?>
                    </div>

                    <?php echo get_field('view_all_btn_title') ?>

                </button>

            </div>
        </div>

        <!-- Mobile Content  -->
        <div class="md:hidden">
            <div class="py-4 bg-primary-100 ">
                <swiper-container space-between="12" slides-per-view="auto">
                    <?php foreach ($webTeamCards as $webTeamCard): ?>
                        <swiper-slide class="!w-auto">

                            <button id="<?php echo 'button_' . $webTeamCard['number_button']; ?>" class="bg-[var(--bg-color)] rounded-md" style="--bg-color: <?php echo $webTeamCard['btn_color'] . '33' ?>" modal-opener data-modal-name="sample-view-modal_<?php echo $webTeamCard['number_button'] ?>">


                                <div class="text-white text-base py-3 px-4 rounded-md flex flex-row gap-2 items-center justify-center">

                                    <?php echo $webTeamCard['btn_title'] ?>

                                    <div class="size-6 text-white ">
                                        <?php Icon::print('Send,-Share-1') ?>
                                    </div>

                                </div>
                            </button>
                        </swiper-slide>
                    <?php endforeach; ?>
                </swiper-container>
            </div>

            <div class="w-full">
                <button class="handler_show_more_btn w-full text-[#00458A] text-[20px] py-3 px-4 flex flex-row gap-2 items-center justify-center bg-white rounded-lg p-1 border-b-4 border-[#3CC9F5] border-r-4">

                    <div class="size-6 text-[#00458A]">
                        <?php Icon::print('Notebook,-Notepad') ?>
                    </div>

                    <?php echo get_field('view_all_btn_title') ?>

                </button>
            </div>
        </div>
    </div>
</section>

<!-- Pop ups -->
<section>

    <?php foreach ($webTeamCards as $webTeamCard): ?>

        <div class="bg-[#3CC9F5] opacity-0 z-50 fixed inset-0 w-[95%] h-fit m-auto pointer-events-none data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500 rounded-lg border-b-4 border-[#3CC9F5] border-r-4" modal data-modal-name="sample-view-modal_<?php echo $webTeamCard['number_button'] ?>" data-active="false" id="<?php echo 'popup_' . $webTeamCard['number_button'] ?>">

            <div class="bg-[#002864] rounded-lg px-8 max-md:px-4 pt-10 max-md:pt-6 pb-9 max-md:pb-7 text-white flex flex-col gap-6 ">

                <div class="flex justify-between items-center">

                    <p class="font-normal text-4xl max-md:text-2xl max-w-[80%]"><?php echo $webTeamCard['btn_title'] ?></p>

                    <div class="size-11 text-[#002864] bg-white border-r-2 border-b-2 w- border-[#3CC9F5] rounded-xl cursor-pointer" modal-closer data-modal-name="sample-view-modal_<?php echo $webTeamCard['number_button'] ?>">

                        <?php Icon::print('Delete,-Disabled') ?>

                    </div>

                </div>

                <div class="flex gap-6 max-md:flex-col-reverse">

                    <div class="w-3/12 max-md:w-full flex justify-center items-center">

                        <?php echo wp_get_attachment_image($webTeamCard['mobile_sample_card_image'], 'full', false, ['class' => 'w-[85%] mm:w-[55%] sm:w-1/2 md:w-full']) ?>

                    </div>

                    <div class="w-9/12 max-md:w-full flex justify-center items-center">

                        <?php echo wp_get_attachment_image($webTeamCard['desktop_sample_card_image'], 'full', false, ['class' => 'w-[85%] mm:w-[55%] sm:w-1/2 md:w-full']) ?>

                    </div>

                </div>

            </div>

        </div>

    <?php endforeach ?>

</section>