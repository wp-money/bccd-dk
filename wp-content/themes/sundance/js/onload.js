// JavaScript Document
var upcomingEventListParameters = {
    nrEvents: '10',
    rootId: '{7650C409-3F87-4D23-8D7D-03B94F94E83D}',
    month: '-1',
    year: '-1',
    eventCategory: '-1',
    paginationIndex: '-1'
};
var pastEventListParameters = {
    nrEvents: '10',
    rootId: '{7650C409-3F87-4D23-8D7D-03B94F94E83D}',
    month: '-1',
    year: '-1',
    eventCategory: '-1',
    paginationIndex: '-1'
};

var newsParameters = {
    nrNews: '10',
    rootId: '{36DCC784-3635-4021-ADC0-1DDD18041AE5}',
    month: '-1',
    year: '-1',
    newsType: '-1',
    paginationIndex: '-1'
};
var archiveParameters = {
    nrNews: '10',
    rootId: '{36DCC784-3635-4021-ADC0-1DDD18041AE5}',
    month: '-1',
    year: '-1',
    newsType: '-1',
    paginationIndex: '-1'
};

function GetQS(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
};
// (string currentPage,string nrEventsPerPage, string rootID,string year,string month,string text,string newsindex)selYearNews
function GetSelected(selectedTagClass) {
    jQuery(selectedTagClass).change(function () {
        var str = "";
        jQuery(selectedTagClass + " option:selected").each(function () {
            return (jQuery(this).text());
        });
    })
.trigger('change');
}

