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

    $('.card').on( 'click', '.save-btn', e => {

        let comicID = $(this).data('id');
        console.log(comicID);

        $("[data-id='"+comicID+"']").html('SAVED');
        $("[data-id='"+comicID+"']").toggleClass('btn-success');
        $("[data-id='"+comicID+"']").prop('disabled', true);

        /*
        //console.log($("[data-id='"+comicID+"']").prop('disabled'));
        let currentComics = firebase.database().ref('/user-data/'+userId + '/user-comics/').once('value').then(function(snapshot) {
            console.log(snapshot);
            console.log(snapshot.val());
            return snapshot.val();
        }).then(function(snap){
            let savingComic = {};
        if (snap == null || "") {
            console.log("There are no comics saved");
            let newComicKey = firebase.database().ref().child(userId).child('user-comics').push().key;
            savingComic['/user-data/' + userId + '/user-comics/' + newComicKey] = comicID;
            firebase.database().ref().update(savingComic);
        }
        else {
            console.log("There is already at least one comic saved. appending new comics.");
            let newComicKey = firebase.database().ref().child(userId).child('user-comics').push().key;
            savingComic['/user-data/' + userId + '/user-comics/' + newComicKey] = comicID;
            firebase.database().ref().update(savingComic);
        }
        });
        e.preventDefault();
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
        
        */
      }); 
});







