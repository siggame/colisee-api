import * as users from "./users";

export interface Team {
    id: number;
    name: string;
    path: string;
    description: string;
    namespace: string;
    captian_id: number;
}
