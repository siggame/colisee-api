import * as dotenv from "dotenv";
dotenv.config();

import * as cors from "cors";
import * as express from "express";
import { ErrorRequestHandler, RequestHandler } from "express";
import { BadRequest, HttpError, InternalServerError, NotFound } from "http-errors";
import { Deque } from "tstl";
import * as winston from "winston";

import { getRandomGameLogs } from "./db";
import { catchError } from "./helpers";
import { PORT, STORAGE_DIR } from "./vars";

const app = express();

winston.configure({
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
        }),
    ],
});

// Logger Middleware
const logger: RequestHandler = (req, res, next) => {
    winston.info(`${req.method}\t${req.url}`);
    next();
};

// Error Middleware
const errorHandler: ErrorRequestHandler = (err: HttpError, req, res, next) => {
    winston.error(err.message);
    if (err.stack) { winston.error(err.stack); }
    res.status(err.status).end(err.message);
};

app.use(cors());
app.use(logger);
app.use(errorHandler);

app.use("/storage", express.static(STORAGE_DIR, {
    setHeaders: (res, path, stat) => {
        res.set("Content-Length", stat.size);
        res.set("Content-Encoding", "gzip");
    },
}));
// app.get("/vis", () => { });
app.get("/vis/random", catchError<RequestHandler>(((): RequestHandler => {
    const random_games = new Deque<{ log_url: string }>();
    return async (req, res) => {
        if (random_games.empty()) {
            const new_game_logs = await getRandomGameLogs(100)
                .catch((error) => { throw error; });
            random_games.swap(new_game_logs);
        }
        if (!random_games.empty()) {
            res.end(random_games.front().log_url);
            random_games.pop_front();
        } else {
            throw new NotFound("No game logs ready");
        }
    };
})()));

export default () => {
    app.listen(PORT, () => {
        winston.info(`Listening on port ${PORT}...`);
    });
};

export { app };
