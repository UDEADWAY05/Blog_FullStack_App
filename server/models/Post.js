import { Schema, model } from "mongoose"

const schema = new Schema({
    title: { type: String },
    text: { type: String },
    tags: {
        type: Array,
        default: []
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    imageUrl: String 
}, {
    timestamps: true
})

export default model('Post', schema)