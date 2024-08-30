const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:String,
        Price:Number,
        Brand:String,
        category:String
    }
)

module.exports = mongoose.model("products",productSchema);