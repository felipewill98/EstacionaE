const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyBUJj7zSJW1d2r93EosrWI-dqkI5U4aa4M",
    authDomain: "dbestacione.firebaseapp.com",
    databaseURL: "https://dbestacione.firebaseio.com",
    projectId: "dbestacione",
    storageBucket: "dbestacione.appspot.com",
   
  };

  firebase.initializeApp(firebaseConfig);
  
  const VAGA1 = firebase.database().ref('VAGA1').on('value', function(snapshot) {
    let VAGA1=snapshot.val();
    if(VAGA1=='on'){
      Verde.on();
      
    }else(
      Verde.off()
    )
  });