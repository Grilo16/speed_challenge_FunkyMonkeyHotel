const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const createRouter = require("./helpers/create_router.js")

app.use(express.json())
app.use(cors())

MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology:true})
.then((client)=>{
    const db = client.db("FunkyMonkeyLodge")
    const collection = db.collection("guests")
    const route = createRouter(collection)
    app.use("/", route)

})

app.listen(9000, ()=>{
    console.log("listening on 9000")
})