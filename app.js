const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error());
        }
    },
};

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const store = MongoStore.create({
    mongoUrl: process.env.MONGO_SERVER,
    touchAfter: 24 * 3600,
    crypto: {
        secret: process.env.SECRET,
    },
});

store.on("error", (e)=> {
    console.log(e)
});
mongoose.connect(process.env.MONGO_SERVER);
mongoose.connection.on("connected", () => {
    console.log("mongo atlas connected")
})
mongoose.connection.on("error", (err) => {
    console.error("mongo error: \n", err)
})

const port = process.env.PORT || 8080;

app.listen(port, () => [
    console.log("app running")
])