const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
const port = process.env.PORT;
const morgan = require('morgan');
const db = require('../models');

db.sequelize
    .sync()
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch(console.error);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hey JuHyun');
});

const userRouter = require('../routes/user');
const pingRouter = require('../routes/ping');

app.use('/users', userRouter);
app.use('/pings', pingRouter);

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});
