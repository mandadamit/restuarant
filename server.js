const express = require('express')
const app = express()
const DB = require('./config/database');
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan') 
const dotenv = require('dotenv')
const port = process.env.PORT || 5000;

// dotenv configration
dotenv.config()

// middleware 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/home', require('./routes')); 
app.use('/api/v1/', require('./routes/authRoutes'));
app.use('/api/v1/user/', require('./routes/userRoutes'));
app.use('/api/v1/restuarant/', require('./routes/restuarantRoutes'));
app.use('/api/v1/category/', require('./routes/categoryRoutes'));

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});