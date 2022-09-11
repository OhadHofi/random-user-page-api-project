class AboutMe{
    private _aboutMe:string
    constructor(){

    }

    async fetch(){
        await $.get("https://baconipsum.com/api/?type=all-meat&sentences=2").then((aboutMe)=>{
            this._aboutMe = aboutMe[0]
        })
    }

    get aboutMe(){
        return this._aboutMe
    }
}