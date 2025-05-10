<?php

/**
 * Header for wordpress theme
 * its must include only head and body tags
 * header templates located in /partials/header/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$contact_btn_text_desktop = get_field('contact_btn_text_desktop');
$contact_btn_text_mobile = get_field('contact_btn_text_mobile');
$contact_btn_phone = get_field('contact_btn_phone');
$image_logo = get_field('image_logo');

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">

<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>

<body <?php body_class('bg-zinc-900 text-white overflow-x-hidden'); ?>>
	<?php wp_body_open(); ?>

	<header class="md:p-8 px-8 pt-8 max-md:pt-4 max-md:px-4">

		<div class="bg-[#19191F] w-0 fixed inset-0 z-50 opacity-0 pointer-events-none data-[active='true']:w-3/4 data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500" modal data-modal-name="design-mobile-menu-modal" data-active="false">

			<div class="p-6 py-9 flex flex-col">

				<div class="w-full flex justify-end">

					<div class="size-11 text-yellow-300 border border-yellow-300 rounded-full" modal-closer data-modal-name="design-mobile-menu-modal">

						<?php Icon::print('Delete,-Disabled') ?>

					</div>

				</div>

				<div class="mt-12">

					<ul class="flex flex-col gap-5 whitespace-nowrap">

						<?php for ($i = 1; $i <= 8; $i++): ?>

							<?php $items = get_field("menu_header_$i"); ?>

							<?php if ($items): ?>

								<li>

									<a href="<?php echo $items['url'] ?>" class="text-lg font-normal text-white duration-300" modal-closer data-modal-name="mobile-menu-modal"><?php echo $items['title'] ?></a>

								</li>

							<?php endif ?>

						<?php endfor ?>

					</ul>

				</div>

			</div>

		</div>

		<div class="container bg-white bg-opacity-25 rounded-[1rem] flex flex-row items-center justify-between px-4 py-2 mx-auto">

			<div class="flex items-start relative">

				<div class="md:hidden size-10 scale-x-[-1] bg-[#090C17] rounded-lg p-2" modal-opener data-modal-name="design-mobile-menu-modal">

					<?php echo Icon::print('menu-burger-square-6'); ?>

				</div>

			</div>

			<!-- لوگو و فهرست منو -->
			<div class="flex items-center gap-3 flex-1 max-md:justify-center">
				<!-- لوگو -->
				<?php if ($image_logo): ?>
					<?php echo wp_get_attachment_image($image_logo, 'full', false); ?>
				<?php endif ?>

				<!-- فهرست منو -->
				<ul class="hidden md:flex gap-6">
					<?php for ($i = 1; $i <= 8; $i++) : ?>

						<?php $menu_header = get_field("menu_header_$i"); ?>

						<?php if ($menu_header): ?>
							<li>
								<a href="<?php echo $menu_header['url']; ?>" class="text-base font-normal text-white">

									<?php echo $menu_header['title']; ?>

								</a>
							</li>
						<?php endif ?>
					<?php endfor ?>
				</ul>

			</div>

			<div class=" flex items-center gap-4">

				<?php if ($contact_btn_phone): ?>

					<a href="tel:<?php echo $contact_btn_phone; ?>" class="rounded-[0.75rem] bg-yellow-300 pr-3 pl-4 py-3 flex items-center justify-center gap-1 max-md:pr-2 max-md:pl-2 max-md:py-2">

						<div class="size-5 text-[#19191F] max-md:size-6">
							<?php echo Icon::print('Phone,-Call-11'); ?>
						</div>

						<div class="hidden md:inline text-[#19191F]"><?php echo ($contact_btn_text_desktop); ?></div>

						<?php if ($contact_btn_text_mobile): ?>
							<div class="inline md:hidden text-[#19191F]"><?php echo ($contact_btn_text_mobile); ?></div>
						<?php endif ?>

					</a>

				<?php endif ?>

			</div>
		</div>
	</header>