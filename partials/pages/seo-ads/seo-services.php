<?php

$seoServicesTitle = get_field('seo_services_title');

$seoServices = [];

for ($i = 1; $i <= 4; $i++) {

    array_push($seoServices, [
        'title' => get_field("seo_services_tab_" . $i),
        'content' => get_field("seo_services_content_" . $i),
    ]);
}

function isTabActive($seoServices)
{
    return ! empty($seoServices['title']) || ! empty($seoServices['cover']);
}
?>

<!-- <section class="bg-[#000B30] bg-no-repeat bg-cover flex justify-center" style="background-image: url(<?php //echo THEME_IMAGES_URI . '/under-sea.webp' 
                                                                                                            ?>); background-position-y: center;"> -->
<section class="bg-under-sea flex justify-center">
    <div class="container px-60 max-lg:px-4 my-60 max-md:mt-32 max-md:mb-[452px] flex flex-col gap-9">

        <div class="text-white text-xl md:text-4xl">
            <?php echo $seoServicesTitle ?>
        </div>

        <div class="flex flex-col gap-7" id="servicesTabs">

            <div class="flex flex-row gap-2 px-2 py-2 bg-white/15 rounded-xl w-fit">
                <?php foreach ($seoServices as $key =>  $seoService) : ?>
                    <button class="text-base max-md:text-sm font-normal py-1 px-2 text-white hover:bg-white hover:text-[#000A30] rounded-lg transition-all duration-500" data-tab="tab_<?php echo $key ?>">
                        <?php echo $seoService['title'] ?>
                    </button>
                <?php endforeach ?>
            </div>

            <div class="tab-content grid grid-cols-1 transition-all duration-500" id="technical">
                <?php foreach ($seoServices as $key =>  $seoService) : ?>
                    <div data-tab="tab_<?php echo $key ?>" class="col-start-1 row-start-1 transition-opacity duration-500 ease-in-out">
                        <p class="text-white text-xl max-md:text-base max-md:font-medium max-md:leading-7 font-normal leading-10"><?php echo $seoService['content'] ?></p>
                    </div>
                <?php endforeach ?>
            </div>

        </div>



    </div>

</section>