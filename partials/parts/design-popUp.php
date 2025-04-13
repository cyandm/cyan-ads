<?php

use Cyan\Theme\Helpers\Icon;


$webTeamCards = [];

for ($i = 1; $i <= 24; $i++) {
    $desktopSampleCardImage = get_field("desktop_sample_card_image_$i");
    $mobileSampleCardImage = get_field("mobile_sample_card_image_$i");

    // Error handling: Check if required fields are empty
    if (empty($desktopSampleCardImage) || empty($mobileSampleCardImage)) {
        continue; // Skip this iteration if button title or link is empty
    }

    array_push($webTeamCards, [
        'desktop_sample_card_image' => $desktopSampleCardImage,
        'mobile_sample_card_image' => $mobileSampleCardImage,
    ]);
}

?>

<!-- Desktop Section -->
<section class="hidden md:flex flex-col gap-6 bg-[#002864] rounded-2xl p-6 border-b-4 border-[#3CC9F5] border-r-4">
    <!-- Buttons -->
    <div class="flex flex-row justify-between gap-4">

        <!-- Closer -->
        <div>
            <div class="flex flex-row ">
                <div>
                    <a id=""
                        class="bg-white rounded-lg p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer block">
                        <div class="text-[#00458A] size-6">
                            <?php icon::print('Delete,-Disabled') ?>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Viwe All -->
        <div>
            <div class="bg-white rounded-lg p-1 border-b-4 border-[#3CC9F5] border-r-4">
                <a href="<?php echo get_field('view_all_btn_link') ?>" class="">

                    <div
                        class="text-[#00458A] text-[20px] py-3 px-4 rounded-md flex flex-row gap-2 items-center justify-center">

                        <div>
                            <?php echo get_field('view_all_btn_title') ?>
                        </div>

                        <div class="size-6 text-[#00458A] ">
                            <?php Icon::print('Notebook,-Notepad') ?>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- Images -->
    <div class="flex flex-row gap-6 justify-between">

        <?php foreach ($webTeamCards as $webTeamCard): ?>
            <!-- Desktop -->
            <div>
                <?php echo wp_get_attachment_image($webTeamCard['desktop_sample_card_image'], 'full', false, ['class' => 'rounded-[20px] object-cover']) ?>
            </div>

            <!-- Mobile -->
            <div>
                <?php echo wp_get_attachment_image($webTeamCard['mobile_sample_card_image'], 'full', false, ['class' => 'rounded-[20px] object-cover']) ?>
            </div>

        <?php endforeach ?>

    </div>

    <!-- Next, Pre Buttons -->
    <div class="flex flex-row gap-5">
        <button id="vPrev" class="bg-white rounded-lg p-4 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
            <div class="text-[#00458A] size-4">
                <?php icon::print('Left-1') ?>
            </div>
        </button>

        <button id="Next" class="bg-white rounded-lg p-4 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
            <div class="text-[#00458A] size-4">
                <?php icon::print('Arrow,-Right') ?>
            </div>
        </button>
    </div>

</section>

<!-- Mobile Section -->
<section class="flex md:hidden flex-col gap-6 bg-[#002864] rounded-2xl p-6 border-b-4 border-[#3CC9F5] border-r-4">

    <!-- Buttons -->
    <div class="flex flex-row justify-between gap-4">

        <!-- Closer -->
        <div>
            <div class="flex flex-row ">
                <div>
                    <a id=""
                        class="bg-white rounded-lg p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer block">
                        <div class="text-[#00458A] size-6">
                            <?php icon::print('Delete,-Disabled') ?>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Next, Pre Buttons -->
        <div class="flex flex-row gap-5">
            <button id="vPrev" class="bg-white rounded-lg p-4 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
                <div class="text-[#00458A] size-4">
                    <?php icon::print('Left-1') ?>
                </div>
            </button>

            <button id="Next" class="bg-white rounded-lg p-4 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
                <div class="text-[#00458A] size-4">
                    <?php icon::print('Arrow,-Right') ?>
                </div>
            </button>
        </div>

    </div>

    <!-- Images -->
    <div class="flex flex-col gap-3 justify-center items-center">

        <?php foreach ($webTeamCards as $webTeamCard): ?>
            <!-- Desktop -->
            <div>
                <?php echo wp_get_attachment_image($webTeamCard['desktop_sample_card_image'], 'full', false, ['class' => 'rounded-[20px] object-cover']) ?>
            </div>

            <!-- Mobile -->
            <div>
                <?php echo wp_get_attachment_image($webTeamCard['mobile_sample_card_image'], 'full', false, ['class' => 'rounded-[20px] object-cover']) ?>
            </div>

        <?php endforeach ?>

    </div>

    <!-- Viwe All -->
    <div class="max-sm:w-full sm:flex sm:justify-center">
        <div class="bg-white rounded-lg p-1 border-b-4 border-[#3CC9F5] border-r-4">
            <a href="<?php echo get_field('view_all_btn_link') ?>" class="">
                <div
                    class="text-[#00458A] text-[20px] py-3 px-4 rounded-md flex flex-row gap-2 items-center justify-center">

                    <div>
                        <?php echo get_field('view_all_btn_title') ?>
                    </div>

                    <div class="size-6 text-[#00458A] ">
                        <?php Icon::print('Notebook,-Notepad') ?>
                    </div>
                </div>
            </a>
        </div>
    </div>

</section>