<?php

use Cyan\Theme\Helpers\Icon;

$service_character_image = get_field('service_character_image');
$service_title = get_field('service_title');
$service_description = get_field('service_description');

$service_images = [];

for ($i = 1; $i <= 8; $i++) {
    array_push(
        $service_images,
        get_field("service_image_$i")
    );
}
?>

<?php if (!empty($service_character_image) || !empty($service_title) || !empty($service_description)): ?>

    <section class="bg-gradient-to-r from-[#0D192800] to-[#0B52709C] pb-5 md:py-14 max-md:py-8 mt-20" id="services">
        <div class="container flex flex-col md:flex-row gap-20 items-center justify-center px-4">

            <!-- تصویر اصلی -->
            <div class="w-full md:w-[35%] flex justify-center max-md:hidden">
                <?php echo wp_get_attachment_image($service_character_image, 'full', false, ['class' => 'w-full object-cover']); ?>
            </div>

            <div class="w-full md:w-[65%] flex flex-col max-md:items-center">
                <!-- بخش توضیحات و متن -->
                <div class="flex flex-col gap-7 w-full md:w-auto ">
                    <div class="mb-6 text-right">
                        <div class="flex flex-row items-center gap-4 md:gap-2">
                            <div class="size-10 rotate-180">
                                <?php Icon::print('Arrow,-Location-,-Direction'); ?>
                            </div>
                            <div class="font-medium"><?php echo ($service_description); ?></div>
                        </div>
                        <div class="text-[36px] md:text-[56px] font-bold flex mr-4"><?php echo ($service_title); ?></div>
                    </div>
                </div>

                <div class="w-full md:w-1/4 flex justify-center md:hidden max-md:w-3/4">
                    <?php echo wp_get_attachment_image($service_character_image, 'full', false, ['class' => 'w-full object-cover']); ?>
                </div>

                <!-- گرید تصاویر -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center md:items-center justify-items-center">
                    <?php foreach ($service_images as $service_image) {
                        echo wp_get_attachment_image(
                            $service_image,
                            '3/4',
                            false,
                            ['class' => 'w-3/4 md:w-auto']
                        );
                    }
                    ?>

                </div>
            </div>
        </div>
    </section>

<?php endif; ?>