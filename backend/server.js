
// require('dotenv').config();               // Load .env variables
require('dotenv').config({ debug: false });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

/* ---------- MongoDB CONNECTION ---------- */
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

if (!process.env.MONGO_URI) {
    throw new Error(' MONGO_URI is not defined in .env');
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(' MongoDB connected')
        console.log("Host:", mongoose.connection.host);
    })
    .catch(err => {
        console.error(' DB connection error:', err.message);
        process.exit(1);
    });


/* ---------- GLOBAL MIDDLEWARE ---------- */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname)); // for uploads data in folder

app.use('/', require('./routes/userRoutes'));
app.use('/api', require('./routes/blogRoutes'));
app.use('/api', require('./routes/categoeryRoutes'));
app.use('/api', require('./routes/commnetRoutes'));






/* ---------- START SERVER ---------- */
const PORT = process.env.PORT;
if (!PORT) {
    throw new Error(' PORT is not defined in .env');
}

app.listen(PORT, () =>
    console.log(` Server running → http://localhost:${PORT}`)
);


/* ---------- ERROR HANDLERS ---------- */
app.use((req, res, next) => {
    setImmediate(() => next(new Error('Route not found')));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});