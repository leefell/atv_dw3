const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const router = require('./src/routes/route');
const app = express();

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
