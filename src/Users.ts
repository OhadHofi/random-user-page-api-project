class Users{
    private _users:User[]

    constructor(){
        this._users = []
    }

    async fetch(){
        this._users = []
        await $.get("https://randomuser.me/api/?results=7").then((persons)=>{
                persons.results.forEach((person:any)=>{
                    this._users.push(new User(person.picture.large, person.name.first, person.name.last, new Address(person.location.city, person.location.state)))
                })
        })
    }

    get users(){
        return this._users
    }
}