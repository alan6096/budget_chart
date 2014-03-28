<?php
include 'skdb.php';

//update();
//delete();
//insertsql();
display();
//getlink2();

function update()
{
	$rs = new sksql($_GET['table']);
	$rs->whereadd("id=1");
	$rs->updateadd("department_id=1");
	$rs->updateadd("company_id=1");
	$rs->update();
}

function delete()
{
	$rs = new sksql($_GET['table']);
	$rs->id=4;
	$rs->delete();
}

function insertsql()
{
	$table = $_GET['table'];
$param = $_GET['param'];

$param_array = explode(",", $param);

$rs = new sksql($_GET['table']);
for ($i=0; $i < count($param_array) ; $i++)
{
	echo $param_array[$i];
	$rs->insertadd($param_array[$i]);	
}
$rs->insert();
}

function display()
{
	$display = new sksql("user");
	$display->find();

	while($row = $display->fetch())
	{
		//echo $row->id;
		$display->id=$row->id;
		$department = $display->getlink("department_id","department","id");
		if($department->id)
		$link2 = getlink2($department->id);
		
		echo $display->id .",". $department->name .",". $link2;
		echo "<br>";
	}
}

function getlink2($param)
{
	$headname= new sksql("department");
	$headname->whereadd("id=$param");
	$headname->find();
	
	$row = $headname->fetch();
	$headname->id=$row->id;
	$headname_link = $headname->getlink("head_id","user","id");
	return $headname_link->name;
	//echo "<br>";
}
?>