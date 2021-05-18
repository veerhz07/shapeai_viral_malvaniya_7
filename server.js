const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended : true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var ress = n1+n2;
  res.send("Addition is : "+ress);
});
app.post("/subtract",function(req,res){
  var n3 = Number(req.body.num3);
  var n4 = Number(req.body.num4);
  var ress1 = n3-n4;
  res.send("subtraction  is : "+ress1);
});
app.post("/multiply",function(req,res){
  var n5 = Number(req.body.num5);
  var n6 = Number(req.body.num6);
  var ress2 = n5*n6;
  res.send("Multiplication is : "+ress2);
});
app.post("/divide",function(req,res){
  var n7 = Number(req.body.num7);
  var n8 = Number(req.body.num8);
  var ress3 = n7*n8;
  res.send("Divison is : "+ress3);
});
app.post("/mod",function(req,res){
  var n9 = Number(req.body.num9);
  var n10 = Number(req.body.num10);
  var ress4 = n9%n10;
  res.send("Modulus is : "+ress4);
});
app.listen(3000,function(){
  console.log(new Date().toISOString() + ": server started on port 3000");
});
