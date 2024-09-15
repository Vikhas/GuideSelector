const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name:{type: String,require:true},
    count:{type: Number, default:5},
    password: {type: String,require:true}

});

module.exports = mongoose.model("Staffs",staffSchema);