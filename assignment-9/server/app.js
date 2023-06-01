const {readdirSync} = require('fs')
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT , MONGOOSE} = process.env;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));


readdirSync('./routers').map(r => app.use("/api/v1" , require(`./routers/${r}`)));



module.exports = {PORT,MONGOOSE ,mongoose , app};