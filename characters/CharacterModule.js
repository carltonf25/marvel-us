class CharacterModule {

    constructor(chars) {
        this.character = {}; 
        this.apiKey = '4f3a78050dedafbe123ce0a515c02b39';
     //   this.finalHTML = ``; 
        this.render();
    }

    render() {
    //    $('.character-bio').append(finalHTML);

    }

    setCharacter(char) {
        this.character.name = char;
        this.getCharacterId();
    }

    getCharacterId() {
        let encodedCharName = encodeURIComponent(this.character.name);
        let url = `https://gateway.marvel.com:443/v1/public/characters?name=${encodedCharName}&apikey=${this.apiKey}`;
        
         $.get(url, response => {
            let id = response.data.results[0].id;
            this.character.id = id;   
        });
        return this.character.id;
    }

    searchCharacter(character) {
  
        this.setCharacter(character)
        .then(  p => {
            let charId = this.character.id;
            let url = `https://gateway.marvel.com:443/v1/public/characters?id=${charId}&apikey=${this.apiKey}`;
  
            $.get(url, response => {
                console.log(response);
            }).catch(function (err) {
                console.error(err);
            });
        });
        return p;
    }

}