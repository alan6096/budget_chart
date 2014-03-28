
var lastuser = '1';
var hand2 = function(str)
{
/*
	var userInfo = str;
	var results = userInfo.split("|");

	var userName  = results[0];
	var telephone = results[1];
	var email     = results[2];
	var company   = results[3];
	var remark    = results[4];
*/
//	alert (results[3]);
	
/*
	document.getElementById('company').value = company;
	document.getElementById('telephone').value = telephone;
	document.getElementById('email').value = email;
	document.getElementById('remarks').value = remark;
*/
/*
	alert(userName);
	alert(company);
	alert(email);
	alert(telephone);
*/
	var message;
	if(str == 0)
	{
		message = 'User not added. This may be a duplicate user. Please verify.';
	}
	else
	{
		message = 'User was added successfully.';
		lastuser = str; // lastuser variable will hold name of the last user
	}

	closeButton = '<input type="button" class="dojoStyleButton"  id=close value="Close" onClick="overlayBig()" />';
	
	var divObj = document.getElementById('subdiv1');

	divObj.innerHTML = '<center>' + message +'<br>' + closeButton + '</center>';

	//window.location.reload( true );
}

function getUser()
{
	//var userid =  document.getElementById('username').value;

	var username =  document.getElementById('username__').value
	var company =   document.getElementById('company__').value;
	var email =     document.getElementById('email__').value;
	var telephone = document.getElementById('telephone__').value;

	//alert( username);

	var line = 'operation=confirm' + '&name=' + username + '&company=' + company + '&email=' + email + '&telephone=' + telephone;

	var divObj = document.getElementById('subdiv1');
	divObj.innerHTML = '<center><img src="pic/progressbar.gif" alt="In Progress" /></center><center>Please wait ...</center>';
	
	//divObj.style.visibility = 'hidden';
	//alert('getuserinfo.php?id=' + userid);
	//alert(username);
	var ajax = new Ajax();
	ajax.doGet('useradd_ajax.php?' + line , hand2);

}

function checkNewUser()
{
	var username =  document.getElementById('username_').value
	var comp =   document.getElementById('company_');
	var company = comp.options[comp.selectedIndex].value;
	var companyName = comp.options[comp.selectedIndex].text;
	var email =     document.getElementById('email_').value;
	var telephone = document.getElementById('telephone_').value;

	var line = 'operation=check' + '&name=' + username + '&company=' + company + '&email=' + email + '&telephone=' + telephone;

	var divObj = document.getElementById('subdiv1');
//	divObj.innerHTML = '<center><img src="pic/progressbar.gif" alt="In Progress" /></center><center>Please wait ...</center>';

//	divObj.innerHTML = '<span style="font-weight:bold;color:blue">Please confirm that the information of the new user is correct.</span><br><fieldset style="width:370px;-moz-border-radius:0px;border-color:#aaa"><label>Name</label><b>:</b>&nbsp&nbsp <input  id="username__" NAME="username__" TYPE="text" readonly style=" background-color:#FFF;border-style: none;padding:0px" value=' + username + '><br><br><label>Company</label><b>:</b>&nbsp&nbsp <input  id="company__" TYPE="text" readonly style=" background-color:#FFF;border-style: none;padding:0px" value=' + company + '><br><br><label>Email</label><b>:</b>&nbsp&nbsp <input id="email__" TYPE="text" readonly  style="background-color:#FFF;border-style: none;padding:0px" value=' + email + '><br><br><label>Telephone</label><b>:</b>&nbsp&nbsp <input  id="telephone__" TYPE="text" readonly style="background-color:#FFF;border-style: none;padding:0px" value=' + telephone + '></fieldset><br>';
	

	divObj.innerHTML = "<span style='font-weight:bold;color:blue'>Please confirm that the information of the new user is correct.</span><br><fieldset style='width:370px;-moz-border-radius:0px;border-color:#aaa'><label>Name</label><b>:</b>&nbsp&nbsp <input  id='username__' NAME='username__' TYPE='text' readonly style='background-color:#FFF;border-style: none;padding:0px' value='" + username + "'><br><br><label>Company</label><b>:</b>&nbsp&nbsp <input  id='company__' TYPE='text' readonly style='background-color:#FFF;border-style: none;padding:0px' value=" + companyName + "><br><br><label>Email</label><b>:</b>&nbsp&nbsp <input id='email__' TYPE='text' readonly  style='background-color:#FFF;border-style: none;padding:0px' value=" + email + "><br><br><label>Telephone</label><b>:</b>&nbsp&nbsp <input  id='telephone__' TYPE='text' readonly style='background-color:#FFF;border-style: none;padding:0px' value=" + telephone + "></fieldset><br>";
	//closeButton = '<input type="button" class="dojoStyleButton"  id=close value="Abort and Close" onClick="overlayBig()" />';

	divObj.innerHTML += '<fieldset style="border:none;width:380px;padding:0px"><input type="button" class="dojoStyleButton"  id=close value="Abort and Close" onClick="overlayBig()" /><input type="button" class="dojoStyleButton" style="float:right" id=addUser value="Confirm" onClick="getUser()" /></fieldset>';

	var ajax = new Ajax();
	ajax.doGet('useradd_ajax.php?' + line , handCheckNewUser);
}

