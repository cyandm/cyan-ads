<?php
/**
 * Footer for wordpress theme
 * its must include only footer tag
 * footer templates located in /partials/footer/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;


Templates::getPopup( 'video' );
Templates::getPopup( 'backdrop' );
Templates::getPart('whatsapp' );

?>


<div id="wp-footer">
	<?php wp_footer(); ?>
</div>

</body>

</html>