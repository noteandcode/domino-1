<?php
   session_start();
   header('Content-type: application/json');
   require 'processing.php';
   if(!isset($_SESSION['registered'])){
      exit('Unrecognized session');
   }
   //print_r($_SESSION); exit();
   if(!isset($_POST['request'])){
      exit('Malformed request: Incomplete request');
   }
   $request = json_decode($_POST['request']);
   if(!isset($request->type) || !$request){
      exit('Malformed request: JSON error');
   }
   switch($request->type){
      case 'register':
         if(!isset($request->name) || strlen($request->name) == 0){
            $request->name = 'Gamer'.$_SESSION['userCount'];
         }
         if($_SESSION['userCount'] < 2){
            $amountPiece = 0;
            while($amountPiece < 6){
               $idx = rand(0, 27);
               if($_SESSION['heap'][$idx] !== null){
                  $_SESSION['user'][$_SESSION['userCount']]['pieces'][$amountPiece][0] = $_SESSION['heap'][$idx][0];
                  $_SESSION['user'][$_SESSION['userCount']]['pieces'][$amountPiece][1] = $_SESSION['heap'][$idx][1];
                  $_SESSION['heap'][$idx] = null;
                  $_SESSION['user'][$_SESSION['userCount']]['name'] = $request->name;
                  $_SESSION['user'][$_SESSION['userCount']]['hash'] = md5(rand(0, 10000).$request->name.rand(0, 10000));
                  $amountPiece++;
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
         if(!isset($request->hash)){
            exit('Malformed request: Hash not provided');
         }
         for($id = 0; $id < 2; $id++){
            if($_SESSION['user'][$id]['hash'] === $request->hash){
               $_SESSION['user'][$id]['quit'] = 1;
            }
         }
         break;
   }
?> 
