<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package Sundance
 * @since Sundance 1.0
 */
?>
<!DOCTYPE html>
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
<title><?php wp_title( '|', true, 'right' ); ?></title>
<!-- <link rel="profile" href="http://gmpg.org/xfn/11" /> -->
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<link href="<?php echo get_template_directory_uri(); ?>/bccd.css"
    tppabs="http://bccd.dk/css/bccd.css" rel="stylesheet"
    type="text/css" media="all">
<link href="<?php echo get_template_directory_uri(); ?>/print.css"
    tppabs="http://bccd.dk/css/print.css" rel="stylesheet"
    type="text/css" media="print">
<script type="text/javascript"
    src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.8.2.min.js"
    tppabs="http://bccd.dk/js/bccd/jquery-1.8.2.min.js"></script>
<script type="text/javascript"
    src="<?php echo get_template_directory_uri(); ?>/js/jquery.cookie.js"
    tppabs="http://bccd.dk/js/bccd/jquery.cookie.js"></script>
<script type="text/javascript"
    src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"
    tppabs="http://bccd.dk/js/bccd/html5shiv.js"></script>
<script type="text/javascript"
    src="<?php echo get_template_directory_uri(); ?>/js/modernizr.js"
    tppabs="http://bccd.dk/js/bccd/modernizr.js"></script>
