<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();
        if (Auth::attempt($request->all())) {
            $request->session()->regenerate();
            return response(['status' => 'true', 'user' => $user]);
        }

        return response(['status' => 'false']);
    }
}