var handCheckNewUser = function(str)
{
	var users = str;
	var len = users.split("&").length;
	var results = users.split("&");

	var divObj = document.getElementById('subdiv1');

	divObj.innerHTML += '<br><span style="font-weight:bold;color:blue">Please verify that the new user is not a duplicate of a user listed below.</span><br>';
	var table = document.createElement("table");
//	table.setAttribute("cellpadding", 0);
//	table.setAttribute("cellspacing", 0);
	table.setAttribute("width", "100%");
//	table.setAttribute("height", "100%");
	table.setAttribute("border", 0);
	divObj.appendChild(table);
	var tr = document.createElement("tr");
//	tr.setAttribute("background-color", "#aaa");
	tr.setAttribute("style","color:#FFF;background-color:#aaa;text-align:center;");
	table.appendChild(tr);
		var td1 = document.createElement("td");
		td1.setAttribute("style", "padding-left:5px;");
//		td1.setAttribute("bgcolor", "#aaa");
//		td1.setAttribute("style","color:#FFF;background-color:#aaa;text-align:center;");
		td1.innerHTML = "Name";
		tr.appendChild(td1);
		var td2 = document.createElement("td");
		td2.setAttribute("style", "padding-left:5px;");
//		td2.setAttribute("bgcolor", "#aaa");
		td2.innerHTML = "Company";
		tr.appendChild(td2);
		var td3 = document.createElement("td");
		td3.setAttribute("style", "padding-left:5px;");
//		td3.setAttribute("bgcolor", "#aaa");
		td3.innerHTML = "Email";
		tr.appendChild(td3);
		var td4 = document.createElement("td");
		td4.setAttribute("style", "padding-left:5px;");
//		td4.setAttribute("bgcolor", "#aaa");
		td4.innerHTML = "Telephone";
		tr.appendChild(td4);

	for(i=0;i<len-1;i++)
	{
		
		user = results[i].split("|");
		//selectbox.options[selectbox.options.length] = new Option(pair[1], pair[0]);
	//	alert(user[0]);

	//create TR

		var tr = document.createElement("tr");
		table.appendChild(tr);

	//create TD1

		var td1 = document.createElement("td");
		td1.setAttribute("style", "padding-left:5px;");
		td1.innerHTML = user[0];
		tr.appendChild(td1);
		var td2 = document.createElement("td");
		td2.setAttribute("style", "padding-left:5px;");
		td2.innerHTML = user[1];
		tr.appendChild(td2);
		var td3 = document.createElement("td");
		td3.setAttribute("style", "padding-left:5px;");
		td3.innerHTML = user[2];
		tr.appendChild(td3);
		var td4 = document.createElement("td");
		td4.setAttribute("style", "padding-left:5px;");
		td4.innerHTML = user[3];
		tr.appendChild(td4);
	}

//create TR
//	var tr = document.createElement("tr");
//	table.appendChild(tr);
//create TD1
//	var td1 = document.createElement("td");
//	td1.setAttribute("style", "padding-left:5px;");
//	td1.innerHTML = 'This is a table with cellpadding=2, cellspacing=1';
//	tr.appendChild(td1);
	



//	divObj.appendChild(table);

	//window.location.reload( true );
}