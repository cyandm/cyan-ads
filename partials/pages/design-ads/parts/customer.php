<?php

use Cyan\Theme\Helpers\Icon;

$customer_items = [];
for ($i = 1; $i <= 12; $i++) {
    array_push(
        $customer_items,
        [
            'image' => get_field("customer_video_image_$i"),
            'video' => get_field("customer_video_file_$i"),
            'name' => get_field("customer_video_name_$i"),
            'desc' => get_field("customer_video_desc_$i")
        ]
    );
}

$customer_video_link = get_field('customer_video_link');

function hasVideoCustomer($customer_item)
{
    if (!empty($customer_item['video'])) {
        return "video";
    } elseif (!empty($customer_item['image'])) {
        return "image";
    }
    return "none";
}
?>


<?php if (!empty($customer_items)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-2xl font-semibold md:text-4xl md:font-bold">رضایت همراهان ما</div>

                <?php if ($customer_video_link): ?>

                    <a href="<?php echo $customer_video_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

                <div class="flex gap-2">

                    <button id="customerPrev"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Arrow,-Right') ?>
                        </div>
                    </button>

                    <button id="customerNext"
                        class="bg-transparent p-3 border border-white cursor-pointer">
                        <div class="text-white size-4">
                            <?php icon::print('Left-1') ?>
                        </div>
                    </button>

                </div>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="true" navigation-next-el="#customerNext" navigation-prev-el="#customerPrev" class="w-full">

                <?php foreach ($customer_items as $customer_item): ?>

                    <?php if (hasVideoCustomer($customer_item) === "video"): ?>

                        <swiper-slide style="max-width:330px" class="max-md:!max-w-[265px]" data-video-url="<?php echo wp_get_attachment_url($customer_item['video']) ?>"
                            modal-opener
                            data-modal-name="video-popup-design">

                            <div class="swiper-wrapper border border-white border-opacity-40 p-3 cursor-pointer">
                                <div class="relative">

                                    <?php echo wp_get_attachment_image($customer_item['image'], 'full', false, ['class' => 'object-cover object-center h-56 md:h-80 md:w-80']) ?>

                                    <div class="absolute inset-0 w-full h-full flex items-center justify-center">

                                        <div class="size-20">
                                            <?php Icon::print('Play') ?>
                                        </div>

                                    </div>

                                </div>


                                <p class="text-white mt-2 text-base font-normal"><?php echo $customer_item['name']; ?></p>
                                <p class="text-white mt-2 text-sm font-normal"><?php echo $customer_item['desc']; ?></p>

                            </div>

                        </swiper-slide>

                    <?php elseif (hasVideoCustomer($customer_item) === "image"): ?>

                        <swiper-slide style="max-width:330px" class="swiper-gallery max-md:!max-w-[265px]">

                            <a href="<?php echo wp_get_attachment_image_url($customer_item['image'], 'full') ?>" data-pswp-width="720"
                                data-pswp-height="720">
                                <div class="swiper-wrapper border h-64 border-white border-opacity-40 p-3">
                                    <?php echo wp_get_attachment_image($customer_item['image'], 'full', false, ['class' => 'object-cover object-center h-56 md:h-80']); ?>
                                </div>
                            </a>

                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach; ?>

            </swiper-container>

        </div>

    </section>

<?php endif; ?>