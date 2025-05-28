<?php

/**
 * Header for wordpress theme
 * its must include only head and body tags
 * header templates located in /partials/header/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$header_args = wp_parse_args($args, [
	'menu_text_color' => 'text-zinc-500 hover:text-slate-800',
	'hide' => '',
	'bg-color' => '',
]);

$counseling_phone = get_option('cyn_header_phone_number');
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">

<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>

<body <?php body_class('overflow-x-hidden ' . $header_args['bg-color']); ?>>
	<?php wp_body_open(); ?>

	<div class="bg-white w-0 fixed inset-0 z-50 opacity-0 pointer-events-none data-[active='true']:w-3/4 data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500" modal data-modal-name="mobile-menu-modal" data-active="false">

		<div class="p-6 py-9 flex flex-col">

			<div class="w-full flex justify-end">

				<div class="size-11 text-red-600 bg-white border-r-2 border-b-2 border-red-600 rounded-full" modal-closer data-modal-name="mobile-menu-modal">

					<?php Icon::print('Delete,-Disabled') ?>

				</div>

			</div>

			<div class="mt-12">

				<ul class="flex flex-col gap-5 whitespace-nowrap">

					<li class="text-lg font-normal text-slate-800 duration-300">
						<p class="cursor-pointer" modal-opener data-modal-name="analyze-form-modal">مشاوره سئو</p>
					</li>

					<?php for ($i = 1; $i <= 8; $i++): ?>

						<?php $items = get_option('cyn_header_menu_link_' . $i); ?>
						<?php $header_title = get_option('cyn_header_menu_title_' . $i); ?>
						<?php $header_link = get_option('cyn_header_menu_link_' . $i); ?>

						<?php if ($items): ?>

							<li>

								<a href="<?php echo $header_link ?>" class="text-lg font-normal text-slate-800 duration-300" modal-closer data-modal-name="mobile-menu-modal"><?php echo $header_title ?></a>

							</li>

						<?php endif ?>

					<?php endfor ?>

				</ul>

			</div>

		</div>

	</div>

	<header class="<?php echo $header_args['hide']; ?> w-full bg-transparent flex justify-between items-center content-center mt-5 md:mt-7 relative z-10 max-md:bg-white/40 max-md:backdrop-blur-xl">

		<div class="py-4 pr-4 md:hidden">

			<div class="size-11 text-cyan-700 p-2 bg-white border-r-2 border-b-2 border-sky-400 rounded-full" modal-opener data-modal-name="mobile-menu-modal">

				<?php Icon::print('menu-burger') ?>

			</div>

		</div>

		<div class="md:py-4 md:pr-12 md:pl-8 md:bg-white/40 md:backdrop-blur-xl flex gap-4 justify-center content-center items-center rounded-l-full">

			<?php echo the_custom_logo(); ?>

			<ul class="flex gap-4 max-md:hidden">

				<li class="text-base font-normal duration-300 <?php echo $header_args['menu_text_color']; ?>">
					<p class="cursor-pointer" modal-opener data-modal-name="analyze-form-modal">مشاوره سئو</p>
				</li>

				<?php for ($i = 1; $i <= 8; $i++): ?>

					<?php $items = get_option('cyn_header_menu_link_' . $i); ?>
					<?php $header_title = get_option('cyn_header_menu_title_' . $i); ?>
					<?php $header_link = get_option('cyn_header_menu_link_' . $i); ?>

					<?php if ($items): ?>

						<li>

							<a href="<?php echo $header_link ?>" class="text-base font-normal  duration-300 <?php echo $header_args['menu_text_color']; ?>"><?php echo $header_title ?></a>

						</li>

					<?php endif ?>

				<?php endfor ?>

			</ul>

		</div>

		<?php if ($counseling_phone): ?>

			<div class="py-[0.688rem] md:pr-14 pl-4 md:pl-12 md:bg-white/40 md:backdrop-blur-xl flex justify-center content-center items-center rounded-r-full">

				<a href="tel:<?php echo $counseling_phone ?>" class="size-11 text-cyan-700 p-2 bg-white border-r-2 border-b-2 border-sky-400 rounded-full">
					<?php Icon::print('Phone,-Call-11') ?>
				</a>

			</div>

		<?php endif ?>

	</header>