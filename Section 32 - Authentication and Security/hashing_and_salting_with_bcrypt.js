//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

/****************************** Schemas and Models ******************************/
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "You must provide a valid email!"]
    },
    password: {
        type: String,
        required: [true, "You must provide a password!"]
    }
});

const User = mongoose.model("User", userSchema);

/********************************************************************************/

app.listen("3000", function(){
    console.log("Server is running on port 3000!");
    console.log("The Secret is: " + process.env.SECRET);
});

/***************************** Route Creation *********************************/ 
app.get("/", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", function(req, res){
    const receivedEmail = req.body.username;
    const receivedPassword = req.body.password;

    User.findOne(
        {email: receivedEmail},
        function(err, foundUser){
            if(!err){
                if(!foundUser){
                    res.send("User crendentials (email and/or password) are wrong");
                }else{
                    bcrypt.compare(receivedPassword, foundUser.password, function(err, result){
                        if(result === true){
                            res.render("secrets");
                        }
                    });
                }
            }else{
                res.send(err);
            }
        }
    );
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    const email = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, function(err, hash){
        const user = new User({
            email: email,
            password: hash
        });
    
        user.save(function(err){
            if(!err){
                res.render("secrets");
            }else{
                res.send(err);
            }
        });
    });
});
