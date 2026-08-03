// middleware/auth.js
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'devSecret';

module.exports = (req, res, next) => {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : null;

    if (!token) return res.status(401).json({ msg: 'No token provided' });

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;  //  Yahan set hota hai
        next();
    } catch {
        res.status(401).json({ msg: 'Invalid token' });
    }
};





// // Import the jsonwebtoken package
// const jwt = require('jsonwebtoken');


// // Get the secret key from the .env file.
// // If it doesn't exist, use 'devSecret' as the default.
// const secret = process.env.JWT_SECRET || 'devSecret';


// // Export the middleware function
// module.exports = (req, res, next) => {

//     // Get the Authorization header
//     // Example: "Bearer eyJhbGciOiJIUzI1Ni..."
//     const auth = req.headers.authorization || '';

//     // Check whether the header starts with "Bearer "
//     // If yes, extract only the token
//     // Example:
//     // auth = "Bearer abc123"
//     // auth.split(' ') => ["Bearer", "abc123"]
//     // token = "abc123"
//     const token = auth.startsWith('Bearer ')
//         ? auth.split(' ')[1]
//         : null;

//     // If no token is found, return 401 Unauthorized
//     if (!token) {
//         return res.status(401).json({
//             msg: 'No token provided'
//         });
//     }

//     try {

//         // Verify the token using the secret key
//         const decoded = jwt.verify(token, secret);

//         // Store the decoded user information in req.user
//         req.user = decoded;

//         // Pass the request to the next middleware or controller
//         next();

//     } catch {

//         // If the token is invalid or expired
//         res.status(401).json({
//             msg: 'Invalid token'
//         });
//     }
// };