<?php

/*
 Plugin Name: Event Short code
 Plugin URI: http://www.izwebz.com/plugin
 Description: Display  event's title list Shortcode
 Version: 1.0
 Author URI: http://www.izwebz.com
 */

function show_title($atts, $content = null) {
	global $wpdb;
	$query = "SELECT * FROM wp_posts where post_type = 'event'";
	$listpost = $wpdb -> get_results($query);

	foreach ($listpost as $value) {
		echo "$value->post_title";
	}
	return "";
}

add_shortcode('title_event', 'show_title');

function show_custom_field($atts, $content = null) {
	global $wpdb;
	$query = "SELECT * FROM wp_postsmeta where post_type = 'event'";
	$listpost = $wpdb -> get_results($query);

	foreach ($listpost as $value) {
		echo "$value->post_title";
	}
	return "";
}

add_shortcode('custom_field', 'show_custom_field');


function nearest_event_show_day() {

		$args = array(
		'posts_per_page' => 1,
		'offset' => 0,
		'category' => '',
		'orderby' => '',
		'order' => 'ASC',
		'include' => '',
		'exclude' => '',
		'meta_key' => '_event_start_date',
		'meta_value' => '',
		'post_type' => 'event',
		'post_mime_type' => '',
		'post_parent' => '',
		'post_status' => 'publish',
		'suppress_filters' => true);

	$listpost = get_posts($args);

	foreach ($listpost as $value) {
		//echo "$value->ID";
		$meta = get_post_meta($value -> ID, '_event_start_date', true);
		$dateInfo = date_parse_from_format('Y-n-j H:iP', $meta);

		$monthNum = sprintf("%02s", $dateInfo['month']);
		$timestamp = mktime(0, 0, 0, $monthNum, 10);
		$monthName = date("M", $timestamp);

		echo $dateInfo['day'] . '<span>' . $monthName . '</span>';
	}
	return "";
}

add_shortcode('_nearest_event_show_day', 'nearest_event_show_day');

function nearest_event_show_title($atts, $content = null) {
	$args = array(
		'posts_per_page' => 1,
		'offset' => 0,
		'category' => '',
		'orderby' => '',
		'order' => 'ASC',
		'include' => '',
		'exclude' => '',
		'meta_key' => '_event_start_date',
		'meta_value' => '',
		'post_type' => 'event',
		'post_mime_type' => '',
		'post_parent' => '',
		'post_status' => 'publish',
		'suppress_filters' => true);
		
		$listpost = get_posts($args);
		foreach ($listpost as $value) {
			echo $value->post_title;
		}

	return "";
}

add_shortcode('_nearest_event_show_title', 'nearest_event_show_title');

function nearest_event_show_content() {

	$args = array(
		'posts_per_page' => 1,
		'offset' => 0,
		'category' => '',
		'orderby' => '',
		'order' => 'ASC',
		'include' => '',
		'exclude' => '',
		'meta_key' => '_event_start_date',
		'meta_value' => '',
		'post_type' => 'event',
		'post_mime_type' => '',
		'post_parent' => '',
		'post_status' => 'publish',
		'suppress_filters' => true);
		
		$listpost = get_posts($args);
		foreach ($listpost as $value) {
			echo $value->post_content;
		}
	return "";
}

add_shortcode('_nearest_event_show_content', 'nearest_event_show_content');

function nearest_event_show_content_index($arr_param, $content) {

	$args = array(
		'posts_per_page' => $arr_param['event_index'],
		'offset' => 0,
		'category' => '',
		'orderby' => '',
		'order' => 'ASC',
		'include' => '',
		'exclude' => '',
		'meta_key' => '_event_start_date',
		'meta_value' => '',
		'post_type' => 'event',
		'post_mime_type' => '',
		'post_parent' => '',
		'post_status' => 'publish',
		'suppress_filters' => true);
		
		$listpost = get_posts($args);
		$value = $listpost[$arr_param['event_index'] -1];
		echo $value->post_content;
		
		
		// foreach ($listpost as $value) {
			// echo $value->post_content;
		// }
	return "";
}

add_shortcode('_nearest_event_show_content_index', 'nearest_event_show_content_index');

function nearest_event_show_title_index($arr_param, $content) {

	$args = array(
		'posts_per_page' => $arr_param['event_index'],
		'offset' => 0,
		'category' => '',
		'orderby' => '',
		'order' => 'ASC',
		'include' => '',
		'exclude' => '',
		'meta_key' => '_event_start_date',
		'meta_value' => '',
		'post_type' => 'event',
		'post_mime_type' => '',
		'post_parent' => '',
		'post_status' => 'publish',
		'suppress_filters' => true);
		
		$listpost = get_posts($args);
		$value = $listpost[$arr_param['event_index'] -1];
		echo $value->post_title;
		
		
		// foreach ($listpost as $value) {
			// echo $value->post_content;
		// }
	return "";
}

add_shortcode('_nearest_event_show_title_index', 'nearest_event_show_title_index');

function nearest_event_show_link_index($arr_param, $content) {

	$args = array(
		'posts_per_page' => $arr_param['event_index'],
		'offset' => 0,
		'category' => '',
		'orderby' => '',
		'order' => 'ASC',
		'include' => '',
		'exclude' => '',
		'meta_key' => '_event_start_date',
		'meta_value' => '',
		'post_type' => 'event',
		'post_mime_type' => '',
		'post_parent' => '',
		'post_status' => 'publish',
		'suppress_filters' => true);
		
		$listpost = get_posts($args);
		$value = $listpost[$arr_param['event_index'] -1];
		echo $value->guid;
		
		
		// foreach ($listpost as $value) {
			// echo $value->post_content;
		// }
	return "";
}

add_shortcode('_nearest_event_show_link_index', 'nearest_event_show_link_index');
