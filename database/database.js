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
    var database = firebase.database();
//const dbRefObject = firebase.database().ref().child('object');

// Sync object changes
//dbRefObject.on('value', snap => console.log(snap.val()));
/*
$("#saveComicButton").click(function(){
        // A Comic Entry
        var comicData = {
            comic: "comciBook1",
            comic2: "comicBook2"
        };
      
        // Get a key for a new Post.
        var newComicKey = firebase.database().ref().child('object').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        //console.log(firebase.auth().currentUser);
        updates['/' + 'UserOne' + '/user-comics/' + '/' + newComicKey] = comicData;
        console.log("Posted something to database?");
        return firebase.database().ref().update(updates);   

});
*/
});