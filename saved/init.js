$(function() {

    let savedModule = new SavedModule;

    let userId = savedModule.userId;
    idsArray = [];
    
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

     let userData = firebase.database().ref('/user-data/'+userId);
      console.log(userData);
        userData.once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childKey);
                console.log(childData);
                for (key in childData["user-comics"]) {
                    let value = childData["user-comics"][key];
                    console.log(value);
                    let comic = firebase.database().ref('/user-data/'+userId+'/user-comics/'+value).once('value').then(snap =>{
                        return snap;
                    });
                    console.log(comic);

                    }

                });
            });
});







