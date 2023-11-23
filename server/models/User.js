const { Schema, model } = require("mongoose")

const schema = new Schema({
    name: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    avatarUrl: { type: String }
}, {
    timestamps: true
})

module.exports = model('User', schema)