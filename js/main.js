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
        $('#pagemenu').click(function(){ 
    console.log('ddd');
    $( this ).slideUp();
    
});


	
});

function onLoad()
	{
        $("#content").load('pagehome.php');

	};


