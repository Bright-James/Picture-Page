function hMan() {
    const canvas = document.getElementById('stickMan');
    const c = canvas.getContext('2d');
    

    function firstCloud() {    //1st cloud
        c.beginPath();
        c.moveTo(0, 130);
        c.quadraticCurveTo(50, 60, 95, 90);
        c.quadraticCurveTo(150, 20, 200, 100);
        c.quadraticCurveTo(250, 65, 320, 130);
        c.quadraticCurveTo(350, 110, 370, 170);
        c.lineTo(0, 170);
        c.lineTo(0, 130);
        c.closePath();
        c.fillStyle = '#8ED6FF';
        c.fill();
    }
    firstCloud();    
    



    function secondCloud() {    //second cloud
        c.beginPath();
        c.moveTo(370, 260);
        c.quadraticCurveTo(405, 140, 430, 200);
        c.quadraticCurveTo(450, 80, 550, 210);
        c.quadraticCurveTo(600, 160, 700, 260);
        c.lineTo(370, 260);
        c.closePath();
        c.fillStyle = '#8ED6FF';
        c.fill();
    }
    secondCloud();    



    function thirdCloud() {    //third cloud
        c.beginPath();
        c.moveTo(600, 160);
        c.quadraticCurveTo(670, 80, 700, 110);
        c.quadraticCurveTo(770, 25, 900, 90);
        c.quadraticCurveTo(830, 15, 1000, 7);
        c.lineTo(1000, 160);
        c.lineTo(600, 160);
        c.closePath();
        c.fillStyle = '#8ED6FF';
        c.fill();
    }
    thirdCloud();
    
    
    function boat() {     //Boat
        c.beginPath();
        c.moveTo(0, 535);
        c.lineTo(30, 585);
        c.lineTo(360,585);
        c.lineTo(390, 535);
        c.lineTo(0, 535);
        c.closePath();
        c.fillStyle = 'brown';
        c.fill();
    }
    boat();


    function sail() {
        c.fillStyle = 'green';
        c.fillRect(300, 340, 100, 35);
        
        
    }
    sail();


    function pole() {    //pole
        c.fillStyle = 'grey';
        c.fillRect(300, 330, 7, 204);
    }
    pole();    
    

    function sun() {  //sun
        c.beginPath();
        c.moveTo(700, 30);
        c.arc(700, 30, 50, 0, 2 * Math.PI, true);
        c.fillstyle = '#FAFAD2';
        c.fill();
        function time () {  //returns current time 
            new Date().toLocaleTimeString();
        }
        time();
        if (time >= '19:00:00') { //changes the sun to a moon when it is 19:00 or past
            sun.c.fillstyle = '#808080';
        }
    }
    sun();

    

   
   
}


window.addEventListener('load', hMan);