jQuery(document).ready(function () {
    jQuery.noConflict();

hideValues();
//	jQuery('#topHighlightSection .btnSignUp, .btnLoginSubmit, .btnSignOut, .btnSubmit, .scfSubmitButtonBorder input').corner();




	/*jQuery('.scfSingleLineTextBox, .scfEmailTextBox, .scfMultipleLineTextBox').each(function(){
		jQuery(this).attr('placeholder', jQuery(this).val());
		jQuery(this).val('');
	})*/



    /*if (!Modernizr.input.placeholder) {

        jQuery('[placeholder]').focus(function () {
            var input = jQuery(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = jQuery(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        jQuery('[placeholder]').parents('form').submit(function () {
            jQuery(this).find('[placeholder]').each(function () {
                var input = jQuery(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });

    }*/
     function hideValues() {
    jQuery('#formPage input,#formPage textarea').each(function () {
	
		if(jQuery(this).hasClass("scfMultipleLineTextBox")){
			var inpValue = jQuery(this).text();

        jQuery(this).focus(function () {
            if (jQuery(this).text() != '' && jQuery(this).val() == inpValue) {
                jQuery(this).val('');
            }
        });

        jQuery(this).focusout(function () {
            if (jQuery(this).val() == '') {                
                jQuery(this).val(inpValue);
            }
        });

		}
	else{
        var inpValue = jQuery(this).val();

        jQuery(this).focus(function () {
            if (jQuery(this).attr('value') != '' && jQuery(this).attr('value') == inpValue) {
                jQuery(this).attr('value', '');
            }
        });

        jQuery(this).focusout(function () {
            if (jQuery(this).val() == '') {                
                jQuery(this).attr('value', inpValue);
            }
        });
}
    });
}



    jQuery('.selectMyStyle select').change(function () {
        jQuery(this).trigger('blur');
    })

    if (jQuery('.scfDateSelectorMonth').size() > 0) {
        jQuery('.scfDateSelectorMonth').each(function () {
            jQuery(this).wrap('<span class="scfDateSelectorDateWrapper"> </span>');
        })
    }

    if (jQuery('.scfDateSelectorYear').size() > 0) {
        jQuery('.scfDateSelectorYear').each(function () {
            jQuery(this).wrap('<span class="scfDateSelectorDateWrapper"> </span>');
        })
    }

    if (jQuery('.scfDateSelectorDay').size() > 0) {
        jQuery('.scfDateSelectorDay, .scfDateSelectorDay').each(function () {
            jQuery(this).wrap('<span class="scfDateSelectorDateDayWrapper"> </span>');
        })
    }


    jQuery('.scfSingleLineGeneralPanel input').each(function () {
        if (jQuery(this).val() == '') {
            /*
            if(jQuery(this).attr('placeholder').size() > 0){
            jQuery(this).attr('placeholder', jQuery(this).val());
            }
            */
        }
    })



    if (GetQS('p') == '1') {
        window.print();
    }

    jQuery("#leftMenu ul li span").click(function () {
        jQuery(this).parent().siblings().find('ul').slideUp('slow', function () {
            //			jQuery('#leftMenu > ul li').removeClass('open'); 
            //			jQuery(this).parent().siblings().find('ul').slideUp();
        });
        jQuery("#leftMenu ul li span").removeClass('open');
        jQuery(this).addClass('open');
        jQuery(this).siblings('ul').slideDown("slow");
        //		jQuery(this).parent().addClass('open')
    });

    // ***************************************************************************
    if (jQuery('.sponsorNav').size() > 0) {
        //		var t = setTimeout(function(){alert("Hello")},3000)
        //		jQuery('.sponsorWideSection .navRight').trigger();

    }

    jQuery(".jumpToTop a").click(function () {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });



    jQuery('#campaign.slider').each(function (i) {
        //	var sliderID = id;
        if (parseInt(jQuery(this).attr('speed')) > 100) {
            animSpeed = parseInt(jQuery(this).attr('speed'));
        } else {
            animSpeed = 5000;
        }

        sliderList = jQuery(this);
        sliderList.before('<ul class="campaignNav"> </ul>');

        sliderList.sliderNbrsOfEl = sliderList.children().size();
        sliderList.sliderWidth = sliderList.children().width();
        sliderList.slideTo = 0;
        sliderList.test = i;
        nav = sliderList.siblings('.campaignNav');
        sliderList.width(sliderList.sliderNbrsOfEl * (sliderList.sliderWidth + 10));
        if (sliderList.sliderNbrsOfEl > 1) {
            for (var i = 0; i < sliderList.sliderNbrsOfEl; i++) {
                nav.append('<li> </li>')
            }
        }
        nav.children('li').first().addClass('active');


        function animateSlider() {
            nav.children('li').bind('click', function () {
                jQuery(this).parent().children('li').removeClass('active');
                jQuery(this).addClass('active');
                sliderList.slideTo = jQuery(this).index();
                sliderList.sliderWidth = jQuery(this).parent().siblings('.slider').children('li').width();
                //		animateSlider();

                jQuery(this).parent().siblings('.slider').animate({
                    "left": -sliderList.sliderWidth * sliderList.slideTo
                }, "slow");

            })
        };
        animateSlider();

        var intervalAnim = setInterval(triggerClick, animSpeed);

        function triggerClick() {
            if (nav.children('li:last').hasClass('active')) {
                nav.children('li:first').trigger('click');
            } else {
                nav.children('li.active').next().trigger('click');
            }
        }

        jQuery(this).hover(function () {
            clearInterval(intervalAnim);
        }, function () {
            intervalAnim = setInterval(triggerClick, animSpeed);
        })



    })

    jQuery("input[id$=NewsletterSubscribeBtn]").click(function () {
        if (ValidateNewsletterForm() == false) {
            return false;
        }
    });

    jQuery('.errorHighlight').live('blur', function () {
        if (jQuery(this).val() != '') {
            jQuery(this).removeClass('errorHighlight');
        }
    });

    //slider('.slider');

    /*
    function initCampaign(sliderId){
		
    var slideListID = sliderId;
    //		var slideListNavParentID = '.campaignSection';
		
    jQuery(slideListID).before('<ul class="campaignNav"> </ul>');		
		
    slideList = jQuery(slideListID);		
		
    slideNav = slideList.siblings('.campaignNav');
    var campaignNbrs = slideList.children().size();
    var campaignWidth = slideList.children().width();
    var slideTo;
    var timeAnim;
    var timeAnimVal = jQuery('#campaignSlider').attr('data-slider');
    slideList.width(campaignNbrs * (campaignWidth+10));
    //		jQuery('#campaignSlider').width(campaignNbrs * campaignWidth +10);
		
    for (var i = 0; i < campaignNbrs; i++){
    slideNav.append('<li> </li>')
    }
    slideNav.children().first().addClass('active');

		
    jQuery('.campaignNav li').bind('click', function(){
    jQuery(this).parent().children('li').removeClass('active');
    jQuery(this).addClass('active activeMove');
    slideTo = jQuery(slideNav).find('.activeMove').index();
    animateSlider();
    })
		
    if(timeAnimVal > 0){
    timeAnim = setInterval(autoSlide, timeAnimVal);
    }		
		

    function animateSlider(){
    slideList = jQuery('.activeMove').parent().siblings('.bigSpot');
    //			campaignWidth = jQuery('.activeMove').parent().siblings('.bigSpot').width();
    slideList.animate({
    "left": -campaignWidth*slideTo
    }, "slow");
    }
		
    jQuery(slideList).hover(function(){
    clearInterval(timeAnim);
    }, function(){
    if(timeAnimVal > 0){
    timeAnim = setInterval(autoSlide, timeAnimVal);
    }		
    })
    }
    */

    var overlayLayer = '<div class="overlay"> </div>';




    /*  SPONSOR SLIDER   */

    function sponsorSlider() {


        if (parseInt(jQuery('.sponsorSection').attr('speed')) > 100) {
            speed = parseInt(jQuery('.sponsorSection').attr('speed'));
        } else {
            speed = 5000;
        }


        var slideWidth = jQuery('.sponsorSection li').width();
        var navPos = 0;
        var items = jQuery('.sponsorSection > ul > li').size()

        jQuery('.sponsorSection ul').width(slideWidth * items);

        jQuery('.sponsorWideSection .navLeft').click(function () {
            navPos = navPos > 0 ? (navPos - 1) : (items - 5);
            jQuery('.sponsorSection ul').animate({ left: -(slideWidth * navPos) })
        })

        jQuery('.sponsorWideSection .navRight').click(function () {
            navPos = navPos < (items - 5) ? (navPos + 1) : 0;
            jQuery('.sponsorSection ul').animate({ left: -(slideWidth * navPos) })
        })

        var intervalAnim = setInterval(slideToNext, speed)

        function slideToNext() {
            jQuery('.sponsorWideSection .navRight').trigger('click');
        }

        jQuery('.sponsorWideSection').hover(function () {
            clearInterval(intervalAnim);
        }, function () {
            intervalAnim = setInterval(slideToNext, speed)
        })


    }

    if (jQuery('.sponsorSection').size() > 0) {
        sponsorSlider()
    }


    /* ================================================= */
    /* FORM POPUP */

    jQuery('.btnSignUp').live('click', function () {
        jQuery('body').prepend(overlayLayer);
        jQuery('.loginPopup').show();
        jQuery('.overlay').addClass('loginBk')
        return false;
    })

    jQuery('.loginBk').live('click', function () {
        jQuery('.loginPopup').hide();
        jQuery('.overlay').remove();
        return false;
    })

    jQuery('.btnSignUpPopup').live('click', function () {
        jQuery('body').prepend(overlayLayer);
        jQuery('.newsletterPopup').show();
        jQuery('.overlay').addClass('newsletterPopupBk')
        return false;
    })

    jQuery('.newsletterPopupBk').live('click', function () {
        jQuery('.newsletterPopup').hide();
        jQuery('.newsletterPopupBk').remove();
        return false;
    })


    jQuery('.newsletterPopupBk').live('click', function () {
        jQuery('.newsletterPopup').hide();
        jQuery('.newsletterPopupBk').remove();
        return false;
    })


    jQuery('.openPopupVideo').click(function () {
        jQuery('body').prepend(overlayLayer);
        jQuery('.overlay').addClass('videoPopup');
        var videoLink = jQuery(this).siblings('.videoLink').val();
        jQuery('body').prepend('<div class="formPopup videoPopup">' + videoLink + ' </div>');
        jQuery('.formPopup.videoPopup').prepend('<div class="closePopup"> x </div>');
        return false;
    })

    jQuery('.overlay.videoPopup, .videoPopup .closePopup').live('click', function () {
        jQuery('.overlay.videoPopup, .formPopup.videoPopup').remove();
    })
    /* ================================================= */
    /* MENU SECTION */

    jQuery('#mainMenu > ul > li').hover(function () {
        if (jQuery(this).children('.subMenu').size() > 0) {
            jQuery('body').prepend(overlayLayer);
        }
    },
	function () {
	    jQuery('.overlay').remove();

	});


    /* ================================================= */
    /* FOOTER SECTION */

    /*
    if (jQuery.cookie('footerShow') == 'false') {
    jQuery('.btnFooterSlider').addClass('closed')
    jQuery('#footerMenu').addClass('hidden');
    }
    */


    var createCookie = function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = '; expires=' + date.toGMTString();
        }
        else var expires = '';
        document.cookie = name + '=' + value + expires + '; path=/';
    };
    var readCookie = function (name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    var eraseCookie = function (name) {
        createCookie(name, '', -1);
    };




    if (readCookie('footerShow') == undefined) {
        createCookie('footerShow', 'false');
        jQuery('.btnFooterSlider').addClass('closed')
        jQuery('#footerMenu').addClass('hidden');
    }

    jQuery('.btnFooterSlider').click(function () {


        if (jQuery(this).hasClass('closed')) {
            jQuery('#footerMenu').slideDown(function () {
                jQuery('.btnFooterSlider').removeClass('closed')
                jQuery('#footerMenu').removeClass('hidden');
                createCookie('footerShow', 'true');
            });
            //	console.log(jQuery.cookie('footerShow', { path: '/', expires: 100 }))

        } else {
            jQuery('#footerMenu').slideUp(function () {
                jQuery('.btnFooterSlider').addClass('closed')
                jQuery('#footerMenu').addClass('hidden');
                createCookie('footerShow', 'false');
            });
            //	console.log(jQuery.cookie('footerShow', { path: '/' }))
        }
    })



    /* ================================================= */
    /*     TABS NAVIGATION     */

    jQuery('.tabsNav li').hover(function () {

        var pos = jQuery(this).index();
        jQuery(this).parent().addClass('hover');
        jQuery(this).addClass('hover');

        var tabCotent = jQuery(this).parent().next('.tabsContent');
        //tabCotent.addClass('hover').children('li').eq(pos).addClass('hoverActive');

    }, function () {

        jQuery(this).removeClass('hover');
        jQuery(this).parent().removeClass('hover');
        var tabCotent = jQuery(this).parent().next('.tabsContent');
        tabCotent.removeClass('hover').children('li').removeClass('hoverActive');

    })


    jQuery('.tabsNav li').live('click', function () {

        jQuery(this).parent().removeClass('hover').children('li').removeClass('active');
        jQuery(this).addClass('active');
        var pos = jQuery(this).index();

        var tabCotent = jQuery(this).parent().next('.tabsContent');
        tabCotent.removeClass('hover').children('li').removeClass('active');
        tabCotent.children('li').eq(pos).addClass('active');


    })



    /* ================================================= */
    /*     EQUAL HIEGHTS     */


    if (jQuery('#newsletterPageTop .lCol').height() > jQuery('#newsletterPageTop .rCol').height()) {
        jQuery('#newsletterPageTop .rCol').height(jQuery('#newsletterPageTop .lCol').height());
    } else {
        jQuery('#newsletterPageTop .lCol').height(jQuery('#newsletterPageTop .rCol').height());
    }
    function equalChariman() {
        if (jQuery('.boardChairman .chairman').eq(1).height() > jQuery('.boardChairman .chairman').eq(0).height()) {
            jQuery('.boardChairman .chairman').eq(0).height(jQuery('.boardChairman .chairman').eq(1).height());
        } else {
            jQuery('.boardChairman .chairman').eq(1).height(jQuery('.boardChairman .chairman').eq(0).height());
        }
    }
    equalChariman()

    setTimeout(equalChariman, 1800)


    /* ================================================= */
    /*     BOARD MEMBERS    */

    jQuery('.boardMembersSection h3, .boardMembersSection .lCol img').live('click', function () {
        jQuery('.boardMembersSection').addClass('active');
        jQuery('#membersPopup').show();
        jQuery('body').prepend(overlayLayer);
        jQuery('.overlay').addClass('membersOverlay')
        jQuery('#membersPopup .membersBody').html(jQuery(this).parent().siblings('.memberPopupBody').html());
        jQuery(this).parent().parent().addClass('active');


        var prevMember;
        var nextMember
        if (jQuery('.boardMembers li.active').next().index() >= 0) {
            nextMember = jQuery('.boardMembers li.active').next().find('h3').html();
        } else {
            nextMember = jQuery('.boardMembers li:first').find('h3').html();
        };

        if (jQuery('.boardMembers li.active').prev().index() >= 0) {
            prevMember = jQuery('.boardMembers li.active').prev().find('h3').html();
        } else {
            prevMember = jQuery('.boardMembers li:last').find('h3').html();
        };

        jQuery('#membersPopup #membersNav .prev em').html(prevMember);
        jQuery('#membersPopup #membersNav .next em').html(nextMember);

        return false;
    })


    jQuery('.boardChairman h3, .boardChairman img, .boardChairman p.more').live('click', function () {
        jQuery('.boardChairman').addClass('active');
        jQuery('#membersPopup').show();
        jQuery('body').prepend(overlayLayer);
        jQuery('.overlay').addClass('membersOverlay')
        jQuery('#membersPopup .membersBody').html(jQuery(this).siblings('.memberPopupBody').html());
        jQuery(this).parent().addClass('active');




        var prevMember;
        var nextMember
        if (jQuery('.chairman.active').next().index() >= 0) {
            nextMember = jQuery('.chairman.active').next().find('h3').html();
        } else {
            nextMember = jQuery('.chairman:first').find('h3').html();
        };

        if (jQuery('.chairman.active').prev().index() >= 0) {
            prevMember = jQuery('.chairman.active').prev().find('h3').html();
        } else {
            prevMember = jQuery('.chairman:last').find('h3').html();
        };
        jQuery('#membersPopup #membersNav .prev em').html(prevMember);
        jQuery('#membersPopup #membersNav .next em').html(nextMember);


        return false;
    })


    jQuery('.membersOverlay').live('click', function () {
        jQuery(this).remove();
        jQuery('.boardMembersSection, .chairman').removeClass('active');
        jQuery('#membersPopup').hide();
        jQuery('.boardMembers li').removeClass('active');
    })


    jQuery('#membersNav .next').live('click', function () {

        if (jQuery('.boardMembersSection').hasClass('active')) {

            var memberIndex = jQuery('.boardMembers .active').index() + 1;
            var membersNbr = jQuery('.boardMembers > li').size();
            var prevMember = jQuery('.boardMembers .active .rCol h3').html();
            var nextMember;

            if (memberIndex < membersNbr) {
                jQuery('.boardMembers .active').removeClass('active').next().addClass('active');
            } else {
                jQuery('.boardMembers .active').removeClass('active');
                jQuery('.boardMembers li:first').addClass('active');
            }

            if (jQuery('.boardMembers > li.last').hasClass('active')) {
                nextMember = jQuery('.boardMembers > li:first').find('h3').html();
            } else {
                nextMember = jQuery('.boardMembers .active').next().find('h3').html();
            }


            jQuery('#membersPopup .membersBody').html(jQuery('.boardMembers .active .memberPopupBody').html());
            jQuery('#membersPopup #membersNav .prev em').html(prevMember);
            jQuery('#membersPopup #membersNav .next em').html(nextMember);


        } else if (jQuery('.boardChairman').hasClass('active')) {

            var memberIndex = jQuery('.boardChairman .active').index();
            var membersNbr = jQuery('.boardChairman .chairman').size();
            var prevMember = jQuery('.boardMembers .active .rCol h3').html();
            var nextMember;

            if (memberIndex < membersNbr - 1) {
                jQuery('.boardChairman .active').removeClass('active').next().addClass('active');
            } else {
                jQuery('.boardChairman .active').removeClass('active');
                jQuery('.boardChairman .chairman:first').addClass('active');
            }

            if (jQuery('.boardChairman .chairman:last').hasClass('active')) {
                nextMember = jQuery('.boardChairman .chairman:first').children('h3').html();
            } else {
                nextMember = jQuery('.boardChairman .chairman.active').next().children('h3').html();
            }

            jQuery('#membersPopup .membersBody').html(jQuery('.boardChairman .chairman.active .memberPopupBody').html());
            jQuery('#membersPopup #membersNav .prev em').html(prevMember);
            jQuery('#membersPopup #membersNav .next em').html(nextMember);

        }
    })


    jQuery('#membersNav .prev').live('click', function () {

        if (jQuery('.boardMembersSection').hasClass('active')) {

            var memberIndex = jQuery('.boardMembers .active').index();
            var membersNbr = jQuery('.boardMembers > li').size();
            var prevMember;
            var nextMember = jQuery('.boardMembers .active .rCol h3').html();

            if (memberIndex > 0) {
                jQuery('.boardMembers .active').removeClass('active').prev().addClass('active');
            } else {
                jQuery('.boardMembers .active').removeClass('active');
                jQuery('.boardMembers li:last').addClass('active');
            }

            if (jQuery('.boardMembers > li:first').hasClass('active')) {
                prevMember = jQuery('.boardMembers li:last').find('h3').html();
            } else {
                prevMember = jQuery('.boardMembers .active').prev().find('h3').html();
            }

            jQuery('#membersPopup .membersBody').html(jQuery('.boardMembers .active .memberPopupBody').html());
            jQuery('#membersPopup #membersNav .prev em').html(prevMember);
            jQuery('#membersPopup #membersNav .next em').html(nextMember);

        } else if (jQuery('.boardChairman').hasClass('active')) {
            var memberIndex = jQuery('.boardChairman .active').index();
            var membersNbr = jQuery('.boardChairman .chairman').size();
            var prevMember;
            var nextMember = jQuery('.boardMembers .active .rCol h3').html();

            if (memberIndex > 0) {
                jQuery('.boardChairman .active').removeClass('active').prev().addClass('active');
            } else {
                jQuery('.boardChairman .active').removeClass('active');
                jQuery('.boardChairman .chairman:last').addClass('active');
            }

            if (jQuery('.boardChairman .chairman:first').hasClass('active')) {
                prevMember = jQuery('.boardChairman .chairman:last').find('h3').html();
            } else {
                prevMember = jQuery('.boardChairman .chairman.active').prev().find('h3').html();
            }

            jQuery('#membersPopup .membersBody').html(jQuery('.boardChairman .chairman.active .memberPopupBody').html());
            jQuery('#membersPopup #membersNav .prev em').html(prevMember);
            jQuery('#membersPopup #membersNav .next em').html(nextMember);
        }
    })


    /* ================================================= */
    /*     FRONT PAGE     */

    if (jQuery(".frontPage").length > 0) {
        //News
        jQuery('.frontPageNewsFilter').change(function () {
            GetNewsforFrontpage('10', '1', newsParameters.rootId, '1', '-1', '-1', '', '-1', this.value);
        });
    }

    function GetNewsforFrontpage(nrNews, currentPageIndex, rootID, newsPeriod, month, year, appendToDOM, paginationIndex, newsType) {
        var params = '{nrNews:\"' + nrNews + '\",currentPageIndex:\"' + currentPageIndex + '\",rootID:\"' + rootID + '\",newsPeriod:\"' + newsPeriod + '\",month:\"' + month + '\",year:\"' + year + '\",paginationIndex:\"' + paginationIndex + '\",newsType:\"' + newsType + '\"}';
        jQuery.ajax({
            type: "POST",
            url: '/ws/bccdws.asmx/GetNews',
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (arg) { //call successfull
                var items = jQuery.parseJSON(arg.d).NewsList;
                if (items.length > 0) {
                    jQuery('.bigSpot.newsBigSpot').html('');
                }

                var newsList = '<tbody>';
                jQuery.each(items, function (index) {
                    if (index == 0) {
                        var topNewsHtml = '<li>';
                        topNewsHtml += '<a href="#"><img src="' + this.Image + '"width="448" height="160"></img></a>';

                        topNewsHtml += '<div class="body"><h3>' + this.Title + '</h3>' + this.Abstract + '</div>';
                        topNewsHtml += '<p class="info">' + this.DateShow + '| ' + this.NewsType + ' | 3</p>';
                        topNewsHtml += '<p class="more"><a href="' + this.Link + '">Read More</a></p>';
                        topNewsHtml += '</li>';
                        jQuery('.bigSpot.newsBigSpot').html(topNewsHtml);
                    }

                    newsList += '<tr>';
                    newsList += '<td><a href="' + this.Link + '">' + this.Title + '</a></td>';
                    newsList += '</tr>';
                });
                newsList += '</tbody>';
                jQuery('.news').html(newsList);
                equalListHeight();
            }
        });
    }

    jQuery('.btnLoginSubmit').click(function () {
        var errCount = 0;
        errCount += ValidateMandatoryControl(jQuery(".txtUsername"));
        errCount += ValidateMandatoryControl(jQuery(".txtPassword"));
        if (errCount > 0) {
            jQuery('.loginPopup .txtUsername, .loginPopup .txtPassword').addClass('errorHighlight');
        }
        else {
            jQuery('.btnLoginSubmit').attr('disabled', 'disabled');
            CheckLogin(jQuery('.txtUsername').val(), jQuery('.txtPassword').val());
        }
        return false;
    });

    jQuery('.btnSubscribeExtranet').click(function () {
        var errCount = 0;
        errCount += ValidateMandatoryControl(jQuery(".txtEmail"));
        errCount += ValidateMandatoryControl(jQuery(".txtFirstName"));
        errCount += ValidateMandatoryControl(jQuery(".txtLastName"));
        errCount += ValidateMandatoryControl(jQuery(".txtCompany"));
        //        errCount += ValidateMandatoryControl(jQuery(".txtPasswordSubscribe"));
        //        errCount += ValidateMandatoryControl(jQuery(".txtConfirmPassword"));
        /*		
        if(jQuery('.txtPasswordSubscribe').val() != jQuery('.txtConfirmPassword').val()){
        errCount += 1;
        jQuery('.passwordMatchError').show();
        }
        */
        if (errCount > 0) {

        }

        else {
            jQuery('.btnLoginSubmit').attr('disabled', 'disabled');
            SubscribeExtranet(jQuery('.txtEmail').val(), jQuery('.txtFirstName').val(), jQuery('.txtMiddleName').val(), jQuery('.txtLastName').val(), jQuery('.txtCompany').val(), jQuery('.ddCountry').val());
        }
        return false;
    });

    jQuery('.btnSubscribeExtranetDisplay').click(function () {
        jQuery('.subscribeExtranet').show();
    })

    jQuery('.updateDataLink').click(function () {
        jQuery('.updateExtranetUser').show();
    })

    jQuery('.btnUpdate').click(function () {
        var errCount = 0;
        errCount += ValidateMandatoryControl(jQuery(".txtEmail"));
        errCount += ValidateMandatoryControl(jQuery(".txtFirstName"));
        errCount += ValidateMandatoryControl(jQuery(".txtLastName"));
        errCount += ValidateMandatoryControl(jQuery(".txtCompany"));


        if (errCount > 0) {
            //alert("invalid data");
        }
        else {
            //jQuery('.btnLoginSubmit').attr('disabled', 'disabled');
            UpdateExtranet(jQuery('.txtEmail').val(), jQuery('.txtFirstName').val(), jQuery('.txtMiddleName').val(), jQuery('.txtLastName').val(), jQuery('.txtPasswordSubscribe').val(), jQuery('.txtPhone').val(), jQuery('.txtMobilePhone').val());
        }
        return false;
    });

    jQuery('.rememberMe').click(function () {
        var errCount = 0;
        //alert("intra");
        errCount += ValidateMandatoryControl(jQuery(".txtUsername"));
        if (errCount > 0) {
            jQuery('.txtUsername').addClass('errorHighlight');
            jQuery('.txtPassword').removeClass('errorHighlight');
        }
        else {
            RememberPassword(jQuery('.txtUsername').val());
        }
        return false;
    });

    jQuery(".btnSignOut").click(function () {
        var params = '';

        jQuery.ajax({
            type: "POST",
            url: 'AjaxMethodes.aspx-logout=true.js'/*tpa=http://bccd.dk/layouts/Nemetos/Bccd/AjaxMethodes.aspx?logout=true*/,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (data) { //call successfull
                if (data != null && data != '') {
                    // alert(data.StatusCode);
                    location.reload();
                    // jQuery('.loginPopup').hide();
                }

            },
            error: function () {// error case
                alert('error');
            }

        });
    }
    )
    function CheckLogin(userName, password) {
        var params = '{userName:\"' + userName + '\",password:\"' + password + '\"}';

        jQuery.ajax({
            type: "POST",
            url: '/layouts/Nemetos/Bccd/AjaxMethodes.aspx?username=' + userName + '&password=' + password,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (data) { //call successfull
                //alert(data.StatusCode);
                if (data != null && data != '' && data.StatusCode == 'OK') {
                    //alert(data.StatusCode);
                    jQuery('.loginPopup').hide();
                    location.reload();
                }
                else {
                    alert('incorect  email and password');
                }

            },
            error: function () {// error case
                jQuery('.loginPopup .txtUsername, .loginPopup .txtPassword').addClass('errorHighlight');
            }
        });
    }
    function UpdateExtranet(email, firstName, middleName, lastName, password, phone, mobile) {
        var params = '';
        jQuery.ajax({
            type: "POST",
            url: '/layouts/Nemetos/Bccd/AjaxMethodes.aspx?email=' + email + '&firstName=' + firstName + '&middleName=' + middleName + '&lastName=' + lastName + '&password=' + password + '&phone=' + phone + '&mobile=' + mobile + '&update=yes',
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (data) { //call successfull
                if (data != null && data != '') {
                    //alert(data.StatusCode);
                    jQuery('.subscribeExtranet').hide();
                    location.reload();
                }

            },
            error: function () {// error case
                alert(jQuery('.extranetError').val());
            }
        });
    }

    function UpdateExtranetUser(email, firstName, middleName, lastName, company, country, password, phone, mobile) {
        var params = '';
        jQuery.ajax({
            type: "POST",
            url: '/layouts/Nemetos/Bccd/AjaxMethodes.aspx?email=' + email + '&firstName=' + firstName + '&middleName=' + middleName + '&lastName=' + lastName + '&company=' + company + '&country=' + country + '&password=' + password + '&phone=' + phone + '&mobile=' + mobile + '&update=yes',
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (data) { //call successfull
                if (data != null && data != '' && data.StatusCode.toLower() == 'ok') {
                    jQuery('.updateExtranetUser').hide();
                    location.reload();
                }

            },
            error: function () {// error case
                alert(jQuery('.extranetError').val());
            }
        });
    }
    function SubscribeExtranet(email, firstName, middleName, lastName, company, country) {
        var params = '';

        jQuery.ajax({
            type: "POST",
            url: '/layouts/Nemetos/Bccd/AjaxMethodes.aspx?email=' + email + '&firstName=' + firstName + '&middleName=' + middleName + '&lastName=' + lastName + '&company=' + company + '&country=' + country + '&subscribe=yes',
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (data) { //call successfull
                //alert(data.StatusCode.toLowerCase());
                if (data != null && data != '' && data.StatusCode.toLowerCase() == 'ok') {
                    alert('You have successfully subscribed to our extranet. Please check your email for your password.');
                    jQuery('.subscribeExtranet').hide();
                    location.reload();
                }
                if (data != null && data != '' && data.StatusCode.toLowerCase() != 'ok') {
                    alert(data.StatusCode);
                    jQuery('.subscribeExtranet').hide();
                    
                }
            },
            error: function () {// error case
                alert(jQuery('.extranetError').val());
            }
        });
    }
    function RememberPassword(userName) {
        var params = '{userName:\"' + userName + '\"}';
        jQuery.ajax({
            type: "POST",
            url: '/layouts/Nemetos/Bccd/AjaxMethodes.aspx?username=' + userName + '&rememberPassword=yes',
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: params,
            success: function (data) { //call successfull
                if (data != null && data.StatusCode != 'error') {
                    alert(data.StatusCode);
                }
                else {
                    if (data != null && data.StatusCode == 'error') {
                        alert('Error: only registered users, can recover their password');
                    }
                }

            },
            error: function () {// error case
                jQuery('.txtUsername').addClass('errorHighlight');
            }
        });
    }

    function equalListHeight() {
        if (jQuery('.twoCols.frontPage').size() == 0) {
            return true;
        }
        jQuery('.frontPage .listLinks').height('auto');

        var minHeight = 0;
        list1 = jQuery('.frontPage .listLinks:first').height();
        list2 = jQuery('.frontPage .listLinks:last').height();

        if (list1 > list2) {
            minHeight = list1;
        } else {
            minHeight = list2;
        }
        jQuery('.frontPage .listLinks').height(minHeight);
    }
    equalListHeight()
    /* ================================================= */
    /*     EVENTS LISTING     */

    if (jQuery("#eventsPageTop").length > 0) {
        //Populate Event Grids on document ready
        var evCat = GetQS('cat');
        GetEvents('10', '1', upcomingEventListParameters.rootId, 1, '-1', '-1', '.upcomingEventsTableHeader', evCat ? evCat : '-1', '-1'); //Get Upcoming Events
        GetEvents('10', '1', upcomingEventListParameters.rootId, 2, '-1', '-1', '.pastEventsTableHeader', evCat ? evCat : '-1', '-1'); //Get Past Events
        if (evCat) {
            jQuery('select[class$=EventsCategories]').each(function () {
                this.value = decodeURIComponent(evCat);
            });
        }

        //Upcoming Events Grid Filters
        jQuery("select[class^=eventsPerPageUpcoming]").change(function () {
            var t = this;
            jQuery("select[class^=eventsPerPageUpcoming]").each(function () {
                this.value = t.value;
            });
            upcomingEventListParameters.nrEvents = t.value;
            GetEvents(upcomingEventListParameters.nrEvents, '1', upcomingEventListParameters.rootId, 1, upcomingEventListParameters.month, upcomingEventListParameters.year, '.upcomingEventsTableHeader', upcomingEventListParameters.eventCategory, upcomingEventListParameters.paginationIndex);
        })
        jQuery('.selMonthUpcomingEvents').change(function () {
            upcomingEventListParameters.month = this.value;
            GetEvents(upcomingEventListParameters.nrEvents, '1', upcomingEventListParameters.rootId, 1, upcomingEventListParameters.month, upcomingEventListParameters.year, '.upcomingEventsTableHeader', upcomingEventListParameters.eventCategory, upcomingEventListParameters.paginationIndex);
        })
        jQuery('.selYearUpcomingEvents').change(function () {
            upcomingEventListParameters.year = this.value;
            GetEvents(upcomingEventListParameters.nrEvents, '1', upcomingEventListParameters.rootId, 1, upcomingEventListParameters.month, upcomingEventListParameters.year, '.upcomingEventsTableHeader', upcomingEventListParameters.eventCategory, upcomingEventListParameters.paginationIndex);
        })
        jQuery('.selUpcomingEventsCategories').change(function () {
            upcomingEventListParameters.eventCategory = this.value;
            GetEvents(upcomingEventListParameters.nrEvents, '1', upcomingEventListParameters.rootId, 1, upcomingEventListParameters.month, upcomingEventListParameters.year, '.upcomingEventsTableHeader', upcomingEventListParameters.eventCategory, upcomingEventListParameters.paginationIndex);
        })


        //Past Events Grid Filters
        jQuery("select[class^=eventsPerPagePast]").change(function () {
            var t = this;
            jQuery("select[class^=eventsPerPagePast]").each(function () {
                this.value = t.value;
            });
            pastEventListParameters.nrEvents = t.value;
            GetEvents(pastEventListParameters.nrEvents, '1', pastEventListParameters.rootId, 2, pastEventListParameters.month, pastEventListParameters.year, '.pastEventsTableHeader', pastEventListParameters.eventCategory, pastEventListParameters.paginationIndex);
        })
        jQuery('.selMonthPastEvents').change(function () {
            pastEventListParameters.month = this.value;
            GetEvents(pastEventListParameters.nrEvents, '1', pastEventListParameters.rootId, 2, pastEventListParameters.month, pastEventListParameters.year, '.pastEventsTableHeader', pastEventListParameters.eventCategory, pastEventListParameters.paginationIndex);
        })
        jQuery('.selYearPastEvents').change(function () {
            pastEventListParameters.year = this.value;
            GetEvents(pastEventListParameters.nrEvents, '1', pastEventListParameters.rootId, 2, pastEventListParameters.month, pastEventListParameters.year, '.pastEventsTableHeader', pastEventListParameters.eventCategory, pastEventListParameters.paginationIndex);
        })
        jQuery('.selPastEventsCategories').change(function () {
            pastEventListParameters.eventCategory = this.value;
            GetEvents(pastEventListParameters.nrEvents, '1', pastEventListParameters.rootId, 2, pastEventListParameters.month, pastEventListParameters.year, '.pastEventsTableHeader', pastEventListParameters.eventCategory, pastEventListParameters.paginationIndex);
        })
    }


    /* ================================================= */
    /*     News LISTING     */
    if (jQuery("#newsPageTop").length > 0) {
        GetNews('10', '1', newsParameters.rootId, 1, '-1', '-1', '.newsTableHeader', '-1', '-1'); //Get News
        GetNews('10', '1', newsParameters.rootId, 2, '-1', '-1', '.archiveTableHeader', '-1', '-1'); //Get News Archive

        //Upcoming Events Grid Filters
        jQuery("select[class^=newsPerPage]").change(function () {
            var t = this;
            jQuery("select[class^=newsPerPage]").each(function () {
                this.value = t.value;
            });
            newsParameters.nrNews = t.value;
            GetNews(newsParameters.nrNews, '1', newsParameters.rootId, 1, newsParameters.month, newsParameters.year, '.newsTableHeader', newsParameters.paginationIndex, newsParameters.newsType);
        })
        jQuery('.selMonthNews').change(function () {
            newsParameters.month = this.value;
            GetNews(newsParameters.nrNews, '1', newsParameters.rootId, 1, newsParameters.month, newsParameters.year, '.newsTableHeader', newsParameters.paginationIndex, newsParameters.newsType);
        })
        jQuery('.selYearNews').change(function () {
            newsParameters.year = this.value;
            GetNews(newsParameters.nrNews, '1', newsParameters.rootId, 1, newsParameters.month, newsParameters.year, '.newsTableHeader', newsParameters.paginationIndex, newsParameters.newsType);
        })
        jQuery('.selNewsType').change(function () {
            newsParameters.newsType = this.value;
            GetNews(newsParameters.nrNews, '1', newsParameters.rootId, 1, newsParameters.month, newsParameters.year, '.newsTableHeader', newsParameters.paginationIndex, newsParameters.newsType);
        })

        //Past Events Grid Filters
        jQuery("select[class^=archivePerPage]").change(function () {
            var t = this;
            jQuery("select[class^=archivePerPage]").each(function () {
                this.value = t.value;
            });
            archiveParameters.nrNews = t.value;
            GetNews(archiveParameters.nrNews, '1', archiveParameters.rootId, 2, archiveParameters.month, archiveParameters.year, '.archiveTableHeader', archiveParameters.paginationIndex, archiveParameters.newsType);
        })
        jQuery('.selectMonthNewsArchive').change(function () {
            archiveParameters.month = this.value;
            GetNews(archiveParameters.nrNews, '1', archiveParameters.rootId, 2, archiveParameters.month, archiveParameters.year, '.archiveTableHeader', archiveParameters.paginationIndex, archiveParameters.newsType);
        })
        jQuery('.selectYearNewsArchive').change(function () {
            archiveParameters.year = this.value;
            GetNews(archiveParameters.nrNews, '1', archiveParameters.rootId, 2, archiveParameters.month, archiveParameters.year, '.archiveTableHeader', archiveParameters.paginationIndex, archiveParameters.newsType);
        })
        jQuery('.selArchiveType').change(function () {
            archiveParameters.newsType = this.value;
            GetNews(archiveParameters.nrNews, '1', archiveParameters.rootId, 2, archiveParameters.month, archiveParameters.year, '.archiveTableHeader', archiveParameters.paginationIndex, archiveParameters.newsType);
        })
    }
});

