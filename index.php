<?php
   session_start();
   $_SESSION['registered'] = 'on'; // indica que a sessão está registrada como jogo ativo
   $_SESSION['userCount'] = 0; // quantidade de jogadores online. O máximo é 2
   $_SESSION['timestamp'] = 0; // armazena um timestamp da última jogada para contagem de tempo
   $_SESSION['board'] = array(); // [sideA, sideB, countPiece]
   $_SESSION['user'] = array( // armazena dados dos usuários durante o jogo
      array(
         'name' => '',
         'hash' => '',
         'pieces' => array(),
         'turn' => 0,
         'quit' => 0
      ),
      array(
         'name' => '',
         'hash' => '',
         'pieces' => array(),
         'turn' => 0,
         'quit' => 0
      )
   );
   $_SESSION['heap'] = array([0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,2],[2,3],[2,4],[2,5],[2,6],[3,3],[3,4],[3,5],[3,6],[4,4],[4,5],[4,6],[5,5],[5,6],[6,6]); // todas as peças disponíveis no monte
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
