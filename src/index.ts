import * as dotenv from "dotenv";
dotenv.config();

import * as express from "express";
import * as bodyParser from "body-parser";

import * as routers from "./routers";
import * as vars from "./vars";

const app: express.Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users/", routers.users);
app.use("/api/teams/", routers.teams);

app.listen(vars.PORT, ()=>{
    console.log(`Listening on port ${vars.PORT}`);
});

