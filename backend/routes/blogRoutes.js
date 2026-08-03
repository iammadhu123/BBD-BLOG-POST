const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog")

/* for file upload */
// const path = require('path');
// const multer = require('multer');

// const storage = multer.diskStorage({...});

// const upload = multer({ storage }).single("images");

const auth = require("../middleware/auth")



/* ---- 1. Multer config right here ---- */
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');                             // uploads/ folder (create if not exists)
//     },
//     filename: (req, file, cb) => {
//         const unique = Date.now() + path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + unique);          // images-169...jpg
//     }
// });

// const upload = multer({ storage }).single('images');  // field name = images

const upload = require("../config/multer");

router.post(
    "/blog",
    auth,
    upload.single("images"),
    async (req, res) => {
        try {

            const {
                catename,
                blogtitle,
                blogauthor,
                blogdescription
            } = req.body;

            if (!blogdescription || !blogdescription.trim()) {
                return res.status(400).json({
                    success: false,
                    msg: "Description is required"
                });
            }

            const blog = await Blog.create({
                author: req.user._id,
                catename,
                blogtitle,
                blogauthor: req.user.name || blogauthor,
                blogdescription,

                // Cloudinary image URL
                images: req.file ? req.file.path : ""
            });

            return res.status(201).json({
                success: true,
                msg: "Blog Published Successfully",
                blog
            });

        } catch (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                msg: "Blog not created"
            });
        }
    }
);

// router.post("/blog", auth, async (req, res, next) => {
//     try {
//         upload(req, res, async err => {
//             if (err) return res.status(400).json({ msg: 'Image upload error', success: false });
//             // console.log(req.body);
//             // console.log(req.body.blogtitle);

//             // console.log("REQ.USER:", req.user);  // should contain _id
//             // console.log(req.body);
//             // return

//             const { catename, blogtitle, blogauthor, blogdescription, images } = req.body;
//             // console.log(catename + " " + blogtitle);


//             if (!blogdescription || !blogdescription.trim()) {
//                 return res.status(400).json({ msg: 'Description is required', success: false });
//             }

//             const blog = await Blog.create({
//                 author: req.user._id,
//                 catename: catename,
//                 blogtitle: blogtitle,
//                 blogauthor: req.user.name || blogauthor,
//                 blogdescription: blogdescription,
//                 images: req.file ? req.file.filename : ''
//             });



//             res.status(201).json({ msg: 'Blog published', success: true });

//         })

//     } catch (e) {
//         console.error(e);
//         res.status(500).json({ msg: 'Blog not created', success: false });
//     }

// })

router.get("/blog", async (req, res, next) => {
    try {
        const response = await Blog.find({})
        res.status(201).json({
            success: true,
            record: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

router.get("/blog/:c_name", async (req, res, next) => {

    try {
        let c_categoery = req.params.c_name;
        console.log(c_categoery);

        const response = await Blog.find({ "catename": c_categoery })
        // console.log(response);

        res.status(201).json({
            success: true,
            cateresponse: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

router.get("/cate-blog/:id", async (req, res, next) => {

    try {
        const { id } = req.params;

        const response = await Blog.findById(id);
        // console.log(response);

        res.status(201).json({
            success: true,
            cateresponse: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})


router.get("/blog-list", auth, async (req, res, next) => {
    try {
        // console.log(req.user);

        const userId = req.user._id;
        // console.log("Logged-in user ID:", userId);

        const blogs = await Blog.find({ author: userId }).sort({ createdAt: -1 });
        // console.log("Number of blogs found:", blogs.length);
        res.status(201).json({
            success: true,
            blogsdata: blogs
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

router.delete("/blog-delete/:id", async (req, res, next) => {
    const { id } = req.params
    // console.log(id);
    const deleteRes = await Blog.findByIdAndDelete({ _id: id })
    res.status(201).json({
        success: true,
        message: "Blog Deleted successfully !"
    })

})
module.exports = router;
