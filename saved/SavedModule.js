
class SavedModule {

constructor() {
    this.apiKey = '4f3a78050dedafbe123ce0a515c02b39';
    this.userId = ""; 
}


getSavedComics() {
    /* Begin method call and display loader gif */
    console.log('Getting saved comics...');
    $('.saved-container').append(`
       <img class="loader m-auto" src="loader.gif" />
    `);


// firebase data 

    firebase.database().ref('/user-data/'+userId + '/user-comics/').once('value').then(function(snapshot) { 
    console.log(snapshot)
    });

   
}

}
