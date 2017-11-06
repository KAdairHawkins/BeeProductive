var express = require('express');
var db = require("../models");
var router = express.Router();
var path = require('path');

//Get the home page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "../index.html"))
    
});

//Get the about page
router.get('/about', function(req,res){
    res.send("This is the about page.")
    
});

//Get the pricing page
router.get('/pricing', function(req,res){
    res.send("This is the pricing page.")
    
});

//Get the contact page
router.get('/contact', function(req,res){
    res.send("This is the contact page.")
    
});

//Update a bug
router.put('/bug/update', function(req,res){
    var id = req.body.bugId;
    console.log(req.body.bugId);
    db.bug.update(id, function(result){
        console.log(result);
        res.redirect('/')
    });
})

//Add a bug
router.post("/bug/create", function(req,res){
    db.bug.create(req.body, function(result){
        console.log(result);
        res.redirect("/")
    });
});

module.exports = router; 