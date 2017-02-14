import * as knexModule from "knex";
import * as _ from "lodash";

import * as vars from "./vars";

export const query = knexModule({
    client: 'pg',
    connection: {
        host : vars.POSTGRES_HOST,
        port: vars.POSTGRES_PORT,
        user : vars.POSTGRES_USER,
        password : vars.POSTGRES_PASSWORD,
        database : vars.POSTGRES_DB,
    },
});