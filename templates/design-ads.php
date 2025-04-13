<?php
/* Template Name: Design Ads */

use Cyan\Theme\Helpers\Templates;
?>


<?php Templates::getPage('design-ads/header'); ?>


<div class="homepage-content">

	<?php
	Templates::getPage('design-ads/parts/hero');

	Templates::getPage('design-ads/parts/social');

	Templates::getPage('design-ads/parts/branding');

	Templates::getPage('design-ads/parts/teaser');

	Templates::getPage('design-ads/parts/motion');

	Templates::getPage('design-ads/parts/services');

	Templates::getPage('design-ads/parts/webdesign');

	Templates::getPage('design-ads/parts/customers');
	?>

</div>

<footer>
	<?php Templates::getPage('design-ads/footer'); ?>
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