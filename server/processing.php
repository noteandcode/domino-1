<?php
   class Response{
      public $errorMessage = ['', 'Malformed request: JSON error', 'Malformed request: Incomplete request', 'Malformed request: Hash not provided', 'Unrecognized session'];
      public $errorCode = 0;
      public $turn;
      public $quit = 0;
      public $board;
      public $myPieces;
      public function __construct($errorCode, $quit){

      }
   }
?>
