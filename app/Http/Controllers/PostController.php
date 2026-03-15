<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(6);
        return inertia('demo', ['posts'=>$posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $fields = $request->validate([
            'body' => ['required']
        ]);
        $fields = array_merge($fields, ['user_id'=>Auth::id()]);

        //create the post.
        Post::create($fields);

        return redirect('/');
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //eager loading the user relationship to avoid n+1 problem when accessing post's user in the show page
        //without eager loading, when we access post's user in the show page, it will execute a query to get the user for each post, which will result in n+1 queries (1 query to get the posts and n queries to get the user for each post)
        $post->load('user');

        $isDeleteAllowed = Auth::user() == $post->user;
        
        return inertia('show', ['post'=>$post, 'isDeleteAllowed'=>$isDeleteAllowed]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //authroization check to ensure only user who created post can delete it.
        if (Auth::user() != $post->user) {
            abort(403);
        }
        //delete the post.
        $post->delete();
        return redirect('/');
        dd($post);
    }
}
