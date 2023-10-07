const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user.js');

//Middlewares
app.use('/api/users', userRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
