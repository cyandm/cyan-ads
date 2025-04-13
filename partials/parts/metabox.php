<?php
global $post;
$meta_group = $args['meta_group'] ?? [];
?>

<table id="form-metabox">
    <?php foreach ($meta_group as $index => $meta_item) :
        $value = get_post_meta($post->ID, $meta_item['name'], true);
        $is_link = isset($meta_item['is_link']) ? $meta_item['is_link'] : false;
        if ($value) : ?>

            <tr>
                <td colspan="6"><?= $meta_item['label'] ?></td>

                <?php if ($is_link): ?>
                    <td colspan="6">
                        <a href="<?= get_post_meta($post->ID, $meta_item['name'], true) ?>">
                            <?= get_post_meta($post->ID, $meta_item['name'], true) ?>
                        </a>
                    </td>
                <?php else: ?>
                    <td colspan="6">
                        <?= get_post_meta($post->ID, $meta_item['name'], true) ?>
                    </td>
                <?php endif; ?>
            </tr>

    <?php endif;
    endforeach; ?>
</table>