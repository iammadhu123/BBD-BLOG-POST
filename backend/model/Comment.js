const { Schema, model, Types } = require('mongoose');

const CommentSchema = new Schema(
    {
        blog_id: {
            type: Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        username: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        commenttext: {
            type: String,
            required: true,
            maxlength: 1000,
        },
    },
    { timestamps: true }
);

module.exports = model("Comment", CommentSchema);
