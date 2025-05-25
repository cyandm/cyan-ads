<?php

use Cyan\Theme\Helpers\Icon;

$cloud_path = THEME_IMAGES_URI . '/Vector.png';
$cloud_path_third = THEME_IMAGES_URI . '/cloud3.svg';
$sun_path = THEME_IMAGES_URI . '/sun.png';
$mountain_path = THEME_IMAGES_URI . '/mountain.png';

$main_title_desktop = get_field('main_title_desktop');
$main_title_mobile = get_field('main_title_mobile');
$sub_title = get_field('sub_title');
$btn_text = get_field('btn_title');
$btn_call_text = get_field('btn_call_title');
$btn_call_num = get_field('btn_call_num');
$title_analyze_popup = get_field('title_analyze_popup');
$subtitle_analyze_popup = get_field('subtitle_analyze_popup');
?>

<section class="bg-[#3CC9F5] opacity-0 z-50 fixed inset-0 w-1/2 max-xl:w-3/4 max-sm:w-[95%] h-fit m-auto pointer-events-none data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500 rounded-lg border-b-4 border-[#3CC9F5] border-r-4" modal data-modal-name="analyze-form-modal" data-active="false">

	<div class="bg-[#002864] rounded-lg px-8 max-md:px-4 pt-10 max-md:pt-6 pb-9 max-md:pb-7 text-white">

		<div class="flex justify-between">

			<div class="flex flex-col gap-3">
				<p class="font-medium text-4xl max-md:text-2xl"><?php echo $title_analyze_popup ?></p>
				<p class="font-normal text-xl max-md:text-base"><?php echo $subtitle_analyze_popup ?></p>
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
					<label for="name" class="text-base font-normal">نام</label>
					<input type="text" name="name" id="name" placeholder="نام شما" required>
				</div>

				<div class="flex flex-col gap-1">
					<label for="last_name">نام خانوادگی</label>
					<input type="text" name="last_name" id="last_name" placeholder="نام خانوادگی شما" required>
				</div>

			</div>


			<div class="flex gap-5 max-md:flex-col">

				<div class="flex flex-col gap-1">
					<label for="phone" class="text-base font-normal">تلفن همراه</label>
					<input type="text" name="phone" id="phone" placeholder="تلفن همراه" required>
				</div>

				<div class="flex flex-col gap-1">
					<label for="budget" class="text-base font-normal">بودجه</label>
					<input type="text" name="budget" id="budget" placeholder="بودجه مد نظر">
				</div>

			</div>

			<div class="flex flex-col gap-1">
				<label for="keywords" class="text-base font-normal">کلمات کلیدی مد نظر</label>
				<input type="text" name="keywords" id="keywords" placeholder="مانند بهترین دندانپزشکی تهران">
			</div>

			<div class="flex flex-col gap-1">
				<label for="address_website" class="text-base font-normal">آدرس سایت کنونی</label>
				<input type="text" name="address_website" id="address_website" placeholder="http://">
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

<section class="w-full bg-gradient-to-b from-[#FF6A6A] to-[#3CC9F5] isolate -mt-24 h-screen max-lg:!px-0 md:p-24 overflow-hidden">
	<div class="relative">
		<!--Sun-->
		<div class="rounded-full bg-white w-20 h-20 mt-8 relative mr-28 max-md:mt-0 max-md:mr-[92%] max-md:-translate-y-7 max-sm:mr-[86%]">
			<div class="absolute w-full h-full top-0 left-0 bg-white rounded-full blur-md animate-pulse">
			</div>
		</div>

		<!--Cloud 1 -->
		<div class="absolute left-0 top-5 animate-moveCloudLong max-md:top-[38rem] max-md:-left-64">
			<img src="<?php echo $cloud_path ?>" alt="cloud1" class="left-0 w-[420px]">
		</div>

		<div class="container mx-auto pb-24 pt-16 max-sm:max-w-none">

			<!--Mountain Picture-->
			<div class="relative -z-10 pointer-events-none">

				<img src="<?php echo $mountain_path ?>" alt="background" class="absolute left-1/2 -translate-x-1/2 opacity-[0.95] translate-y-4 w-[1113px] h-[2410px] -top-[4px] max-md:h-[1800px] max-md:translate-y-56 max-md:-translate-x-32 max-md:min-w-[645px] max-md:-top-[6px]">

			</div>

			<h1 class="text-white 2xl:text-8xl xl:text-[84px] md:text-6xl max-md:text-4xl font-bold text-right mt-10 sm:mt-0 relative -z-20 max-md:text-center">
				<span class="max-mm:hidden" aria-hidden="true"><?php echo $main_title_desktop ?></span>
				<span class="mm:hidden"><?php echo $main_title_mobile ?></span>
			</h1>

			<div class="text-white 2xl:text-4xl xl:text-3xl md:text-2xl max-md:text-2xl max-md:font-medium font-bold mt-10 max-md:mt-4 max-md:text-center max-mm:font-normal"><?php echo $sub_title ?></div>

			<!--Cloud 2 -->
			<div class="absolute left-8 animate-moveCloudShort -z-20 max-md:top-[22rem] max-md:-left-2">

				<img src="<?php echo $cloud_path ?>" alt="cloud2" class="w-60">

			</div>

			<div class="mt-10 max-md:mt-5 flex max-md:flex-col max-md:items-center max-md:justify-center gap-4">

				<div class="flex justify-normal items-center bg-white rounded-lg p-3 border-b-4 border-[#3CC9F5] border-r-4 cursor-pointer w-fit" modal-opener data-modal-name="analyze-form-modal">
					<div class="text-[#00458A] flex items-center gap-2">
						<div class="size-6 stroke-[1.5px]">
							<?php Icon::print('Notebook,-Notepad') ?>
						</div>
						<span>
							<?php echo $btn_text ?>
						</span>
					</div>
				</div>

				<div class="flex justify-normal items-center bg-white rounded-lg p-3 border-b-4 border-[#3CC9F5] border-r-4 cursor-pointer w-fit animate-border-pulse">
					<a href="tell:<?php echo $btn_call_num ?>" class="text-[#00458A] flex items-center gap-2">
						<div class="size-7 stroke-[1.5px]">
							<div id="phone-animation" class="phone-animation"></div>
						</div>
						<span>
							<?php echo $btn_call_text ?>
						</span>
					</a>
				</div>

			</div>
		</div>

		<!--Cloud 3 -->
		<div class="animate-moveCloudShort -z-20 absolute">

			<img src="<?php echo $cloud_path_third ?>" alt="cloud3" class="max-md:max-w-[280px]">
		</div>

	</div>
</section>