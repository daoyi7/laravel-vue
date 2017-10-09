<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
// use Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Blog;
use Carbon\Carbon;

class BlogController extends Controller
{
    //
    public function index()
    {
        $blogs = Blog::orderBy('published_at', 'desc')->published()->get();

        // dd($blogs);
        return $blogs;
    }

    public function edit (Request $request)
    {
        // $blog = new Blog();
        //
        // $blog->body = $request->body;
        // $edit = $request->getContent();
        $blog = Blog::create($blog);
    }

    public function authenticate(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // all good so return the token
        return response()->json(compact('token'));
    }

    public function user()
    {
        JWTAuth::parseToken();
        $user = JWTAuth::parseToken()->authenticate();

        return $user;
    }
}
