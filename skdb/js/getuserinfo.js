var hand = function(str)
{
  	//alert(str);
	var userInfo = str;

	var results = userInfo.split("|");

//	alert (results[0]);

	var userName  = results[0];
	var telephone = results[1];
	var email     = results[2];
	var company   = results[3];
	var remark    = results[4];

//	alert (results[3]);
	
	document.getElementById('company').value = company;
	document.getElementById('telephone').value = telephone;
	document.getElementById('email').value = email;
//	document.getElementById('remarks').value = remark;
}

function getUserInfo(sel)
{
	var userid = sel.options[sel.selectedIndex].value;
	//alert('getuserinfo.php?id=' + userid);
	var ajax = new Ajax();
	ajax.doGet('getuserinfo.php?id=' + userid, hand);
}

function onloadUserInfo()
{
	//alert("In onloadUserInfo");
	var sel = document.getElementById("sel_username");
	
//	alert(sel.options[sel.selectedIndex].value);

//	if(sel.options[sel.selectedIndex].value = '');
//	{

//	}
	
	document.getElementById('company').value = company;
  	setTimeout(getUserInfo(sel), 1000);

}

function testing()
{
 	//document.getElementById('company').value = "Testing";
 	var x = document.getElementById('sel_username');
 	var y = x.options[x.selectedIndex].value;
 	var ajax = new Ajax();
	ajax.doGet('getuserinfo.php?id=' + y, hand);
}

function onloadGetUserInfo()
{
 	//document.getElementById('company').value = "Testing";
 	var x = document.getElementById('sel_username');
 	var y = x.options[x.selectedIndex].value;
 	var ajax = new Ajax();
	ajax.doGet('getuserinfo.php?id=' + y, hand);
}

