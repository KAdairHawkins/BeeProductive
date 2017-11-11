var express = require('express');
var db = require("../models");
var router = express.Router();
var path = require('path');
var username = "";
var nodemailer = require('nodemailer');

process.env.username = username;
console.log(process.env.username);
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "beeproductiveapp@gmail.com",
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
    console.log(username);
    res.render("contact", {});

});

router.get('/bugs', function(req,res){
    res.render("catchBug",{})
})

//get all bugs
router.get("/api/bugs/", function(req, res) {
    db.Bug.findAll({})
    .then(function(dbBug) {
      res.json(dbBug);  
    });
  });

//get one bug
router.get("/api/bugs/:id", function(req, res) {
    var id = req.params.id;
    db.Bug.findAll({
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
    db.bug.update(id, function(result){
        console.log(result);
        res.redirect('/home');
    });
});

//Add a bug
router.post("/bug/create", function(req,res){
    db.bug.create(req.body, function(result){
        console.log(result);
        res.redirect("/");
    });
});

//Send a contact e-mail
router.post("/sendmessage", function(req,res){
    console.log(req.body);
    var mailOptions={
        to : "beeproductiveapp@gmail.com",
        subject : "Sent by " + req.body.email,
        text : req.body.message
    }
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

router.get("/thankyou", function(req,res){
    res.render("thankyou",{})
})

//Add a user
router.post("/user/create", function(req,res){
    username = req.body.username;
    console.log(username);
    res.send(username);
})

//Update a user
router.put("/user/update", function(req,res){
    console.log("You're updating a thing.");
    console.log(req.body);
})

module.exports = router;
