import express from 'express'
import path from "path";
import bodyParser from "body-parser";

import auth from "./routes/auth";
import restaurant from "./routes/restaurant";

import dotenv from "dotenv"

dotenv.config()

const app = express();
// database config
var models = require('express-cassandra');
models.setDirectory( __dirname + '/models').bind(
    {
        clientOptions: {
            contactPoints: [process.env.DB_PORT],
            protocolOptions: { port: 9042 },
            keyspace: process.env.DB_NAME,
            queryOptions: {consistency: models.consistencies.one}
        },
        ormOptions: {
            defaultReplicationStrategy : {
                class: 'SimpleStrategy',
                replication_factor: 1
            },
            migration: 'safe'
        }
    },
    function(err) {
        if(err) throw err;
    }
);
// parser
app.use(bodyParser.json());
// routes
app.use("/api/auth", auth);
app.use("/api/restaurant", restaurant);

app.listen(process.env.APP_PORT, () => console.log("Running on localhost: " + process.env.APP_PORT))