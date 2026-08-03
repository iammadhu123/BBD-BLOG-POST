// models/Blog.js
const { Schema, model, Types } = require('mongoose');

const BlogSchema = new Schema(
    {
        author: { type: Types.ObjectId, ref: 'User', required: true },
        catename: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },

        blogtitle: {
            type: String,
            required: true,
            trim: true
        },

        blogauthor: {                // you can drop this and read from User profile
            type: String,
            required: true
        },

        blogdescription: {
            type: String,
            required: true,  // make it optional
            maxlength: 5000
        },

        images: { type: String }
    },
    { timestamps: true }
);

module.exports = model('Blog', BlogSchema);
