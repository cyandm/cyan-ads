<?php

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;
?>

<article class="shadow-md overflow-hidden hover:shadow-lg transition-shadow">

    <?php if (has_post_thumbnail()) : ?>

        <a href="<?php the_permalink(); ?>" class="group flex flex-col gap-2">

            <div class="relative">

                <img src="<?php the_post_thumbnail_url('full'); ?>" alt="<?php the_title(); ?>" class="w-full h-72 object-cover rounded-3xl">

                <div class="absolute top-4 left-3 bg-white shadow-[0_4px_14px_0_rgba(0,0,0,0.04)] flex gap-1 justify-center items-center p-2 rounded-lg text-[#17242F] text-xs font-normal">

                    <span class="size-5">
                        <?php icon::print('calendar-schedule-1-1'); ?>
                    </span>
                    <?php echo get_the_date(); ?>

                </div>

            </div>

            <div class="flex flex-col gap-2 py-2 px-3 [&_p]:line-clamp-3 [&_p]:text-[#A3A3A3] [&_p]:text-base [&_p]:font-normal">

                <h3 class="group-hover:text-[#27BFEF] transition-all duration-300 text-xl font-medium"><?php the_title() ?></h3>

                <?php the_excerpt() ?>

            </div>

        </a>

    <?php endif; ?>

</article>