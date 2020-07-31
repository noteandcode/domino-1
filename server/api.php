<?php
   session_start();
   header('Content-type: application/json');
   if(isset($_SESSION['registered'])){
      exit('Unrecognized session');
   }
   if(!isset($_POST['request'])){
      exit('Malformed request');
   }
   $request = json_decode($_POST['request']);
   if(!isset($request['type']) || !$request){
      exit('Malformed request');
   }
   switch($request['type']){
      case 'register': // testar esse case
         if(!isset($request['name'])){
            exit('Malformed request');
         }
         if($_SESSION['userCount'] < 2){
            $amountPiece = 0;
            while($amountPiece < 6){
               $idx = rand(0, 27);
               if($_SESSION['heap'][$idx] !== null){
                  $_SESSION['user'][$_SESSION['userCount']]['pieces'][$amountPiece][0] = $_SESSION['heap'][$idx][0];
                  $_SESSION['user'][$_SESSION['userCount']]['pieces'][$amountPiece][1] = $_SESSION['heap'][$idx][1];
                  $amounPiece++;
               }
            }
            $_SESSION['userCount']++;
         }
         break;
      case 'update':
         break;
      case 'play':
         break;
      case 'spectator':
         break;
      case 'quit':
         if(!isset($request['hash'])){
            exit('Malformed request');
         }
         for($id = 0; $id < 2; $id++){
            if($_SESSION['user'][$id]['hash'] === $request['hash']){
               $_SESSION['user'][$id]['quit'] = 1;
            }
         }
         break;
   }
?> 
