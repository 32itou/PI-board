<!DOCTYPE html>
<html>
<head>
	<title>PI Board</title>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
       

	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
       
        <meta charset="UTF-8"> 
</head>

 <body onload="onLoad()">
  
 
    <ul id="menu" class="xsmall">
	<li><a title="Temperature"  href="javascript:ShowPage('graph','temp');"> Temperature</a></li>
	<li><a title="Pressure"  href="javascript:ShowPage('graph','baro');"> Pressure</a></li>
	<li><a title="Light"  href="javascript:ShowPage('graph','light');">Light</a></li>
        <li  class="li-last glyphicon glyphicon-home"><a title="Home" href="javascript:ShowPage('home','');">Home</a></li>
    </ul>
 <!--   <div id="menu" class="xsmall">
        <div class="menuitem menutop">Temperature</div>
        <div class="menuitem menutop">Barometre</div>

        <div class="menuitem menubottom">Home</div>
         
</div>-->
 <div id="navbar" class="medium">dfadsfs</div> 
 <div id="content" ></div>


    


<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/suncalc.js"></script>
<script src="js/planet_phase.js"></script>
<script src="js/moment-with-langs.min.js"></script>
<script src="js/current_weather.js"></script>
<script src="js/config.js"></script>
<script src="js/menu.js"></script>



<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->

</body>
</html>
