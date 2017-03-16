var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var selectMenu = document.getElementById('menu');
var color = document.getElementById('color');
var antenna = document.getElementById('antenna');
var greeting = document.getElementById('greeting');

var bodyColor = 'grey';
var antennaLength = 10;
var greetingText = '...' ;

function redrawRobot() {
    
//    draw text
    ctx.fillStyle = 'black';
    ctx.font = '18px "Courier New"';
    ctx.textAlign = 'center';
    ctx.fillText(greetingText, canvas.width/2, 40);
    
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
    ctx.fillRect(canvas.width/2 - 2, 110 - antennaLength, 4, antennaLength);
      
//    draw mouth
    ctx.fillRect(canvas.width/2 - 15, 145, 30, 5);
    
//    draw eyes
    ctx.fillStyle = 'red';
    ctx.arc(canvas.width/2 - 10, 125, 6, 0, Math.PI * 2);
    ctx.arc(canvas.width/2 + 10, 125, 6, 0, Math.PI * 2);
    ctx.fill();
 
}

function changeStyleEventHandler(event) {
    if (event.target === color ) {
        
        bodyColor = color.value;
        
    } else if (event.target === antenna) {
        
        antennaLength = antenna.value; 
        
    } else if (event.target === greeting) {
        
        greetingText = greeting.value; 
        
    }
    
    ctx.clearRect(0, 0, 400, 400);
    redrawRobot();
    
}

function eventListener() {
    selectMenu.addEventListener('change', changeStyleEventHandler);
}

function load() {
   
    redrawRobot();
    eventListener();
    
}

window.onload = load;