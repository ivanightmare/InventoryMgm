const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productCode: {
        type: String,
        required: true,
    },
    productLocation: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
    productSize: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productQuantity: {
        type: Number,
        required: true,
    },
    productImage: {
        type: Image,
        required: true,
    },
    createdOn: {
        type: String,
        default: Date.now
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

module.exports.getProduct = (callback, limit) => {
    Product.find(callback).limit(limit);
}

module.exports.getProductById = (id, callback) => {
    Product.findById(id, callback);
}

module.exports.addProduct = (newProduct, callback) => {
    Product.create(newProduct, callback);
}

module.exports.updateProduct = (id, newProduct, options, callback) => {
    var query = { _id: id };
    var update = {
        productName: newProduct.productName,
        productLocation: newProduct.productLocation,
        productDescription: newProduct.productDescription,
        productPrice: newProduct.productPrice,
        productQuantity: newProduct.productQuantity,
        productSize: newProduct.productSize,
        productImage: newProduct.productImage,

    }
    Product.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeProduct = (id, callback) => {
    var query = { _id: id };
    Product.remove(query, callback);
}

module.exports.getProductByName = (name, callback) => {
    Product.find({ productName: name }, callback);
}

module.exports.getProductByCode = (code, callback) => {
    Product.find({ productCode: code }, callback);
}

module.exports.getProductByCategory = (category, callback) => {
    Product.find({ productCategory: category }, callback);
}

module.exports.getProductByLocation = (location, callback) => {
    Product.find({ productLocation: location }, callback);
}

module.exports.getProductByDescription = (description, callback) => {
    Product.find({ productDescription: description }, callback);
}

module.exports.getProductByPrice = (price, callback) => {
        Product.find({ productPrice: price }, callback);
}

