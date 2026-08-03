// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();

const ALLOWED_COURSES = [
    "Html",
    "Css",
    "Bootstrap",
    "JavaScript ES6",
    "React JS",
    "Node JS",
    "Express",
    "Other",
];

// GET /api/categories
router.get("/categories", (req, res) => {
    res.json({ success: true, categories: ALLOWED_COURSES });
});



module.exports = router;
