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
 
add_shortcode('title_event','show_title');
 
?>