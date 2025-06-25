

// Custom-mav js//
$(window).on('scroll', function(event) {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 70) {
       $('.header_menu').addClass('fixed-top animated slideInDown');
  } else{
    $('.header_menu').removeClass('fixed-top animated slideInDown');
  } 
});



"use strict";


/*======== Doucument Ready Function =========*/
jQuery(document).ready(function () {

    // slicknav
  /**
   * Slicknav - a Mobile Menu
   */
  var $slicknav_label;
  $('#responsive-menu').slicknav({
    duration: 500,
    easingOpen: 'easeInExpo',
    easingClose: 'easeOutExpo',
    closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
    openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
    prependTo: '#slicknav-mobile',
    allowParentLinks: true,
    label:"" 
  });

  
  /**
   * Sticky Header
   */
      
  $(window).scroll(function(){

    if( $(window).scrollTop() > 10 ){

      $('.navbar').addClass('navbar-sticky-in')

    } else {
      $('.navbar').removeClass('navbar-sticky-in')
    }

  })
  
  /**
   * Main Menu Slide Down Effect
   */
   
  var selected = $('#navbar li');
  // Mouse-enter dropdown
  selected.on("mouseenter", function() {
      $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
  });

  // Mouse-leave dropdown
  selected.on("mouseleave", function() {
      $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
  });

  /**
   *  Arrow for Menu has sub-menu
   */
  if ($(window).width() > 992) {
    $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
  }

});


(function () {
  var doc = document.documentElement;
  var w = window;

  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;

  var header = document.getElementById('header_menu');
  var toggled;
  var threshold = 200;

  if (!header) return; // ✅ Prevent error if header is missing

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      curDirection = 2; // down
    } else {
      curDirection = 1; // up
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  var toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add('hide');
      jQuery('.sticky1').addClass('tab-sticky');
    } else if (curDirection === 1) {
      header.classList.remove('hide');
      jQuery('.sticky1').removeClass('tab-sticky');
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener('scroll', checkScroll);
})();
