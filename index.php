<?php
   $data = 'server/data.txt';
   clearstatcache();
   if(!file_exists($data)){
      file_put_contents($data, '', FILE_APPEND);
   }
?>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <title>Dominó Online - Tabuleiros</title>
      <link type="text/css" rel="stylesheet" href="index.css">
      <script src="index.js"></script> 
   </head>
   <body>
	   <header></header>
	   <div class="boards"></div>
	   <footer></footer>
   </body>
</html>
