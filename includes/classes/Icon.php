<?php

namespace Cyan\Theme\Classes;

class Icon {
    public static function print($icon_name) {
        // Add icon rendering logic here
        echo "<span class='icon $icon_name'></span>";
    }
} 