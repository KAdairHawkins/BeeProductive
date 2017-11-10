var express = require('express');
var db = require("../models");
var router = express.Router();
var path = require('path');

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
router.get('/pricing', function(req,res){
    res.send("This is the pricing page.");
});

//Get the contact page
router.get('/contact', function(req,res){
    res.render("contact", {});

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

module.exports = router; 