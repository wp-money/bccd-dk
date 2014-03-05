<?php get_header(); ?>
<div id="primary" class="site-content">

	<div id="content-event" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

	            <!-- ========================== -->
	            <div id="content-event">
	            	<div class="eventHeader">
	            		<div class="leftCol">
	            			<p class="date">
	            				<?php echo $event_start; ?>
	            			</p><h1><?php the_title(); ?></h1>
	            			<div class="body">
	            				<p><?php the_content(); ?></p>
	            				<br />
	            				<ul class="info">
	            					<li>
	            						<img src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif" alt="location" class="iconLocation">
	            						
	            						<?php // Display Event Locations ?>
	            						<?php $taxonomy = 'event-location'; ?>
	            						<?php $terms = em_get_locations_for($post -> ID); ?>
	            						<?php if ($terms) : ?>
	            						<div class="<?php echo $taxonomy; ?>"><strong><?php _e('Location', 'events-maker'); ?>: </strong>
	            							<?php foreach ($terms as $term) : ?>
	            							<?php $term_link = get_term_link($term -> slug, $taxonomy); ?>
	            							<?php
											if (is_wp_error($term_link))
												continue;
	            							?>
	            							<a href="<?php echo $term_link; ?>" class="location"><?php echo $term -> name; ?></a>
									<?php // Location details
									if ($event_display_options['display_location_details'] === 1) : ?>
									<?php $location_details = $term -> location_meta; ?>
									<?php if ($location_details) : ?>
									<?php echo !empty($location_details['address']) ? $location_details['address'] : ''; ?>
									<?php echo !empty($location_details['zip']) ? $location_details['zip'] : ''; ?>
									<?php echo !empty($location_details['city']) ? $location_details['city'] : ''; ?>
									<?php echo !empty($location_details['state']) ? $location_details['state'] : ''; ?>
									<?php echo !empty($location_details['country']) ? $location_details['country'] : ''; ?>
								<?php endif; ?>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</li>
			<li>
				<a href="#" onclick="javascript:window.open('/layouts/Nemetos/Bccd/AddEventToCalendar.aspx?eventID={154EB7BF-814D-43B7-AD3C-DE6AC81A2181}');">
					<img src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif" alt="" class="iconDate">
					<?php // Display Event Start ?>
					<?php $event_start = em_get_the_start($post -> ID) ? em_get_the_start($post -> ID) : ''; ?>
					<?php if ($event_start) : ?>
					<?php $event_start = em_is_all_day($post -> ID) === TRUE ? em_get_the_start($post -> ID, 'date') : em_get_the_start($post -> ID); ?>
					<div class="event-start-date"><strong><?php _e('Start', 'events-maker'); ?>: </strong><abbr class="dtstart" title="<?php echo get_post_meta((int)$post -> ID, '_event_start_date', TRUE); ?>"><?php echo $event_start; ?></abbr></div>
				<?php endif; ?>
			</a>
		</li>
					<!-- <li>
						<img src="/images/bccd/pixel.gif" alt="" class="iconHour">
						<?php // Display Event Start ?>
			                <?php $event_start = em_get_the_start($post -> ID) ? em_get_the_start($post -> ID) : ''; ?>
			                <?php if ($event_start) : ?>
			                	<?php $event_start = em_is_all_day($post -> ID) === TRUE ? em_get_the_start($post -> ID, 'time()') : em_get_the_start($post -> ID); ?>
			                	<div class="event-start-date"><strong><?php _e('Start', 'events-maker'); ?>: </strong><abbr class="dtstart" title="<?php echo get_post_meta((int)$post -> ID, '_event_start_date', TRUE); ?>"><?php echo $event_start; ?></abbr></div>
			                <?php endif; ?>
			            </li> -->
			        </ul>
			        <p class="btnSignUpEvent">
			        	<a href="/en/Events/Event Sign Up.aspx" title="Event Sign-up">Sign up for event</a>
			        </p>
			    </div>
			</div>
			<div class="rightCol">

				<?php
				// get_the_post_thumbnail($post -> ID, $post -> );
				if ('' != get_the_post_thumbnail()) {
					echo '<img  src="' . wp_get_attachment_url(get_post_thumbnail_id($post -> ID)) . '" alt="The Social Calendar - Launch Party" width="448" height="275" >';
				}
				?>
				
			</div>
			<ul class="eventsNav">
				<li class="prev">
					<a href="/en/Events/Event Listing.aspx"><img src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif" alt="prev">&nbsp;
						Back to all events</a>
					</li>
					<li class="next">
						<a href="/en/Events/Event Listing/2014/02/God-of-Carnage.aspx">Next event:&nbsp;
							God of Carnage &nbsp; <img src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif" alt="next"></a>
						</li>
					</ul>
				</div>
				<div class="contentTabs">
					<ul class="tabsNav">
						<li class="active">
							About the event
						</li>
						<li class="">
							Attendance fees and registration
						</li>
						<li class="">
							Venue
						</li>
					</ul>
					<ul class="tabsContent">
						<li class="active">
							<div style="text-align: center;"><img style="vertical-align: middle;" alt="Nimb event" src="~/media/537CAD0283AC408CB92332608DFEF99E.ashx">
							</div>
						</li>
						<li class="">
							<p>
								Ticket for Members: DKK 295kr, Non-members: DKK 395 (incl moms).
							</p>
							<p>
								Deadline to sign up (you also need to buy tickets -see below) &nbsp;for this event is <span style="color: #ff0000;"><strong>15.00 Thursday 6 March.</strong></span>
							</p>
							<p>
								<br>
							</p>
							<iframe allowtransparency="true" frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="true" src="http://billetto.dk/en/events/40630/widget/" vspace="0" width="60%" height="246"></iframe>
						</li>
						<li class="">
							<div class="tabLocation">
								<div class="lCol">
									<strong>Nimb Hotel</strong>
									<br>
									Bernstorffsgade 5, 1577 Copenhagen
									<br>
									<br>
									<img style="width: 350px; height: 263px;" src="~/media/F73B91D78D584387A22E007940E4F89F.ashx?h=375&amp;w=500" alt="Nimb hotel"><p></p>
								</div>
								<div class="rCol" id="map_canvas">
									<iframe width="540" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=55.673559, 12.566058&amp;hl=en&amp;sll=37.0625,-95.677068&amp;sspn=0.005548,0.00912&amp;t=m&amp;z=16&amp;output=embed"></iframe>
								</div>
							</div>
						</li>
					</ul>
				</div>
				
				<div class="contentTabs">
					<?php
					// $keys = get_post_custom($post->ID);
					//
					// // check if the custom field has a value
					// $my_custom_field = $key_1_value['decvgjhjhj'];
					// foreach ( $keys as $key => $value)
					// {
					// echo ''.$keys . " => " . $value . "<br />";
					// }
					//
					global $wpdb;
					$query = "SELECT * FROM wp_postmeta where post_id = ".$post -> ID;
					$listpost = $wpdb -> get_results($query);
					
					foreach ( $listpost as $post_index => $post_meta_value)
					{
						echo ''.$post_meta_value->meta_key . " => " . $post_meta_value->meta_value . "<br />";
					}
					?>
				</div>
			</div>

			<!-- =================== -->



		<?php endwhile; // end of the loop. ?>

	</div>

</div>
<?php get_footer(); ?>