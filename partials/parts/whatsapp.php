<?php

use Cyan\Theme\Helpers\Icon;

$link_whatsapp = get_option('cyn_link_whatsapp');
?>

<?php if ($link_whatsapp): ?>

    <div class="fixed right-6 bottom-4 z-[1000]">
        <div class="flex justify-center items-center rounded-full leading-10 relative z-10 text-2xl text-center shadow-md text-white animate-bounce">
            <a href="<?php echo $link_whatsapp ?>" class="size-12 text-cyan-700 p-2 bg-white border-r-2 border-b-2 border-sky-400 rounded-full">
                <?php Icon::print('Whatsup') ?>
            </a>
        </div>
    </div>

<?php endif; ?>