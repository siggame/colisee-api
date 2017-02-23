import { Team } from "./teams";
import { Invite } from "./invites";

export interface User {
    id: number;
    username: string;
    email: string;
    name: string;
    avatar_url: string;
    is_admin: boolean;

    is_eligible: boolean;
    shirt_size: string;
    pizza_choice: string;
}

export interface GetUsersOptions {

}

export interface UpdateUserOptions {

}

export interface CreateUserOptions {

}


/**
 * @returns Users
 */
export function getUsers(options: GetUsersOptions): Promise<User[]> {
    return new Promise<User[]>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Id of User to get
 * @returns Promise of User
 */
export function getUser(id: number): Promise<User> {
    return new Promise<User>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param options Values to create user with
 * @returns Promise of created User
 */
export function createUser(options: CreateUserOptions): Promise<User> {
    return new Promise<User>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Id of User to get
 * @param options Values to update User with
 * @returns Promise of updated User
 */
export function updateUser(id: number, options: UpdateUserOptions): Promise<User> {
    return new Promise<User>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id Id of User to get
 * @returns Promise if user was deleted
 */
export function deleteUser(id: number): Promise<void>{
    return new Promise<void>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id User id
 * @returns Promise of teams user is a member of
 */
export function getUserTeams(id: number): Promise<Team[]> {
    return new Promise<Team[]>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

/**
 * @param id User id
 * @returns Promise of invites user has recieved
 */
export function getUserInvites(id: number): Promise<Invite[]> {
    return new Promise<Invite[]>((resolve, reject)=>{
        reject(new Error("NOT IMPLEMENTED"));
    });
}

