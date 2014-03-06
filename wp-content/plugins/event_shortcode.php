<?php
 
/*
Plugin Name: Event Short code
Plugin URI: http://www.izwebz.com/plugin
Description: Display  event's title list Shortcode
Version: 1.0
Author URI: http://www.izwebz.com
*/
 
function show_title($atts, $content=null) {
	global $wpdb;
	$query ="SELECT * FROM wp_posts where post_type = 'event'";
	$listpost = $wpdb->get_results($query);
	
	foreach ($listpost as $value)
	{
		echo "$value->post_title";
	}
    return "";
}

add_shortcode('title_event','show_title');


function show_custom_field($atts, $content=null) {
	global $wpdb;
	$query ="SELECT * FROM wp_postsmeta where post_type = 'event'";
	$listpost = $wpdb->get_results($query);
	
	
	
	
	
	foreach ($listpost as $value)
	{
		echo "$value->post_title";
	}
    return "";
}
 
add_shortcode('custom_field','show_custom_field');


/*function show_lastest_new_day($atts, $content=null) {
	global $wpdb;
	$query ="SELECT * FROM wp_posts where post_type = 'event'";
	$listpost = $wpdb->get_results($query);
	
	
	
	
	
	foreach ($listpost as $value)
	{
		echo "$value->post_title";
	}
    return "";
}
 
add_shortcode('lastest_new_day','show_lastest_new_day');
 
?>*/


function nearest_event_show_day ($atts, $content=null) {
	global $wpdb;
	$query ="Select pm.meta_value From wp_posts p, wp_postmeta pm Where 
	p.ID = pm.post_id  AND pm.meta_key = '_event_start_date' 
	ORDER BY pm.meta_value ASC
	LIMIT 1
	";

	$listpost = $wpdb->get_results($query);
	
	foreach ($listpost as $value)
	{
		echo "$value->meta_value";
	}
    return "";
}
add_shortcode('_nearest_event_show_day','nearest_event_show_day');


function nearest_event_show_title ($atts, $content=null) {
	global $wpdb;
	$query ="Select pm.meta_value From wp_posts p, wp_postmeta pm Where 
	p.ID = pm.post_id  AND pm.meta_key = '_event_start_date' 
	ORDER BY pm.meta_value ASC
	LIMIT 1
	";

	$listpost = $wpdb->get_results($query);
	
	foreach ($listpost as $value)
	{
		echo "$value->meta_value";
	}
    return "";
}
add_shortcode('_nearest_event_show_day','nearest_event_show_day');

