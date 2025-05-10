<?php

use Cyan\Theme\Helpers\Icon;

$contact_title = get_field('contact_title');
$contact_subtitle = get_field('contact_subtitle');
$contact_img = get_field('contact_img');
?>

<section class="min-h-72 py bg-gradient-to-r from-[#18181a] via-[#001922] to-[#003041]">

    <div class="container">

        <div class="flex flex-row gap-4 justify-center items-center lg:px-28 py-12 max-md:flex-col">

            <div class="w-5/12 max-md:w-full flex justify-center items-center">
                <?php echo wp_get_attachment_image($contact_img, 'full', false); ?>
            </div>

            <div class="w-7/12 max-md:w-4/5">
                <form
                    hx-post="<?php echo rest_url('cyn/v1/form') ?>"
                    hx-target=".result"
                    hx-on::after-request="document.querySelector('.result').style.display = 'block';
			document.querySelector('.result').textContent = 'با موفقیت ارسال شد';"
                    action=""
                    class="flex flex-col gap-4 mt-6 [&>div]:w-full [&>div>div]:w-full [&_input]:bg-transparent [&_input]:border [&_input]:text-white [&_input]:px-4 [&_input]:py-2 [&_input]:placeholder:text-white/60">

                    <div class="flex gap-4 max-md:flex-col">

                        <div class="flex flex-col gap-1">
                            <input type="text" name="name" id="name" placeholder="نام *" required>
                        </div>

                        <div class="flex flex-col gap-1">
                            <input type="text" name="last_name" id="last_name" placeholder="نام خانوادگی *" required>
                        </div>

                    </div>

                    <div class="flex gap-4 max-md:flex-col">

                        <div class="flex flex-col gap-1">
                            <input type="text" name="phone" id="phone" placeholder="شماره تماس *" required>
                        </div>

                        <div class="flex flex-col gap-1">
                            <input type="text" name="email" id="email" placeholder="ایمیل">
                        </div>

                    </div>

                    <div class="flex flex-col gap-1">
                        <input type="text" name="address_website" id="address_website" placeholder="آیدی صفحه اینستاگرام، آدرس سایت یا ...">
                    </div>

                    <div class="flex justify-end items-center mt-4 max-md:flex-col ">

                        <button id="btnchange" class="text-white font-normal text-base flex justify-center items-center gap-1">

                            ارسال درخواست

                            <div class="size-6">
                                <?php Icon::print('Arrow-6'); ?>
                            </div>

                        </button>

                    </div>

                </form>
            </div>

        </div>

    </div>



</section>