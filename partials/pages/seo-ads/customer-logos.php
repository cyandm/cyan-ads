<?php


$dir = $args['dir'] ?? 'rtl';
$text_field_name = $args['text_field_name'] ?? null;
$img_field_name = $args['img_field_name'] ?? null;


if ( empty( $text_field_name ) || empty( $img_field_name ) ) {
	throw new Exception( 'Text and image field names are required' );
}


$customers = [];

for ( $i = 1; $i <= 10; $i++ ) {
	array_push( $customers, [ 
		'text' => get_field( $text_field_name . $i ),
		'img_id' => get_field( $img_field_name . $i )
	] );
}

?>

<!-- Right -->
<swiper-container class="w-full"
				  dir="<?php echo $dir ?>"
				  space-between="30"
				  slides-per-view="auto"
				  autoplay="true"
				  autoplay-delay="1000"
				  autoplay-disable-on-interaction="false"
				  loop="true">

	<?php foreach ( $customers as $customer ) :
		if ( empty( $customer['text'] ) || empty( $customer['img_id'] ) ) {
			continue;
		}

		?>

		<swiper-slide class="max-w-[180px]">

			<div class="bg-white/30 flex flex-col justify-center items-center gap-3 p-5 rounded-3xl h-full">

				<div>
					<?php echo wp_get_attachment_image( $customer['img_id'], 'full', false, [ 'class' => 'object-cover w-[64px] h-[64px]' ] ) ?>
				</div>

				<div class="text-base text-white text-center">
					<?php echo $customer['text'] ?>
				</div>

			</div>

		</swiper-slide>

	<?php endforeach; ?>

</swiper-container>