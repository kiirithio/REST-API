const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String},
    price: { type: Number},
    available: { type: Number}
})

module.exports = mongoose.model("Product", productSchema)