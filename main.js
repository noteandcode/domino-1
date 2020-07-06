document.addEventListener('DOMContentLoaded', function(e){
   var board = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
   board.setAttribute('version', '1.1');
   board.setAttribute('viewBox', '0 0 300 300');
   board.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
   board.setAttribute('id', 'board');
   var g0 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g0.setAttribute('stroke', 'black');
   g0.setAttribute('stroke-width', '1');
   g0.setAttribute('fill', 'white');
   g0.setAttribute('id', 'rect');
   var rects = [[30,120,30,60],[0,90,30,60],[30,60,30,60],[0,30,30,60],[0,0,60,30],[30,30,60,30],[60,0,60,30],[90,30,60,30],[120,0,60,30],[150,30,60,30],[180,0,60,30],[210,30,60,30],[240,0,60,30],[270,30,30,60],[240,60,30,60],[270,90,30,60],[240,120,30,60],[270,150,30,60],[240,180,30,60],[270,210,30,60],[240,270,60,30],[210,240,60,30],[180,270,60,30],[150,240,60,30],[120,270,60,30],[90,240,60,30],[60,270,60,30],[30,240,60,30],[0,270,60,30],[0,210,30,60],[30,180,30,60],[0,150,30,60]];
   var circles = [[[7,5],[16,5],[25,5],[35,5],[44,5],[53,5],[7,24],[16,24],[25,24],[35,24],[44,24],[53,24],[16,14.5],[44,14.5]],
                  [[67,5],[76,5],[85,5],[95,5],[104,5],[113,5],[67,24],[76,24],[85,24],[95,24],[104,24],[113,24],[76,14.5],[104,14.5]],
                  [[127,5],[136,5],[145,5],[155,5],[164,5],[173,5],[127,24],[136,24],[145,24],[155,24],[164,24],[173,24],[136,14.5],[164,14.5]],
                  [[187,5],[196,5],[205,5],[215,5],[224,5],[233,5],[187,24],[196,24],[205,24],[215,24],[224,24],[233,24],[196,14.5],[224,14.5]],
                  [[247,5],[256,5],[265,5],[275,5],[284,5],[293,5],[247,24],[256,24],[265,24],[275,24],[284,24],[293,24],[256,14.5],[284,14.5]],
                  [[7,275],[16,275],[25,275],[35,275],[44,275],[53,275],[7,294],[16,294],[25,294],[35,294],[44,294],[53,294],[16,284.5],[44,284.5]],
                  [[67,275],[76,275],[85,275],[95,275],[104,275],[113,275],[67,294],[76,294],[85,294],[95,294],[104,294],[113,294],[76,284.5],[104,284.5]],
                  [[127,275],[136,275],[145,275],[155,275],[164,275],[173,275],[127,294],[136,294],[145,294],[155,294],[164,294],[173,294],[136,284.5],[164,284.5]],
                  [[187,275],[196,275],[205,275],[215,275],[224,275],[233,275],[187,294],[196,294],[205,294],[215,294],[224,294],[233,294],[196,284.5],[224,284.5]],
                  [[247,275],[256,275],[265,275],[275,275],[284,275],[293,275],[247,294],[256,294],[265,294],[275,294],[284,294],[293,294],[256,284.5],[284,284.5]],
                  [[37,35],[46,35],[55,35],[65,35],[74,35],[83,35],[37,54],[46,54],[55,54],[65,54],[74,54],[83,54],[46,44.5],[74,44.5]],
                  [[97,35],[106,35],[115,35],[125,35],[134,35],[143,35],[97,54],[106,54],[115,54],[125,54],[134,54],[143,54],[106,44.5],[134,44.5]],
                  [[157,35],[166,35],[175,35],[185,35],[194,35],[203,35],[157,54],[166,54],[175,54],[185,54],[194,54],[203,54],[166,44.5],[194,44.5]],
                  [[217,35],[226,35],[235,35],[245,35],[254,35],[263,35],[217,54],[226,54],[235,54],[245,54],[254,54],[263,54],[226,44.5],[254,44.5]],
                  [[37,245],[46,245],[55,245],[65,245],[74,245],[83,245],[37,264],[46,264],[55,264],[65,264],[74,264],[83,264],[46,254.5],[74,254.5]],
                  [[97,245],[106,245],[115,245],[125,245],[134,245],[143,245],[97,264],[106,264],[115,264],[125,264],[134,264],[143,264],[106,254.5],[134,254.5]],
                  [[157,245],[166,245],[175,245],[185,245],[194,245],[203,245],[157,264],[166,264],[175,264],[185,264],[194,264],[203,264],[166,254.5],[194,254.5]],
                  [[217,245],[226,245],[235,245],[245,245],[254,245],[263,245],[217,264],[226,264],[235,264],[245,264],[254,264],[263,264],[226,254.5],[254,254.5]],
                  [[5,37],[5,46],[5,55],[5,65],[5,74],[5,83],[25,37],[25,46],[25,55],[25,65],[25,74],[25,83],[15,46],[15,74]],
                  [[5,97],[5,106],[5,115],[5,125],[5,134],[5,143],[25,97],[25,106],[25,115],[25,125],[25,134],[25,143],[15,106],[15,134]],
                  [[5,157],[5,166],[5,175],[5,185],[5,194],[5,203],[25,157],[25,166],[25,175],[25,185],[25,194],[25,203],[15,166],[15,194]],
                  [[5,217],[5,226],[5,235],[5,245],[5,254],[5,263],[25,217],[25,226],[25,235],[25,245],[25,254],[25,263],[15,226],[15,254]],
                  [[275,37],[275,46],[275,55],[275,65],[275,74],[275,83],[295,37],[295,46],[295,55],[295,65],[295,74],[295,83],[285,46],[285,74]],
                  [[275,97],[275,106],[275,115],[275,125],[275,134],[275,143],[295,97],[295,106],[295,115],[295,125],[295,134],[295,143],[285,106],[285,134]],
                  [[275,157],[275,166],[275,175],[275,185],[275,194],[275,203],[295,157],[295,166],[295,175],[295,185],[295,194],[295,203],[285,166],[285,194]],
                  [[275,217],[275,226],[275,235],[275,245],[275,254],[275,263],[295,217],[295,226],[295,235],[295,245],[295,254],[295,263],[285,226],[285,254]],
                  [[35,67],[35,76],[35,85],[35,95],[35,104],[35,113],[55,67],[55,76],[55,85],[55,95],[55,104],[55,113],[45,76],[45,104]],
                  [[35,127],[35,136],[35,145],[35,155],[35,164],[35,173],[55,127],[55,136],[55,145],[55,155],[55,164],[55,173],[45,136],[45,164]],
                  [[35,187],[35,196],[35,205],[35,215],[35,224],[35,233],[55,187],[55,196],[55,205],[55,215],[55,224],[55,233],[45,196],[45,224]],
                  [[245,67],[245,76],[245,85],[245,95],[245,104],[245,113],[265,67],[265,76],[265,85],[265,95],[265,104],[265,113],[255,76],[255,104]],
                  [[245,127],[245,136],[245,145],[245,155],[245,164],[245,173],[265,127],[265,136],[265,145],[265,155],[265,164],[265,173],[255,136],[255,164]],
                  [[245,187],[245,196],[245,205],[245,215],[245,224],[245,233],[265,187],[265,196],[265,205],[265,215],[265,224],[265,233],[255,196],[255,224]]];;
   var lines = [[35,150,55,150],[5,120,25,120],[35,90,55,90],[5,60,25,60],[30,5,30,25],[60,35,60,55],[90,5,90,25],[120,35,120,55],[150,5,150,25],[180,35,180,55],[210,5,210,25],[240,35,240,55],[270,5,270,25],[275,60,295,60],[245,90,265,90],[275,120,295,120],[245,150,265,150],[275,180,295,180],[245,210,265,210],[275,240,295,240],[270,275,270,295],[240,245,240,265],[210,275,210,295],[180,245,180,265],[150,275,150,295],[120,245,120,265],[90,275,90,295],[60,245,60,265],[30,275,30,295],[5,240,25,240],[35,210,55,210],[5,180,25,180]];
   var selects = [[102,131],[119,131],[136,131],[164,131],[181,131],[198,131],[102,169],[119,169],[136,169],[164,169],[181,169],[198,169],[119,150],[181,150]];
   for(var i = 0; i <= 31; i++){
	   var temp = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	   temp.setAttribute('x', rects[i][0]);
       temp.setAttribute('y', rects[i][1]);
       temp.setAttribute('width', rects[i][2]);
       temp.setAttribute('height', rects[i][3]);
       temp.setAttribute('rx', '4');
       g0.appendChild(temp);
   }
   board.appendChild(g0);
   var g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g1.setAttribute('stroke', 'black');
   g1.setAttribute('stroke-width', '1');
   g1.setAttribute('id', 'line');
   for(var i = 0; i <= 31; i++){
	   var temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	   temp.setAttribute('x1', lines[i][0]);
       temp.setAttribute('y1', lines[i][1]);
       temp.setAttribute('x2', lines[i][2]);
       temp.setAttribute('y2', lines[i][3]);
       g1.appendChild(temp);
   }
   board.appendChild(g1);
   var g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g2.setAttribute('fill', 'black');
   g2.setAttribute('id', 'circle');
   for(var ii = 0; ii <= 31; ii++){
      var temp = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      for(var i = 0; i <= 13; i++){
         var temp1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
         temp1.setAttribute('cx', circles[ii][i][0]);
         temp1.setAttribute('cy', circles[ii][i][1]);
         temp1.setAttribute('r', '3');
         temp.appendChild(temp1);
      }
      g2.appendChild(temp);
   }
   board.appendChild(g2);
   var g3 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g3.setAttribute('fill', 'white');
   g3.setAttribute('stroke', 'black');
   g3.setAttribute('stroke-width', '1');
   var tmp = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
   tmp.setAttribute('x', '90');
   tmp.setAttribute('y', '120');
   tmp.setAttribute('width', '120');
   tmp.setAttribute('height', '60');
   tmp.setAttribute('rx', '4');
   g3.appendChild(tmp);
   tmp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
   tmp.setAttribute('x1', '150');
   tmp.setAttribute('y1', '130');
   tmp.setAttribute('x2', '150');
   tmp.setAttribute('y2', '170');
   g3.appendChild(tmp);
   board.appendChild(g3);
   
   var g4 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g4.setAttribute('fill', 'black');
   for(var i = 0; i <= 13; i++){
      var tmp = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      tmp.setAttribute('cx', selects[i][0]);
      tmp.setAttribute('cy', selects[i][1]);
      tmp.setAttribute('r', '6');
      g4.appendChild(tmp);
   }
   board.appendChild(g4);
   document.body.appendChild(board);

   var pieces = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
   pieces.setAttribute('version', '1.1');
   pieces.setAttribute('viewBox', '0 0 300 192');
   pieces.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
   pieces.setAttribute('id', 'pieces');
   var g0 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g0.setAttribute('stroke', 'black');
   g0.setAttribute('stroke-width', '1');
   g0.setAttribute('fill', 'white');
   g0.setAttribute('id', 'rct');
   var rct = [6.66,1];
   var icx = 36.66;
   var icy = 65;
   for(var ii = 0; ii < 3; ii++){
      for(var i = 0; i < 8; i++){
         if(ii == 2 && i > 5){
            break;
         }
         var temp = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
         temp.setAttribute('x', (rct[0] + icx * i).toFixed(2));
         temp.setAttribute('y', (rct[1] + icy * ii).toFixed(2));
         temp.setAttribute('width', '30');
         temp.setAttribute('height', '60');
         temp.setAttribute('rx', '4');
         g0.appendChild(temp);
      }
   }
   pieces.appendChild(g0);
   var g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g1.setAttribute('stroke', 'black');
   g1.setAttribute('id', 'ln');
   var ln = [11.6,30.8];
   icx = 36.66;
   icy = 65;
   for(var ii = 0; ii < 3; ii++){
      for(var i = 0; i < 8; i++){
         if(ii == 2 && i > 5){
            break;
         }
         temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
         temp.setAttribute('x1', (ln[0] + icx * i).toFixed(2));
         temp.setAttribute('y1', (ln[1] + icy * ii).toFixed(2));
         temp.setAttribute('x2', (ln[0] + 20 + icx * i).toFixed(2));
         temp.setAttribute('y2', (ln[1] + icy * ii).toFixed(2));
         g1.appendChild(temp);
      }
   }
   pieces.appendChild(g1);
   var g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   g0.setAttribute('fill', 'white');
   g0.setAttribute('id', 'crcl');
   var crcl = [[11.66,7],[11.66,16],[11.66,25],[11.66,36.5],[11.66,45.5],[11.66,54.5],[31.66,7],[31.66,16],[31.66,25],[31.66,36.5],[31.66,45.5],[31.66,54.5],[21.66,16],[21.66,45.5]];
   icx = 36.66;
   icy = 65;
   for(var iii = 0; iii < 3; iii++){
      for(var ii = 0; ii < 8; ii++){
         if(iii == 2 && ii > 5){
            break;
         }
         var tp = document.createElementNS('http://www.w3.org/2000/svg', 'g');
         for(var i = 0; i < 14; i++){
            var temp = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            temp.setAttribute('cx', (crcl[i][0] + icx * ii).toFixed(2));
            temp.setAttribute('cy', (crcl[i][1] + icy * iii).toFixed(2));
            temp.setAttribute('r', '3');
            tp.appendChild(temp);
            g2.appendChild(tp);
         }
      }
   }
   pieces.appendChild(g2);
   var timer = document.createElementNS('http://www.w3.org/2000/svg', 'text');
   timer.setAttribute('x', '228');
   timer.setAttribute('y', '180');
   timer.setAttribute('font-size', '50');
   timer.setAttribute('id', 'timer');
   timer.innerHTML = '35';
   pieces.appendChild(timer);
   document.body.appendChild(pieces);
});
