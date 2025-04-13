<?php

$seo_Comments = [];

for ($i = 1; $i <= 4; $i++) {

	array_push($seo_Comments, [

		'seo_image' => get_field("seo_image_$i"),

		'seo_title' => get_field("seo_name_$i"),

		'seo_text' => get_field("seo_comment_$i"),

	]);
}
?>


<section class="bg-[#000B30] py-8 " dir="ltr" id="seo-comments">

	<div class="container">

		<?php foreach ($seo_Comments as $index => $seo_Comment) : ?>

			<?php if (!empty($seo_Comment['seo_text']) && !empty($seo_Comment['seo_title']) && !empty($seo_Comment['seo_image'])): ?>

				<div class="<?php echo $index == 0 ? 'mt-16' : 'md:-mt-16' ?>">
					<!-- Desktop -->
					<div
						class="hidden md:flex flex-row gap-4 justify-end md:px-1 <?php echo $index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'; ?>">

						<!-- Contents -->
						<div
							class="flex flex-col <?php echo $index % 2 == 0 ? 'justify-start items-end' : 'justify-start items-start'; ?> gap-3">
							<!-- Text -->
							<div
								class="bg-[#002864] max-w-[466px] rounded-xl text-right <?php echo $index % 2 == 0 ? 'rounded-br-none' : 'rounded-bl-none'; ?> px-5 py-4 space-y-2 relative after:content-[url(<?php echo THEME_IMAGES_URI . '/triangle.svg' ?>)] after:absolute">

								<!-- Comment -->
								<div class="text-white text-base" dir="rtl">
									<?php echo $seo_Comment['seo_text'] ?>
								</div>

								<!-- Name -->
								<div class="text-white text-lg">
									<?php echo $seo_Comment['seo_title'] ?>
								</div>
							</div>

							<!-- Circles -->
							<div class="relative">
								<div class="w-12 h-12 rounded-full  bg-[#2D90EB]"></div>
								<div class="w-4 h-4  rounded-full bg-[#00069C] absolute top-14"></div>
								<div class="w-7 h-7  rounded-full bg-[#00519C] absolute top-14 left-9"></div>
							</div>
						</div>

						<!-- Image -->
						<div>
							<?php echo wp_get_attachment_image($seo_Comment['seo_image'], 'full', false, []) ?>
						</div>

					</div>

					<!-- Mobile -->
					<div class="flex flex-col items-center md:hidden">

						<!-- Image -->
						<div>
							<?php echo wp_get_attachment_image($seo_Comment['seo_image'], 'full', false, []) ?>
						</div>


						<div class="p-5">
							<div class="bg-[#002864] rounded-md p-5 -mt-14 space-y-2 text-right">

								<div class="text-white text-base">
									<?php echo $seo_Comment['seo_text'] ?>
								</div>

								<div class="text-white text-lg">
									<?php echo $seo_Comment['seo_title'] ?>
								</div>
							</div>
						</div>
					</div>
				</div>

			<?php endif ?>

		<?php endforeach ?>

	</div>

</section>