const express = require('express');
const EventEmitter = require('events');
const { Console } = require('console');
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countAPI",(req,resp)=>{
    count++;
    console.log("event called", count);
})


app.get("/",(req,resp)=>{
    resp.send("API called");
    event.emit("countAPI");
});

app.get("/search",(req,resp)=>{
    resp.send("Search API called");
    event.emit("countAPI");
});

app.get("/update",(req,resp)=>{
    resp.send("Update API called");
    event.emit("countAPI");
})

app.listen(5000);