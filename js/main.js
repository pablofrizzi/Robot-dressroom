var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var bodyColor = 'grey';
var antenna = 0;



function drawRobot() {
    
//    draw boots
    ctx.fillStyle = bodyColor;
    ctx.fillRect(canvas.width/2 - 45, canvas.height - 10, 30, 10);
    ctx.fillRect(canvas.width/2 + 15, canvas.height - 10, 30, 10);
    
//    draw legs
    ctx.fillRect(canvas.width/2 - 25, 300, 10, 90);
    ctx.fillRect(canvas.width/2 + 15, 300, 10, 90);
    
//    draw corps
    ctx.fillRect(canvas.width/2 - 40, 170, 80, 130);
     
//    draw arms
    ctx.fillRect(canvas.width/2 - 70, 200, 30, 10 );
    ctx.fillRect(canvas.width/2 - 70, 200, 10, 70);
    
    ctx.fillRect(canvas.width/2 + 40, 200, 30, 10 );
    ctx.fillRect(canvas.width/2 + 60, 200, 10, 70);
    
//    draw head
    ctx.fillRect(canvas.width/2 - 25, 110, 50, 60);
    
//    antennas
    ctx.fillStyle = 'black';
    ctx.fillRect(canvas.width/2 - 2, 80 - antenna, 4, 30 + antenna);
      
//    draw mouth
    ctx.fillRect(canvas.width/2 - 15, 145, 30, 5);
    
//    draw eyes
    ctx.fillStyle = 'red';
    ctx.arc(canvas.width/2 - 10, 125, 6, 0, Math.PI * 2);
    ctx.arc(canvas.width/2 + 10, 125, 6, 0, Math.PI * 2);
    ctx.fill();
 
}



function load() {
   
    drawRobot();
    
}

window.onload = load;