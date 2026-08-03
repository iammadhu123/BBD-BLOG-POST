// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema(
//     {
//         f_name: {
//             type: String,
//             required: true,
//             lowercase: true,   // allways in lower case save in mongodb
//             trim: true,
//         },
//         l_name: {
//             type: String,
//             required: true,
//             lowercase: true,   // allways in lower case save in mongodb
//             trim: true,
//         },
//         gender: {
//             type: String,
//             required: true,
//             lowercase: true,   // allways in lower case save in mongodb
//             trim: true,
//         },
//         gender: {
//             type: Number,
//             required: true,
//         },
//         qli: {
//             type: String,
//             required: true,
//             lowercase: true,
//             trim: true,
//         },
//         email_id: {
//             type: String,
//             required: true,
//             unique: true,
//             lowercase: true,
//             index: true,
//         },
//         mob_number: {
//             type: String,
//             required: true,
//             unique: true,
//             minlength: 10,
//             maxlength: 13,
//             index: true,
//         },
//         state: {
//             type: String,
//             required: true,
//             lowercase: true,   // allways in lower case save in mongodb
//             trim: true,
//         },
//         city: {
//             type: String,
//             required: true,
//             lowercase: true,   // allways in lower case save in mongodb
//             trim: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model('User', userSchema);
