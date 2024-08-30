const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/e-comm'

mongoose.connect(url);
const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        Brand: String,
        category: String
    }
);
const saveInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product(
        {
            name: "REDMI Y2",
            Brand: "Redmi MI",
            Price: 9000,
            category: "mobile"
        }
    );
    let result = await data.save();
    console.log(result);
}

// UPDATE

const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        { name: "new 104" },
        { $set: { name: 'Iris8', price: 8000, Brand: "Lava", category: "mobile" } }
    )
    console.log(data);
}


// DELETE IN DB

const deleteInDB = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name:"HP130"})
    console.log(data);
}


//find In DB

const findInDB =async() =>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find();
    console.log(data);
}
findInDB();









