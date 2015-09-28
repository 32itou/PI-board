jQuery.fn.updateWithText = function(text, speed)
{
	var dummy = $('<div/>').html(text);
	

	if ($(this).html() != dummy.html())
	{
		$(this).fadeOut(speed/2, function() {
			$(this).html(text);
			$(this).fadeIn(speed/2, function() {
				//done
			});
		});
	}
}

jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

function roundVal(temp)
{
	return Math.round(temp * 10) / 10;
}



jQuery(document).ready(function($) {

	var news = [];
	var newsIndex = 0;
	
	var eventList = [];

	var lastCompliment;
	var compliment;

    moment.lang(lang);

	
	(function updateTime()
	{
        var now = moment();
        var date = now.format('LLLL').split(' ',4);
        date = date[0] + ' ' + date[1] ;

		$('.date').html(date);
		$('.time').html(now.format('HH') + ':' + now.format('mm') + '<span class="sec">'+now.format('ss')+'</span>');

		setTimeout(function() {
			updateTime();
		}, 1000);
	})();


	
(function updateCurrentWeather()
	{
		$.getJSON('http://api.openweathermap.org/data/2.5/weather', weatherParams, updateCurrentWeatherData);

		setTimeout(function() {
			updateCurrentWeather(true);
		}, 300000);

	})();

	
	(function updateSwissWeather()
	{	
		$.getJSON( "http://www.prevision-meteo.ch/services/json/pully", null, updateSwissWeatherData );
	
			setTimeout(function() {
			updateSwissWeather();
		}, 300000);
	})();	
	(function updateMoonPhase()
	{	
		var today = new Date();
		var moon = SunCalc.getMoonIllumination(today);
		var fraction = moon['fraction'];
		drawPlanetPhase(document.getElementById('moon'), fraction, true);
			setTimeout(function() {
			updateMoonPhase();
		}, 300000);
	})();

	
	
});

function showMenu()
{
 /*** 
  * Run this code when the #toggle-menu link has been tapped
  * or clicked
  */
 /*$( '#toggle-menu' ).on( 'touchstart click', function(e) {
  e.preventDefault();
 */
  var $body = $( 'body' ),
      $page = $( '#mainpage' ),
      $menu = $( '#menu' ),
 
      /* Cross browser support for CSS "transition end" event */
      transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
 
  /* When the toggle menu link is clicked, animation starts */
  $body.addClass( 'animating' );
 
  /***
   * Determine the direction of the animation and
   * add the correct direction class depending
   * on whether the menu was already visible.
   */
  if ( $body.hasClass( 'menu-visible' ) ) {
   $body.addClass( 'right' );
  } else {
   $body.addClass( 'left' );
  }
  
  /***
   * When the animation (technically a CSS transition)
   * has finished, remove all animating classes and
   * either add or remove the "menu-visible" class 
   * depending whether it was visible or not previously.
   */
  $page.on( transitionEnd, function() {
   $body
    .removeClass( 'animating left right' )
    .toggleClass( 'menu-visible' );
 
   $page.off( transitionEnd );
  } );
 } ;
