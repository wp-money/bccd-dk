<?php
/*
 Template Name: Event page
*/
?>
<?php get_header(); ?>

<div id="fullwidth">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <div id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="eventHeader">
            <div class="leftCol">
                <p class="date">18.03.2014</p>
                <h1>Womenomics 2014 - Women's Influence on the Global Economy</h1>
                <div class="body">
                    <p>Business Conference organised in partnership with Above &amp; Beyond Society.</p>
                    <ul class="info">
                        <li><img src="images/pixel.gif" alt="location" class="iconLocation">Børsen, Copenhagen</li>
                        <li><a  href="#" onclick="javascript:window.open('/layouts/Nemetos/Bccd/AddEventToCalendar.aspx?eventID={76FE4BDA-BC2C-4C5F-AE4F-3EBFAC8E8A11}');">
                            <img src="images/pixel.gif" alt="" class="iconDate">March 18, 2014</a></li>
                        <li><img src="images/pixel.gif" alt="" class="iconHour">08:30</li>
                    </ul>
                </div>
            </div>
            <div class="rightCol">
                <img src="/~/media/Events/2014/Womenomics1.ashx?w=448"
                    alt="Womenomics 2014 - Women's Influence on the Global Economy"
                    width="448" height="253">
            </div>
            <ul class="eventsNav">
                <li class="prev"><a href="/Events/Event Listing.aspx">
                	<img src="images/pixel.gif" alt="prev">&nbsp; Back to all events</a></li>
                <li class="next"><a href="/Events/Event Listing/2014/03/March-Lunch.aspx">
                		Next event:&nbsp; Alan Judd, CEO EMG Entertainment
                        &amp; Media Group: "New Developments in the
                        Global Entertainment Industry"&nbsp;
                        <img src="images/pixel.gif" alt="next">
                </a></li>
            </ul>
        </div>

        <!--         <h2 class="page-title"> -->
        <?php/*  the_title();  */?>
        <!--         </h2> -->
        <?php /* edit_post_link(__( 'Edit', 'themezee_lang' )); */ ?>

        <div class="entry">
            <?php the_content(); ?>
            <div class="clear"></div>
            <?php wp_link_pages(); ?>
        </div>

    </div>

    <?php endwhile; ?>

    <?php endif; ?>

    <?php comments_template(); ?>

</div>

<?php get_footer(); ?>