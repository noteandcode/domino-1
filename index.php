<?php
   session_start();
   $_SESSION['registered'] = 'on';
?>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <title>Dominó Online - Tabuleiros</title>
      <link type="text/css" rel="stylesheet" href="css/index.css">
      <script src="js/index.js"></script> 
   </head>
   <body>
      <header>
	     <img src="img/logo.svg" id="logo">
	     <h1>Dominó Online</h1>
	  </header>
	  <div id="board">
		  <span>Este é o link do seu tabuleiro exclusivo. Compartilhe-o com um amigo e divirtam-se!</span><br><br><br>
         <input id="link" type="text" value="<?php echo 'http://vemjo.ga/?'.session_id();?>">
         <img id="clipboard" src="img/clipboard.svg">
	  </div>
	  <footer>
	     <span class="f">Fork me on</span><br>
	     <img src="img/github.svg" class="git">
	     <span class="g">Github</span>
	  </footer>
   </body>
</html>
