$(function() {
    var database = firebase.database();


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // User is signed in.
            console.log(firebaseUser);

            //window.location = '../characters/index.html';
            //localStorage.setItem("currentUser", firebaseUser.uid)
        } else {
          // No user is signed in.
            console.log("not logged in");
        }
      });
//const dbRefObject = firebase.database().ref().child('object');

});