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
    
    return router


};

module.exports = createRouter