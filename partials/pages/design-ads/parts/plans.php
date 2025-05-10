<?php

use Cyan\Theme\Helpers\Icon;

$terms = ['instagram', 'website'];
$plans_by_term = [];

foreach ($terms as $term_slug) {
    $query = new WP_Query([
        'post_type' => 'plan',
        'posts_per_page' => 4,
        'tax_query' => [[
            'taxonomy' => 'part',
            'field' => 'slug',
            'terms' => $term_slug
        ]],
        'orderby' => 'date',
        'order' => 'ASC'
    ]);

    $plans = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $plan_data = [
                'title' => get_field('plan_name'),
                'more_title' => get_field('plan_name_more'),
                'content' => get_field('plan_desc'),
                'price' => get_field("plan_price"),
                'plan_ability_suggest' => get_field("plan_ability_suggest"),
            ];

            // Add abilities dynamically
            $abilities = [
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
                'ten',
                'eleven',
                'twelve',
                'thirteen',
                'fourteen',
                'fifteen',
                'sixteen',
                'seventeen',
                'eighteen'
            ];

            foreach ($abilities as $key) {
                $plan_data["plan_ability_{$key}"] = get_field("plan_ability_{$key}");
                $plan_data["plan_ability_{$key}_text"] = get_field("plan_ability_{$key}_text");
            }

            array_push($plans, $plan_data);
        }
    }

    wp_reset_postdata();
    $plans_by_term[$term_slug] = $plans;
}


$plansTitle = get_field('plan_title');
$plansSubTitle = get_field('plan_subtitle');
$plan_title_modal = get_field('plan_title_modal');
$plan_subtitle_modal = get_field('plan_subtitle_modal');

function isTabActive($plans)
{
    return ! empty($plans['title']) || ! empty($plans['cover']);
}


?>

