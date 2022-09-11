class Pokemon{
    private _name:string
    private _img:string

    constructor(){
    }

    public getName(){
        return this._name
    }

    public getImg(){
        return this._img
    }


    async fetch(){
        let pokimonId:number = Math.floor(Math.random() * 949) + 1
        await $.get(`https://pokeapi.co/api/v2/pokemon/${pokimonId}/`).then((pokemon)=>{
            this._name = pokemon.name
            this._img = pokemon.sprites.other.dream_world.front_default
        })
    }

    get name(){
        return this._name
    }

    get img(){
        return this._img
    }
}