<?php

require_once('caldav/SimpleCalDAVClient.php');


$client = new SimpleCalDAVClient();
$xml = new SimpleXMLElement('<xml/>');
try {
	/*
	 * To establish a connection and to choose a calendar on the server, use
	 * connect()
	 * findCalendars()
	 * setCalendar()
	 */
	
	$client->connect('https://sync.infomaniak.com/calendars/MF01131/adaeda57-292c-460e-821d-d1588f592b99/', 'MF01131', '_cairns-D18');
	
	$arrayOfCalendars = $client->findCalendars(); // Returns an array of all accessible calendars on the server.
	$client->setCalendar($arrayOfCalendars["adaeda57-292c-460e-821d-d1588f592b99"]); // Here: Use the calendar ID of your choice. If you don't know which calendar ID to use, try config/listCalendars.php
	
	$events = $client->getEvents('20150914T000000Z', '20150915T000000Z'); // Returns an empty array
	$i=0;
	foreach ($events as $event){
	
	$data = $event->getData();
	$titlepos = strpos($data, 'SUMMARY' , 1) + 8;
	$endtitlepos = strpos($data, 'DTSTART;TZID' , 1);
	$titlelength= $endtitlepos - $titlepos;
	$title = substr($data, $titlepos, $titlelength);
	
	
	$startdatepos = strpos($data, 'DTSTART;' , 1) + 26;
	$starttime = substr($data, $startdatepos, 15);
	$url = $event->getHref();
	$xmlevent = $xml->addChild('event');
	$xmlevent->addChild('id', $i);
	$xmlevent->addChild('title', $title);
	$xmlevent->addChild('url', $url);
	$xmlevent->addChild('time', $starttime);
	$xmlevent->addChild('data', $data);
	
	
	++$i;
		}

	
    }
catch (Exception $e) {
	echo $e->__toString();
}

Header('Content-type: text/xml');
$xml->asXML("events.xml");
print($xml->asXML());
?>