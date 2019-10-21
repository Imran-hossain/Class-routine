<?php

namespace App\Http\Controllers;
use App\User;
use App\Groups;
use App\Class_routine;
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


class ClassController extends Controller
{   

    public function realAuth($admin_email , $admin_token)
    {
        $user = User::where('email', '=', $admin_email)->Where('token', '=', $admin_token)->Where('type', '=', 'admin')->get();
        if(count($user) != 0) return true;
        else return false;
    }
    
    public function class_add(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');

       if($this->realAuth($admin_email , $admin_token)){

            $classroutine = Class_routine::create([
            'time' => $request->json()->get('time'),
            'teacher_name' => $request->json()->get('teacher_name'),
            'location' => $request->json()->get('location'),
            'group_name' => $request->json()->get('group_name'),
        ]); 
        
        $classroutine->save();

       return response()->json(compact('classroutine'),201);

    }

    else{
         return response()->json(['success'=>false, 'message' => 'not create']);
        }
    } 

    public function class_delete(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $group_name = $request->json()->get( 'group_name');
          
    if($this->realAuth($admin_email , $admin_token)){

        $user = Class_routine::where('email', '=', $email)->first();
        $user->delete();     
        return response()->json(['success'=>true, 'message' => 'done']);

    }else{
             return response()->json(['success'=>false, 'message' => 'fail']);
        }

    } 

    public function groups_update(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $email = $request->json()->get( 'email');
        $update_email = $request->json()->get( 'update_email');
        $update_group = $request->json()->get( 'update_group');
  
        if($this->realAuth($admin_email , $admin_token)){
            $user = Groups::where('email', '=', $email)->first();

            $user->email = $update_email;
            $user->group_name = $update_group;
            $user->save();
            return response()->json(['success'=>true, 'message' => 'done']);
       }
       else
       {
             return response()->json(['success'=>false, 'message' => 'fail']);
        }
    } 

     public function groups_show(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        
        if($this->realAuth($admin_email , $admin_token)){
       
        $users = Groups::all();
        echo $users;
       }
       else
       {
             return response()->json(['success'=>false, 'message' => 'fail']);
        }

    } 

}

