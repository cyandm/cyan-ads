<?php

use Cyan\Theme\Helpers\Templates;

$image_logo = get_field('image_logo_footer');
?>


<footer class="px-4">
	<section class="flex flex-col-reverse md:flex-row container gap-5 bg-white/25 rounded-tl-[16px] rounded-tr-[16px] mt-32 md:justify-between px-6 py-4 mx-auto">

		<ul class="flex gap-10 items-center max-md:justify-center">

			<?php for ($i = 1; $i <= 8; $i++) : ?>

				<?php $footer_menu = get_field("footer_menu_$i"); ?>

				<?php if ($footer_menu): ?>

					<li>

						<a href="<?php echo $footer_menu['url']; ?>" class="text-sm font-normal text-white">

							<?php echo $footer_menu['title']; ?>

						</a>

					</li>

				<?php endif ?>

			<?php endfor ?>

		</ul>

		<div class="flex justify-center"><?php echo wp_get_attachment_image($image_logo, 'full', 'false'); ?></div>

	</section>

	<?php Templates::getPart('whatsapp'); ?>

</footer>