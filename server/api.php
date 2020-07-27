<?php
   session_start();
   $registered = false;
   if(isset($_SESSION['registered']) && $_SESSION['registered'] === 'on'){
      $registered = true;
   }
   if(!$registered){
      exit(0);
      return 0;
   }
   $request = json_decode($_POST['request']);
   if($_SESSION['userCount'] < 2 && isset($request['name'])){
      for($ct = 0; $ct < 28; $ct++){
         
      }
      $_SESSION['userCount']++;
   }
?> 
