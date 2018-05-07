$(function() {

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

});







