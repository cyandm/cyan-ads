<?php

use Cyan\Theme\Helpers\Icon;



$videos = [];

for ($i = 1; $i <= 10; $i++) {

	array_push($videos, [
		'cover' => get_field("video_cover_$i"),
		'file' => get_field("video_file_$i"),
		'title' => get_field("title_$i"),
		'sub_title' => get_field("sub_title_$i"),
	]);
}

function isVideoActive($video)
{
	return ! empty($video['cover']) || ! empty($video['file']) || ! empty($video['title']) || ! empty($video['sub_title']);
}

?>

<section class="bg-[#000B30] md:p-11 max-md:py-8" id="about-seo">

	<div class="container space-y-4">



		<div class="flex flex-row justify-between">
			<!-- Title -->
			<div class="text-white text-xl md:text-4xl">
				<?php echo get_field('videos_title') ?>
			</div>

			<!-- Navigation -->
			<div class="flex gap-2">

				<button id="videosPrev"
					class="bg-white rounded-lg p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
					<div class="text-[#00458A] size-4">
						<?php icon::print('Arrow,-Right') ?>
					</div>
				</button>

				<button id="videosNext"
					class="bg-white rounded-lg p-3 border-b-2 border-[#3CC9F5] border-r-2 cursor-pointer">
					<div class="text-[#00458A] size-4">
						<?php icon::print('Left-1') ?>
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
			navigation-next-el="#videosNext"
			navigation-prev-el="#videosPrev"
			style="height: 400px;">

			<?php foreach ($videos as $video) : ?>

				<?php if (isVideoActive($video)) : ?>
					<swiper-slide class="w-[330px] md:w-[400px]"
						data-video-url="<?php echo wp_get_attachment_url($video['file']) ?>"
						modal-opener
						data-modal-name="video-popup">
						<div
							class="border border-y-white/50 border-x-[#99999980] rounded-xl bg-white/20 flex flex-row justify-end items-center gap-[18px] h-[12rem]">

							<!-- Image -->
							<div>
								<?php echo wp_get_attachment_image($video['cover'], 'full', false, ['class' => 'object-cover object-center w-64 h-48 rounded-r-xl ']) ?>
							</div>

							<!-- Content -->
							<div class="space-y-4 px-3 w-full">
								<div class="space-y-3">
									<!-- Name -->
									<div class="text-white text-base">
										<?php echo $video['title'] ?>
									</div>

									<!-- Position -->
									<div class="text-[#27BFEF] text-sm">
										<?php echo $video['sub_title'] ?>
									</div>
								</div>

								<!-- Button -->
								<div class="bg-white/30 rounded-xl flex justify-between items-center gap-3 px-2 py-[6px]">
									<!-- Time -->
									<div class="text-white text-base">
										2:23
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


						</div>
					</swiper-slide>
				<?php endif; ?>
			<?php endforeach; ?>

		</swiper-container>

	</div>

</section>