const router = require('express').Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();  
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//No update method necessary, as frontend features a dropdown menu

router.post('/', jsonParser, async(req,res) => {

    const path = await prisma.path.create({
        locationFrom: req.body.locationFrom,
        locationTo: req.body.locationTo, 
        time: req.body.time
    },) 
    try{
        res.send("Path Saved Successfully");
    }catch{
        res.send("Trouble saving your path");
    }finally{
        await prisma.$disconnect();
    }
})

router.get('/:pathId', jsonParser, async(req,res) => {

    const pathId = req.params.path_id; 

    try {
        const getPath = await prisma.path.findUnique({
            where: {
                id: pathId
            }
        })
        res.send('Path Taken', getPath);
    } catch {
        res.send("Could not find a path with that given ID");
    } finally {
        await prisma.$disconnect();
    }
})

router.delete('/:pathId', jsonParser, async(req,res) => {

    const pathId = req.params.path_id; 

    try {
        const getPath = await prisma.path.delete({
            where: {
                id: pathId
            }
        })
        res.send('Path was deleted successfully', getPath);
    } catch {
        res.send("Could not find a path with that given ID");
    } finally {
        await prisma.$disconnect();
    }
})

module.exports = router;

