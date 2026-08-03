const express = require("express");
const router = express.Router();
const User = require("../model/User")

/* for password hash*/
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* JWT */
/* For jwt auth*/
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET;

router.post("/sign-up", async (req, res, next) => {
    try {
        // console.log(req.body);
        const { name, email, mobile, password } = req.body;

        /*   Check duplicate email  ----------------------- */
        const emailExists = await User.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already registered",
            });
        }

        /*  Check duplicate mobile  ---------------------- */
        const mobileExists = await User.findOne({ mobile });
        if (mobileExists) {
            return res.status(400).json({
                success: false,
                message: "Mobile already registered",
            });
        }


        /*   Everything OK, create new user --------------- */
        const hash = bcrypt.hashSync(password, saltRounds);
        // console.log(hash);

        const data = await User.create({ name, email, mobile, password: hash });

        return res.status(201).json({
            success: true,
            message: "Sign‑up successfully!",
        });



    }
    catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }
})

router.post("/login", async (req, res, next) => {
    try {
        // console.log(req.body);
        const { email, password } = req.body;

        //  Find user by email
        const userRecord = await User.findOne({ email: email });
        // console.log(userRecord);

        if (!userRecord) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        //  Compare password
        const isPasswordValid = bcrypt.compareSync(password, userRecord.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        //  Prepare JWT payload (only send essential fields)
        const payload = {
            _id: userRecord._id,
            name: userRecord.name,
            email: userRecord.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET || 'devSecret', {
            expiresIn: '6h',
        });

        //  Return token + user (safe fields only)
        return res.status(201).json({
            success: true,
            message: 'Login successful',
            token
        });


    }
    catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

module.exports = router;
