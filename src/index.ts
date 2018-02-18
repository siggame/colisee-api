import { app, default as api } from "./app";

if (!module.parent) {
    api();
}

export { app };
