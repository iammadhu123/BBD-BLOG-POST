const express = require("express");
const router = express.Router();
const Comment = require("../model/Comment")

router.post("/comment/:id", async (req, res, next) => {
    const { id } = req.params
    // console.log(id);
    console.log(req.body);
    const blog_id = id;
    const { username, commnettext } = req.body;
    const commnetRes = await Comment.create({
        blog_id: blog_id,
        username: username,
        commenttext: commnettext

    });



    res.status(201).json({ msg: 'Comment published succesfulluy !', success: true });




})

router.get("/comment/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const response = await Comment.find({ blog_id: id })
        res.status(201).json({
            success: true,
            record: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Comments not found', success: false });
    }

})

module.exports = router;