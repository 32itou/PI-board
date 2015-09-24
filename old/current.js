//current weather of Pully on opendata.ch

function get_XmlHttp() {
  // create the variable that will contain the instance of the XMLHttpRequest object (initially with null value)
  var xmlHttp = null;

  if(window.XMLHttpRequest) {		// for Forefox, IE7+, Opera, Safari, ...
    xmlHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {	// for Internet Explorer 5 or 6
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  return xmlHttp;
}

// sends data to an external file and return the received response
(function makerequest() {
  var request =  get_XmlHttp();			// call the function for the XMLHttpRequest instance

  request.open("GET", "http://data.geo.admin.ch.s3.amazonaws.com/ch.meteoschweiz.swissmetnet/VQHA69.txt");			// define the request
  request.send(null);	   	// sends data


   
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
		var text = request.responseText;
		var n = text.search("PUY"); 
		
		var raw_data = text.substring(n, n + 64);
		var data = raw_data.split('|');
		var temp = data[2];
		temp = Math.round(Number(temp) + 0.7,1);
		var wind_speed = data[6];
		var wind_direction = data[5];
		var wind_dir_symbol = 'empty';
		document.getElementById('windspeed').innerHTML = wind_speed + ' km/h';
		document.getElementById('temp').innerHTML = temp + '&#176;';
		if (wind_direction <= 22.5 || wind_direction >= 337.5){
			wind_dir_symbol = 'wi-wind-north';
		}
		if (wind_direction > 22.5 && wind_direction < 67.5){
			wind_dir_symbol = 'wi-wind-north-east';
		}
		if (wind_direction >= 67.5 && wind_direction <= 112.5){
			wind_dir_symbol = 'wi-wind-east';
		}
		if (wind_direction > 112.5 && wind_direction < 157.5){
			wind_dir_symbol = 'wi-wind-south-east';
		}
		if (wind_direction >= 157.5 && wind_direction <= 202.5){
			wind_dir_symbol = 'wi-wind-south';
		}
		if (wind_direction > 202.5 && wind_direction < 247.5){
			wind_dir_symbol = 'wi-wind-south-west';
		}
		if (wind_direction >= 247.5 && wind_direction <= 292.5){
			wind_dir_symbol = 'wi-wind-west';
		}
		if (wind_direction > 292.5 && wind_direction < 337.5){
			wind_dir_symbol = 'wi-wind-north-west';
		}
		console.log(wind_dir_symbol);
		document.getElementById("winddirection").classList.add(wind_dir_symbol);
    }
  }
	setTimeout(function() {
			makerequest();
		}, 300000); //every 5 minutes
  
  })();