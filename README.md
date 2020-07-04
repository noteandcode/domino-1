# domino
Implementação do jogo Dominó com Javascript e PHP. Trata-se de um jogo online, multiplayer e sem uso de  banco de dados.
## Regras adotadas
### 1°
O jogo começa com dois jogadores, cada qual com 6 peças, as quais serão sorteadas automaticamente no início da partida.
### 2°
O jogador que sair com a peça com mais pontos inicia a partida. Caso haja um empate o sistema sorteará automaticamente quem iniciará.
### 3°
Cada jogada terá duração máxima de 30 segundos. Terá uma tolerância de mais 5 segundos para compensar atrasos na rede e processamento. Caso perca o tempo perde a vez. O jogador que acumular 10 jogadas perdidas perderá o jogo.
### 4°
O jogador que não tiver peça que encaixe no tabuleiro na sua jogada deverá puxar do monte até que consiga uma. Este processo é automático.
### 5°
Vencerá o jogo quem conseguir jogar primeiro todas as peças em mãos.
### 6°
Caso o jogo seja trancado por falta de peças que encaixem será somado os pontos das peças de cada jogador. Vencerá o que tiver menos pontos. Caso haja empate a partida terminará com empatada.
