<?php

use Cyan\Theme\Helpers\Icon;

$motion_items = [];
for ($i = 1; $i <= 12; $i++) {
    array_push(
        $motion_items,
        [
            'image' => get_field("motion_image_$i"),
            'video' => get_field("motion_video_$i")
        ]
    );
}

$motion_link = get_field('motion_link');

function hasVideoMotion($motion_item)
{
    if (!empty($motion_item['video'])) {
        return "video";
    } elseif (!empty($motion_item['image'])) {
        return "image";
    }
    return "none";
}
?>


<?php if (!empty($motion_items)): ?>

    <section class="container my-16">

        <div class="flex flex-col gap-3 md:gap-6">

            <div class="flex justify-between items-center">

                <div class="text-xl font-semibold md:text-4xl md:font-bold">موشن گرافیک</div>

                <?php if ($motion_link): ?>

                    <a href="<?php echo $motion_link ?>" class="text-xs font-normal md:text-base md:font-normal border border-white py-2 px-3">مشاهده همه</a>

                <?php endif; ?>

            </div>

            <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="false" class="w-full">

                <?php foreach ($motion_items as $motion_item): ?>

                    <?php if (hasVideoMotion($motion_item) === "video"): ?>

                        <swiper-slide style="max-width:330px" class="max-md:!max-w-[265px]" data-video-url="<?php echo wp_get_attachment_url($motion_item['video']) ?>"
                            modal-opener
                            data-modal-name="video-popup-design">

                            <div class="swiper-wrapper border border-white border-opacity-40 p-3 cursor-pointer relative">
                                <?php echo wp_get_attachment_image($motion_item['image'], 'full', false, ['class' => 'object-cover object-center h-56 md:h-80 md:w-80']) ?>

                                <div class="absolute inset-0 w-full h-full flex items-center justify-center">

                                    <div class="size-20">
                                        <?php Icon::print('Play') ?>
                                    </div>

                                </div>

                            </div>

                        </swiper-slide>

                    <?php elseif (hasVideoMotion($motion_item) === "image"): ?>

                        <swiper-slide style="max-width:330px" class="swiper-gallery max-md:!max-w-[265px]">

                            <a href="<?php echo wp_get_attachment_image_url($motion_item['image'], 'full') ?>" data-pswp-width="720"
                                data-pswp-height="720">
                                <div class="swiper-wrapper border h-64 border-white border-opacity-40 p-3">
                                    <?php echo wp_get_attachment_image($motion_item['image'], 'full', false, ['class' => 'object-cover object-center h-56 md:h-80']); ?>
                                </div>
                            </a>

                        </swiper-slide>

                    <?php endif; ?>

                <?php endforeach; ?>

            </swiper-container>

        </div>

    </section>

<?php endif; ?>