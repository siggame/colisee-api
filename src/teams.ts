import { User } from "./users";
import * as conn from "./conn";

export interface Team {
  id: number;
  name: string;
  stub: string;
  description: string;
  captain_id: number;
}

export interface GetTeamsOptions {

}

export interface CreateTeamOptions {

}

export interface UpdateTeamOptions {

}

export function getTeams(options: GetTeamsOptions): Promise<Team[]> {
  return new Promise<Team[]>((resolve, reject) => {
    reject(new Error("NOT IMPLEMENTED"));
  });
}

/**
 * @param id Team id
 * @returns Promise of Team
 */
export function getTeam(id: number): Promise<Team> {
  return new Promise<Team>((resolve, reject) => {
    const gl = 0;
    const db = 1;

    const promises = [
      conn.db("team").where("id", id).then(),
      conn.gitlab({ url: `projects/${id}` })
    ];
    Promise.all(promises)
      .then(results => {
        //       if(id)
      })   //return statement here, but inside this if statement? Does this if even go here? All this and more in the next season of ask Russley
      //   .then(resolve)
      .catch(reject);

  });
}

/**
 * @param options Values to create Team with
 * @returns Promise of created User
 */
export function createTeam(options: CreateTeamOptions): Promise<Team> {
  return new Promise<Team>((resolve, reject) => {
    reject(new Error("NOT IMPLEMENTED"));
  });
}

/**
 * @param id Team id
 * @param options Values to update Team with
 * @returns Promise of updated Team
 */
export function updateTeam(id: number, options: UpdateTeamOptions): Promise<Team> {
  return new Promise<Team>((resolve, reject) => {
    reject(new Error("NOT IMPLEMENTED"));
  });
}

/**
 * @param id Team id
 * @returns Promise if Team was deleted
 */
export function deleteTeam(id: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    reject(new Error("NOT IMPLEMENTED"));
  });
}

/**
 * @param id Team id
 * @returns Promise of Team members
 */
export function getTeamMembers(id: number): Promise<User[]> {
  return new Promise<User[]>((resolve, reject) => {
    reject(new Error("NOT IMPLEMENTED"));
  });
}

export function joinTeamData(gitlabData: any, dbData: any): Team {
  if (gitlabData.id !== dbData.id) {
    throw new Error(`Cannot join team datas with different ids: ${gitlabData.id} and ${dbData.id}`);
  }
  return {
    id: gitlabData.id,
    name: gitlabData.name,
    stub: dbData.stub,
    description: gitlabData.description,
    captain_id: dbData.captain_id
  }
}
