fs = require("fs");

/*Define a callback function*/
function phoneNumber(err, data) {
  console.log("data:", data);
}

fs.readdir("c:/", phoneNumber);
console.log("this comes later");