<section class="flex justify-center">
    <div class="container my-32 flex flex-col gap-9">

        <div class="text-2xl font-semibold md:text-4xl md:font-bold flex flex-row max-md:flex-col gap-1 md:items-center">
            <?php echo $plansTitle ?>
            <span class="text-xl font-normal text-[#27BFEF]"><?php echo $plansSubTitle ?></span>
        </div>

        <div class="flex flex-col gap-7 justify-center items-center" id="servicesTabs">

            <div class="flex flex-row gap-2 px-2 py-2 bg-white/15 rounded-xl w-fit">

                <?php foreach ($terms as $key => $term_slug) : ?>

                    <button class="text-base max-md:text-sm font-normal py-1 px-2 text-white hover:bg-white hover:text-[#000A30] rounded-lg transition-all duration-500" data-tab="tab_<?php echo $term_slug ?>">
                        <?php
                        $term = get_term_by('slug', $term_slug, 'part');
                        echo $term->name;
                        ?>
                    </button>

                <?php endforeach; ?>

            </div>

            <div class="tab-content grid grid-cols-1 transition-all duration-500 w-full" id="technical">

                <?php foreach ($plans_by_term as $term_slug => $plans) : ?>

                    <div data-tab="tab_<?php echo $term_slug ?>" class="flex flex-row max-xl:flex-wrap gap-4 col-start-1 row-start-1 transition-opacity duration-500 ease-in-out">

                        <?php foreach ($plans as $plan): ?>

                            <div class="flip bg-[#3a3a3c] w-1/4 max-xl:w-[49%] max-lg:w-[48%] max-md:w-full border py-5 px-8 <?php echo ($plan['plan_ability_suggest'] === 'active') ? 'border-[#27BFEF]' : ''; ?>">

                                <div class="front flex flex-col gap-8 front-content">

                                    <div class="front-content flex flex-col gap-8">
                                        <div>

                                            <p class="text-2xl font-semibold <?php echo ($plan['plan_ability_suggest'] === 'active') ? 'text-[#27BFEF]' : 'text-white'; ?>"><?php echo $plan['title'] ?> <span class="text-sm font-medium text-white/80"><?php echo $plan['more_title'] ?></span></p>

                                            <p class="text-white/80 text-sm font-normal leading-5 pt-2"><?php echo $plan['content'] ?></p>

                                        </div>

                                        <p class="text-5xl font-bold <?php echo ($plan['plan_ability_suggest'] === 'active') ? 'text-[#27BFEF]' : 'text-white'; ?>"><?php echo $plan['price'] ?> <span class="text-xl font-normal">میلیون تومان<span class="text-white/80 text-sm">/ماهیانه</span></span></p>

                                        <button class="border p-2 text-base font-normal text-center" modal-opener data-modal-name="plan-form-modal">دریافت پکیج</button>

                                        <hr class="h-px bg-white/15 border-0">
                                        </hr>
                                    </div>

                                    <div class="front-content flex flex-col gap-4">

                                        <p class="text-base font-normal">تو این پکیج چی دریافت می‌کنی؟</p>

                                        <div class="pt-2">

                                            <ul class="flex flex-col gap-3">
                                                <?php
                                                $abilities = [
                                                    'one' => $plan['plan_ability_one_text'],
                                                    'two' => $plan['plan_ability_two_text'],
                                                    'three' => $plan['plan_ability_three_text'],
                                                    'four' => $plan['plan_ability_four_text'],
                                                    'five' => $plan['plan_ability_five_text'],
                                                    'six' => $plan['plan_ability_six_text'],
                                                    'seven' => $plan['plan_ability_seven_text'],
                                                    'eight' => $plan['plan_ability_eight_text'],
                                                    'nine' => $plan['plan_ability_nine_text'],
                                                    'ten' => $plan['plan_ability_ten_text'],
                                                ];

                                                foreach ($abilities as $key => $text):
                                                    $ability_key = "plan_ability_{$key}";
                                                    if (!empty($text)):

                                                ?>
                                                        <li class="flex flex-row gap-1 w-full items-center">
                                                            <span class="size-6 <?php echo ($plan[$ability_key] === 'active') ? 'text-[#27BFEF]' : 'text-[#E6472A]'; ?>">
                                                                <?php $plan[$ability_key] === 'active' ? Icon::print('checkmark-circle-1') : Icon::print('Delete,-Disabled-1') ?>
                                                            </span>
                                                            <p class="text-sm text-white/80 font-normal"><?php echo $text ?></p>
                                                        </li>
                                                <?php endif;
                                                endforeach; ?>
                                            </ul>

                                        </div>

                                    </div>

                                    <button class="flex flex-row items-center justify-center" id="more_details">
                                        جزئیات بیشتر
                                        <div class="size-8 animate-rightToLeft">
                                            <?php Icon::print('Arrow-27') ?>
                                        </div>
                                    </button>

                                </div>

                                <div class="back flex flex-col gap-8 py-5 px-8">

                                    <div class="front-content flex flex-col gap-4">

                                        <p class="text-base font-normal">تو این پکیج چی دریافت می‌کنی؟</p>

                                        <div class="pt-2">

                                            <ul class="flex flex-col gap-3">
                                                <?php
                                                $abilities = [
                                                    'one' => $plan['plan_ability_one_text'],
                                                    'two' => $plan['plan_ability_two_text'],
                                                    'three' => $plan['plan_ability_three_text'],
                                                    'four' => $plan['plan_ability_four_text'],
                                                    'five' => $plan['plan_ability_five_text'],
                                                    'six' => $plan['plan_ability_six_text'],
                                                    'seven' => $plan['plan_ability_seven_text'],
                                                    'eight' => $plan['plan_ability_eight_text'],
                                                    'nine' => $plan['plan_ability_nine_text'],
                                                    'ten' => $plan['plan_ability_ten_text'],
                                                    'eleven' => $plan['plan_ability_eleven_text'],
                                                    'twelve' => $plan['plan_ability_twelve_text'],
                                                    'thirteen' => $plan['plan_ability_thirteen_text'],
                                                    'fourteen' => $plan['plan_ability_fourteen_text'],
                                                    'fifteen' => $plan['plan_ability_fifteen_text'],
                                                    'sixteen' => $plan['plan_ability_sixteen_text'],
                                                    'seventeen' => $plan['plan_ability_seventeen_text'],
                                                    'eighteen' => $plan['plan_ability_eighteen_text']
                                                ];

                                                foreach ($abilities as $key => $text):
                                                    $ability_key = "plan_ability_{$key}";
                                                    if (!empty($text)):
                                                ?>
                                                        <li class="flex flex-row gap-1 w-full items-center">
                                                            <span class="size-6 <?php echo ($plan[$ability_key] === 'active') ? 'text-[#27BFEF]' : 'text-[#E6472A]'; ?>">
                                                                <?php $plan[$ability_key] === 'active' ? Icon::print('checkmark-circle-1') : Icon::print('Delete,-Disabled-1') ?>
                                                            </span>
                                                            <p class="text-sm text-white/80 font-normal"><?php echo $text ?></p>
                                                        </li>
                                                <?php
                                                    endif;
                                                endforeach; ?>
                                            </ul>

                                        </div>

                                    </div>

                                    <button class="front-content flex flex-row items-center justify-center" id="low_details">
                                        <div class="size-8 animate-leftToRight">
                                            <?php Icon::print('Arrow-19') ?>
                                        </div>
                                        جزئیات کمتر
                                    </button>

                                </div>

                            </div>

                        <?php endforeach; ?>

                    </div>

                <?php endforeach ?>

            </div>

        </div>

    </div>

