"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ModelData {
    constructor() {
        this._users = new Users();
        this._quote = new Quote();
        this._aboutMe = new AboutMe();
        this._pokemon = new Pokemon();
    }
    generateNewUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all([
                this._users.fetch(),
                this._quote.fetch(),
                this._aboutMe.fetch(),
                this._pokemon.fetch(),
            ]);
        });
    }
    getData() {
        return new ModelDto(this._users, this._quote, this._aboutMe, this._pokemon);
    }
}
