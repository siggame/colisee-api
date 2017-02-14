import * as _ from "lodash";

export const POSTGRES_HOST: string = _.defaultTo(process.env.POSTGRES_HOST, "localhost");
export const POSTGRES_PORT: number = _.defaultTo(process.env.POSTGRES_PORT, 5432);
export const POSTGRES_USER: string = _.defaultTo(process.env.POSTGRES_USER, "postgres");
export const POSTGRES_PASSWORD: string = _.defaultTo(process.env.POSTGRES_PASSWORD, "postgres");
export const POSTGRES_DB: string =  _.defaultTo(process.env.POSTGRES_DB, "postgres");

export const GITLAB_HOST: string = _.defaultTo(process.env.GITLAB_HOST, "localhost");
export const GITLAB_PORT: number = _.defaultTo(process.env.GITLAB_PORT, 8080);
export const GITLAB_TOKEN: string = _.defaultTo(process.env.GITLAB_TOKEN, "GITLAB_TOKEN");

export const PORT: number = _.defaultTo(process.env.PORT, 3000);