const express = require("express")

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

    router.post("/guests/:id", (req, res)=>{
        collection
        .updateOne({_id:ObjectId(req.params.id)}, {$set: req.body})
        .then(res.json(req.body))
    })

    
    return router


};

module.exports = createRouter