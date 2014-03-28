<?php
include 'skdb/skdb.php';

function getdata($plant)
{
    for ($i=1; $i <= 12 ; $i++)
    { 
        $data[] = display($i,$plant);
        
    }
    return implode(",", $data);
}

function display($month,$plant)
{
    $display = new sksql("budget");
    $display->fullquery("SELECT sum(total) as totalsum, filedate as monthstr FROM `budget` where month(str_to_date(filedate,'%Y-%m'))=$month and plant='$plant' and material='50kg'");
    $display->find();
    $temp = "<table>";
    while($row = $display->fetch())
    {
        $temp .= "<tr>";
        //$temp .= "<td>$row->filedate</td>";
        //$temp .= "<td>$row->total</td>";
        $monthstr = date("M-Y",strtotime($row->monthstr)); 
        $temp .= "<td>[$monthstr,'$row->totalsum']</td>";
        $temp .= "</tr>";
        $data .= "['$monthstr',$row->totalsum]";
    }
    $temp .= "</table>";
    //echo $temp;
    return $data;
}
?>

<!DOCTYPE html>
<html>
    <script src="js/jquery.js"></script>
	<script type="text/javascript" src="jqplot/jquery.jqplot.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.barRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.pointLabels.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.canvasTextRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.canvasAxisLabelRenderer.min.js"></script>
	<script type="text/javascript" src="jqplot/plugins/jqplot.canvasOverlay.min.js"></script>
	
	<script type="text/javascript" src="jqplot/plugins/jqplot.dateAxisRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.canvasTextRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script type="text/javascript" src="jqplot/plugins/jqplot.barRenderer.min.js"></script>
	
	<script src="jqplot/plugins/jqplot.dateAxisRenderer.min.js"></script>
	<script src="jqplot/plugins/jqplot.highlighter.js"></script>
	<script src="jqplot/plugins/jqplot.cursor.min.js"></script>
	
	<link rel="stylesheet" href="jqplot/jquery.jqplot.css" />	
	
<script>
$(document).ready(function()
{
    var data =new Array();
    data[0] = "<?php echo getdata("kuching"); ?>";
    data[1] = "<?php echo getdata("bintulu"); ?>";
    $('#chart3').load('budget2.php',{data:data});
});        
</script>	
<div id='chart3' style='margin-top:40px;margin-bottom:40px; margin-left:20px; width:1500px; height:300px;'></div>

</html>

