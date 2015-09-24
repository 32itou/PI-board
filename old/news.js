$(document).ready(function () {
	$('#news').rssfeed('http://www.24heures.ch/rss.html',{}, function(e) {
		$(e).find('div.rssBody').vTicker({ 
		showItems: 1,
		header: false,
		content: false,
		date: false});
	});

});