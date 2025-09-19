import { Post } from "../types/post";

export default function Show({ post }: { post: Post }) {
    return (
        <>
            <h1>Show post</h1>
            <p>{post.body}</p>
        </>
    )
}