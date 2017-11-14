//Pull all requirements
var express = require('express');
var db = require("../models");
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');

//Necessary to define the username, or the process.env line errors in a sec.
var username;
process.env.username = username;
//set up e-mail configuration.
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "beeproductiveapp@gmail.com",
        //In the "settings" page on Heroku if you really need it, but please don't touch.
        pass: process.env.gmailPassword
    }
});

//Web page entry
router.get('/', function(req,res){
    res.redirect('/home');
});

//Serves the home page
router.get('/home', function(req,res){
    res.render("index", {});
});

//Get the about page
router.get('/about', function(req,res){
    res.render("about", {});

});

//Get the login page
router.get('/login', function(req,res){
    res.send("This is the login page.");
});

//Get the contact page
router.get('/contact', function(req,res){
    console.log(process.env.username);
    res.render("contact", {});

});

//Get the profile page
router.get('/profile/display/:userName', function(req,res){
   //res.send("This is the profile page.");
    console.log(req.params.userName);
     db.User.findAll({
        where: {
          userName:req.params.userName
        }
    }).then(function(dbUser){
      console.log("dbUser " + JSON.stringify(dbUser, null, 2));
   //   res.json(dbUser);
      res.redirect('/profile');
      res.render("profile", {userData: dbUser});
    });   
  });    

//Serves the "Catch a bug!" page
router.get('/bugs', function(req,res){
    db.Bugs.findAll({})
    .then(function(dbBug) {
        console.log(process.env.username);
        res.render("catchBug",{bugData: dbBug});  
    });
})

//Create user profile
router.get("/profile", function(req,res){  
    db.User.findAll({where: {userName:process.env.username}})
    .then(function(dbUser){
        if (dbUser = []){
            //toDo: Create a view that pops an error message
            res.send("Well that didn't work");
        } else {
        console.log(dbUser);
        res.render("profile",{userData: dbUser});}
    });
});

//get all bugs
router.get("/api/bugs/", function(req, res) {
    db.Bugs.findAll({})
    .then(function(dbBug) {
      res.json(dbBug);  
    });
  });

//get one bug
router.get("/api/bugs/:id", function(req, res) {
    var id = req.params.id;
    db.Bugs.findAll({
        where: {id: id}
    })
    .then(function(dbBug) {
      res.send(dbBug);  
    });
  });

//Update a bug
router.put('/bug/update', function(req,res){
    //pull the ID out of the body
    var id = req.body.bugId;
    console.log(req.body.bugId);
    db.Bugs.update(id, function(result){
        console.log(result);
        res.redirect('/home');
    });
});

//Add a bug
router.post("/bug/create", function(req,res){
    console.log(req);
    db.Bugs.create(req.body, function(result){
        console.loq(req.body)
        console.log(result);
        res.redirect("/home");
    });
});

//Send a contact e-mail
router.post("/sendmessage", function(req,res){
    console.log(req.body);
    var mailOptions={
        to : "beeproductiveapp@gmail.com",
        //Because I can't figure out how to make it pretend to be sent by someone with the input e-mail address
        subject : "Sent by " + req.body.email,
        text : req.body.message
    }
    //Black magic/mail configuration copy-pasted.
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.redirect("/thankyou");
         }
    });

});

//Serves a thank you page for sending e-mail
router.get("/thankyou", function(req,res){
    res.render("thankyou",{})
})

//collect the username
router.post("/user/select", function(req,res){
    process.env.username = req.body.username;
 //   console.log("process.env.username " + process.env.username);
})

//Add a user
router.post("/user/create", function(req,res){
    console.log("creating a user");
    db.User.create(req.body, function(result){
        console.log(result);
        res.redirect("/");
    });
    res.json(req.body);
    console.log("User ID: " + req.body.name);
    console.log("email: " + req.body.email);
    console.log("profile: " + req.body.profile);
})

//Update a user
router.put("/user/update", function(req,res){
    console.log("You're updating a thing.");
    console.log(req.body);
})

module.exports = router;
