<!DOCTYPE html>
<html>
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>My first column chart by Highcharts</title>
        <!-- 1. Add JQuery and Highcharts in the head of your page -->
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
         
        <!-- 2. You can add print and export feature by adding this line -->
        <script src="http://code.highcharts.com/modules/exporting.js"></script>
         
         
        <!-- 3. Add the JavaScript with the Highchart options to initialize the chart -->
        <script type="text/javascript">
                jQuery(document).ready(function() { 
        $.ajax({
    type: "GET",
    url: "remote.xml",
    dataType: "xml",
    success: function(xml) {
        var series = []
        var options = {
                chart: {
                    renderTo: 'container2',
                    type: 'spline'
                },
                title: {
                    text: 'Temperature'                 
                },
                subtitle: {
                    text: 'Last 24H'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: { hour: '%H. %M', }
                 },
                yAxis: {
                    title: {
                        text: 'T (°C)'
                            }
                   },
                series: []
            };
   
        //define series
        $(xml).find("entry").each(function() {
            var seriesOptions = {
                name: $(this).text(),
                data: []
            };
            options.series.push(seriesOptions);
        });

        //populate with data
        $(xml).find("row").each(function() {
            var t = parseInt($(this).find("t").text()) * 1000

            $(this).find("v").each(function(index) {
                var v = parseFloat($(this).text())
                v = v || null
                if (v != null) {
                    options.series[index].data.push([t, v])
                };
            });
        });


        $.each(series, function(index) {
            options.series.push(series[index]);
        });
        chart = new Highcharts.Chart(options);
    }
})
        
    });       
        </script>
         
    </head>
    <body>
         
        <!-- 3. Add the container -->
        <div id="container" style="width: 600px; height: 400px; margin: 0 auto"></div>   
        <div id="container2" style="width: 600px; height: 400px; margin: 0 auto"></div>    
                 
    </body>
</html>
