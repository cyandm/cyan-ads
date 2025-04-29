<?php

use Cyan\Theme\Helpers\Icon;

$views = [];

for ($i = 1; $i <= 24; $i++) {

	array_push($views, [
		'video_cover' => get_field("view_video_cover_$i"),
		'video_file' => get_field("view_video_file_$i"),
		'name' => get_field("name_$i"),
		'position' => get_field("position_$i"),
	]);
}

$title = get_field('views_title');

function isViewActive($view)
{
	return ! empty($view['video_cover']) || ! empty($view['video_file']) || ! empty($view['name']) || ! empty($view['position']);
}

?>

<section class="bg-gradient-to-b from-[#00386B] to-[#001C47] md:p-11 max-md:py-8" id="views">

	<div class="container space-y-4">

		<div class="flex flex-row justify-between">
			<!-- Title -->
			<div class="text-white text-xl md:text-4xl">
				<?php echo $title ?>
			</div>


			<!-- Navigation -->
			<div class="flex gap-2">

				<button id="testimonialsPrev"
					class="bg-white rounded-lg p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
					<div class="text-[#00458A] size-4">
						<?php Icon::print('Arrow,-Right') ?>
					</div>
				</button>

				<button id="testimonialsNext"
					class="bg-white rounded-lg p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
					<div class="text-[#00458A] size-4">
						<?php Icon::print('Left-1') ?>
					</div>
				</button>


			</div>


		</div>

		<swiper-container class="grid custom-swiper"
			pagination-clickable="true"
			pagination-el="#pagination"
			slides-per-view="auto"
			grid-rows="2"
			space-between="16"
			navigation-next-el="#testimonialsNext"
			navigation-prev-el="#testimonialsPrev"
			style="height: 400px;">

			<?php foreach ($views as $view) : ?>

				<?php if (isViewActive($view)) : ?>

					<swiper-slide class="w-[330px] md:w-[400px]"
						data-video-url="<?php echo wp_get_attachment_url($view['video_file']) ?>"
						modal-opener
						data-modal-name="video-popup">
						<div
							class="border border-y-white/50 border-x-[#99999980] rounded-xl bg-white/20 flex flex-row justify-end items-center gap-[18px] h-[12rem]">

							<!-- Image -->
							<div>
								<?php echo wp_get_attachment_image($view['video_cover'], 'full', false, ['class' => 'object-cover object-center	w-64 h-48 rounded-r-xl']) ?>
							</div>

							<!-- Content -->
							<div class="space-y-4 px-3 w-full">
								<div class="space-y-3">
									<!-- Name -->
									<div class="text-white text-base">
										<?php echo $view['name'] ?>
									</div>

									<!-- Position -->
									<div class="text-[#27BFEF] text-sm">
										<?php echo $view['position'] ?>
									</div>
								</div>

								<!-- Button -->
								<div>
									<button
										class="PopUpOpener rounded-full flex gap-1 transition-all duration-300 cursor-pointer bg-[#E8E9EA] hover:bg-[#D0D1D2]">
										<div class="size-10">
											<?php Icon::print('Play') ?>
										</div>
									</button>
								</div>

							</div>


						</div>
					</swiper-slide>
				<?php endif; ?>

			<?php endforeach; ?>

		</swiper-container>

	</div>

</section>