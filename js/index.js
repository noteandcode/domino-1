document.addEventListener('DOMContentLoaded', function(e){
   document.getElementById('link').addEventListener('click', clipboard);
   document.getElementById('link').addEventListener('touchstart', clipboard);
   document.getElementsByTagName('footer')[0].addEventListener('click', fork);
   document.getElementsByTagName('footer')[0].addEventListener('touchstart', fork);
});
function clipboard(){
   const input = document.getElementById('link');
   input.select();
   document.execCommand('copy');
}
function fork(){
   window.location.href = 'https://github.com/nildopontes/domino';
}
