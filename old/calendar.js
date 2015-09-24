function readEvents() {

xmlhttp.open("GET","events.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
 document.getElementById('cal2').innerHTML = 'ddd';
document.write("<table><tr><th>Artist</th><th>Title</th></tr>");
var x=xmlDoc.getElementsByTagName("event");
for (i=0;i<x.length;i++)
  {
	 document.getElementById('cal').innerHTML =x[i].getElementsByTagName("event")[0].childNodes[0].nodeValue;
  document.write("<tr><td>sdasda");
  document.write(x[i].getElementsByTagName("event")[0].childNodes[0].nodeValue);
  document.write("</td><td>");
  document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
  document.write("</td></tr>");
  }
document.write("</table>");
}
