<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $post_all = Post::all();
        for ($i = 0; $i < count($post_all); $i++) {
            for ($j = 0; $j < 3; $j++) {
                DB::table('comments')->insert([
                    'post_id' => $post_all[$i]->id,
                    'name' => Str::random(20),
                    'email' => Str::random(10),
                    'message' => Str::random(10),
                    'created' => Carbon::create(),
                ]);
            }
        }
    }
}
