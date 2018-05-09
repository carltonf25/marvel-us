$(function() {

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // User is signed in.
            console.log(firebaseUser);
            $("#loginRow").hide();
            $("#logoutRow").show();
            window.location = '../characters/index.html';
            //localStorage.setItem("currentUser", firebaseUser.uid)
            
               
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
        promise.then(e => {
            console.log(e)
            console.log("Createing new user database!")
            var newUserUpdate = {};
            newUserUpdate['/' + e.user.uid + '/user-comics/'] = "One";
            newUserUpdate['/' + e.user.uid + '/user-heroes/'] = "Two";
            console.log("Posted something to database?");
            return firebase.database().ref().update(newUserUpdate);
        }).catch(e => console.log(e.message));
    });
    
    $("#logoutRow").click(function(){
        firebase.auth().signOut();
    });
    
    
});