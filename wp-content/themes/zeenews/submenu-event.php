<div class="subMenu">
	<ul class="menuListNewsEvents">
		<?php dynamic_sidebar('sidebar-event-left'); ?>
		<li class="right">
			<a href="/Events/Event Listing.aspx" title="see more events"><img src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif" alt="" class="moreArrow">See more events</a>
		</li> 
	</ul>
	<ul class="menuLinksList">

		<?php dynamic_sidebar('sidebar-event-center'); ?>
	</ul>
	<div class="menuInfo">
		<div class="img">
			<span class="date">
				<?php do_shortcode('[_nearest_event_show_day]'); ?>
				</span>
		</div>
		<p class="category">
			Next Event
		</p>
		<h2><?php do_shortcode('[_nearest_event_show_title]'); ?></h2>
		<p class="info">
			<?php do_shortcode('[_nearest_event_show_content]'); ?>
			<a href="/Events/Event Listing/2014/02/February-Lunch-Rufus-Gifford.aspx" title="read more"></a>
		</p>
		<p class="bookNow">
			<a href="/Events/Event Sign Up.aspx" title="Book now">Book now</a>
		</p>
	</div>
</div>