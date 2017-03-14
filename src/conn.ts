import * as knexModule from "knex";
import * as _ from "lodash";
import { RequestResponse } from "request";
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

/**
 * Make a request to a Colisee GitLab endpoint
 * @param options 
 * @param [body]
 */
export function gitlab(options: rp.Options, body?: Object): Promise<RequestResponse> {
    return new Promise<RequestResponse>((resolve, reject)=>{
        options.baseUrl = `http://${vars.GITLAB_HOST}:${vars.GITLAB_PORT}/api/v4/`;
        options.json = true;
        options.resolveWithFullResponse = true;

        options.headers["PRIVATE-TOKEN"] = vars.GITLAB_TOKEN;
        if(!_.isNil(body)) options.body = body;

        return rp(options)
            .then(resolve)
            .catch(reject);
    });
}