import express from 'express'
import path from "path";
import bodyParser from "body-parser";
import auth from "./routes/auth";
const app = express();
// database config
var models = require('express-cassandra');
models.setDirectory( __dirname + '/models').bind(
    {
        clientOptions: {
            contactPoints: ['127.0.0.1'],
            protocolOptions: { port: 9042 },
            keyspace: 'restaurank',
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

app.listen(8080, () => console.log("Running on localhost: 8080"))