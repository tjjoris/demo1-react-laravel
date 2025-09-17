

export interface Post {
    id: number;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface PaginatedPosts {
    data: Post[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    // ...other pagination fields
}