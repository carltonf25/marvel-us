$(function() {
    var userId = ""
    console.log('init.js loaded')
    
    // initialize new SuggestionModule listeners
    var suggestionModule = new SuggestionModule();

    $('.add-button').click( e => { 
        let charName = $('.form-control').val();       
        suggestionModule.addCharacter({name: charName, id: null});
    });

    $('.clear-button').click (e => {
        location.reload();
    });

    $('.suggest-btn').click( e => {
        e.preventDefault();
        $('.suggestions-container').empty();
        suggestionModule.getComicSuggestions();
    });

    $('.save-btn').click( e => {
        console.log(e);
        console.log(this.id);
        savingComic['/' + userId + '/user-comics/'] = e.id;
        firebase.database().ref().update(savingComic);
    });

    $("#logOutButton").click(function(){
        console.log("logging out of user")
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // User is signed in.
            console.log(firebaseUser.uid);
            userId = firebaseUser.uid;
        } else {
          // No user is signed in.
          window.location = '../login/index.html';  
          console.log("not logged in");
        }
      });
});







