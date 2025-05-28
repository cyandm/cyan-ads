<?php

use Cyan\Theme\Helpers\Icon;

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

<section class="bg-[#3CC9F5] opacity-0 z-50 fixed inset-0 w-1/2 max-xl:w-3/4 max-sm:w-[95%] h-fit m-auto pointer-events-none data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500 rounded-lg border-b-4 border-[#3CC9F5] border-r-4" modal data-modal-name="analyze-form-modal" data-active="false">

    <div class="bg-[#002864] rounded-lg px-8 max-md:px-4 pt-10 max-md:pt-6 pb-9 max-md:pb-7 text-white">

        <div class="flex justify-between">

            <div class="flex flex-col gap-3">
                <p class="font-medium text-4xl max-md:text-2xl">نیاز شما دغدغه ی ماست</p>
                <p class="font-normal text-xl max-md:text-base">پس از ارسال اطلاعات، با شما تماس خواهیم گرفت.</p>
            </div>


            <div class="size-11 text-[#002864] bg-white border-r-2 border-b-2 border-[#3CC9F5] rounded-xl cursor-pointer" modal-closer data-modal-name="analyze-form-modal">

                <?php Icon::print('Delete,-Disabled') ?>

            </div>

        </div>


        <form
            hx-post="<?php echo rest_url('cyn/v1/form') ?>"
            hx-target=".result"
            hx-on::after-request="document.querySelector('.result').style.display = 'block';
			document.querySelector('.result').textContent = 'با موفقیت ارسال شد';"
            action=""
            class="flex flex-col gap-5 mt-6 [&>div]:w-full [&>div>div]:w-full [&_input]:rounded-xl [&_input]:bg-white/10 [&_input]:border-none [&_input]:text-white [&_input]:px-4 [&_input]:py-2 [&_input]:placeholder:text-white/60">

            <div class="flex gap-5 max-md:flex-col">

                <div class="flex flex-col gap-1">
                    <label for="name" class="text-base font-normal">نام و نام خانوادگی</label>
                    <input type="text" name="name" id="name" placeholder="نام و نام خانوادگی" required>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="phone" class="text-base font-normal">تلفن همراه</label>
                    <input type="text" name="phone" id="phone" placeholder="تلفن همراه" required>
                </div>

            </div>


            <div class="flex gap-5 max-md:flex-col">

                <div class="flex flex-col gap-1">
                    <label for="address_website" class="text-base font-normal">توضیحات تکمیلی</label>
                    <textarea name="address_website" id="address_website" placeholder="http://" rows="5" class="resize-none rounded-xl bg-white/10 border-none text-white px-4 py-2 placeholder:text-white/60"></textarea>
                </div>

            </div>

            <div class="flex justify-between items-center max-md:flex-col">

                <button id="btnchange" class="bg-white text-[#00458A] font-normal text-base rounded-lg px-4 py-2 border-b-4 border-r-4 border-[#3CC9F5] flex justify-center items-center gap-1">

                    <div class="size-6 -rotate-45">
                        <?php Icon::print('send-message'); ?>
                    </div>

                    ارسال درخواست
                </button>

                <div class="flex gap-1 !w-auto mt-5">

                    <span class="text-base font-normal">شماره تماس سایان :</span>

                    <a href="tel:+989203060640" class="text-base font-medium text-[#27BFEF]">
                        09203060640
                    </a>

                </div>

            </div>



        </form>


        <div class="result mt-2 text-green-600 text-base font-normal text-center bg-white p-2 rounded-lg hidden">

        </div>

    </div>

</section>