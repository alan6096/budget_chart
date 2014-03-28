function setOptions(chosen) 
{
	var selbox = document.addform.subcategory;

	selbox.options.length = 0;
	if (chosen == " ")
	{
		selbox.options[selbox.options.length] = new Option('Please select one of the options above first', '0');
	}

	if (chosen == "1")
	{
			selbox.options[selbox.options.length] = new 
		Option('SAP','1');
			selbox.options[selbox.options.length] = new
		Option('IFCA','2');
			selbox.options[selbox.options.length] = new
		Option('UBS','3');
			selbox.options[selbox.options.length] = new
		Option('CSMS','4');
	}

	if (chosen == "2")
	{
			selbox.options[selbox.options.length] = new
		Option('Monitor','5');
			selbox.options[selbox.options.length] = new
		Option('CPU','6');
			selbox.options[selbox.options.length] = new
		Option('Printer','7');
			selbox.options[selbox.options.length] = new
		Option('Scanner','8');
			selbox.options[selbox.options.length] = new
		Option('Projector','9');
			selbox.options[selbox.options.length] = new
		Option('Video Conf Equipment','10');
			selbox.options[selbox.options.length] = new
		Option('Teleconf Equipment','11');
			selbox.options[selbox.options.length] = new
		Option('Print Server','12');
			selbox.options[selbox.options.length] = new
		Option('Notebook','13');
			selbox.options[selbox.options.length] = new
		Option('Server','14');

	}

	if (chosen == "3")
	{
			selbox.options[selbox.options.length] = new
		Option('MS Word','15');
			selbox.options[selbox.options.length] = new
		Option('MS Excel','16');
			selbox.options[selbox.options.length] = new
		Option('MS Powerpoint','17');
			selbox.options[selbox.options.length] = new
		Option('Outlook','18');
			selbox.options[selbox.options.length] = new
		Option('Utilities','19');
			selbox.options[selbox.options.length] = new
		Option('Symantec','20');
	}
	
	if (chosen == "4")
	{
			selbox.options[selbox.options.length] = new
		Option('LAN','21');
			selbox.options[selbox.options.length] = new
		Option('Wireless','22');
	}

	if (chosen == "5")
	{
			selbox.options[selbox.options.length] = new
		Option('Phoneset','23');
			selbox.options[selbox.options.length] = new
		Option('Phoneline','24');
			selbox.options[selbox.options.length] = new
		Option('Handphone','25');
	}
	
	if (chosen == "6")
	{
			selbox.options[selbox.options.length] = new
		Option('Internet','26');
			selbox.options[selbox.options.length] = new
		Option('Intranet','27');
	}
	
	if (chosen == "7")
	{
			selbox.options[selbox.options.length] = new
		Option('Handydrive','28');
			selbox.options[selbox.options.length] = new
		Option('External Harddisk','29');
			selbox.options[selbox.options.length] = new
		Option('CD-Writer','30');
			selbox.options[selbox.options.length] = new
		Option('UPS','31');
			selbox.options[selbox.options.length] = new
		Option('Door Access','32');
			selbox.options[selbox.options.length] = new
		Option('Others','33');
	}

}

	
function setFields(chosen) 
{
	var selbox = document.searchbyfield_form.subfield;
	
	selbox.options.length = 0;
	if (chosen == " ") 
	{
		selbox.options[selbox.options.length] = new Option('Please select one of the options above first',' ');
	}

	if (chosen == "status") 
	{
			selbox.options[selbox.options.length] = new
		Option('Open','1');
			selbox.options[selbox.options.length] = new
		Option('Closed','5',true);
	}

	if (chosen == "type") 
	{
			selbox.options[selbox.options.length] = new
		Option('Service Request','1');
			selbox.options[selbox.options.length] = new
		Option('Inquiry','2');
			selbox.options[selbox.options.length] = new
		Option('Problem Reporting','3', true);
	}

	if (chosen == "category") 
	{
			selbox.options[selbox.options.length] = new
		Option('User Application','1');
			selbox.options[selbox.options.length] = new
		Option('Hardware','2');
			selbox.options[selbox.options.length] = new
		Option('Office Application','3');
			selbox.options[selbox.options.length] = new
		Option('Network','4');
			selbox.options[selbox.options.length] = new
		Option('Telecommunications','5');
			selbox.options[selbox.options.length] = new
		Option('Website','6');
			selbox.options[selbox.options.length] = new
		Option('Others','7');
	}

}
	

