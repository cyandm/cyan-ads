<?php

use Cyan\Theme\Helpers\Icon;

?>

<section modal
    data-modal-name="video-popup-design"
    data-active="false"
    class="flex flex-col gap-6 bg-[#19191F] rounded-2xl p-6 fixed inset-0 z-50 m-20 max-sm:m-4 max-mm:h-fit transition-all duration-300
		 data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto
		  data-[active='false']:opacity-0 data-[active='false']:pointer-events-none">
    <!-- Buttons -->
    <div class="flex flex-row justify-between gap-4">

        <!-- Closer -->
        <div modal-closer
            data-modal-name="video-popup-design">
            <div class="flex flex-row ">
                <div>
                    <a id=""
                        class="border border-[#FFE245] rounded-lg p-2 cursor-pointer block">
                        <div class="text-[#FFE245] size-8">
                            <?php icon::print('Delete,-Disabled') ?>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>



    <video class="video-plyr"
        controls
        playsinline>
        <source src="#" />
    </video>



</section>