const express = require("express");

const app = express();

app.use(express.json())

app.get("/heelo", (req, res) => {
  res.send("Hello heelo");
});

app.get("/", (req, res) => {
  res.send("Hello GET");
});

app.post("/data", (req, res) => {
    const username=req.headers.username
    const password=req.headers.password
    res.send(`hey ${username} i know your password it is ${password}`);
  });

  //Authentication

  app.post("/auth",(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    if(username=="heeler" && password=="xyz"){
        res.status(200).send('Welcome')
        return
    }
    res.status(401).send('Unauthorized')

  })

  app.put("/", (req, res) => {
    res.send("Hello PUT");
  });

  app.delete("/", (req, res) => {
    res.send("Hello Delete");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});