<?php
$hero_image = get_field('hero-image');
$hero_image_ribbon = get_field('hero-image-ribbon');
$hero_short_title = get_field('hero-short-title');
$hero_long_title = get_field('hero-long-title');
?>

<section class="relative overflow-hidden">

    <?php echo wp_get_attachment_image($hero_image_ribbon, 'full', false, ['class' => 'absolute top-[75%] max-md:top-[73%] -z-10 -rotate-[7deg] left-0 -right-10 min-w-[120vw] max-md:min-w-[270vw] z-10']); ?>

    <div class="flex flex-col-reverse md:flex-row justify-between items-center container max-md:gap-6">

        <div class="md:w-1/2 md:pr-10 md:pb-32">

            <h1 class="max-md:text-4xl max-lg:text-[2.75rem] max-xl:text-6xl xl:text-7xl font-bold text-right leading-tight flex flex-col gap-4 top-10">
                <span class="font-normal text-5xl max-md:text-3xl"><?php echo ($hero_short_title); ?></span>
                <span><?php echo ($hero_long_title); ?></span>
            </h1>

        </div>

        <div class="md:w-1/2 md:pl-10">

            <?php echo wp_get_attachment_image($hero_image, 'full', false, ['class' => 'w-full h-auto']); ?>

        </div>

    </div>



</section>