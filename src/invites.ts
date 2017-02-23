import { User } from "./users";
import { Team } from "./teams";

export interface Invite {
    id: number;
    team: Team;
    message: string;
}