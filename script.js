// var a=12;
// console.log(a);

var figlet = require("figlet");

figlet("nothing", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });