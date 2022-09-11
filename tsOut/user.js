"use strict";
class User {
    constructor(picture, firstName, lastName, address) {
        this._picture = picture;
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
    }
    getPicture() {
        return this._picture;
    }
    getFirstName() {
        return this._firstName;
    }
    getLastName() {
        return this._lastName;
    }
    getAddress() {
        return this._address;
    }
}
