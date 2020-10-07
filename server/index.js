const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middlewares
app.use(morgan('dev'));

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Routes
app.use('/users', require('./routes/users'));

app.use('/quiz', require('./routes/quiz'));



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