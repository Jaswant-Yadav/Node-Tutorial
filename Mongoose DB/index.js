const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/e-comm"

const mongooseInDB = async ()=>{
    await mongoose.connect(url);
    const ProductSchema = new mongoose.Schema(
        {
            name:String,
            price:Number
        }
    );
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({name:"new 104", price:500});
    let result = await data.save();
    console.log(result);
}
mongooseInDB();