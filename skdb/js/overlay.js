var hand3 = function(str)
{
	//alert(str);
	var selectbox = document.addform.user_id;
	selectbox.options.length = 0;

	var users = str;
	var len = users.split("&").length;
	var results = users.split("&");

	//alert(len);
	for(i=0;i<len;i++)
	{
		
		pair = results[i].split("|");
		if(pair[0] != lastuser )
		{
			selectbox.options[selectbox.options.length] = new Option(pair[1], pair[0]);
		}
		else
		{
			selectbox.options[selectbox.options.length] = new Option(pair[1], pair[0], true);
		}
	}

}

function updateSelect()
{
	//alert('updateSelect');
	var ajax = new Ajax();
	ajax.doGet('add_update_ajax.php' , hand3);
}

function overlay()
{	
	
	xyz = document.getElementById("overlay");
	
	xyz.style.visibility = (xyz.style.visibility == "visible") ? "hidden" : "visible";
	if(xyz.style.visibility == "hidden")
	{
		//alert(lastuser);
		updateSelect();

	}
}

function overlayBig(dowhat)
{	
	xyz = document.getElementById("overlaybig");
	
	xyz.style.visibility = (xyz.style.visibility == "visible") ? "hidden" : "visible";

	if(xyz.style.visibility == "hidden")
	{
		//alert(lastuser);
		//updateSelect();
		location="case_add.php"
	}
}

function overlayChangePassword()
{	
	
	xyz = document.getElementById("overlay");
	
	xyz.style.visibility = (xyz.style.visibility == "visible") ? "hidden" : "visible";

	if(xyz.style.visibility == "hidden")
	{
		//alert("HI")
		//window.location.reload()
		location="general_setting.php"
	}

}

