// import React from "react";
import { join } from "path";
import Hello from "../components/hello";
import Layout from "../layouts/layout";
import { Link } from "@inertiajs/react";
//importing the types for posts and paginated posts
import { Post } from "../types/post";
import { PaginatedPosts } from "../types/post";
import { useRoute } from "../../../vendor/tightenco/ziggy"



function Demo({ posts }: { posts: PaginatedPosts }) {

  const route = useRoute();

  // console.log(posts);
  return (
    <div>
      <div>
        {posts.data.map(post => (
          <div key={post.id} className="p-4 border-b">
            <div className="text-sm text-slate-600">
              <span>
                Posted on:
              </span>
              <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className="font-medium">{post.body}</p>

            <Link
              href={route('posts.show', { post: post.id })}
              className="text-link">Read more...
            </Link>

            {/* <Link
              href={`/posts/${post.id}`}
              className="text-link">Read more...
            </Link> */}
          </div>
        ))}
      </div>
      <div className="py-12 px-4">
        {posts.links.map(link => (
          link.url ? (
            <Link className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''}`}
              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
              href={link.url}
            />
          ) : (
            <span
              className="p-1 mx-1 text-slate-400"
              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          )
        ))}
      </div>
      <Hello name="Luke" />

      <Link preserveScroll href="hello" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}
      </Link>
    </div>
  );
}

//this is how the layout is used when there is not a defualt layout.
Demo.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Demo;