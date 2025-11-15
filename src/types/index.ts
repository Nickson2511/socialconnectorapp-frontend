// User model
export interface IUser {
    id: string;
    username: string;
    email: string;
    avatar?: string;
}

// Post model

export interface IPost {
    id: string;
    userId: string;
    content: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
    likes: number;
}
