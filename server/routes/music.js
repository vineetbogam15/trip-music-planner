const router = require('express').Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();  
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// No update method necessary, as frontend features a dropdown menu

router.post('/', jsonParser, async(req,res) => {

    const music = await prisma.music.create({
        albumName: req.body.albumName,
        genre: req.body.genre,
        artistName: req.body.artistName,
        duration: req.body.duration
    },) 
    try{
        res.send("Album Saved Successfully");
    }catch{
        res.send("Trouble generating your album");
    }finally{
        await prisma.$disconnect();
    }
})

router.get('/:musicId', jsonParser, async(req,res) => {

    const musicId = req.params.music_id; 

    try {
        const getMusic = await prisma.music.findUnique({
            where: {
                id: musicId
            }
        })
        res.send('Album', getMusic);
    } catch {
        res.send("Could not find an album with that given ID");
    } finally {
        await prisma.$disconnect();
    }
})

router.delete('/:musicId', jsonParser, async(req,res) => {

    const musicId = req.params.music_id; 

    try {
        const deleteMusic = await prisma.music.delete({
            where: {
                id: pathId
            }
        })
        res.send('Path was deleted successfully', deleteMusic);
    } catch(error) {
        res.send("Could not find an album with that given ID", error);
    } finally {
        await prisma.$disconnect();
    }
})

module.exports = router;



