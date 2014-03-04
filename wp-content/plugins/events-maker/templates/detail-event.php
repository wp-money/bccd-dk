<?php get_header(); ?>
<div id="primary" class="site-content">

	<div id="content-event" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class('hcalendar'); ?>>

			<header class="entry-header">

				<h1 class="entry-title summary"><?php the_title(); ?></h1>

		        		<?php // Get event Display Options
		        		$event_display_options = get_post_meta($post -> ID, '_event_display_options', TRUE);
		        		?>



		        		<div class="entry-meta">

		        			<?php // Display Event Start ?>
		        			<?php $event_start = em_get_the_start($post -> ID) ? em_get_the_start($post -> ID) : ''; ?>
		        			<?php if ($event_start) : ?>
		        			<?php $event_start = em_is_all_day($post -> ID) === TRUE ? em_get_the_start($post -> ID, 'date') : em_get_the_start($post -> ID); ?>
		        			<div class="event-start-date"><strong><?php _e('Start', 'events-maker'); ?>: </strong><abbr class="dtstart" title="<?php echo get_post_meta((int)$post -> ID, '_event_start_date', TRUE); ?>"><?php echo $event_start; ?></abbr></div>
		        		<?php endif; ?>

		        		<?php // Display Event End ?>
		        		<?php $event_end = em_get_the_end($post -> ID) ? em_get_the_end($post -> ID) : ''; ?>
		        		<?php if ($event_end) : ?>
		        		<?php $event_end = em_is_all_day($post -> ID) === TRUE ? em_get_the_end($post -> ID, 'date') : em_get_the_end($post -> ID); ?>
		        		<div class="event-end-date"><strong><?php _e('End', 'events-maker'); ?>: </strong><abbr class="dtend" title="<?php echo get_post_meta((int)$post -> ID, '_event_end_date', TRUE); ?>"><?php echo $event_end; ?></abbr></div>
		        	<?php endif; ?>

			               	<?php // Display Tickets details
			               	if ($event_display_options['price_tickets_info'] === 1) : ?>
				               	<?php // Tickets URL
				               	$tickets = em_get_tickets($post -> ID);
				               	?>
				               	<?php if ($tickets) : ?>
				               	<div class="event-tickets"><strong><?php _e('Tickets', 'events-maker'); ?>: </strong>
				               		<?php foreach ($tickets as $ticket) : ?>
				               		<span><?php echo $ticket['name'] . ': ' . em_get_currency_symbol($ticket['price']); ?></span>
				               	<?php endforeach; ?>
				               </div>
				           <?php else : ?>
				           <div class="event-tickets"><strong><?php _e('Tickets', 'events-maker'); ?>: </strong>
				           	<?php _e('Free', 'events-maker'); ?>
				           </div>
				       <?php endif; ?>
			               		<?php // Tickets URL
			               		$tickets_url = get_post_meta($post -> ID, '_event_tickets_url', TRUE);
			               		?>
			               		<?php if ($tickets_url) : ?>
			               		<div class="event-tickets"><strong><?php _e('Buy tickets URL', 'events-maker'); ?>: </strong>
			               			<a href="<?php echo esc_url($tickets_url); ?>" rel="nofollow" target="_blank"><?php echo $tickets_url; ?></a>
			               		</div>
			               	<?php endif; ?>
			               <?php endif; ?>

			               <?php // Display Event Categories ?>
			               <?php $taxonomy = 'event-category'; ?>
			               <?php $terms = em_get_categories_for($post -> ID); ?>
			               <?php if ($terms) : ?>
			               <div class="<?php echo $taxonomy; ?>"><strong><?php _e('Category', 'events-maker'); ?>: </strong>
			               	<?php foreach ($terms as $term) : ?>
			               	<?php $term_link = get_term_link($term -> slug, $taxonomy); ?>
			               	<?php
			               	if (is_wp_error($term_link))
			               		continue;
			               	?>
			               	<a href="<?php echo $term_link; ?>" class="category"><?php echo $term -> name; ?></a>
			               <?php endforeach; ?>
			           </div>
			       <?php endif; ?>

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

				<?php // Display Event Organizers ?>
				<?php $taxonomy = 'event-organizer'; ?>
				<?php $terms = em_get_organizers_for($post -> ID); ?>
				<?php if ($terms) : ?>
				<div class="<?php echo $taxonomy; ?> vcard"><strong><?php _e('Organizer', 'events-maker'); ?>: </strong>
					<?php foreach ($terms as $term) : ?>
					<?php $term_link = get_term_link($term -> slug, $taxonomy); ?>
					<?php
					if (is_wp_error($term_link))
						continue;
					?>
					<a href="<?php echo $term_link; ?>" class="org"><?php echo $term -> name; ?></a>
			                    	<?php // Organizer details
			                    	if ($event_display_options['display_organizer_details'] === 1) : ?>
			                    	<?php $organizer_details = $term -> organizer_meta; ?>
			                    	<?php if ($organizer_details) : ?>
			                    	<?php echo !empty($organizer_details['contact_name']) ? '<span class="fn">' . $organizer_details['contact_name'] . '</span>' : ''; ?>
			                    	<?php echo !empty($organizer_details['phone']) ? '<span class="tel">' . $organizer_details['phone'] . '</span>' : ''; ?>
			                    	<?php echo !empty($organizer_details['email']) ? '<span class="email">' . $organizer_details['email'] . '</span>' : ''; ?>
			                    	<?php echo !empty($organizer_details['website']) ? '<span class="url">' . $organizer_details['website'] . '</span>' : ''; ?>
			                    <?php endif; ?>
			                <?php endif; ?>
			            <?php endforeach; ?>
			        </div>
			    <?php endif; ?>

			</div>

		</header>

		<div class="entry-content description">
			<?php the_content(); ?>
		</div>

	                <?php // Display Google Map
	                echo $event_display_options['google_map'] === 1 ? em_display_google_map() : '';
	                ?>

	                <footer class="entry-meta">
	                	<?php edit_post_link(__('Edit', 'events-maker'), '<span class="edit-link">', '</span>'); ?>
	                </footer>

	            </article>

	            <div class="comments-template">
	            	<?php comments_template(); ?>
	            </div>	



	            <!-- ========================== -->
	            <div id="content-event">
	            	<div class="eventHeader">
	            		<div class="leftCol">
	            			<p class="date">
	            				<?php echo $event_start; ?>
	            			</p><h1><?php the_title(); ?></h1>
	            			<div class="body">
	            				<p>
	            					<?php the_content(); ?>
	            				</p>
	            				<ul class="info">
	            					<li><img src="/images/bccd/pixel.gif" alt="location" class="iconLocation">
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
					<img src="/images/bccd/pixel.gif" alt="" class="iconDate">
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
				if('' != get_the_post_thumbnail()){
					echo '<img  src="'.wp_get_attachment_url(get_post_thumbnail_id($post -> ID)).'" alt="The Social Calendar - Launch Party" width="448" height="275" >';
				}
				?>
				
			</div>
			<ul class="eventsNav">
				<li class="prev">
					<a href="/en/Events/Event Listing.aspx"><img src="/images/bccd/pixel.gif" alt="prev">&nbsp;
						Back to all events</a>
					</li>
					<li class="next">
						<a href="/en/Events/Event Listing/2014/02/God-of-Carnage.aspx">Next event:&nbsp;
							God of Carnage &nbsp; <img src="/images/bccd/pixel.gif" alt="next"></a>
						</li>
					</ul>
				</div>
				<div class="contentTabs">
					<!--<?php 
					$key_1_value = get_post_custom($post->ID);
					// check if the custom field has a value
					$my_custom_field = $key_1_value['my_custom_field'];
  					foreach ( $my_custom_field as $my_field ) 
  					{
   						 echo $my_field->;
 					}
					
					?> -->
				</div>
			</div>

			<!-- =================== -->



		<?php endwhile; // end of the loop. ?>

	</div>

</div>
<?php get_footer(); ?>