function runClock()
{
	theTime = window.setTimeout("runClock()", 1000);
	d = new Date();
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	
	if(min <= 9)
	{
		min="0"+min
	}
	
	if(sec <= 9)
	{
		sec="0"+sec
	}

	document.form2.clock.value=""+hr+":"+min+":"+sec+"";
}

runClock();

function confirmDelete(a) 
{
	//alert(a);
	alert("Do you really want to DELETE this " + a + " ?\nYou will be asked again to confirm." );
	var agree=confirm("Are you sure you wish to delete this " + a + "?\nClicking OK will DELETE this " + a + " permanently.");
	if (agree)
		return true ;
	else
		return false ;
}

function PrintThisPage() 
{ 
   var sOption="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
       sOption+="scrollbars=yes,width=800,height=600,left=100,top=25"; 

   var sWinHTML = document.getElementById('div_pad_draw_border').innerHTML; 
   
   var winprint=window.open("","",sOption); 
       winprint.document.open(); 
       winprint.document.write('<html><LINK href=style.css rel=Stylesheet><body>'); 
       winprint.document.write(sWinHTML);          
       winprint.document.write('</body></html>'); 
       winprint.document.close(); 
       winprint.focus(); 
}

function popupform(myform, windowname)
{
	//if (! window.focus)return true;
	window.open("", windowname, "status=1,scrollbars=1, menubar=1,resizable=1,width=350,height=250");
	myform.target=windowname;
	//my_window.document.write('<H1>Popup Test!</H1>')
	return true;
}

function openClose(id)
{
	var obj = "";	

	// Check browser compatibility
	if(document.getElementById)
		obj = document.getElementById(id).style;
	else if(document.all)
		obj = document.all[id];
	else if(document.layers)
		obj = document.layers[id];
	else
		return 1;
		
	// Do the magic :)
	if(obj.display == "")
		obj.display = "none";
	else if(obj.display != "none")
		obj.display = "none";
	else
		obj.display = "block";
}



function addUser()
{
	var username =  document.getElementById('username').value
	var comp =   document.getElementById('company_');
	var company = comp.options[comp.selectedIndex].value;
	var email =     document.getElementById('email_').value;
	var telephone = document.getElementById('telephone_').value;
	alert(username);
	alert(company);
	alert(email);
	alert(telephone);
	
	comp.style.display = 'none';
}

function colorStatus()
{
	var x = document.getElementById('status');
	var y = x.options[x.selectedIndex].value;
//	x.style.color = 'white';
	switch(y){
		case "1":
			x.style.color = 'red';
			//x.style.color = 'black';
			break;
		case "2":
			x.style.color = 'green';
			//x.style.color = 'black';
			break;
		case "3":
			x.style.color = 'orange';
			//x.style.color = 'black';
			break;
		case "4":
			x.style.color= '#FF6600';
			//x.style.color = 'black';
			break;
		case "5":
			x.style.color= 'blue';
			//x.style.color = 'white';
			break;
		case "10":
			x.style.color = '#000A60';
			//x.style.color = 'white';
			break;
		default: alert("This pop up should NOT happen. Something serious just happened. Contact administrator");
	}
}

function colorAccountStatus()
{
	var x = document.getElementById('accountStatus');
	//var x = dijit.byId('accountStatus');
	var y = x.options[x.selectedIndex].value;
//	x.style.color = 'white';
	switch(y){
		case "0":
			x.style.color = 'red';
			//x.style.color = 'black';
			break;
		case "1":
			x.style.color = 'green';
			//x.style.color = 'black';
			break;
		default: alert("This pop up should NOT happen. Something serious just happened. Contact administrator");
	}
}

function colorCategoryStatus()
{
	var x = document.getElementById('categoryStatus');
	//var x = dijit.byId('accountStatus');
	var y = x.options[x.selectedIndex].value;
//	x.style.color = 'white';
	switch(y){
		case "0":
			x.style.color = 'red';
			//x.style.color = 'black';
			break;
		case "1":
			x.style.color = 'green';
			//x.style.color = 'black';
			break;
		default: alert("This pop up should NOT happen. Something serious just happened. Contact administrator");
	}
}

function colorCompanyStatus()
{
	var x = document.getElementById('companyStatus');
	//var x = dijit.byId('accountStatus');
	var y = x.options[x.selectedIndex].value;
//	x.style.color = 'white';
	switch(y){
		case "0":
			x.style.color = 'red';
			//x.style.color = 'black';
			break;
		case "1":
			x.style.color = 'green';
			//x.style.color = 'black';
			break;
		default: alert("This pop up should NOT happen. Something serious just happened. Contact administrator");
	}
}



