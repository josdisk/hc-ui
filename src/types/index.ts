// Definition of the types used in the application

export interface ApiResponse {
    data: UsersData;  
}

export interface UsersData {
    users: User[];
}

export interface User {
    id: string;
    avatar: string;
    firstname: string;
    lastname: string;
    role: string;
    joinDate: string;
    description: string;
}
