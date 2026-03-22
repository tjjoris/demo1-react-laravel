/**
 * this is a types file which contains the types for posts and paginated posts
 * the .d.ts means its a typescript declaration file
 * this file is used to define the types for posts and paginated posts
 * this file is imported in the demo.tsx file
 * it is not compiled to javascript
 */

export interface Post {
    id: number;
    body: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    user?: {
        name: string;
    };
}

export interface Link {
    url: string | null;
    label: string;
    page: string | null;
    active: boolean;
}

export interface PaginatedPosts {
    data: Post[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: Link[];
    // ...other pagination fields
}