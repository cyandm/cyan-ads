<?php

use Cyan\Theme\Helpers\Templates;

$args_right = [ 
	'dir' => 'rtl',
	'text_field_name' => 'customer_logo_title_right_',
	'img_field_name' => 'customer_logo_img_right_'
];

$args_left = [ 
	'dir' => 'ltr',
	'text_field_name' => 'customer_logo_title_left_',
	'img_field_name' => 'customer_logo_img_left_'
];

?>


<section class="bg-gradient-to-b from-[#0087B1] to-[#003E78] w-full py-11 flex flex-col gap-5 overflow-x-hidden" id="costomers">

	<!-- Title -->
	<div class="text-white text-xl md:text-4xl px-12">
		<?php echo get_field( 'swiper_title' ) ?>
	</div>

	<!-- Swipers -->
	<div class="grid gap-5">


		<?php

		Templates::getPage('seo-ads/customer-logos', $args_right );

		Templates::getPage('seo-ads/customer-logos', $args_left );

		?>
	</div>

</section>