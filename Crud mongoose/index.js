const express = require('express')
const Product = require('./product');
require('./config');

const app = express();

app.use(express.json());

app.post('/', async (req, resp) => {
    let data = new Product(req.body);
    console.log(req.body);
    let result = await data.save();
    resp.send(result);
}
)

app.get("/list", async (req, resp) => {
    let data = await Product.find();
    console.log(req.body);
    resp.send(data);
}
)

app.delete("/delete/:_id",async(req,resp)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

app.put("/update/:_id", async(req,resp)=>{
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        {
            $set : req.body
        }
    )
    resp.send(data);
})


app.get("/search/:key", async(req,resp)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or":[
                {"name": {$regex : req.params.key}},
                {"Brand":{$regex : req.params.key}},
                
                {"category":{$regex : req.params.key}}
            ]
        }
    )
    resp.send(data);
})


app.listen(5000);




