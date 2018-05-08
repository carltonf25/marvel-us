$(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDBiZ9dZXPS4fPsgVS7QZlZYW6BTzFEE4w",
        authDomain: "marvel-us-3047f.firebaseapp.com",
        databaseURL: "https://marvel-us-3047f.firebaseio.com",
        projectId: "marvel-us-3047f",
        storageBucket: "marvel-us-3047f.appspot.com",
        messagingSenderId: "719162564470"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // User is signed in.
            console.log(firebaseUser);
            $("#loginRow").hide();
            $("#logoutRow").show();
        } else {
          // No user is signed in.
            console.log("not logged in");
            $("#loginRow").show();
            $("#logoutRow").hide();
        }
      });
    const auth = firebase.auth();
    //auth.signInWithEmailAndPassword(email, pass);     return promise
    //auth.createUserWithEmailAndPassword(email, pass);     returns promise
    //auth.onAuthStateChanged(firebaseUser => {});
    
    $("#loginButton").click(function(e){
        e.preventDefault();
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        //console.log("U " + inputEmail + "P " + inputPassword );
        const promise = auth.signInWithEmailAndPassword(inputEmail, inputPassword);
        promise.catch(e => console.log(e.message));
    });

    $("#signupButton").click(function(e){
        e.preventDefault();
        //Check for real email
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        //console.log("U " + inputEmail + "P " + inputPassword );
        const promise = auth.createUserWithEmailAndPassword(inputEmail, inputPassword);
        promise.catch(e => console.log(e.message));
    });
    
    $("#logoutRow").click(function(){
        firebase.auth().signOut();
    });


    
    
});