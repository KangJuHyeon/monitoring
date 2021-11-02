const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const morgan = require('morgan');
const db = require('../models');

db.sequelize
    .sync()
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch(console.error);

app.use(
    session({
        secret: 'helloworld',
        resave: false,
        saveUninitialized: true,
        cookie: {
            domain: 'localhost',
            path: '/',
            maxAge: 24 * 6 * 60 * 10000,
            sameSite: 'none',
            httpOnly: true,
            secure: true,
        },
    }),
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);

app.get('/', (req, res) => {
    res.send('Hello Ju');
});

const userRouter = require('../routes/user');
const pingRouter = require('../routes/ping');

app.use('/users', userRouter);
app.use('/pings', pingRouter);

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});
