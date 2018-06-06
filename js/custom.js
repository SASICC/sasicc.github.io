	jQuery(function ($) { "use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	window.onload = function () {
		document.getElementById('loading-mask').style.display = 'none';
	}

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

		var gDw = new ProgressBar.Circle('#gDw', {
			color: '#035',
		  strokeWidth: 4,
		  trailWidth: 1,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#fff', width: 1 },
		  to: { color: '#035', width: 4 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100);
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value);
		    }

		  }
		});

		var gD = new ProgressBar.Circle('#gD', {
			color: '#035',
		  strokeWidth: 4,
		  trailWidth: 1,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#fff', width: 1 },
		  to: { color: '#035', width: 4 },
		  // Set default step function for all animate calls
		  step: function(state, gD) {
		    gD.path.setAttribute('stroke', state.color);
		    gD.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(gD.value() * 100);
		    if (value === 0) {
		      gD.setText('');
		    } else {
		      gD.setText(value);
		    }

		  }
		});

		var gH = new ProgressBar.Circle('#gH', {
			color: '#035',
		  strokeWidth: 4,
		  trailWidth: 1,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#fff', width: 1 },
		  to: { color: '#035', width: 4 },
		  // Set default step function for all animate calls
		  step: function(state, gH) {
		    gH.path.setAttribute('stroke', state.color);
		    gH.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(gH.value() * 100);
		    if (value === 0) {
		      gH.setText('');
		    } else {
		      gH.setText(value);
		    }

		  }
		});

		var gM = new ProgressBar.Circle('#gM', {
			color: '#035',
		  strokeWidth: 4,
		  trailWidth: 1,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#fff', width: 1 },
		  to: { color: '#035', width: 4 },
		  // Set default step function for all animate calls
		  step: function(state, gH) {
		    gH.path.setAttribute('stroke', state.color);
		    gH.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(gH.value() * 100);
		    if (value === 0) {
		      gH.setText('');
		    } else {
		      gH.setText(value);
		    }

		  }
		});



		gDw.animate(0.80);
		gD.animate(0.80);
		gH.animate(0.80);
		gM.animate(0.80);


	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	 var containerEl1 = document.querySelector('[data-ref="container-1"]');
	 //var containerEl2 = document.querySelector('[data-ref="container-2"]');

	 var config = {
		 controls: {
			 scope: 'local'
		 }
	 };

	 var mixer1 = mixitup(containerEl1, config);
	 //var mixer1 = mixitup(containerEl2, config);


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
