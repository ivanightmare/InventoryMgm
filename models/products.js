const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    materialName: {
        type: String,
        required: true,
    },
    materialLocation: {
        type: String,
        required: true,
    },
    materialDescription: {
        type: String,
        required: true,
    },
    materialPrice: {
        type: Number,
        required: true,
    },
    materialQuantity: {
        type: Number,
        required: true,
    },
    materialImage: {
        type: Image,
        required: true,
    },
    createdOn: {
        type: String,
        default: Date.now
    },
});

const Material = mongoose.model('Material', MaterialSchema);
module.exports = Material;

module.exports.getMaterial = (callback, limit) => {
    Material.find(callback).limit(limit);
}

module.exports.getMaterialById = (id, callback) => {
    Material.findById(id, callback);
}

module.exports.addMaterial = (newMaterial, callback) => {
    Material.create(newMaterial, callback);
}

module.exports.updateMaterial = (id, newMaterial, options, callback) => {
    var query = { _id: id };
    var update = {
        materialName: newMaterial.materialName,
        materialLocation: newMaterial.materialLocation,
        materialDescription: newMaterial.materialDescription,
        materialPrice: newMaterial.materialPrice,
        materialQuantity: newMaterial.materialQuantity,
        materialImage: newMaterial.materialImage,
    }
    Material.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeMaterial = (id, callback) => {
    var query = { _id: id };
    Material.remove(query, callback);
}

module.exports.getMaterialByName = (name, callback) => {
    Material.find({ materialName: name }, callback);
}

module.exports.getMaterialByLocation = (location, callback) => {
    Material.find({ materialLocation: location }, callback);
}

module.exports.getMaterialByDescription = (description, callback) => {
    Material.find({ materialDescription: description }, callback);
}

module.exports.getMaterialByPrice = (price, callback) => {
    Material.find({ materialPrice: price }, callback);
}