function GetEvents(nrEvents, currentPageIndex, rootID, eventPeriod, month, year, appendToDOM, eventCategory, paginationIndex) {
    var params = '{nrEvents:\"' + nrEvents + '\",currentPageIndex:\"' + currentPageIndex + '\",rootID:\"' + rootID + '\",eventPeriod:\"' + eventPeriod + '\",month:\"' + month + '\",year:\"' + year + '\",eventCategory:\"' + eventCategory + '\",paginationIndex:\"' + paginationIndex + '\"}';
    jQuery.ajax({
        type: "POST",
        url: '/ws/bccdws.asmx/GetLatestEv',
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        data: params,
        success: function (arg) { //call successfull
            var response = jQuery.parseJSON(arg.d);
            if (response.StatusCode == 'Error') {
                var errorBuilder = '<tr><td>' + response.ErrorMessage + '</td><tr>';
                jQuery(errorBuilder).insertAfter(appendToDOM);
            }
            else if (response.StatusCode == 'OK') {

                //Clear events table
                jQuery(appendToDOM).siblings().each(function () {
                    jQuery(this).remove();
                });
                var eventBuilder = '';
                var eventsList = '';
                jQuery.each(response.EventsList, function (index) {
                    eventBuilder += '<tr>';
                    eventBuilder += '<td>' + this.DateShow + '</td>';
                    eventBuilder += '<td>' + this.TimeShow + '</td>';
                    eventBuilder += '<td>' + this.Type + '</td>';
                    eventBuilder += '<td><a href="' + this.Link + '">' + this.Title + '</a></td>';
                    eventBuilder += '<td>' + this.Venue + '</td>';
                    eventBuilder += '</tr>';
                    eventsList += eventBuilder;
                    eventBuilder = '';
                });
                jQuery(eventsList).insertAfter(appendToDOM);

                if (eventPeriod == 1) { //upcoming
                    jQuery('div[eventperiod="upcoming"]').find('.pageNav').append(response.PaginationBuilder);
                    jQuery('div[eventperiod="upcoming"]').find('.listPage').show();
                }
                if (eventPeriod == 2) { //past
                    if (response.PaginationIndex > 1) {
                        jQuery('div[eventperiod="past"]').find('.pageNav').html('');
                        jQuery('div[eventperiod="past"]').find('.pageNav').append(response.PaginationBuilder);
                    }
                    jQuery('div[eventperiod="past"]').find('.listPage').show();
                }
            }
        }
    });
	
	
	
	
	
	
	
	
	
	
};

