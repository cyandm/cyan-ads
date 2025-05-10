<?php

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Templates;

class Meta
{
    public static function init()
    {
        add_action('add_meta_boxes', [__CLASS__, 'add_form_meta_box']);
        add_filter('manage_form_posts_columns', [__CLASS__, 'form_table_head']);
        add_filter('manage_form_posts_custom_column', [__CLASS__, 'form_table_column'], 10, 2);
    }

    public static function add_form_meta_box()
    {
        global $post;
        if ($post->post_type !== "form")
            return;


        add_meta_box('form_information', 'اطلاعات فرم', function () {
            $meta_group = [

                [
                    'name' => '_name',
                    'label' => 'نام:',
                ],

                [
                    'name' => '_last_name',
                    'label' => 'نام خانوادگی:',
                ],

                [
                    'name' => '_phone',
                    'label' => 'تلفن همراه:',
                ],

                [
                    'name' => '_email',
                    'label' => 'ایمیل:',
                ],

                [
                    'name' => '_plan',
                    'label' => 'تعرفه:',
                ],

                [
                    'name' => '_budget',
                    'label' => 'بودجه:',
                ],

                [
                    'name' => '_keywords',
                    'label' => 'کلمات کلیدی:',
                ],

                [
                    'name' => '_address_website',
                    'label' => 'آدرس سایت:',
                ],
            ];

            Templates::getPart('metabox', ['meta_group' => $meta_group]);
        }, null, 'advanced', 'high');
    }

    public static function form_table_head($columns)
    {
        $columns['name'] = __('نام', 'cyn-dm');
        $columns['last_name'] = __('نام خانوادگی', 'cyn-dm');
        $columns['phone'] = __('تلفن همراه', 'cyn-dm');
        $columns['budget'] = __('بودجه', 'cyn-dm');
        $columns['keywords'] = __('کلمات کلیدی', 'cyn-dm');
        $columns['address_website'] = __('آدرس سایت', 'cyn-dm');
        return $columns;
    }

    public static function form_table_column($column_name, $post_id)
    {
        if ($column_name == 'name') {

            echo get_post_meta($post_id, '_name', true);
        }

        if ($column_name == 'last_name') {
            echo get_post_meta($post_id, '_last_name', true);
        }

        if ($column_name == 'phone') {
            echo get_post_meta($post_id, '_phone', true);
        }

        if ($column_name == 'budget') {
            echo get_post_meta($post_id, '_budget', true);
        }

        if ($column_name == 'keywords') {
            echo get_post_meta($post_id, '_keywords', true);
        }

        if ($column_name == 'address_website') {
            echo get_post_meta($post_id, '_address_website', true);
        }
    }
}
