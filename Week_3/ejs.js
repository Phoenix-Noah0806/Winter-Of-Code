const express=require("express")
const app=express()
const port=8080

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)

})
app.get("/"),(req,res)=>{
    res.send("Hello World!!!")
}
app.get("/home",(req,res)=>{
    res.render("home.ejs")

})
app.get("/view",(req,res)=>{
    res.render("view.ejs")

})