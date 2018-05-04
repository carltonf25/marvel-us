class SuggestionModule {

    constructor(chars) {
        this.chars = [];
        this.apiKey = '4f3a78050dedafbe123ce0a515c02b39';
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
        let pos = this.chars.map(function(e) { return e.name; }).indexOf(character);
        this.chars.splice(pos, 1);
        this.render();   
    }

    render() {
        $('.characters-container').empty();
        this.chars.forEach(char => { 
            $('.characters-container').append(`
            <span class="character-tag">${char.name} <a data-i="${char.name}" href="#">X</a></span>
            `);
        });
    }

    getCharacterId(char) {
        let encodedCharName = encodeURIComponent(char.name);
        let url = `https://gateway.marvel.com:443/v1/public/characters?name=${encodedCharName}&apikey=${this.apiKey}`;
        
        $.get(url, response => {
            let id = response.data.results[0].id;
            console.log(id);
            if (id < 0) {
                console.log(`${char} is not a known character. Try again.`);
            } else {
                return id;
                console.log(`${char}'s id is ${id}`);
            }

        });
    }
}
