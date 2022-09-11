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
class Pokemon {
    constructor() {
    }
    getName() {
        return this._name;
    }
    getImg() {
        return this._img;
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            let pokimonId = Math.floor(Math.random() * 949) + 1;
            yield $.get(`https://pokeapi.co/api/v2/pokemon/${pokimonId}/`).then((pokemon) => {
                this._name = pokemon.name;
                this._img = pokemon.sprites.other.dream_world.front_default;
            });
        });
    }
    get name() {
        return this._name;
    }
    get img() {
        return this._img;
    }
}
