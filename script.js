window.onload = function() {
   taisnsturis();
}
function taisnsturis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.lineWidth = 15;
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.stroke();
}

function aplis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(200, 250, 50, 0, 2 * Math.PI);
  ctx.lineWidth = 8;
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'yellow'; 
  ctx.stroke();
  ctx.fill();
}

function teksts() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.font = "20px Sofia";
  ctx.fillStyle = "green";
  ctx.fillText("Sveika pasaule!", 250, 50);
}

function linija() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(500, 400);
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'orange';
  ctx.stroke();
}

function bilde() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  var img = document.getElementById("bilde");
  ctx.drawImage(img, 10, 200, 100, 100);
  ctx.strokeStyle = 'yellow';
  ctx.lineWidht = 5;
  ctx.strokeRect(10, 200, 100, 100);
}