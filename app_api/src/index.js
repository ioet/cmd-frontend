import express from 'express'
import path from "path";
import bodyParser from "body-parser";

import auth from "./routes/auth";
import restaurant from "./routes/restaurant";

import passport from 'passport';

import dotenv from "dotenv"

dotenv.config()
require("./config/passport")
require("./config/database")
const app = express();
const isAuthenticated = passport.authenticate('jwt', { session: false })

// parser
app.use(bodyParser.json());
// routes
app.use("/api/auth", auth);
app.use("/api/restaurant", isAuthenticated, restaurant)

app.listen(process.env.APP_PORT, () => console.log("Running on localhost: " + process.env.APP_PORT))