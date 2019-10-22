window.onload = function() {
    draw();
    window.addEventListener("resize", draw)
}

function draw() {

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var myWidth = window.innerWidth -5;
var myHeight = window.innerHeight -5;
c.canvas.width = myWidth;
c.canvas.height = myHeight;

// Hexagon Shape

c.beginPath();
c.lineTo (736, 38)
c.lineTo (1186, 38)
c.lineTo (1409, 372)
c.lineTo (1186, 756)
c.lineTo (735, 756)
c.lineTo (513, 372)
c.lineTo (736, 38)
c.stroke();

// Top to bottom line 

c.beginPath();
c.lineTo (961, 38)
c.lineTo (961, 756)
c.stroke();

// Line from top left to bottom right

c.beginPath();
c.lineTo (1276, 600)
c.lineTo (616, 218)
c.stroke();

// Line from bottom left to top right

c.beginPath();
c.lineTo (644, 600)
c.lineTo (1306, 218)
c.stroke();

// Top right board 

c.beginPath();
c.lineTo (1130, 38)
c.lineTo (1213, 271)
c.lineTo (1371, 435)
c.stroke();

c.beginPath();
c.lineTo (1073, 38)
c.lineTo (1129, 320)
c.lineTo (1330, 506)
c.stroke();

c.beginPath();
c.lineTo (1017, 38)
c.lineTo (1044, 369)
c.lineTo (1303, 555)
c.stroke();

// Bottom right board

c.beginPath();
c.lineTo (1387, 339)
c.lineTo (1214, 566)
c.lineTo (1130, 756)
c.stroke();

c.beginPath();
c.lineTo (1073, 756)
c.lineTo (1131, 515)
c.lineTo (1360, 299)
c.stroke();

c.beginPath();
c.lineTo (1017, 756)
c.lineTo (1049, 469)
c.lineTo (1335, 261)
c.stroke();

// Bottom board

c.beginPath();
c.lineTo (1210, 716)
c.lineTo (961, 655)
c.lineTo (712, 716)
c.stroke();

c.beginPath();
c.lineTo (1235, 670)
c.lineTo (961, 572)
c.lineTo (688, 674)
c.stroke();

c.beginPath();
c.lineTo (1257, 635)
c.lineTo (961, 498)
c.lineTo (665, 635)
c.stroke();

// Bottom left board

}