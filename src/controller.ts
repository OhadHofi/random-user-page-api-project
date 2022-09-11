const model = new ModelData()
const view = new View()
// const view = new View()
$("#generate-user").on("click",async function(){
    await model.generateNewUser().then((res)=>{
        view.render(model.getData())
    })
})