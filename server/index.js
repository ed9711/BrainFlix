const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require('cors')
const videoRoutes = require("./routes/videos");

app.use(cors());
app.use(express.json());

app.use('/videos', videoRoutes);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));