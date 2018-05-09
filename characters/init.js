$(function() {
    var userId = ""
    console.log('init.js loaded')
    
    // initialize  new SuggestionModule listeners
    var characterModule = new CharacterModule();

    $('.search-button').click( e => {
        e.preventDefault();
        let charName = $('.form-control').val();
        characterModule.setCharacter(charName);
        characterModule.getCharacterId(charName)
        .then( () => {
            characterModule.searchCharacter(characterModule.character.name);
        }); 
    });

    $('.clear-button').click (e => {
        location.reload();
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