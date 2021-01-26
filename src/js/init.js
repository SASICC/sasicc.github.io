
(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				href: '../styles/style.less',
				containers: 1600,
				grid: { gutters: ['2em', 0] }
			},
			xlarge: {
				media: '(max-width: 1680px)',
				href: '../styles/style-xlarge.css',
				containers: 1200
			},
			large: {
				media: '(max-width: 1280px)',
				href: '../styles/style-large.css',
				containers: 960,
				grid: { gutters: ['1.5em', 0] },
				viewport: { scalable: false }
			},
			medium: {
				media: '(max-width: 980px)',
				href: '../styles/style-medium.css',
				containers: '90%'
			},
			small: {
				media: '(max-width: 736px)',
				href: '../styles/style-small.css',
				containers: '90%',
				grid: { gutters: ['1.25em', 0] }
			},
			xsmall: {
				media: '(max-width: 480px)',
				href: '../styles/style-xsmall.css',
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navPanel: {
					animation: 'pushX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				}
			}
		}
	});

	$(function() {

		// ...

	});

})(jQuery);
