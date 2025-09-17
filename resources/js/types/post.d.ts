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