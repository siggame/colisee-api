
export interface User {
    id: number;
    gitlab_id: number;

    //GitLab
    username: string;
    is_admin: boolean;

    //Db
    is_eligible: boolean;
    shirt_size: string;
    pizza_choice: string;

    created_time: Date;
    modified_time: Date;
}

export interface Team {
    id: number;
    gitlab_id: number;

    
}