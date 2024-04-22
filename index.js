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

app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render("index");
});

app.get("/about",function(req,res){
  res.render("about");
});

// app.get("/profile",function(req,res){
//   res.send("he this is my profile page");
// });

app.listen(3000);