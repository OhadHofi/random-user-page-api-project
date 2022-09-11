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
class Users {
    constructor() {
        this._users = [];
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            this._users = [];
            yield $.get("https://randomuser.me/api/?results=7").then((persons) => {
                persons.results.forEach((person) => {
                    this._users.push(new User(person.picture.large, person.name.first, person.name.last, new Address(person.location.city, person.location.state)));
                });
            });
        });
    }
    get users() {
        return this._users;
    }
}
