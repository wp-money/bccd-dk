<?php
/**
 * Template Name: Event Page Template
 *
 * @package Sundance
 * @since Sundance 1.0
 */

get_header(); ?>
<div class="wrapper">
		
	<div id="content" role="main">


<?php echo $EM_Event->output('#_EVENTNOTES'); ?>
		
	</div><!-- #content -->

</div>
<?php get_footer(); ?>