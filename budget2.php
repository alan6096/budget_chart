
<!DOCTYPE html>
<html>
	
	
<script type='text/javascript'>
	
function myFunction()
{
	var r=confirm('No data found! Click Ok to upload data');
	if (r==true)
	{
		window.location='upload_weekly_sales.php';
	}
	else
	{
		window.location.reload();
	}
}
(function($) { 
    $.jqplot.tickNumberFormatter = function (format, val) { 
        if (typeof val == 'number') { 
            if (!format) { 
                format = '%.1f'; 
            } 
            return numberWithCommas($.jqplot.sprintf(format, val)); 
        } 
        else { 
            return String(val); 
        } 
    }; 
    function numberWithCommas(x) { 
        return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ","); 
    } 
})(jQuery); 
	
$(document).ready(function()
{  
<?php 
    $data = $_POST['data'];
    for ($i=0; $i < count($data); $i++) 
    {
        $content = $data[$i];
        $data_script1 = "var line$i=[$content];"; /*ege: var line1 =[[]]; */
        $data_script2[] = "line$i"; /* ege:[line0,line1,line2] */
        echo $data_script1;
    }
?>
	//var line1=[['Jan-2013',25932419.37],['Feb-2013',18370871.84],['Mar-2013',25525461.91],['Apr-2013',28437247.02],['May-2013',29165387.29],['Jun-2013',23330827.28],['Jul-2013',31688056.39],['Aug-2013',22297991.76],['Sep-2013',26959165.96],['Oct-2013',29050927.27],['Nov-2013',27846160.97],['Dec-2013',25362407.59]];
//var line2=[['Jan-2013',1956303.64],['Feb-2013',1642197.11],['Mar-2013',2214956.31],['Apr-2013',1881821.4],['May-2013',1534641.78],['Jun-2013',2092238.33],['Jul-2013',1984047.07],['Aug-2013',781226.3],['Sep-2013',2060729.62],['Oct-2013',2326321.03],['Nov-2013',2137947.85],['Dec-2013',2340087.71]];
//var line3=[['Jan-2013',15284853.84],['Feb-2013',10206590.34],['Mar-2013',14345840.06],['Apr-2013',13884334.35],['May-2013',12198395.49],['Jun-2013',11505053.21],['Jul-2013',14328650.54],['Aug-2013',9707065.64],['Sep-2013',10752000.08],['Oct-2013',14087028.72],['Nov-2013',14503359.52],['Dec-2013',14732157.56]];
//var line4=[['Jan-2013',900754.8],['Feb-2013',1240679.45],['Mar-2013',1047760.86],['Apr-2013',1149856.75],['May-2013',1085643.88],['Jun-2013',953250.93],['Jul-2013',1716663.53],['Aug-2013',1598127.28],['Sep-2013',1684686.2],['Oct-2013',1507459.16],['Nov-2013',1543228.93],['Dec-2013',1205016.59]];

    // Can specify a custom tick Array.
    // Ticks should match up one for each y value (category) in the series.
    var ticks = ['BTUP', 'KCHP', 'MYYD', 'SBWD'];
     
    //var plot1 = $.jqplot('chart3', [line1,line2,line3,line4], {
 	var plot1 = $.jqplot('chart3', [<?php echo implode(",", $data_script2); ?>], {
        // be applied to all series in the chart.
        title:'Sales Report By Plant/Terminal',
        seriesDefaults:{
            
            rendererOptions: {fillToZero: true,barWidth: 5}
            //,shadowAngle: 2350
            //,shadowOffset: 2350
        },
        // option on the series option.  Here a series option object
        // is specified for each series.
        series:[{label:'kuching'},{label:'sibu'},{label:'bintulu'},{label:'miri'}],
        // Show the legend and put it outside the grid, but inside the
        // plot container, shrinking the grid to accomodate the legend.
        // the legend to overflow the container.
        legend: {
            show: true,
            placement: 'outsideGrid'
        },
        axesDefaults: {
        	min: 0,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
        tickOptions: {
          fontFamily: 'Arial',
          fontSize: '12pt',
          angle:-45
        }
    },
        axes: {
            // Use a category axis on the x axis and use our custom ticks.
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer
                //,sortMergedLabels:true
                //ticks: ticks
            },
            // Pad the y axis just a little so bars can get close to, but
            // not touch, the grid boundaries.  1.2 is the default padding.
            /*
            yaxis: 
            {
                pad: 1.1,
                tickOptions: {formatter: $.jqplot.tickNumberFormatter,formatString: 'RM %d'}
            }
            */
            yaxis: 
            {
            	//max:80000,
            	label:'RM',
          		labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          		labelOptions: {
            		fontFamily: 'Georgia, Serif',
            		fontSize: '13pt'},
                pad: 1.05,
                tickOptions: {formatter: $.jqplot.tickNumberFormatter,formatString: '%#.2f',angle:0}
                //tickOptions: {formatString: '%#.2f'}
			}
        },
        highlighter: 
        {
        	show: true,
        	showMarker :false,
        	sizeAdjust: 7.5
        	,tooltipAxes:'y'
        	//,tooltipLocation: 'ne'
        	//,tooltipOffset:0
      	}
      	,canvasOverlay: {
            show: true,
            objects: [

                {dashedHorizontalLine: {
                    name: 'wilma',
                    y: 22000,
                    lineWidth: 2,
                    color: 'rgb(133, 120, 24)',
                    shadow: false
                }}
            ]
        }
    });
	
});


</script><div id='chart3' style='margin-top:40px;margin-bottom:40px; margin-left:20px; width:1500px; height:300px;'></div>
</html>


