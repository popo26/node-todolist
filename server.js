
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const date = require(__dirname + "/date.js");
const calendar = require(__dirname + "/calendar.js");


const app = express();
// const apiKey = process.env.AIP_KEY;

app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



const items = [];
const workItems = [];

app.get("/", function(req, res) {
   const day = date.getDate();

   const year = req.query.year || 2022;
    

    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    const month =  req.query.selectpicker || months[new Date().getMonth()];
    console.log(month)

    res.render("index", {listTitle: day, newListItems:items, calendar: calendar(year),months,year, mon:month});
});

app.post("/", function(req, res){
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/calendar",(req,res)=>{
    const year = req.query.year || 2022;
    // const year = new Date().getFullYear() || 2022;
    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    res.render("calendar.ejs",{calendar: calendar(year),months,year});
});


app.get('/work', function(req, res){
    res.render("index", {listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res){
    res.render("about")
})


app.listen(3000, function(){
    console.log("Server started on port 3000.")
})