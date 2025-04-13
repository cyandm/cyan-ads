<?php
/**
 * Header for wordpress theme
 * its must include only head and body tags
 * header templates located in /partials/header/
 * @package CyanTheme
 */


?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport"
			  content="width=device-width, initial-scale=1.0">
		<?php wp_head(); ?>
	</head>

	<body <?php body_class( 'overflow-x-hidden' ); ?>>
		<?php wp_body_open(); ?>

		