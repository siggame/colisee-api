import { defaultTo, toNumber } from "lodash";

export const PORT = defaultTo<number>(toNumber(process.env.PORT), 8080);
export const STORAGE_DIR = defaultTo<string>(process.env.STORAGE_DIR, "/app/storage");
