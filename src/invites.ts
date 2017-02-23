import { User } from "./users";
import { Team } from "./teams";

export interface Invite {
    id: number;
    team: Team;
    message: string;
}

/**
 * @param userId Id of User to invite
 * @param teamId Id of Team of invitation
 * @param message Message to invited User
 * @returns Promise of created Invite
 */
export function createInvite(userId: number, teamId: number, message: string=""): Promise<Invite>{
    return new Promise<Invite>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Invite id
 * @returns Promise of if invite was accepted
 */
export function acceptInvite(id: number): Promise<void>{
    return new Promise<void>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Invite id
 * @returns Promise of if invite was rejected
 */
export function rejectInvite(id: number): Promise<void>{
    return new Promise<void>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}