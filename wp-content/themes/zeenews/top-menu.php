<div id="topMenu">
	<ul class="extraMenu">
			<?php
				// Get Navigation out of Theme Options
				 wp_nav_menu(array('theme_location' => 'top_navi', 'container' => false, 'menu_id' => 'topnav', 'echo' => true, 'fallback_cb' => 'themezee_default_menu', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '', 'depth' => 0));
			?>
			<!-- <a href="#" title="Contact">Contact</a> -->
	</ul>
	<ul class="socialMediaMenu">
		<li>
			<a href="http://www.linkedin.com/groups?mostPopular=&amp;gid=59513" target="_blank">
				<img src="<?php echo get_template_directory_uri(); ?>/images/logoIn.png" alt="LinkedIn Bccd" width="19" height="14"></a>
		</li>
	</ul>
</div>