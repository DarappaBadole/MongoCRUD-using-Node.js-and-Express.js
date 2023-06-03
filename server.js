const express = require('express');
const app = express();

const {MongoClient} = require("mongodb");
//const URL = "mongodb://localhost:27017"; error yeto for window
const URL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URL);


app.listen(5100,function(req,res)
{
    console.log("Marvellous server started successfully a port number 5100");
});

app.get('/',function(req,res)
{
    res.send("Marvellous server is live");
});


async function getConnection()
{
  let result = await client.connect();
  let db = result.db("Marvellous");
  let collection = db.collection("Batches");
  let res = await collection.find({}).toArray();
  console.log(res);
}

getConnection();


