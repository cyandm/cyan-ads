<?php

use Cyan\Theme\Helpers\Icon;

$FAQs = [];

for ( $i = 1; $i <= 10; $i++ ) {
	$title = get_field( "faq_title_$i" );
	$text = get_field( "faq_txt_$i" );

	// Only add to FAQs if both title and text are not empty
	if ( ! empty( $title ) && ! empty( $text ) ) {
		array_push( $FAQs, [ 
			"title" => $title,
			"text" => $text,
		] );
	}
}


?>

<section class="bg-[#000B30] bg-no-repeat" id="faq"
		 style="background-image: url(<?php echo THEME_IMAGES_URI . '/faq-sea.png' ?>); background-position-y: center;">

	<div class="container grid grid-cols-5 items-center ">

		<div class="col-span-3 max-md:col-span-5 space-y-4 order-2 md:order-1">

			<div class="col-span-5 text-2xl md:text-4xl text-white py-7">
				<?php echo get_field( 'faq_main_title' ) ?>
			</div>

			<?php foreach ( $FAQs as $FAQ ) : ?>

				<!-- FAQ -->
				<div
					 class="group bg-[#002864] rounded-2xl flex flex-row justify-between items-center gap-4 py-4 px-4 cursor-pointer">

					<!-- Icon -->
					<div
						 class="bg-white border-b-2 border-r-2 border-[#3CC9F5] p-3 text-[#00458A] rounded-xl cursor-pointer group-hover:-rotate-90 transition-all duration-300">
						<div class="text-[#00458A] size-5">
							<?php Icon::print( 'Left-1' ) ?>
						</div>
					</div>

					<div class="flex flex-col gap-2">
						<!-- Question -->
						<div class="text-base text-[#EFF8FF]">
							<?php echo $FAQ['title'] ?>
						</div>

						<!-- Answer -->
						<div
							 class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] text-base text-[#B1B6B9] leading-8 transition-all duration-500">

							<div class="overflow-hidden">
								<?php echo $FAQ['text'] ?>
							</div>

						</div>
					</div>

				</div>

			<?php endforeach ?>

		</div>

		<div class="col-span-2 max-md:col-span-5 max-md:space-y-4 order-1 md:order-2">
			<img src="<?php echo THEME_IMAGES_URI . '/faq-1.png' ?>">
		</div>
	</div>

</section>