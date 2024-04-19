// var a=12;
// console.log(a);

// var figlet = require("figlet");

// figlet("nothing", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

// routing

const express =require("express");
const app = express();
app.get("/",function(req,res){
  res.send("hellllll hlo hlo hlo");
});

app.get("/profile",function(req,res){
  res.send("helo this is my profile page");
});

app.listen(3000);