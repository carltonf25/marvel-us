$(function() {

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

});