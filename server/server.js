const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user.js');
const pathRoute = require('./routes/path.js');
const musicRoute = require('./routes/music.js');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Middlewares
app.use('/api/users', userRoute);
app.use('/api/paths', pathRoute);
app.use('/api/music', musicRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})