</section>

<section class="bg-[#27BFEF] opacity-0 z-50 fixed inset-0 w-1/2 max-xl:w-3/4 max-sm:w-[95%] h-fit m-auto pointer-events-none data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500 rounded-lg border-b-4 border-[#3CC9F5] border-r-4" modal data-modal-name="plan-form-modal" data-active="false">

    <div class="bg-[#3a3a3c] rounded-lg px-8 max-md:px-4 pt-10 max-md:pt-6 pb-9 max-md:pb-7 text-white">

        <div class="flex justify-between">

            <div class="flex flex-col gap-3">
                <p class="font-medium text-4xl max-md:text-2xl"><?php echo $plan_title_modal ?></p>
                <p class="font-normal text-xl max-md:text-base"><?php echo $plan_subtitle_modal ?></p>
            </div>


            <div class="size-11 text-[#002864] bg-white border-r-2 border-b-2 border-[#27BFEF] rounded-xl cursor-pointer" modal-closer data-modal-name="plan-form-modal">

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
                    <label for="name" class="text-base font-normal">نام *</label>
                    <input type="text" name="name" id="name" placeholder="نام شما" required>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="last_name">نام خانوادگی *</label>
                    <input type="text" name="last_name" id="last_name" placeholder="نام خانوادگی شما" required>
                </div>

            </div>

            <div class="flex gap-5 max-md:flex-col">

                <div class="flex flex-col gap-1">
                    <label for="phone" class="text-base font-normal">تلفن همراه *</label>
                    <input type="text" name="phone" id="phone" placeholder="تلفن همراه" required>
                </div>

                <div class="flex flex-col gap-1">

                    <label for="email" class="text-base font-normal">ایمیل</label>
                    <input type="text" name="email" id="email" placeholder="ایمیل">
                </div>

            </div>

            <div class="flex flex-col gap-1">
                <label for="address_website" class="text-base font-normal">آدرس سایت و یا صفحه اینستاگرام کنونی</label>
                <input type="text" name="address_website" id="address_website" placeholder="http://">
            </div>

            <div class="flex flex-col gap-1">

                <label for="plan" class="text-base font-normal">پکیج مورد نظر</label>
                <select id="plan" name="plan" class="rounded-xl border-none bg-white/10 px-4 py-2 text-white placeholder:text-white/60">
                    <option value="instagram" class="bg-[#3a3a3c]">اینستاگرام</option>
                    <option value="website" class="bg-[#3a3a3c]">طراحی وب سایت</option>
                </select>
            </div>

            <div class="flex justify-between items-center mt-4 max-md:flex-col">

                <button id="btnchange" class="bg-white text-[#00458A] font-normal text-base rounded-lg px-4 py-2 border-b-4 border-r-4 border-[#27BFEF] flex justify-center items-center gap-1">

                    <div class="size-6 -rotate-45">
                        <?php Icon::print('send-message'); ?>
                    </div>

                    ارسال درخواست
                </button>

                <div class="flex gap-1 !w-auto mt-5">

                    <span class="text-base font-normal">شماره تماس سایان :</span>

                    <a href="tel:<?php echo get_field("seo_phone_1") ?>" class="text-base font-medium text-[#27BFEF]">
                        <?php echo get_field("seo_phone_1") ?>
                    </a>

                </div>

            </div>

        </form>

        <div class="result mt-2 text-green-600 text-base font-normal text-center bg-white p-2 rounded-lg hidden">

        </div>

    </div>

</section>