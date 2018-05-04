class SuggestionModule {

    constructor(chars) {
        this.chars = [];
        this.render();
    }

    addCharacter(character) {
        let characterNames = this.chars.map( char => { return char.name });
        if (!(characterNames.includes(character.name))) {
        this.chars.push(character);
        }
        this.render();
    }

    deleteCharacter(character) {
        pos = this.chars.map(function(e) { return e.name; }).indexOf(character);
        this.chars.splice(pos);
        this.render();
    }

    render() {
        $('.characters-container').empty();
        this.chars.forEach(char => { 
            $('.characters-container').append(`
            <span class="character-tag">${char.name} <a href="#">X</a></span>
            `);
        });
    }
}