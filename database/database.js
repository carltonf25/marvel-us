$(function() {
    var database = firebase.database();


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // User is signed in.
            console.log(firebaseUser.sa.uid);

        } else {
          // No user is signed in.
            console.log("not logged in database.js");
        }
      });
//const dbRefObject = firebase.database().ref().child('object');

});