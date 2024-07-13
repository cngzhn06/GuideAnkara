const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDB = require('./config/db');
const GenRouter = require('./router/router');

const PORT = 8000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use('/api', GenRouter);

mongoDB();

app.listen(PORT, () => {
  console.log(`${PORT} Port is active`);
});
