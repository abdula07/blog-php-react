<?php


namespace App\Http\Controllers;

use App\Models\Comment;

class CommentController extends Controller
{
    public function index($postId)
    {
        return Comment::all()->where('post_id', $postId);
    }

    public function create($postId, $name, $email, $message) {
        $date = date_create();
        return Comment::create([
            'post_id' => $postId,
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'created' => date_format($date, 'Y-m-d'),
        ]);
    }
}
