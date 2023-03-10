const express = require('express');
const app = express();

const connectToMongoDB = require('./db/mongodb');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

const mcuRouter = require("./routes/mcuRouter");

app.use(logger('dev'));
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api', mcuRouter);

// const PORT = 3001;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);

    connectToMongoDB();
})