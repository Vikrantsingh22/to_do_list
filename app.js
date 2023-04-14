const express = require("express");
const bodyparser=require("body-parser");

const app = express();

app.set("view engine","ejs");

// it is more important that you have to put this line app.set just below app=express 

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day= "";
    // if (currentDay===6 || currentDay===0){
    //    day= "weekend";

    // }else{
    //     day="weekday";
    // }
    // res.render("list",{KindOfDay: day});

    switch (currentDay) {
case 0:
day= "Sunday"
    break;
    case 1:
    day= "Monday"
    break;
    case 2:
    day= "Tuesday"
    break;
    case 3:
    day= "Wednesday"
    break;
   case 4:
   day= "Thursday"
   break;    
   case 5:
    day= "Friday"
    break;
  case 6:
  day= "saturday"
   break;
                                    
default:
break;
    }
    // iska matlab hain list naam ke file ko render karo jisme ek javascript object hoga yaha par
    // yaha par   kindofday naam ka ejs file hain jisme apneko day ka value daalna hain
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});