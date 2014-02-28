<ul id="nav" class="menu">
	<li class="first">
		<a href="<?php echo home_url(); ?>" title="Home"><img alt="Home" src="<?php echo get_template_directory_uri(); ?>/images/logoHome.png"></a>
	</li>
	<li>
		<a href="/Events/Event Listing.aspx" target="_self" title="Events">Events</a>
		<?php get_template_part('submenu','event')
		?>
	</li>
	<li>
		<a href="/News/Latest News.aspx" target="_self" title="News">News</a>
		<?php get_template_part('submenu','news')
		?>
	</li>
	<!-- <li>
		<a href="/Membership/BCCD Sponsorship scheme.aspx" title="Members">Members</a>
	</li>
	<li>
		<a href="/Scholarships/Information about the Scheme.aspx" title="Scholarships">Scholarships</a>
	</li>
	<li>
		<a href="/COBCOE3/COBCOE2/what-is-cobcoe2.aspx" title="COBCOE">COBCOE</a>
	</li>
	<li>
		<a href="/Resources/Links/Denmark.aspx" title="Resources">Resources</a>
	</li>
	<li>
		<a href="/About-us/Our charter.aspx" title="About us">About us</a>
	</li> 
</ul>-->

