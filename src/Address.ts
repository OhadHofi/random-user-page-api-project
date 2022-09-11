class Address{
    private city:string
    private state:string

    constructor(city:string, state:string){
        this.city = city
        this.state = state
    }

    getCity(){
        return this.city
    }

    getState(){
        return this.state
    }
}