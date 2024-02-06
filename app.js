// app.js
const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/', patientRoutes);
app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
