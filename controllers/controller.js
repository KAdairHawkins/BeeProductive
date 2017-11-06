var express = require('express');
var db = require("../models");
var router = express.Router();
var path = require('path');

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "../index.html"))
    /*db.bug.select(function(bug_data){
        
    })*/
});

router.get('/about', function(req,res){
    res.send("This is the about page.")
    /*db.bug.select(function(bug_data){
        
    })*/
});

router.get('/pricing', function(req,res){
    res.send("This is the pricing page.")
    /*db.bug.select(function(bug_data){
        
    })*/
});

router.get('/contact', function(req,res){
    res.send("This is the contact page.")
    /*db.bug.select(function(bug_data){
        
    })*/
});

router.put('/burgers/update', function(req,res){
    var id = req.body.burger_id;
    console.log(req.body.burger_id);
    burger.update(id, function(result){
        console.log(result);
        res.redirect('/')
    });
})

router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/")
    });
});

module.exports = router; 