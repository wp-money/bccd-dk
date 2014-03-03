<?php
 
/*
Plugin Name: Event List Shortcode
Plugin URI: http://www.izwebz.com/plugin
Description: Display  event's title list Shortcode
Version: 1.0
Author URI: http://www.izwebz.com
*/
 
function show_title_event_list($atts, $content=null) {
	global $wpdb;
	$query ="SELECT * FROM wp_posts where post_type = 'event'";
	$listpost = $wpdb->get_results($query);
	
	foreach ($listpost as $value)
	{
		echo "$value->post_title";
	}
    return "table";
}
 
add_shortcode('title_event_list','show_title_event_list');
 
?>