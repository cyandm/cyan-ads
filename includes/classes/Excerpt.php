<?php

namespace Cyan\Theme\Classes;

class Excerpt
{
    public static function init()
    {
        add_filter('excerpt_more', [__CLASS__, 'custom_excerpt_more']);
    }

    public static function custom_excerpt_more($more)
    {
        return '...';
    }
}
