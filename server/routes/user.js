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

    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            favGenre: req.body.favGenre
        },
    })
    try{
        res.send("User saved successfully");
    }catch{
        res.status(400).send("There was a problem registering you");
    }finally{
        await prisma.$disconnect(); 
      }

});

router.post('/login', jsonParser, async(req,res) => {

    try{
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
    })
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (validPass) return res.status(400).send("Logged In!");
    }catch{
        res.send("Your email or password is incorrect");
    }finally{
        await prisma.$disconnect();
    }    
    });


router.delete('/:userId', async (req, res) => {

    try {
      const userId = req.params.user.id;

      const deletedUser = await prisma.user.delete({
        where: {
          id: userId,
        },
      });
  
      res.status(200).send('User deleted successfully', deletedUser);
    } catch (error) {
      res.status(500).send("Problem deleting user")
    } finally {
      await prisma.$disconnect(); 
    }
  });
  
module.exports = router;
