<!DOCTYPE html>
<html>
<head>
	<title>PI Board</title>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
        <meta charset="UTF-8"> 
</head>

<body>

    <ul id="menu" class="xsmall">
	<li><a title=" Temperature" href="/"> Temperature</a></li>
	<li><a title=" Pressure" href="/about"> Pressure</a></li>
	<li><a title=" Contact Me" href="/contact">Contact Me</a></li>
        <li><a title=" Contarct Me" href="/ctrontact">Contact Metr</a></li>
    </ul>
    <div id="pagehome" onclick="showMenu()">
        <div id="topHorizontal">
            <div class="top left">
		<div class="date small dimmed"></div>
                <div class="time"></div>                    
            </div>
            <div class="top right">	
		<div class="windsun small dimmed"></div>
		<div class="temp medium"></div>
                <!--<div id="moon"></div>-->
            </div>

        </div>
	
	<div class="center-ver"></div>
	
	<div class="bottomHorizontal">
		<div id="day_0_1" class="weatherDayBox small"></div>
		<div id="day_0_2" class="weatherDayBox small"></div>
		<div id="day_1" class="weatherDayBox small"></div>
		<div id="day_2" class="weatherDayBox small"></div>
		<div id="day_3" class="weatherDayBox small"></div>
                <div id="moon" class="weatherDayBox small"></div>

	</div>
        <div style="clear:both"></div>
    </div>


<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/suncalc.js"></script>
<script src="js/planet_phase.js"></script>
<script src="js/moment-with-langs.min.js"></script>
<script src="js/current_weather.js"></script>
<script src="js/config.js"></script>



<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->

</body>
</html>
