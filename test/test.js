function dostuff( data ) {
	console.log(data['fcst_day_0']['hourly_data']['14H00']);
    for(var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
};
$(document).ready( function($) {
    
	
	// get today's sunlight times for London
//var times = SunCalc.getTimes(new Date(), 51.5, -0.1);
var today = new Date();
var moon = SunCalc.getMoonIllumination(today);
var fraction = moon['fraction'];
console.log(today);
drawPlanetPhase(document.getElementById('test'), fraction, true);

});