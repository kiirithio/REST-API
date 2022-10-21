const Product = require("./schema")

const createProduct = async (req, res) => {
    const {name, description, price, available} = req.body;

    try {
        const result = await Product.create({ name, description, price, available});

        res.status(200).json({ result})

    } catch (error) {
        res.status(500).json({ message: "something wen't wrong"})
    }
}

const stockCheck = async (req, res) => {

    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getProductByid = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getProductByid,
    stockCheck,
    createProduct
}
