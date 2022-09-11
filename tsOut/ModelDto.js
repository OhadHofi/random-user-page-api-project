"use strict";
class ModelDto {
    constructor(users, quote, aboutMe, pokemon) {
        this._users = users;
        this._quote = quote;
        this._aboutMe = aboutMe;
        this._pokemon = pokemon;
    }
    get users() {
        return this._users;
    }
    get quote() {
        return this._quote;
    }
    get aboutMe() {
        return this._aboutMe;
    }
    get pokemon() {
        return this._pokemon;
    }
}
