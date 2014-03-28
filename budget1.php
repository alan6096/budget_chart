<html>
    <script src="js/jquery.js"></script>
	<script type="text/javascript" src="jqplot/jquery.jqplot.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.barRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.pointLabels.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.canvasTextRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.canvasAxisLabelRenderer.min.js"></script>
	
	<script type="text/javascript" src="jqplot/plugins/jqplot.dateAxisRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.canvasTextRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.canvasOverlay.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.barRenderer.min.js"></script>
	
	<script src="jqplot/plugins/jqplot.dateAxisRenderer.min.js"></script>
	<script src="jqplot/plugins/jqplot.highlighter.js"></script>
	<script src="jqplot/plugins/jqplot.cursor.min.js"></script>
	
	<link rel="stylesheet" href="jqplot/jquery.jqplot.css" />
	
	<script>
	$(document).ready(function(){
  var line1 = [['Cup Holder Pinion Bob', 7], ['Generic Fog Lamp', 9], ['HDTV Receiver', 15],['8 Track Control Module', 12], [' Sludge Pump Fourier Modulator', 3],['Transcender/Spice Rack', 6], ['Hair Spray Danger Indicator', 18]];
  var line2 = [['Nickle', 28], ['Aluminum', 13], ['Xenon', 54], ['Silver', 47],['Sulfer', 16], ['Silicon', 14], ['Vanadium', 23]];
 
  var plot2 = $.jqplot('chart2', [line1, line2], {
    series:[{renderer:$.jqplot.BarRenderer}, {xaxis:'x2axis', yaxis:'y2axis'}],
    axesDefaults: {
        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
        tickOptions: {
          angle: 30
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
      	},
        canvasOverlay: {
            show: true,
            objects: [

                {dashedHorizontalLine: {
                    name: 'wilma',
                    y: 15,
                    lineWidth: 2,
                    color: 'rgb(133, 120, 24)',
                    shadow: false
                }}
            ]
        },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer
      },
      x2axis: {
        renderer: $.jqplot.CategoryAxisRenderer,tickOptions: {show: false}
      },
      yaxis: {
        autoscale:true,min:0,max:70
      },
      y2axis: {
        autoscale:true,min:0,max:70,showTicks:false
      }
    }
  });
});
	</script>
	<div id="chart1" style="height:600px;width:900px; "></div>
	<div id="chart2" style="height:600px;width:900px; "></div>

</html>