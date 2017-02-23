import { User } from "./users";

export interface Team {
    id: number;
    name: string;
    path: string;
    description: string;
    namespace: string;
    captian_id: number;
}

export interface GetTeamsOptions {

}

export interface CreateTeamOptions {

}

export interface UpdateTeamOptions {
    
}

export function getTeams(options: GetTeamsOptions): Promise<Team[]> {
    return new Promise<Team[]>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Team id
 * @returns Promise of Team
 */
export function getTeam(id: number): Promise<Team> {
    return new Promise<Team>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param options Values to create Team with
 * @returns Promise of created User
 */
export function createTeam(options: CreateTeamOptions): Promise<Team> {
    return new Promise<Team>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Team id
 * @param options Values to update Team with
 * @returns Promise of updated Team
 */
export function updateTeam(id: number, options: UpdateTeamOptions): Promise<Team> {
    return new Promise<Team>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Team id
 * @returns Promise if Team was deleted
 */
export function deleteTeam(id: number): Promise<void>{
    return new Promise<void>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Team id
 * @returns Promise of Team members
 */
export function getTeamMembers(id: number): Promise<User[]> {
    return new Promise<User[]>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}