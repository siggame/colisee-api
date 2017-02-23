import * as knexModule from "knex";
import * as _ from "lodash";
import * as rp from "request-promise";

import * as vars from "./vars";

export const db = knexModule({
    client: 'pg',
    connection: {
        host : vars.POSTGRES_HOST,
        port: vars.POSTGRES_PORT,
        user : vars.POSTGRES_USER,
        password : vars.POSTGRES_PASSWORD,
        database : vars.POSTGRES_DB,
    },
});

export function gitlab(method: string, path: string, qs: Object={}, headers: Object={}, body?: Object): Promise<any> {
    return new Promise<any>((resolve, reject)=>{
        const options: rp.Options= {
            method: method,
            uri: path,
            qs: qs,
            headers: headers,
            json: true
        }

        options.headers["PRIVATE-TOKEN"] = vars.GITLAB_TOKEN;
        if(!_.isNil(body)) options.body = body;

        return rp(options)
            .then(resolve)
            .catch(reject);
    });
}