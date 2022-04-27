<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', [PostController::class, 'index']);

Route::get('/post/{postId}', function ($postId) {
    $post = new PostController();
    return $post->OnePost($postId);
});

Route::post('/post/create', function (Request $request) {
    $post = new PostController();
    return $post->PostCreate($request);
});

Route::delete('/post/delete', function (Request $request) {
    $post = new PostController();
    return $post->PostDelete($request->input('id'));
});

Route::post('/login/form', function (Request $request) {
    $login = new LoginController();
    return $login->authenticate($request);
});

Route::get('/comments/{postId}', function ($postId) {
    $comment_controller = new CommentController();
    return $comment_controller->index($postId);
});

Route::post('comment/create', function (Request $request) {
    $comment_controller = new CommentController();
    return $comment_controller->create($request->input('postId'), $request->input('name'),
        $request->input('email'), $request->input('message'));
});
