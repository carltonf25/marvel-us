$(function() {

    let savedModule = new SavedModule;

    let userId = savedModule.userId;
    
    savedModule.getSavedComics();

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // User is signed in.
            console.log(firebaseUser.uid);
            savedModule.userId = firebaseUser.uid;
        } else {
          // No user is signed in.
          window.location = '../login/index.html';  
          console.log("not logged in");
        }
        
      });

     let userData = firebase.database().ref('/user-data/'+userId + '/user-comics/');
        console.log(userData);









});