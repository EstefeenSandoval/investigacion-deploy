const express = require("express");
const bodyParser = require("body-parser");
const misrutas = require('./routes/route');
const cors = require('cors');
const app = express();
const compression = require('compression');
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',misrutas);

app.use(express.static(process.cwd() + '/public/'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});