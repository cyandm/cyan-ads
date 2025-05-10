<?php

use Cyan\Theme\Helpers\Icon;

$customer_character_image = get_field('customer_character_image');
$customer_title = get_field('customer_title');
$customer_description = get_field('customer_description');

$customer_images = [];

for ($i = 1; $i <= 12; $i++) {
    array_push(
        $customer_images,
        get_field("customer_image_$i")
    );
}
?>

<?php if (!empty($customer_character_image) || !empty($customer_title) || !empty($customer_description)): ?>

    <section class="bg-gradient-to-r from-red-600/20 to-red-900/0 mt-20 md:px-4 md:py-10 pb-5" id="customers">
        <div class="container mx-auto flex flex-col-reverse md:flex-row gap-12 items-center justify-center">

            <div class="md:w-3/5">
                <!-- بخش توضیحات و متن -->
                <div class="flex flex-col gap-7 w-full md:w-auto">
                    <div class="my-9 text-center md:text-right flex flex-col gap-3">
                        <div class="flex flex-row items-center gap-4 md:gap-2">
                            <div class="size-10 rotate-180">
                                <?php Icon::print('Arrow,-Location-,-Direction'); ?>
                            </div>
                            <div class="font-medium"><?php echo ($customer_description); ?></div>
                        </div>
                        <div class="text-4xl md:text-[56px] font-bold flex mr-4 my-3"><?php echo ($customer_title); ?></div>
                    </div>
                </div>

                <!-- تصویر اصلی -->
                <div class="w-full md:w-auto flex justify-center mb-6 md:hidden">
                    <?php echo wp_get_attachment_image($customer_character_image, 'full', 'false', ['class' => 'w-3/4 md:w-auto']); ?>
                </div>

                <!-- گرید تصاویر مشتریان -->
                <div class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full items-center justify-items-center">
                    <?php foreach ($customer_images  as $customer_image) {
                        echo wp_get_attachment_image(
                            $customer_image,
                            'full',
                            false,
                            ['class' => 'w-3/4 md:w-auto max-mm:w-full']
                        );
                    }
                    ?>
                </div>
            </div>

            <!-- تصویر اصلی -->
            <div class="w-full flex justify-center mb-6 max-md:hidden md:w-2/5">
                <?php echo wp_get_attachment_image($customer_character_image, 'full', 'false', ['class' => 'w-3/4 md:w-full']); ?>
            </div>

        </div>
    </section>

<?php endif; ?>