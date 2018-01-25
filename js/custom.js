jQuery(function ($) { "use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	window.onload = function () {
		document.getElementById('loading-mask').style.display = 'none';
	}


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

	var bar = new ProgressBar.Line(line, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1400,
		color: '#035',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'}
		});

		bar.animate(1.0)



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
