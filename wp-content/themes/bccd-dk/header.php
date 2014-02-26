<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package Sundance
 * @since Sundance 1.0
 */
?><!DOCTYPE html>
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'sundance' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
<link rel="stylesheet" href="<?php echo dirname( get_bloginfo('stylesheet_url')); ?>/bccd.css" type="text/css" media="all">
</head>

<body <?php body_class(); ?>>
<!--<div id="page" class="hfeed site"> -->
	<div id="overlay"> </div>
	<?php do_action( 'before' ); ?>
	<header>
		<div class="wrapper">

			<div id="topMenu">
				<ul class="extraMenu">
					<li>
						<a href="/About us/Contact.aspx" title="Contact">Contact</a>
					</li>
				</ul>
				<ul class="socialMediaMenu">
					<li>
						<a href="http://www.linkedin.com/groups?mostPopular=&amp;gid=59513" target="_blank">
							<img src="<?php  echo dirname( get_bloginfo('stylesheet_url')); ?>/images/logoIn.png" alt="LinkedIn Bccd" width="19" height="14">
						</a>
					</li>
				</ul>
			</div>
			<div class="logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><img src="<?php  echo dirname( get_bloginfo('stylesheet_url')); ?>/images/logo_bccd.png" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
			</div>
		</div>
		<div id="mainMenu">
			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</div>
	</header><!-- #masthead .site-header -->

	<div id="mainContent" class="clear-fix">
		<?php if ( is_front_page() && ! is_paged() )
			get_template_part( 'featured' );
		?>