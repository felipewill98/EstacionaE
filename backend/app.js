var five = require("johnny-five"),
  board, photoresistor;
const firebase = require("firebase");
board = new five.Board();

board.on("ready", function() {
  
  var tempo = new Number();
  var tempo = 20;
  function start(){
    if((tempo-1) >=0)
    tempo =tempo-1;
    setTimeout('start();',1000);
    tempo.console.log()
  }
  

  
  //led
  var G = new five.Led(13)
  var R= new five.Led(12)
  var G2= new five.Led(10)
  var R2= new five.Led(11)
  var G3= new five.Led(8)
  var R3= new five.Led(9)
  var G4= new five.Led(6)
  var Y4 = new five.Led(7)
  var R4= new five.Led(5)
  // Create a new `photoresistor` hardware instance.
  vaga1 = new five.Sensor({
    pin: "A0",
    freq: 250
  });
  vaga2 = new five.Sensor({
    pin: "A1",
    freq: 250
  });
  vaga3 = new five.Sensor({
    pin: "A2",
    freq: 250
  });
  vaga4 = new five.Sensor({
    pin: "A3",
    freq: 250
  });
 
  const firebaseConfig = {
    apiKey: "AIzaSyBUJj7zSJW1d2r93EosrWI-dqkI5U4aa4M",
    authDomain: "dbestacione.firebaseapp.com",
    databaseURL: "https://dbestacione.firebaseio.com",
    projectId: "dbestacione",
    storageBucket: "dbestacione.appspot.com",
   
  };

  firebase.initializeApp(firebaseConfig);
  vaga1.on("data", function() {

    if(this.value> 1000 ){
      R.on();
    
      G.off()
      console.log(this.value)
      firebase.database().ref('VAGA1').set({
        VAGA1:'on'
        
      });

    }else if(this.value < 1000){
      R.off();
     
      G.on()
      firebase.database().ref('VAGA1').set({
        VAGA1:'off'
      });
      
    
    }
    

  });
  vaga2.on("data", function() {

    if(this.value> 1000 ){
      R2.on();
    
      G2.off()
      console.log(this.value)
      firebase.database().ref('VAGA2').set({
        VAGA2:'on'
        
      });

    }else if(this.value < 1000){
      R2.off();
     
      G2.on()
      firebase.database().ref('VAGA2').set({
        VAGA2:'off'
      });
      
    
    }
    

  });
  vaga3.on("data", function() {

    if(this.value> 1000 ){
      R3.on();
    
      G3.off()
      console.log(this.value)
      firebase.database().ref('VAGA3').set({
        VAGA3:'on'
        
      });

    }else if(this.value < 1000){
      R3.off();     
      G3.on()
      firebase.database().ref('VAGA3').set({
        VAGA3:'off'
      });
      
    
    }
    

  });
  vaga4.on("data", function() {

    if(this.value> 1000 ){
      R4.on();
      Y4.on();
      G4.off()
      console.log(this.value)
      firebase.database().ref('VAGA4').set({
        VAGA4:'on'
        
      });

    }else if(this.value < 1000){
      R4.off();
      Y4.off();
      G4.on();
      firebase.database().ref('VAGA4').set({
        VAGA4:'off'
      });
      
    
    }
    

  });



});
