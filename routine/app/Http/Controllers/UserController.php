<?php

namespace App\Http\Controllers;
use App\User;
use App\Groups;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;


class UserController extends Controller
{   


    public function realAuth($admin_email , $admin_token)
    {
        $user = User::where('email', '=', $admin_email)->Where('token', '=', $admin_token)->Where('type', '=', 'admin')->get();
        if(count($user) != 0) return true;
        else return false;
    }

    public function register(Request $request)
    {

         $validator = Validator::make($request->json()->all() , [

            'name' => 'required|string|max:255',
            'type' => 'required|string',
            'ID' => 'required|string|max:10',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6', 
            'admin_email' =>'required|string|max:255',   
            'admin_token' =>'required|string',    
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
    }

        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');

        $data = User::where('email', '=', $admin_email)->Where('token', '=', $admin_token)->Where('type', '=', 'admin')->get();

           if(count($data) != 0){

            $user = User::create([
            'name' => $request->json()->get('name'),
            'type' => $request->json()->get('type'),
            'ID' => $request->json()->get('ID'),
            'email' => $request->json()->get('email'),
            'password' => Hash::make($request->json()->get('password')),
            'admin_email'=>  $request->json()->get('admin_email'),  

        ]); 
        
        $token= Str::random(255);
        $user->token = $token;
        $user->save();

       return response()->json(compact('user'),201);

        }
    }

    public function login(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');
    
        $user = User::where('email', '=', $email)->first();

        if (!$user) {
        return response()->json(['success'=>false, 'message' => 'Login Fail, please check email id']);
        }
        if (Hash::check($password, $user->password)) {
            $token= Str::random(255);
            $user->token = $token;
            $user->save();

            return response()->json( compact('user') );
        }
        else 
        {
            return response()->json(['success'=>false, 'message' => 'Login Fail, pls check password']);
        }
    }
   

}

