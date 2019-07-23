jQuery(document).ready(function($) {

'use strict';

// Trigger window scroll functions to update page number on refresh
//window.scrollTo(window.scrollX, window.scrollY);

$('.screen-wipe').css('transform','translate3d(0, -100vh, 0)');

$('a').click(function() {
	if($(this).attr('target') == '_blank') {
		return;
	};
	if($(this).closest('.current-section').length) {
    // inside .current-section
		return;
	}
	if($(this).closest('.back2top').length) {
		return;
	}
	var href = $(this).attr('href');
	setTimeout(function() {window.location = href}, 1000);
	$('nav').removeClass('visible');
	$('.screen-wipe').css('transform','translate3d(0, 0, 0)');
	return false;
});

// Hamburger menu
var $hamburger = $('.hamburger');
$hamburger.on('click', function(e) {
	$hamburger.toggleClass('is-active');
	if ( $hamburger.is( '.is-active' ) ) {
		//$('#parallax').removeClass('moveForward');
		//$('#parallax').addClass('moveBack');
		$('nav').addClass('visible');
		setTimeout(function() {$('.hamburger-inner').removeClass('black')}, 500);
	} else {
		$('nav').removeClass('visible');
		// Trigger window scroll functions to update page number on refresh
		$(window).scrollTop($(window).scrollTop()+1);
		//$('#parallax').removeClass('moveBack');
		//$('#parallax').addClass('moveForward');
	}
});

if ( $('body').is('.home') ) {
	// Start ScrollReveal
	window.sr = ScrollReveal();
	sr.reveal('h2, h3',{
		origin: 'bottom',
		distance: '0px',
		duration: 2000,
		interval: 500,
		easing: 'ease',
		reset: true
	})
	sr.reveal('.has-2-columns p',{
		origin: 'bottom',
		delay: 500,
		distance: '100px',
		duration: 2000,
		easing: 'ease',
		reset: true
	})
	sr.reveal('.b-face.has-2-columns p',{
		origin: 'bottom',
		delay: 500,
		distance: '100px',
		duration: 2000,
		interval: 500,
		easing: 'ease',
		reset: true
	})
	sr.reveal('ol li',{
		origin: 'bottom',
		delay: 500,
		distance: '100px',
		duration: 1000,
		interval: 500,
		easing: 'ease',
		reset: false
	})
	sr.reveal('.floating-elements',{
		origin: 'right',
		distance: '500px',
		duration: 3000,
		interval: 200,
		easing: 'ease',
		reset: true
	})
	sr.reveal('.largeicons .wp-block-column',{
		origin: 'right',
		distance: '100px',
		duration: 500,
		interval: 200,
		easing: 'ease',
		reset: true
	})

	// Adjust videos
	document.querySelector('.mockup video').playbackRate = 0.5;
	document.querySelector('.about video').playbackRate = 0.5;

	// Slideshow
	$('.slideshow1 > div:gt(0)').hide();
	$('.slideshow2 > div:gt(0)').hide();
	$('.slideshow3 > div:gt(0)').hide();

	function showNextSlide() {
		$('.slideshow1 > div:first')
			.fadeOut(2000)
			.next()
			.fadeIn(2000)
			.end()
			.appendTo('.slideshow1');
		$('.slideshow2 > div:first')
			.fadeOut(2000)
			.next()
			.fadeIn(2000)
			.end()
			.appendTo('.slideshow2');
		$('.slideshow3 > div:first')
			.fadeOut(2000)
			.next()
			.fadeIn(2000)
			.end()
			.appendTo('.slideshow3');
	};

	var interval;
	interval = setInterval(showNextSlide, 7000);

}

if ( $('body').is('.portfolio') ) {
	// Force window scroll (needs timeout to work properly)
	$(window).scrollTop(1);
  setTimeout(function() {
		$(window).scrollTop(0);
  }, 200);

	// Start ScrollReveal
	window.sr = ScrollReveal();
	sr.reveal('article > h2:first-of-type, .wp-block-column p:not(:first-of-type)',{
		origin: 'bottom',
		distance: '0px',
		duration: 2000,
		interval: 500,
		easing: 'ease',
		reset: false
	})
	sr.reveal('article > h2:first-of-type',{
		origin: 'top',
		distance: '100px',
		delay: 1000
	})

	setTimeout(function() {
		$('article > h2:first-of-type').append('.');
  }, 2000);
	setTimeout(function() {
		$('article > h2:first-of-type').append('.');
  }, 2400);
	setTimeout(function() {
		$('article > h2:first-of-type').append('.');
  }, 2800);

}

if ( $('body').is('.contact') ) {
	// Adjust video start time for desktop / mobile
	var $hamburger = $('.hamburger');
	if($('button.hamburger').css('display') == 'none') {
		document.querySelector('video').addEventListener('loadedmetadata', function() { this.currentTime = 4.5; }, false);
	} else {
		document.querySelector('video').addEventListener('loadedmetadata', function() { this.currentTime = 36; }, false);
	}
}


$(window).scroll(function(){
	//alert("scroll");
	var scrollHeight = $(window).height();
	var scrollMid = scrollHeight / 2;
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition > 1) {
		$(".header").addClass("shrunk");
	}
	else {
		$(".header").removeClass("shrunk");
	}

	if (isInView($('footer'))) {
		$('.current-section a:first-of-type').css('opacity','0');
		if($('button.hamburger').css('display') == 'none') {
			$('.social-links').css('opacity','0');
		};
	} else {
		$('.current-section a:first-of-type').css('opacity','1');
		$('.social-links').css('opacity','1');
	}

	if ( $('body').is('.home') ) {
		// Fade top image if in view
		if (scrollPosition < scrollHeight) {
			$('.b-face').css('background-color', 'rgba(0,0,0,' + (0.2 + (scrollPosition / scrollHeight)) + ')');
		}

		// Fade on scrolls
		$('.b-fade').each(function() {
			if (isInView($(this))) {
				var eTop = $(this).offset().top;
				$(this).css('background-color', 'rgba(0,0,0,' + (0.2 + ( Math.abs(( eTop - scrollMid ) - ( scrollPosition - (scrollHeight / 2) )) / scrollHeight )));
				$('.uagb-section__video-wrap video', this).css('opacity', (1 - (Math.abs( eTop - scrollPosition ) / scrollHeight)));
			}
		})

		// Update section number
		if (isInView($('.section7'))) {
			$('.current-section a:first-of-type').html('07');
		} else if (isInView($('.section6'))) {
			$('.current-section a:first-of-type').html('06');
		} else if (isInView($('.section5'))) {
			$('.current-section a:first-of-type').html('05');
		} else if (isInView($('.section4'))) {
			$('.current-section a:first-of-type').html('04');
		} else if (isInView($('.section3'))) {
			$('.current-section a:first-of-type').html('03');
		} else if (isInView($('.section2'))) {
			$('.current-section a:first-of-type').html('02');
		} else if (isInView($('.section1'))) {
			$('.current-section a:first-of-type').html('01');
		}
	}

	if ( $('body').is('.portfolio') ) {
		// Fade on scrolls
		$('.timeline figure img').each(function() {
			if (isInView($(this))) {
				var eMid = $(this).offset().top - ( $(this).height() / 2 );
				$(this).css('opacity', ((1 - (Math.abs( eMid - scrollPosition ) / scrollHeight))));
			}
		})

		// Update section number
		if (isInView($('.section4'))) {
			$('.current-section a:first-of-type').html('04');
		} else if (isInView($('.section3'))) {
			$('.current-section a:first-of-type').html('03');
		} else if (isInView($('.section2'))) {
			$('.current-section a:first-of-type').html('02');
		} else if (isInView($('.section1'))) {
			$('.current-section a:first-of-type').html('01');
		}

		// Parallax portfolio text
		if($('button.hamburger').css('display') == 'none') {
			$('.timeline .has-2-columns .wp-block-column:last-of-type').each(function() {
				if (isInView($(this))) {
					var eTop = $(this).offset().top;
					$(this).find('h3, p:first-of-type').css('transform', 'translate3d(0px, ' + (( eTop - ( scrollPosition + (scrollHeight / 2))) / 2) + 'px,0px)');
				}
			})
		}
	}

});


// Added 100 to allow for url bar on mobile
function isInView(elem){
  return $(elem).offset().top < ($(window).height() + $(window).scrollTop()+100) ;
}
function isAtTop(elem){
  return $(elem).offset().top < ($(window).scrollTop()+100) ;
}


});
