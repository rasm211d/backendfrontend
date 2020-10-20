const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('wwwroot'));
app.use('/api/genres', require('./wwwroot/routes/genresAPI'));

app.listen(PORT, console.log("Connected"));