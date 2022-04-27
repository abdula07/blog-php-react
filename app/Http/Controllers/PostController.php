<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param int $id
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return Post::all();
    }

    public function OnePost($postId)
    {
        return Post::where('id', $postId)->first();
    }

    public function PostCreate(Request $request)
    {
        $date = date_create();
        $result = Post::create([
            'user_id' => $request->input('user_id'),
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'created' => date_format($date, 'Y-m-d'),
        ]);
        return $result;
    }

    public function PostDelete($postId)
    {
        $result = Post::where('id', $postId)->first()->delete();
        return $result;
    }
}
