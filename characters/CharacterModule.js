class CharacterModule {

    constructor(chars) {
        this.character = {}; 
        this.apiKey = '4f3a78050dedafbe123ce0a515c02b39';
        this.finalHTML = ``; 
    }

    render() {
        $('.modal-content').html(`${this.finalHTML}`);

    }

    setCharacter(char) {
        this.character.name = char;
    }

    getCharacterId() {
        let encodedCharName = encodeURIComponent(this.character.name);
        let url = `https://gateway.marvel.com:443/v1/public/characters?name=${encodedCharName}&apikey=${this.apiKey}`;
        
        return $.get(url, response => {
            let id = response.data.results[0].id;
            this.character.id = id;   
        });
    }

    searchCharacter(character) {
          
        let url = `https://gateway.marvel.com:443/v1/public/characters?id=${this.character.id}&apikey=${this.apiKey}`;

        return $.get(url, response => {
            let charName = response.data.results[0].name;
            let charDescription = response.data.results[0].description;
            let charImgURL = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
            
            this.finalHTML = (`
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">${charName}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="${charImgURL}" />
                <h4>Bio:</h4>
                <p>${charDescription}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
                       
            `);
        }).then
        ( () => { this.render()
        
        });
    }

}