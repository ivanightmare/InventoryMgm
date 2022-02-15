const mongoose = require('mongoose');


const ProviderSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    companyAddress: {
        type: String,
        required: true,
    },
    companyPhone: {
        type: Number,
        required: true,
    },
    companyEmail: {
        type: String,
        required: true,
    },
    companyLocation: {
        type: String,
        required: true,
    },
    companyDescription: {
        type: String,
        required: true,
    },
    material: {
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

const Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;

module.exports.getProvider = (callback , limit)=>{
    Provider.find(callback).limit(limit);
};
module.exports.getProviderById = (id, callback)=>{
    Provider.findById(id,callback);
};

module.exports.addProvider = (provider,callback)=>{
    Provider.create(provider ,callback); 
};

module.exports.updateProvider = (id, provider, options, callback)=>{
    var query = {_id: id};
    var update = {
        companyName: provider.companyName,
        companyAddress: provider.companyAddress,
        companyPhone: provider.companyPhone,
        companyEmail: provider.companyEmail,
        companyLocation: provider.companyLocation,
        companyDescription: provider.companyDescription,
        material: provider.material,
        materialDescription: provider.materialDescription,
        materialPrice: provider.materialPrice,
        materialQuantity: provider.materialQuantity,
        materialImage: provider.materialImage,
        createdOn: provider.createdOn,
    }
    Provider.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeProvider = (id, callback)=>{
    var query = {_id: id};
    Provider.remove(query, callback);
}
