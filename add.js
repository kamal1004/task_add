const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){

  var a = Number(req.body.n1);
  var b = Number(req.body.n2);
  var c = a + b;
  res.send("The result is "+ c);
});
app.listen(5000,function(){
  console.log("server is running on port 3000.")
});
