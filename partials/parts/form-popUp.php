<?php use Cyan\Theme\Helpers\Icon; ?>

<section class="flex flex-col gap-6 bg-[#002864] rounded-2xl p-6 border-b-4 border-[#3CC9F5] border-r-4">

    <!-- Title -->
    <div class="flex flex-row justify-between gap-4">

        <!-- Closer -->
        <div>
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
        </div>

        <!-- Text -->
        <div class="text-white text-2xl md:text-4xl">
            <?php echo get_option('cyn_form_title') ?>
        </div>

    </div>

    <!-- Fields -->
    <div class="space-y-5">
        <!-- Row 1 -->
        <div class="grid grid-cols-4 gap-5">

            <div class="col-span-4 md:col-span-2 md:order-1">
                <label class="text-end block text-white text-base font-bold mb-2" for="username">
                    نام
                </label>

                <input name="name" type="text" required="required" placeholder="نام شما"
                    class="p-3 text-end rounded-xl text-white/60 bg-white/10 w-full border border-white/10">
            </div>

            <div class="col-span-4 md:col-span-2 max-md:order-2">

                <label class="text-end block text-white text-base font-bold mb-2" for="username">
                    نام خانوادگی
                </label>

                <input name="name" type="text" required="required" placeholder="نام خانوادگی شما"
                    class="p-3 text-end rounded-xl text-white/60 bg-white/10 w-full border border-white/10">
            </div>

        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-4 gap-5">

            <div class="col-span-4 md:col-span-2 md:order-1">
                <label class="text-end block text-white text-base font-bold mb-2">
                    تلفن همراه
                </label>

                <input type="text" required="required" id="phone_number" aria-describedby="helper-text-explanation"
                    placeholder="تلفن همراه"
                    class="p-3 text-end rounded-xl text-white/60 bg-white/10 w-full border border-white/10"
                    name="phone_number">

            </div>

            <div class="col-span-4 md:col-span-2 max-md:order-2">
                <label class="text-end block text-white text-base font-bold mb-2">
                    بودجه مد نظر شما
                </label>

                <input name="name" type="text" required="required" placeholder="بودجه مد نظر"
                    class="p-3 text-end rounded-xl text-white/60 bg-white/10 w-full border border-white/10">
            </div>

        </div>

        <!-- Row 3 -->
        <div>
            <div>
                <label class="text-end block text-white text-base font-bold mb-2">
                    کلمات کلیدی مد نظر
                </label>

                <input name="name" type="text" required="required" placeholder="مانند بهترین دندانپزشکی تهران"
                    class="p-3 text-end rounded-xl text-white/60 bg-white/10 w-full border border-white/10">
            </div>
        </div>

        <!-- Row 4 -->
        <div>
            <div>
                <label class="text-end block text-white text-base font-bold mb-2">
                    آدرس سایت کنونی
                </label>

                <input name="name" type="text" required="required" placeholder="http://"
                    class="p-3 text-end rounded-xl text-white/60 bg-white/10 w-full border border-white/10">
            </div>
        </div>
    </div>

    <!-- Button -->
    <div class="flex flex-row justify-between items-center gap-4">

        <!-- Phone Number -->
        <div class="hidden md:flex flex-row gap-2">

            <div class="text-[#27BFEF] text-base">
                <a href="<?php echo 'tel:' . get_option('cyn_form_phone_number ') ?>">
                    <?php echo get_option('cyn_form_phone_number') ?>
                </a>
            </div>

            <div class="text-white text-base">
                <?php echo get_option('cyn_form_phone_title') ?>
            </div>
        </div>

        <!-- Send Button -->
        <div>
            <button id="" class="bg-white rounded-xl p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
                <div class="text-[#00458A] flex flex-row items-center gap-2">
                    <div>
                        <?php _e('ارسال درخواست', 'cyn-dm') ?>
                    </div>

                    <div class="size-6">
                        <?php Icon::print('Telegram') ?>
                    </div>
                </div>
            </button>
        </div>
    </div>

</section>