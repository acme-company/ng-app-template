//$(document).ready(function() {
//    var stickyOffset = $('.site-header').height() + 110;
//    $(window).scroll(function() {
//        var sticky = $('.site-header'),
//            scroll = $(window).scrollTop();

//        if (scroll > stickyOffset) sticky.addClass('floating-header');
//        else sticky.removeClass('floating-header');
//    });

//});


$(document).ready(function () {
    function toggleContact(el, pos) {
        if ($(window).height() >= 700) {
            if (pos < 170) {
                //el.fadeOut('fast');
                //el.fadeIn();
                $(".site-header").removeClass("floating-header");
            } else if (pos > 126) {
                if (!$(".site-header").hasClass("floating-header")) {
                    $(".site-header").addClass("floating-header");
                }
                //el.fadeIn();
            } else {
                //el.fadeOut('fast');
            }
        } else {
            if ($(".site-header").hasClass("floating-footer")) {
                $(".site-header").removeClass("floating-footer");
            }
        }
    }

    function ScrollHandler() {
        var
			$window = $(window),
			$cFoot = $('.site-header'),
			$scrollTop = 0;

        $scrollTop = $window.scrollTop();
        if ($cFoot.length) {
            toggleContact($cFoot, $scrollTop);
        }
    }

    function ShowFooterOnScroll() {
        if ($("#content").height() > $(window).height()) //we have a vertical scrollbar
        {
            //$(".footer-contact").addClass("floating-footer");
            $(window).scroll(ScrollHandler);
        }
        
    }

    function addEvent(evnt, elem, func) {

        if (elem.addEventListener) {  // W3C DOM
            elem.addEventListener(evnt, func, false);
        }
        else if (elem.attachEvent) { // IE DOM
            elem.attachEvent("on" + evnt, func);
        }
        else { // No much to do

            elem["on" + evnt] = func;
        }
    }

    //function setHeaderSize() {
    //    $('section#header').removeAttr("style");
    //    var navheight = $('section#header').height();
    //    $('section#header').css({
    //        'height': navheight,
    //        'overflow': 'hidden'
    //        });
    //}

    //setHeaderSize();
    addEvent("Scroll", window, ShowFooterOnScroll());

});

//if ($('#topLink').length > 0) {
//    $(document).scroll(function () {
//        if ($(document).scrollTop() > 250) {
//            var topPos = $(window).innerHeight() - 160;
//            var fromBottom = Math.max(0, 130 + ($(document).scrollTop() + $(window).innerHeight()) - $(document).innerHeight());
//            topPos -= fromBottom;
//            $('#topLink').removeClass('hidden');
//            $('#topLink').css({ "top": topPos + "px" });
//        } else {
//            $('#topLink').addClass('hidden');
//        }
//    });
//}