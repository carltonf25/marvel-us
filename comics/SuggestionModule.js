class SuggestionModule {

    constructor(chars) {
        this.chars = [];
        this.apiKey = '4f3a78050dedafbe123ce0a515c02b39';
        this.render();
    }

    render() {
        $('.characters-container').empty();
        this.chars.forEach(char => { 
            $('.characters-container').append(`
            <span class="character-tag">${char.name} <a data-id="${char.name}-tag" href="#">X</a></span>
            `);
        });
    }

    getCharacterId(char) {
        let encodedCharName = encodeURIComponent(char.name);
        let url = `https://gateway.marvel.com:443/v1/public/characters?name=${encodedCharName}&apikey=${this.apiKey}`;
        
        $.get(url, response => {
            let id = response.data.results[0].id;
            if (id < 0) {
                console.log(`${char} is not a known character. Try again.`);
            } else {
                char.id = id;
                console.log(char.id);
            }
        });
    } 
    
    addCharacter(character) {
        let characterNames = this.chars.map( char => { return char.name });
        if (!(characterNames.includes(character.name))) {
        this.chars.push(character);
        this.getCharacterId(character);
        }
        this.render();

    }

    deleteCharacter(character) {
        let pos = this.chars.map( char => { char.name; }).indexOf(character);
        this.chars.splice(pos, 1);
        this.render();   
    }

    getComicSuggestions() {

        console.log('Finding suggestions...');
        $('.suggestions-container').append(`
           <img class="loader" src="loader.gif" />
        `); 
        let characterIdArray = this.chars.map( char => { return char.id });
        let characterIdString = "";
        let i = 1; 
        characterIdArray.forEach( char => {
            characterIdString += char;
            if (i < characterIdArray.length) {
                characterIdString += ',';
                i++
            }
        });
        
        /* Send encoded Character IDs to the /comics endpoint */
        let encodedCharacterIds = encodeURIComponent(characterIdString);
        let url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${this.apiKey}&characters=${encodedCharacterIds}`;
        $('.loader').remove();

        /* Parse the response, output comic data to bootstrap cards */ 
        $.get(url, response => {
            let size = 10;
            let comicArray = response.data.results.slice(0, size).map( result => {
                  return result;
            });
            console.log(comicArray);

            let imgUrl = "https://images.fun.com/products/36601/2-1-72630/marvel-comics-avenger-group-soccer-v-neck-juniors-t-shirt1.jpg";

            comicArray.forEach( comic => {
                $('.suggestions-container').append(`
                <div class="card p-2 id-${comic.id}" style="width: 18rem;">
                    <img class="card-img-top" src=${imgUrl} alt="Card image cap" />
                    <div class="card-body">
                    <h5 class="card-title">${comic.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `);
            });
                
        });
    }
}
