const router = require('express').Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();  
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post("/register", jsonParser, async(req,res) => {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            genre: req.body.genre
        },
    })

    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err) {
        res.status(400).send(err);
    }

})


module.exports = router;
