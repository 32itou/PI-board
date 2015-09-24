function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hours').innerHTML = h+":"+m;
	document.getElementById('second').innerHTML = s;
    
	var weekday = new Array(7);
	weekday[0]=  "Dimanche";
	weekday[1] = "Lundi";
	weekday[2] = "Mardi";
	weekday[3] = "Mercredi";
	weekday[4] = "Jeudi";
	weekday[5] = "Vendredi";
	weekday[6] = "Samedi";
	var day = weekday[today.getDay()];
	document.getElementById('Day').innerHTML=day + ' ' + today.getDate();
	var t = setTimeout(function(){startTime()},500);

}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
    $(document).ready(
            function() {
                setInterval(function() {
                    xmlhttp= new XMLHttpRequest();
					xmlhttp.open("GET","events.xml",false);
					xmlhttp.send();
					xmlDoc=xmlhttp.responseXML;
					var x=xmlDoc.getElementsByTagName("event");
					for (i=0;i<x.length;i++)
						{
						//document.getElementById('time'+i).innerHTML=x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
						//document.getElementById('title'+i).innerHTML=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
						
					}
                }, 3000);
            });
