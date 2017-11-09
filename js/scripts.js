var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(0, 0, 980, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(400, 400, 100, 100);
c.fillRect(600, 600, 100, 100);

console.log(canvas);