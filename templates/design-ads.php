<?php
/* Template Name: Design Ads */

use Cyan\Theme\Helpers\Templates;
?>


<?php
get_header(null, array(
	'bg-color' => 'bg-[#000827] text-white',
	'menu_text_color' => 'text-white hover:text-gray-200',
));
?>


<div class="homepage-content">

	<?php
	Templates::getPage('design-ads/parts/hero');

	Templates::getPage('design-ads/parts/webdesign-slider');

	Templates::getPage('design-ads/parts/webdesign');

	Templates::getPage('design-ads/parts/social');

	Templates::getPage('design-ads/parts/branding');

	Templates::getPage('design-ads/parts/teaser');

	Templates::getPage('design-ads/parts/motion');

	Templates::getPage('design-ads/parts/customer');

	Templates::getPage('design-ads/parts/services');

	Templates::getPage('design-ads/parts/instagram');

	Templates::getPage('design-ads/parts/customers');

	Templates::getPage('design-ads/parts/plans');

	Templates::getPage('design-ads/parts/contact');
	?>

</div>

<footer class="mt-32">
	<?php Templates::getPage('seo-ads/footer'); ?>
</footer>

<?php
Templates::getPopup('video-design');
Templates::getPopup('backdrop');
?>


<div id="wp-footer">
	<?php wp_footer(); ?>
</div>

</body>

</html>