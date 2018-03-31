// Dependencies
import express from 'express'
import path from "path";
import bodyParser from "body-parser";
import passport from 'passport';
import dotenv from "dotenv"

// Routes
import authCassandra from "./routes/auth";
import authDynamo from "./dynamoDB/routes/auth";
import restaurant_public from "./routes/restaurant_public";
import restaurant_private from "./routes/restaurant_private";

const app = express();

const authbyrole = (role) => passport.authenticate(role, { session: false })

//Config
dotenv.config()
require("./config/passport")
require("./config/database")

// Routes
app.use(bodyParser.json());
// Cassandra
// app.use("/api/auth", authCassandra);
// Dynamo
app.use("/api/auth", authDynamo);
//
app.use("/api/private/restaurant", authbyrole(process.env.SA_ROLE), restaurant_private)
app.use("/api/public/restaurant", restaurant_public)

app.listen(process.env.APP_PORT, () => console.log("Running on localhost: " + process.env.APP_PORT))