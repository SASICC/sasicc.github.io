jQuery(function ($) { "use strict";

/* Home Slideshow Vegas
 -----------------------------------------------*/
$(function() {
   $('body').vegas({
       slides: [
           { src: './img/body/img-body-1.jpg' },
           { src: './img/body/img-body-2.jpg' },
           { src: './img/body/img-body-3.jpeg' },
           { src: './img/body/img-body-4.jpg' },
           { src: './img/body/img-body-5.jpg' }
       ],
       timer: false,
       transition: [ 'zoomIn', ],
       animation: ['kenburns']
   });

 });


/*
*/
/* ========================================================================= */
/*	Nice Scroll - Custom Scrollbar
/* ========================================================================= */

var nice = $("html").niceScroll({
  cursorborderradius: 0,
  cursorwidth: "8px",
  cursorfixedheight: 150,
  cursorcolor: "#035",
  zindex: 9999,
  cursorborder: 0,
});



/* ========================================================================= */
/*	Menu item highlighting
/* ========================================================================= */


$('#nav').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 1500,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'easeInOutExpo'
});

});

/* ========================================================================= */
/*	On scroll fade/bounce fffect
/* ========================================================================= */

wow = new WOW({
  animateClass: 'animated',
  offset: 120
});
wow.init();
/* ========================================================================= */
/*	Parallax Sections
/* ========================================================================= */


"use strict";

$(window).bind("load", function () {
 //parallaxInit()
});
