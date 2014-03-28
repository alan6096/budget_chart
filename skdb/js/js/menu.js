$(document).ready(function()
{
	$(".mymenu").append("<input type='text' id='activetab' style='display:none' value='tab-1'></input>"); /* create temporary html tag to hold variable. init with tab-1 */
	var active_tab = $("#activetab").val();
	
    $("label").hover(function()
    {
        var temp = $(this).attr("for");
        $("#"+temp).prop('checked', true);
        
        $(".tabs").mouseleave(function() 
        {
        	active_tab = $("#activetab").val();
            $("#"+active_tab).prop('checked', true);
        });
    });

	$("label,.myspan").click(function()
	{
		var temp;
		temp = $(this).attr("for");
		
		if(temp==undefined)
			temp = $(this).attr("id2");
			
        $("#"+temp).prop('checked', true);
        $("#activetab").val(temp);
	});	
});