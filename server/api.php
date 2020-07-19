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
   if(!$_SESSION['distribute']){
      $_SESSION['distribute'] = true;
   }
?> 
