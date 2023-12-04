import { Schema, model } from "mongoose"

const schema = new Schema({
    fullName: { type: String },
    email: { type: String, require: true, unique: true },
    passwordHash: { type: String, required: true },
    avatarUrl: String 
}, {
    timestamps: true
})

export default model('User', schema)