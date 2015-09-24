<html>
<meta http-equiv="refresh" content="1800" >
<meta charset="UTF-8"> 
<head>
	<LINK href="css/main.css" rel="stylesheet" type="text/css">
	<LINK href="css/weather-icons.css" rel="stylesheet" type="text/css">
	
	<title>Pi day informations</title>
</head>
	<script type="text/javascript"  src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="main.js"></script>
	<script src="current.js"></script>
	<script src="zrssfeed/jquery.zrssfeed.min.js" type="text/javascript"></script>
	<script src="news.js"></script>
	
	<script src="zrssfeed/jquery.vticker.js" type="text/javascript"></script>
	<!--<script src="zrssfeed/jquery.zframework.js" type="text/javascript"></script>-->
 
<body onload="startTime()">
<div id="page">
	<div id="top">
		<div id="date-time">
			<div id="time">
				<div id="hours"></div>  
				<div id="second"></div>
			</div>
			<div id="Day"></div> 
		</div>

		<div id="current">
			<div class="wi-thermometer-exterior"></div>
			<div id="temp"></div>
			<div id="winddirection" class="wi-wind-east"></div>
			<div id="windspeed"></div>
		</div>
	</div>

<!--<div id="calendar">
<table>
	<tr>
		<td id="time0"></td>
		<td id="title0"></td>
	</tr>
	<tr>
		<td id="time1"></td>
		<td id="title1"></td>
	</tr>
</table>
</div>-->


	<div id="bottom" >
		<div id="news"></div>
	</div>
</div>




 <?php
 //$json = file_get_contents('http://www.prevision-meteo.ch/services/json/cully');
//$json = json_decode($json);

//echo $json->city_info->name;
//echo '</br>';
?> 
</body>
</html>