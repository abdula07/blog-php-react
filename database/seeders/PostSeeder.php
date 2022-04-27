<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\User;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        for($j = 0; $j < count($users); $j++ ) {
            for ($i = 0; $i < 50; $i++) {
                DB::table('posts')->insert([
                    'user_id' => $users[$j]->id,
                    'title' => Str::random(20),
                    'body' => Str::random(10),
                    'created' => Carbon::create(),
                ]);
            }
        }
    }
}
