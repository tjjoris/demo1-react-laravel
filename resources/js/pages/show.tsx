import { Post } from "../types/post";
import { useForm } from '@inertiajs/react';
import { useRoute } from "../../../vendor/tightenco/ziggy"


export default function Show({ post }: { post: Post }) {
    //delete is a reserved keyword in typescript so i cannot use it direclty and need to rename it during destructuring
    //renaming it to destroy
    const { delete: destroy } = useForm();
    const route = useRoute();

    function deleteInShow(e: React.FormEvent) {
        e.preventDefault();
        //the manual route:
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', { post: post.id }));
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-8">
                Show Post
            </h1>
            {/* <div className="w-1/2 mx-auto"> */}
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>
                        Posted on:
                    </span>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={deleteInShow}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py=1 text-white">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}