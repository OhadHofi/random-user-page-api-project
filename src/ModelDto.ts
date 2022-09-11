class ModelDto{
    private _users:Users
    private _quote:Quote
    private _aboutMe:AboutMe
    private _pokemon:Pokemon

    constructor(users:Users, quote:Quote, aboutMe:AboutMe, pokemon:Pokemon){
        this._users = users
        this._quote = quote
        this._aboutMe = aboutMe
        this._pokemon = pokemon
    }

    get users():Users{
        return this._users
    }

    get quote():Quote{
        return this._quote
    }

    get aboutMe():AboutMe{
        return this._aboutMe
    }

    get pokemon():Pokemon{
        return this._pokemon
    }
}