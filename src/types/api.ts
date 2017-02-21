
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

export interface Team {
    id: number;
    name: string;
    path: string;
    description: string;
    namespace: string;
    captian_id: number;
}

export interface Group {
    id: number;
    name: string;
    path: string;
    description: string;
}

export interface TeamInvite {
    id: number;
    from_id: User;
    team_id: Team;
    message: string;
}