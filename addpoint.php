<?php
require_once('common.php');

header('Content-Type:application/json;charset=utf-8');
	$json = file_get_contents("php://input");  
	$obj = json_decode($json); 
	$phone = trim($obj->phone," ");

	if(!isPhone($phone)){
		echo json_encode(array('error'=>'-1','message'=>'手机号码格式错误！','code'=>'0'));
		exit;
	}

	$code = concode($phone);
	if(isset($obj))
	{
	 	addpoint($phone,$code);
	}
	//echo json_encode(array('code'=>$code));
	echo json_encode(array('error'=>'0','message'=>'ok','code'=>$code));
?>