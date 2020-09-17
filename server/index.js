const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();


app.get('/', (req, res) => {
    res.send("Server is super high")
})


// connect to database
try {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', () => {
        console.log(`Connected to MongoDB successfully`)
    })
} catch (err) {
    console.log('Error occured while connecting to DB')
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})