<script type="text/javascript"
    src="<?php echo get_template_directory_uri(); ?>/js/onload.js"
    tppabs="http://bccd.dk/js/bccd/onload.js"></script>

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div>
        <?php do_action( 'before' ); ?>
        <!-- 	new header -->
        <header>
            <input type="hidden" class="extranetError"
                value="An error has occured while processing your information. Please try again in 5 minutes. If the problem is persisting please contact BCCD about it.">
            <div class="wrapper">
                <div id="topMenu">
                    <ul class="extraMenu">
                        <li><a
                            href="<?php echo get_template_directory_uri(); ?>/images/Contact.aspx.htm"
                            tppabs="http://bccd.dk/en/About us/Contact.aspx"
                            title="Contact">Contact</a></li>
                    </ul>
                    <ul class="socialMediaMenu">
                        <li><a
                            href="javascript:if(confirm(%27http://www.linkedin.com/groups?mostPopular=&gid=59513  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.linkedin.com/groups?mostPopular=&gid=59513%27"
                            tppabs="http://www.linkedin.com/groups?mostPopular=&gid=59513"
                            target="_blank"> <img
                                src="<?php echo get_template_directory_uri(); ?>/images/logoIn.ashx.png"
                                tppabs="http://bccd.dk/~/media/BCCD images/Social Media Images/logoIn.ashx"
                                alt="LinkedIn Bccd" width="19"
                                height="14" />
                        </a></li>
                    </ul>
                </div>
                <a class="logo"
                    href="<?php echo get_template_directory_uri(); ?>/images/en.aspx.htm"
                    tppabs="http://bccd.dk/en.aspx" title="logo"> <img
                    src="<?php echo get_template_directory_uri(); ?>/images/logo Bccd.ashx.png"
                    tppabs="http://bccd.dk/~/media/BCCD images/logo Bccd.ashx"
                    alt="Logo" width="290" height="61" />
                </a>
                <div class="loginPopup formPopup">
                    <p class="loginTitle">Extranet login</p>
                    <fieldset>
                        <input type="text" value="" class="txtUsername"
                            placeholder="Email" name="txtUsername"><input
                            type="password" value="" class="txtPassword"
                            placeholder="Password" name="txtPassword">
                        <div class="lCol">
                            <p>
                                Forgot password? <a href="#"
                                    class="rememberMe">Remind me</a>
                            </p>
                        </div>
                        <input value="Log in" type="submit"
                            class="btnLoginSubmit">
                    </fieldset>
                </div>
            </div>
            <div id="mainMenu">
                <ul>
                    <li class="first"><a href="en.aspx.htm"
                        tppabs="http://bccd.dk/en.aspx" title="Home"> <img
                            alt="Home"
                            src="<?php echo get_template_directory_uri(); ?>/images/logoHome.png"
                            tppabs="http://bccd.dk/content_images/bccd/logoHome.png">
                    </a></li>
                    <li><a href="Event Listing.aspx.htm"
                        tppabs="http://bccd.dk/en/Events/Event Listing.aspx"
                        target="_self" title="Events">Events</a>
                        <div class="subMenu">
                            <ul class="menuListNewsEvents">
                                <li class="titleCat">Upcoming Events</li>
                                <li><a
                                    href="February-Lunch-Rufus-Gifford.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing/2014/02/February-Lunch-Rufus-Gifford.aspx">US
                                        Ambassador to Denmark Rufus
                                        Gifford, “2014: An American
                                        Perspective”</a></li>
                                <li><a href="God-of-Carnage.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing/2014/02/God-of-Carnage.aspx">God
                                        of Carnage </a></li>
                                <li><a
                                    href="Launch-social-calendar.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing/2014/03/Launch-social-calendar.aspx">The
                                        Social Calendar 2014 Launch</a>
                                </li>
                                <li><a
                                    href="IT-security-and-crime-insurance.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing/2014/03/IT-security-and-crime-insurance.aspx">IT
                                        Security and IT Crime Insurance</a>
                                </li>
                                <li><a href="Womenomics.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing/2014/03/Womenomics.aspx">Womenomics
                                        2014 - Women's Influence on the
                                        Global Economy</a></li>
                                <li><a href="March-Lunch.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing/2014/03/March-Lunch.aspx">Alan
                                        Judd, CEO EMG Entertainment &
                                        Media Group: "New Developments
                                        in the Global Entertainment
                                        Industry"</a></li>
                                <li class="right"><a
                                    href="Event Listing.aspx.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing.aspx"
                                    title="see more events"> <img
                                        src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif"
                                        tppabs="http://bccd.dk/images/bccd/pixel.gif"
                                        alt="" class="moreArrow">See
                                        more events
                                </a></li>
                            </ul>
                            <ul class="menuLinksList">
                                <li><a
                                    href="Event Listing.aspx-cat=Business Copenhagen.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing.aspx?cat=Business Copenhagen">Business
                                        Copenhagen</a></li>
                                <li><a
                                    href="Event Listing.aspx-cat=Social.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing.aspx?cat=Social">Social</a>
                                </li>
                                <li><a
                                    href="Event Listing.aspx-cat=Business Jutland.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing.aspx?cat=Business Jutland">Business
                                        Jutland </a></li>
                                <li><a
                                    href="Event Listing.aspx-cat=Member-Partner.htm"
                                    tppabs="http://bccd.dk/en/Events/Event Listing.aspx?cat=Member/Partner">Member/Partner
                                </a></li>
                            </ul>
                            <div class="menuInfo">
                                <div class="img">
                                    <span class="date">28<span>Feb</span>
                                    </span>
                                </div>
                                <p class="category">Next Event</p>
                                <h2>US Ambassador to Denmark Rufus
                                    Gifford, “2014: An American
                                    Perspective”</h2>
                                <p class="info">
                                    February Business Lunch with the US
                                    Ambassador<a
                                        href="February-Lunch-Rufus-Gifford.aspx.htm"
                                        tppabs="http://bccd.dk/en/Events/Event Listing/2014/02/February-Lunch-Rufus-Gifford.aspx"
                                        title="read more"></a>
                                </p>
                                <p class="bookNow">
                                    <a href="Event Sign Up.aspx.htm"
                                        tppabs="http://bccd.dk/en/Events/Event Sign Up.aspx"
                                        title="Book now">Book now</a>
                                </p>
                            </div>
                        </div></li>
                    <li><a href="Latest News.aspx.htm"
                        tppabs="http://bccd.dk/en/News/Latest News.aspx"
                        target="_self" title="News">News</a>
                        <div class="subMenu">
                            <ul class="menuListNewsEvents">
                                <li class="titleCat">News</li>
                                <li><a href="Cebit-2014.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2014/01/Cebit-2014.aspx">Free
                                        tickets to CeBIT 2014 for all
                                        BCCD members.</a></li>
                                <li><a
                                    href="Premier-of-Greenland’s-First- New-Year-Reception.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2014/01/Premier-of-Greenland’s-First- New-Year-Reception.aspx">Premier
                                        of Greenland’s First New Year
                                        Reception</a></li>
                                <li><a
                                    href="First-Combo-Charging-Station.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/12/First-Combo-Charging-Station.aspx">CLEVER
                                        Opens the First Combo Charging
                                        Station</a></li>
                                <li><a
                                    href="Adapting-to-change.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/12/Adapting-to-change.aspx">Adapting
                                        To Change: UK policy towards the
                                        Arctic</a></li>
                                <li><a
                                    href="Copenhagen-Capacity-Innovative.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/12/Copenhagen-Capacity-Innovative.aspx">Copenhagen
                                        Capacity - Most Innovative
                                        Agency </a></li>
                                <li><a
                                    href="Remembrance-Sunday-2013.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/11/Remembrance-Sunday-2013.aspx">Rememberance
                                        Sunday 2013</a></li>
                                <li><a
                                    href="Fan-Tash-Tic-Fundraising-At-London-City.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/11/Fan-Tash-Tic-Fundraising-At-London-City.aspx">Fan-Tash-Tic
                                        Fundraising at London City</a></li>
                                <li><a
                                    href="Save-With-SAS-In-2013.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/10/Save-With-SAS-In-2013.aspx">Save
                                        With SAS in 2013</a></li>
                                <li><a
                                    href="New-Danish-Ambassador.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/10/New-Danish-Ambassador.aspx">New
                                        Danish Ambassador to the United
                                        Kingdom</a></li>
                                <li><a
                                    href="British-Airways-Increases-Choice.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News/2013/10/British-Airways-Increases-Choice.aspx">British
                                        Airways Increases Fare Choice
                                        Across All Short-Haul Flights</a>
                                </li>
                                <li class="right"><a
                                    href="Latest News.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Latest News.aspx"
                                    title="see more news"><img
                                        src="<?php echo get_template_directory_uri(); ?>/images/pixel.gif"
                                        tppabs="http://bccd.dk/images/bccd/pixel.gif"
                                        alt="see more news"
                                        class="moreArrow">See more news</a>
                                </li>
                            </ul>
                            <ul class="menuLinksList">
                                <li><a href="Newsletter.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/Newsletter.aspx"
                                    title="Newsletter">Newsletter</a></li>
                                <li><a
                                    href="NewsLetter Sign-Up.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/NewsLetter Sign-Up.aspx"
                                    title="Newsletter Sign-up">Newsletter
                                        Sign-up</a></li>
                                <li><a
                                    href="bccd-annual-supplements.aspx.htm"
                                    tppabs="http://bccd.dk/en/News/bccd-annual-supplements.aspx"
                                    title="BCCD Annual Supplements">BCCD
                                        Annual Supplements</a></li>
                            </ul>
                            <div class="menuInfo">
                                <div class="img">
                                    <span class="date">28<span>Jan</span>
                                    </span>
                                </div>
                                <p class="category">Latest News</p>
                                <h2>
                                    <a href="Cebit-2014.aspx.htm"
                                        tppabs="http://bccd.dk/en/News/Latest News/2014/01/Cebit-2014.aspx">Free
                                        tickets to CeBIT 2014 for all
                                        BCCD members.</a>
                                </h2>
                                <p class="info">
                                    Oxford Institute offers all British
                                    Chamber member company employees
                                    free entrance day tickets to the
                                    trade fair.<a
                                        href="Cebit-2014.aspx.htm"
                                        tppabs="http://bccd.dk/en/News/Latest News/2014/01/Cebit-2014.aspx">Read
                                        more</a>
                                </p>
                            </div>
                        </div></li>
                    <li><a href="BCCD Sponsorship scheme.aspx.htm"
                        tppabs="http://bccd.dk/en/Membership/BCCD Sponsorship scheme.aspx"
                        title="Members">Members</a></li>
                    <li><a href="Information about the Scheme.aspx.htm"
                        tppabs="http://bccd.dk/en/Scholarships/Information about the Scheme.aspx"
                        title="Scholarships">Scholarships</a></li>
                    <li><a href="what-is-cobcoe2.aspx.htm"
                        tppabs="http://bccd.dk/en/COBCOE3/COBCOE2/what-is-cobcoe2.aspx"
                        title="COBCOE">COBCOE</a></li>
                    <li><a href="Denmark.aspx.htm"
                        tppabs="http://bccd.dk/en/Resources/Links/Denmark.aspx"
                        title="Resources">Resources</a></li>
                    <li><a href="Our charter.aspx.htm"
                        tppabs="http://bccd.dk/en/About us/Our charter.aspx"
                        title="About us">About us</a></li>
                </ul>
            </div>
        </header>

        <div id="main" class="clear-fix">
            <?php if ( is_front_page() && ! is_paged() )
            	get_template_part( 'featured' );
		?>