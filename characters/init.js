$(function() {

    console.log('init.js loaded')
    
    // initialize new SuggestionModule listeners
    var characterModule = new CharacterModule();

    $('.search-button').click( e => { 
        let charName = $('.form-control').val();       
        suggestionModule.searchCharacter(charName);
    });

    $('.clear-button').click (e => {
        location.reload();
    });



});