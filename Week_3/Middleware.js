const express=require("express")
const app=express()
const port=8080

app.use(middleware) 

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/user",auth,(req,res)=>{
    res.send("User Page")
})

function middleware(req,res,next){
    console.log("Middleware called")
    next()

}

function auth(req,res,next){
    if(req.query.admin==="true"){
        next()
    }
    else{
        res.send("Not Authorized")
    }
}

app.listen(port,()=>{
    console.log("The app is listening at port" + port)
})