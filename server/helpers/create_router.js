const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const createRouter = function(collection){

    const router = express.Router()
    
    router.get("/guests", (req, res)=>{
        collection
        .find() 
        .toArray()
        .then(result => res.json(result))

        console.log("you reached here")
    })

    
    router.post("/guests/add", (req, res)=>{
        collection
        .insertOne(req.body)
        .then(res.json(req.body))
    })

    router.post("/guests/update/:id", (req, res)=>{
        collection
        .updateOne({_id:ObjectId(req.params.id)}, {$set: req.body})
        collection
        .find()
        .toArray()
        .then(result => res.json(result))
    })

    router.delete("/guests/delete/:id", (req, res)=>{
        collection
        .deleteOne({_id:ObjectId(req.params)})
        .then(()=>{
            collection
            .find()
            .toArray()
            .then(collection => res.json(collection) )
        })
    })

    
    return router


};

module.exports = createRouter