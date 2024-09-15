const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true},
    password: {type: String},
    regno: { type: Number, require: true },
    accountType: { type: String, default: "student" },
    selected:{ type: Boolean, default: false},
    guide: { type: String}
});

module.exports = mongoose.model("Users",userSchema);