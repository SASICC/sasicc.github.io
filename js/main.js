	jQuery(function ($) { "use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */


	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 700;
	  //alert(batas);

	  if (top > height) {
		jQuery('.navbar').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar').removeClass('menu-scroll');
	  }
	});


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

		  		   // Get the Sequence element
  var sequenceElement = document.getElementById("sequence");

  var options = {
    // Place your Sequence options here to override defaults
    // See: https://sequencejs.com/documentation/#options
		autoPlay: true,
		autoPlayInterval: 500,
		keyNavigation: true,
    fadeStepWhenSkipped: false
  }

  // Launch Sequence on the element, and with the options we specified above
  var mySequence = sequence(sequenceElement, options);

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
	/*	Scroll Up / Back to top
	/* ========================================================================= */

	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$("#scrollUp").fadeIn(200);
		} else {
			$("#scrollUp").fadeOut(200);
		}
	});

	$('#scrollUp').click(function() {
		$('html, body').stop().animate({
			scrollTop : 0
		}, 1500, 'easeInOutExpo');
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


	function rotateCard(btn){
         var $card = $(btn).closest('.card-container');
         console.log($card);
         if($card.hasClass('hover')){
             $card.removeClass('hover');
         } else {
             $card.addClass('hover');
         }
     }


	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	(function() {

		var count = {
		  initialized : false,
		  initialize : function() {
			if (this.initialized)
			  return;
			this.initialized = true;
			this.build();
		  },
		  build : function() {
			this.animations();
		  },
		  animations : function() {
			// Count To
			$(".counters-item [data-to]").each(function() {
			  var $this = $(this);
			  $this.appear(function() {
				$this.countTo({});
			  }, {
				accX : 0,
				accY : -150
			  });
			});
		  },
		};
		count.initialize();
	})();


	/* ========================================================================= */
	/*	Skills Chart
	/* ========================================================================= */

	var dn = new ProgressBar.Line('#dn', {
		strokeWidth: 4,
		easing: 'easeOut',
		duration: 1400,
		color: '#035',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
			 style: {
				 // Text color.
				 // Default: same as stroke color (options.color)
				 color: '#fff',
				 position: 'absolute',
				 right: '50%',
				 top: '0',
				 padding: 0,
				 margin: 0,
				 fontSize:'0.7em',
				 transform: null
			 },
			 transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
      }
 		},
		 from: {color: '#eee'},
		 to: {color: '#035'},
		 step: (state, dn, attachment) => {
			  dn.path.setAttribute('stroke', state.color);
				dn.setText(Math.round(dn.value() * 100) + ' %');
		 }
		});

		var dr = new ProgressBar.Line('#dr', {
			strokeWidth: 4,
			easing: 'easeInOut',
			duration: 1400,
			color: '#035',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: {width: '100%', height: '100%'},
			text: {
				 style: {
					 // Text color.
					 // Default: same as stroke color (options.color)
					 color: '#fff',
					 position: 'absolute',
					 right: '50%',
					 top: '0',
					 padding: 0,
					 margin: 0,
					 fontSize:'0.7em',
					 transform: null
				 },
				 transform: {
	                prefix: true,
	                value: 'translate(-50%, -50%)'
	      }
	 		},
			 from: {color: '#fff'},
			 to: {color: '#035'},
			 step: (state, dr, attachment) => {
				  dr.path.setAttribute('stroke', state.color);
					dr.setText(Math.round(dr.value() * 100) + ' %');
			 }
		});

		var dw = new ProgressBar.Line('#dw', {
			strokeWidth: 4,
			easing: 'easeInOut',
			duration: 1400,
			color: '#035',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: {width: '100%', height: '100%'},
			text: {
				 style: {
					 // Text color.
					 // Default: same as stroke color (options.color)
					 color: '#fff',
					 position: 'absolute',
					 right: '50%',
					 top: '0',
					 padding: 0,
					 margin: 0,
					 fontSize:'0.7em',
					 transform: null
				 },
				 transform: {
	                prefix: true,
	                value: 'translate(-50%, -50%)'
	      }
	 		},
			 from: {color: '#fff'},
			 to: {color: '#035'},
			 step: (state, dw, attachment) => {
				  dw.path.setAttribute('stroke', state.color);
					dw.setText(Math.round(dw.value() * 100) + ' %');
			 }
		});
		var m = new ProgressBar.Line('#m', {
			strokeWidth: 4,
			easing: 'easeInOut',
			duration: 1400,
			color: '#035',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: {width: '100%', height: '100%'},
			text: {
				 style: {
					 // Text color.
					 // Default: same as stroke color (options.color)
					 color: '#fff',
					 position: 'absolute',
					 right: '50%',
					 top: '0',
					 padding: 0,
					 margin: 0,
					 fontSize:'0.7em',
					 transform: null
				 },
				 transform: {
	                prefix: true,
	                value: 'translate(-50%, -50%)'
	      }
	 		},
			 from: {color: '#fff'},
			 to: {color: '#035'},
			 step: (state, m, attachment) => {
				  m.path.setAttribute('stroke', state.color);
					m.setText(Math.round(m.value() * 100) + ' %');
			 }
		});

		dn.animate(0.75)
		dr.animate(0.70)
		dw.animate(0.80)
		m.animate(0.80)



	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	 var containerEl1 = document.querySelector('[data-ref="container-1"]');
	 var containerEl2 = document.querySelector('[data-ref="container-2"]');

	 var config = {
		 controls: {
			 scope: 'local'
		 }
	 };

	 var mixer1 = mixitup(containerEl1, config);
	 var mixer1 = mixitup(containerEl2, config);





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
function onReady(callback) {
	var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 200);
}

function setVisible(selector, visible) {
	document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

"use strict";

$(window).bind("load", function () {
	onReady(function() {
	 setVisible('#loading-mask', false);
 });
});
