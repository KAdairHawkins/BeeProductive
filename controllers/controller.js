var express = require('express');
var db = require("../models");
var router = express.Router();
var path = require('path');
var username = "asdf";
process.env.username = username;
console.log(process.env.username);

//Web page entry
router.get('/', function(req,res){
    res.redirect('/home');
});

router.get('/home', function(req,res){
    res.render("index", {});
});

//Get the about page
router.get('/about', function(req,res){
    res.render("about", {});

});

//Get the pricing page
router.get('/login', function(req,res){
    res.send("This is the login page.");
});

//Get the contact page
router.get('/contact', function(req,res){
    console.log(username);
    res.render("contact", {});

});

//Get the pofile page
router.get('/profile', function(req,res){
    res.send("This is the profile page.");
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

router.post("/user", function(req,res){
    username = req.body.username;
    console.log(username);
    res.send(username);
})

module.exports = router;
