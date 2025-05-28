<?php

/**
 * Footer for wordpress theme
 * its must include only footer tag
 * footer templates located in /partials/footer/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;


Templates::getPopup('video');
Templates::getPopup('backdrop');

// پیدا کردن صفحه اصلی که از قالب seo-ads استفاده می‌کند
$main_page = get_posts([
	'post_type' => 'page',
	'fields' => 'ids',
	'nopaging' => true,
	'meta_key' => '_wp_page_template',
	'meta_value' => 'templates/seo-ads.php'
]);

$address_text = get_field('seo_address', $main_page[0]) ?? '';


?>
<footer class="w-full bg-gradient-to-r from-[#032956]  via-[#032956] to-[#011844] pb-16 pt-12 text-white overflow-hidden relative">
	<div>
		<div class="block sm:flex justify-between items-center relative">

			<div class="pr-10 max-md:p-4 max-md:w-full">
				<h2 class="text-2xl sm:text-4xl text-white text-right font-bold mb-10">اعتماد شما اعتبار ماست
				</h2>
				<div class="flex w-full max-mb:flex-col flex-wrap justify-between max-md:justify-normal items-start gap-36 max-lg:gap-12 max-md:gap-8">

					<div class="max-md:w-[35%] max-mb:w-full max-md:order-1">

						<ul class="flex flex-col gap-4">

							<li class="text-[#FFA5A5] text-xl font-medium">
								<p>سایت</p>
							</li>

							<li class="text-base font-normal text-white duration-300">
								<p class="cursor-pointer" modal-opener data-modal-name="analyze-form-modal">درخواست مشاوره</p>
							</li>

							<?php for ($i = 1; $i <= 8; $i++): ?>

								<?php $footer_menu_items = get_field("footer_menu_$i", $main_page[0]); ?>

								<?php if ($footer_menu_items): ?>

									<li>

										<a href=" <?php echo $footer_menu_items['url'] ?>" class="text-base font-normal text-white duration-300"><?php echo $footer_menu_items['title'] ?></a>

									</li>

								<?php endif ?>

							<?php endfor ?>

						</ul>

					</div>

					<div class="max-md:w-[35%] max-mb:w-full max-md:order-2">
						<div class="flex justify-between items-start">

							<ul class="text-right flex flex-col gap-4">
								<li class="text-[#FFA5A5] text-xl font-medium"> شماره تماس ها</li>
								<?php for ($i = 1; $i <= 4; $i++) : ?>
									<li class="">
										<a href="tel:<?php echo get_field("seo_phone_$i", $main_page[0]) ?>">
											<?php echo get_field("seo_phone_$i", $main_page[0]) ?>
										</a>
									</li>
								<?php endfor; ?>

								<li class="text-[#FFA5A5] text-xl font-medium max-md:hidden">شبکه های اجتماعی</li>
								<div class="flex items-center gap-2 max-md:hidden">
									<?php for ($i = 1; $i <= 3; $i++) : ?>
										<a href="<?php echo get_field("seo_social_link_$i", $main_page[0]) ?>"
											class="block">
											<?php echo wp_get_attachment_image(get_field("seo_social_$i", $main_page[0]), 'full') ?>
										</a>
									<?php endfor; ?>
								</div>

							</ul>

						</div>
					</div>


					<div class="max-md:w-[35%] md:hidden max-mb:w-full max-md:order-5">
						<div class="flex flex-col justify-between items-start">

							<p class="text-[#FFA5A5] text-xl font-medium">شبکه های اجتماعی</p>
							<div class="flex items-center gap-2 mt-5">
								<?php for ($i = 1; $i <= 3; $i++) : ?>
									<a href="<?php echo get_field("seo_social_link_$i", $main_page[0]) ?>"
										class="block">
										<?php echo wp_get_attachment_image(get_field("seo_social_$i", $main_page[0]), 'full') ?>
									</a>
								<?php endfor; ?>
							</div>

						</div>
					</div>


					<div class="max-md:w-[35%] max-mb:w-full max-md:order-3">
						<div class="text-right flex flex-col gap-4">
							<div class="text-[#FFA5A5] text-xl font-medium">آدرس سایان</div>
							<div class="max-w-[200px] leading-9">
								<?php echo $address_text ?>
							</div>

							<div class="text-[#FFA5A5] text-xl font-medium mt-5 max-md:hidden">مشاهده آدرس روی نقشه </div>

							<div class="flex items-center gap-2 max-md:hidden">
								<?php for ($i = 1; $i <= 4; $i++) : ?>
									<a href="<?php echo get_field("seo_address_map_link_$i", $main_page[0]) ?>"
										class="block">
										<?php echo wp_get_attachment_image(get_field("seo_address_map_$i", $main_page[0]), 'full') ?>
									</a>
								<?php endfor; ?>
							</div>
						</div>
					</div>

					<div class="max-md:w-[35%] max-mb:w-full md:hidden max-md:order-4">
						<div class="text-right mb-12 max-md:mb-0 flex flex-col gap-4">

							<div class="text-[#FFA5A5] text-xl font-medium md:hidden">مشاهده آدرس روی نقشه </div>

							<div class="flex items-center gap-2 md:hidden">
								<?php for ($i = 1; $i <= 4; $i++) : ?>
									<a href="<?php echo get_field("seo_address_map_link_$i", $main_page[0]) ?>"
										class="block">
										<?php echo wp_get_attachment_image(get_field("seo_address_map_$i", $main_page[0]), 'full') ?>
									</a>
								<?php endfor; ?>
							</div>

						</div>
					</div>



				</div>
			</div>

			<div class="mt-8 absolute -bottom-[70%] -left-[8%] max-xl:-bottom-[70%] max-xl:-left-[22%] max-lg:-left-[254px] max-md:-left-[165px] max-md:bottom-[32%] -scale-y-100">
				<div class="w-full">
					<?php echo wp_get_attachment_image(get_field("seo_footer_bg", $main_page[0]), 'full', false, ['class' => 'animate-[spin_8s_linear_infinite] duration-500 max-md:w-[318px] max-lg:w-[475px] max-2xlg:w-[460px]']) ?>
				</div>
			</div>
		</div>
	</div>

	<?php Templates::getPart('whatsapp'); ?>

</footer>

<div id="wp-footer">
	<?php wp_footer(); ?>
</div>

</body>

</html>