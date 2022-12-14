const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 3000;



const app = express();

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        app.listen(PORT, () => console.log(`server is runing in port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()