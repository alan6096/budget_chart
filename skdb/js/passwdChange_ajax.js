
//var lastuser = '1';
var handpass = function(str)
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
	var closeButton;

	if(str == 0)
	{
		message = '<span style="font-weight:bold;font-size:larger;color:red;text-align:center">The new password entered did not match.</span><br><br>Please try again.<br><br>';
	}
	else if(str == 1)
	{
		message = '<span style="font-weight:bold;font-size:larger;color:red;text-align:center">Wrong old password.</span><br><br>Please try again or contact the helpdesk system administrator.</span><br><br>';
		//lastuser = str;
	}
	else if(str == 2)
	{
		message = '<span style="font-weight:bold;font-size:larger;color:green;text-align:center">New password updated successfully.</span><br><br>Please logout immediately and login with new password.<br><br>';
	}

	closeButton = '<input type="button" class="dojoStyleButton"  id=close value="Close" onClick="overlayChangePassword()" />';
		

	var divObj = document.getElementById('subdiv1');

	divObj.innerHTML = '<center>' + message +'<br>' + closeButton + '</center>';
	//window.location.reload( true );	
}

var handpassreset = function(str)
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
		message = '<font color=red>Error. Please contact administrator.</font>';
	}
	else if(str == 1)
	{
		message = '<font color=green>User password reset successful</font>';
		//lastuser = str;
	}
/*
	else if(str == 2)
	{
		message = '<font color=blue>New password updated. Please logout immediately and login with new password.</font>';
	}
*/
	closeButton = '<input type="button" class="dojoStyleButton"  id=close value="Close" onClick="overlay()" />';
	
	var divObj = document.getElementById('subdiv1');

	divObj.innerHTML = '<center>' + message +'<br><br><br>' + closeButton + '</center>';
	//window.location.reload( true );
	
}

function changePass(input)
{
	//var userid =  document.getElementById('username').value;

	var oldpasswd  =  document.getElementById('oldpass').value
	var newpasswd  =  document.getElementById('newpass').value;
	var newpasswd2 =  document.getElementById('newpass2').value;
	
	var line = 'oldpasswd=' + oldpasswd + '&newpasswd=' + newpasswd + '&newpasswd2=' + newpasswd2;

	var divObj = document.getElementById('subdiv1');
	divObj.innerHTML = '<center><img src="pic/progressbar.gif" alt="In Progress" /></center><center>Please wait ...</center>';
	
	//divObj.style.visibility = 'hidden';
	//alert('getuserinfo.php?id=' + userid);
	//alert(username);
	var ajax = new Ajax();
	ajax.doGet('changepassword_ajax.php?' + line , handpass);
}

function resetPass(input)
{
	//var userid =  document.getElementById('username').value;

	var newpasswd  =  document.getElementById('passwd').value;
	var account =  document.getElementById('account').value;
	//alert(newpasswd + account);
	
	var line = 'newpasswd=' + newpasswd + '&account=' + account;

	var divObj = document.getElementById('subdiv1');
	divObj.innerHTML = '<center><img src="pic/progressbar.gif" alt="In Progress" /></center><center>Please wait ...</center>';
	
	//divObj.style.visibility = 'hidden';
	//alert('getuserinfo.php?id=' + userid);
	//alert(username);
	var ajax = new Ajax();
	ajax.doGet('resetpassword_ajax.php?' + line , handpassreset);
}