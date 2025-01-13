const express=require("express")
const app=express()
const path=require("path")

app.set("view engine","ejs") //it tells about template
 // express cant find ejs dirctory sometimes so to avoid this we use this 
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")))

app.use(express.static())
let port=8080

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


// app.use((req,res)=>{
//     console.log("request recieved")
//     res.send("This is our response")
// })

app.get("/",(req,res)=>{
    res.send("This is a home page")
})

app.get("/AJ",(req,res)=>{
    res.send("This is a AJ Page")
})

// Paramatrization

app.get("/:username",(req,res)=>{
    console.log(req.params)
    res.send(`${req.params.username} is a student`)
})
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params
    console.log(req.params)
    res.send(`${username} is a student with id ${id}`)
    
})

app.get("/search",(req,res)=>{
    console.log(req.query)
    res.send("no results")
})