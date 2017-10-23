<?php
//验证电话
//header('Content-Type:application/json;charset=utf-8');
define('DB_HOST', 'localhost:3306');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_DATABASENAME', 'blackcard');

function isPhone($tel,$type='')
{
  // $regxArr = array(
  // 'sj'  =>  '/^(\+?86-?)?(18|15|13)[0-9]{9}$/',
  // 'tel' =>  '/^(010|02\d{1}|0[3-9]\d{2})-\d{7,9}(-\d+)?$/',
  // '400' =>  '/^400(-\d{3,4}){2}$/',
  // );
  $regxArr = array(
  'sj'  =>  '/^(\+?86-?)?(18|15|13)[0-9]{9}$/'
  );
  if($type && isset($regxArr[$type]))
  {
    return preg_match($regxArr[$type], $tel) ? true:false;
  }
  foreach($regxArr as $regx)
  {
    if(preg_match($regx, $tel ))
    {
      return true;
    }
  }
  return false;
}

function concode($phone){
  $map = array("N","8","C","D","Z","P","M","E","C","6");
  $arr_phone = str_split($phone);
  $code = "";
  foreach($arr_phone as $key){
    $code = $code.$map[$key];
  }
  $code = substr($code, 2);
  return  "B".$code;
}

//增加检测点
function addpoint($phone,$code){

    $conn = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("connect failed" . mysql_error());
    mysql_select_db(DB_DATABASENAME, $conn);

    $sql = "INSERT INTO member (phone,code,created_at) VALUES ('%s','%s','%s')";
    $query1 = sprintf($sql,
                        mysql_real_escape_string($phone),
                        mysql_real_escape_string($code),
                        mysql_real_escape_string(time())
                    );
    $result = mysql_query($query1,$conn);
    mysql_close($conn);

    // $conn = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("connect failed" . mysql_error());
    // mysql_select_db(DB_DATABASENAME, $conn);
    // $sql = "update nv_keypoint set point = point + 1  where keytype = '%s' ";
    // $query1 = sprintf($sql,
    //                   $keytype
    //                 );
    // $result = mysql_query($query1,$conn);
    // $sql = "INSERT INTO nv_keypoint_mbr (openid,keytype,logintime) VALUES ('%s','%s','%s')";
    // $query1 = sprintf($sql,
    //                     mysql_real_escape_string($openid),
    //                     mysql_real_escape_string($keytype),
    //                     mysql_real_escape_string(time())
    //                 );
    // $result = mysql_query($query1,$conn);
    // mysql_close($conn);
}
?>
