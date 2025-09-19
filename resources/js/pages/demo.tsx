// import React from "react";
import { join } from "path";
import Hello from "../components/hello";
import Layout from "../layouts/layout";
import { Link } from "@inertiajs/react";
//importing the types for posts and paginated posts
import { Post } from "../types/post";
import { PaginatedPosts } from "../types/post";


function Demo({ posts }: { posts: PaginatedPosts }) {

  console.log(posts);
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
          </div>
        ))}
      </div>
      <div>
        {posts.links.map(link => (
          <div>
            {link.url ? (
              <a href={link.url} >{link.label}</a>
            ) : (
              <span>{link.label}</span>
            )
            }

          </div>
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