function GetNews(nrNews, currentPageIndex, rootID, newsPeriod, month, year, appendToDOM, paginationIndex, newsType) {
    var params = '{nrNews:\"' + nrNews + '\",currentPageIndex:\"' + currentPageIndex + '\",rootID:\"' + rootID + '\",newsPeriod:\"' + newsPeriod + '\",month:\"' + month + '\",year:\"' + year + '\",paginationIndex:\"' + paginationIndex + '\",newsType:\"' + newsType + '\"}';
    jQuery.ajax({
        type: "POST",
        url: '/ws/bccdws.asmx/GetNews',
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        data: params,
        success: function (arg) { //call successfull
            var response = jQuery.parseJSON(arg.d);
            if (response.StatusCode == 'Error') {
                var errorBuilder = '<tr><td>' + response.ErrorMessage + '</td><tr>';
                jQuery(errorBuilder).insertAfter(appendToDOM);
            }
            else if (response.StatusCode == 'OK') {
                //Clear news table
                jQuery(appendToDOM).siblings().each(function () {
                    jQuery(this).remove();
                });

                var newsBuilder = '';
                var newsList = '';
                jQuery.each(response.NewsList, function (index) {
                    newsBuilder += '<tr>';
                    newsBuilder += '<td><a href="' + this.Link + '">' + this.Title + '</a></td>';
                    newsBuilder += '<td>' + this.DateShow + '</td>';
                    newsBuilder += '<td>' + this.NewsType + '</td>';
                    newsBuilder += this.PdfLink ? '<td><a href="' + this.PdfLink + '" class="download">download</a></td>' : '<td></td>';
                    newsBuilder += '</tr>';
                    newsList += newsBuilder;
                    newsBuilder = '';
                });
                jQuery(newsList).insertAfter(appendToDOM);

                if (newsPeriod == 1) { //news
                    jQuery('ul[eventperiod="news"]').append(response.PaginationBuilder);
                    jQuery('ul[eventperiod="news"]').show();
                }
                if (newsPeriod == 2) { //archive
                    jQuery('ul[eventperiod="archive"]').html('');
                    jQuery('ul[eventperiod="archive"]').append(response.PaginationBuilder);
                    jQuery('ul[eventperiod="archive"]').show();
                }
            }
        }
    });
};


function ValidateNewsletterForm() {
    var errCount = 0;
    errCount += ValidateMandatoryControl(jQuery("input[id$=Name]"));
    errCount += ValidateMandatoryControl(jQuery("input[id$=Email]"));
    errCount += ValidateEmail(jQuery("input[id$=Email]"));

    if (errCount > 0) {
        return false;
    }
    else return true;
}

function ValidateMandatoryControl(mandatoryElement) {
    if (mandatoryElement.val() == '') {
        mandatoryElement.addClass('errorHighlight');
        return 1;
    } else {
        mandatoryElement.removeClass('errorHighlight');
    }
    return 0;
}

function ValidateEmail(mandatoryElement) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(mandatoryElement.val()) == false) {
        mandatoryElement.addClass('errorHighlight');
        return 1;
    }
    else {
        mandatoryElement.removeClass('errorHighlight');
    }
    return 0;
}
