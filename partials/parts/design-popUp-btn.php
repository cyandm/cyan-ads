<?php

use Cyan\Theme\Helpers\Icon;


$webTeamCards = [];

for ($i = 1; $i <= 24; $i++) {
    $btnTitle = get_field("card_btn_title_$i");
    $btnLink = get_field("card_btn_link_$i");
    $btnColor = get_field("card_btn_color_$i");

    // Error handling: Check if required fields are empty
    if (empty($btnTitle) || empty($btnLink) || empty($btnColor)) {
        continue; // Skip this iteration if button title or link is empty
    }

    array_push($webTeamCards, [
        'btn_title' => $btnTitle,
        'btn_link' => $btnLink,
        "btn_color" => $btnColor,
    ]);
}


?>

<section>
    <div class="flex flex-col gap-6 bg-[#002864] rounded-2xl p-6 border-b-4 border-[#3CC9F5] border-r-4">

        <!-- Closer Button -->
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

        <div class="flex flex-col md:flex-row flex-wrap gap-3">
            <?php foreach ($webTeamCards as $webTeamCard): ?>

                <button class="bg-[var(--bg-color)] rounded-md"
                    style="--bg-color: <?php echo $webTeamCard['btn_color'] ?>">

                    <div class="text-white text-base py-3 px-4 rounded-md flex flex-row gap-2 items-center justify-center">

                        <div class="size-6 text-white ">
                            <?php Icon::print('link-shear') ?>
                        </div>

                        <div>
                            <?php echo $webTeamCard['btn_title'] ?>
                        </div>

                    </div>
                </button>

            <?php endforeach ?>
        </div>
    </div>
</section>