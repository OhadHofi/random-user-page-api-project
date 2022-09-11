class Quote{
    private _quote:string

    constructor(){}

    async fetch(){
        await $.get("https://api.kanye.rest").then((res)=>{
            this._quote = res.quote
        })
    }

    get quote(){
        return this._quote
    }
}