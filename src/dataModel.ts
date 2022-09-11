class ModelData{
    private _users:Users
    private _quote:Quote
    private _aboutMe:AboutMe
    private _pokemon:Pokemon

        
    constructor(){
        this._users = new Users()
        this._quote = new Quote()
        this._aboutMe = new AboutMe()
        this._pokemon = new Pokemon()
    }

    public async generateNewUser() {
        return await Promise.all([
            this._users.fetch(),            
            this._quote.fetch(),
            this._aboutMe.fetch(),
            this._pokemon.fetch(),
        ])
    }


    getData():ModelDto{
        return new ModelDto(this._users, this._quote, this._aboutMe, this._pokemon)
    }
}