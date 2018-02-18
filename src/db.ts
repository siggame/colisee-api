import { db } from "@siggame/colisee-lib";
import { Deque } from "tstl";

export async function getRandomGameLogs(limit: number) {
    const integer_limit = Math.floor(limit);
    if (integer_limit < 1) {
        throw new Error("limit should be greater than 0");
    }
    const [{ count }] = await db.connection("games").count("*")
        .catch((error) => { throw error; });
    if (count < limit) {
        return new Deque<{ log_url: string }>(await db.connection("games")
            .select("log_url")
            .where({ status: "finished" })
            .orderByRaw("random()")
            .then((rows): { log_url: string }[] => rows)
            .catch((error) => { throw error; }));
    } else {
        return new Deque<{ log_url: string }>(await db.connection("games")
            .select("log_url")
            .where({ status: "finished" })
            .andWhere(db.connection.raw("random() < 0.01"))
            .limit(integer_limit)
            .then((rows): { log_url: string }[] => rows)
            .catch((error) => { throw error; }));
    }
}
