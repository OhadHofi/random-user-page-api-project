class User{
    private _picture:string
    private _firstName:string
    private _lastName:string
    private _address:Address

    constructor(picture:string, firstName:string, lastName:string, address:Address){
        this._picture = picture
        this._firstName = firstName
        this._lastName = lastName
        this._address = address
    }    

    getPicture():string{
        return this._picture
    }

    getFirstName():string{
        return this._firstName
    }

    getLastName():string{
        return this._lastName
    }

    getAddress():Address{
        return this._address
    }
}