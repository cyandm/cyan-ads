<?php

use Cyan\Theme\Helpers\Icon;

?>

<section modal
	data-modal-name="video-popup"
	data-active="false"
	class="flex flex-col gap-6 bg-[#002864] rounded-2xl p-6 border-b-4 border-[#3CC9F5] border-r-4 fixed inset-0 z-50 m-20 max-sm:m-4 max-mm:h-fit transition-all duration-300
		 data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto
		  data-[active='false']:opacity-0 data-[active='false']:pointer-events-none">
	<!-- Buttons -->
	<div class="flex flex-row justify-between gap-4">

		<!-- Closer -->
		<div modal-closer
			data-modal-name="video-popup">
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
	</div>



	<video class="video-plyr"
		controls
		playsinline>
		<source src="#" />
	</video>



</section>