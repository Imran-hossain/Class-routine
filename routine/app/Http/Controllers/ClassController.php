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
use Tymon\JWTAuth\JWTManager as JWT;


class ClassController extends Controller
{   

    public function realAuth($admin_email , $admin_token)
    {
        $user = User::where('email', '=', $admin_email)->Where('token', '=', $admin_token)->Where('type', '=', 'admin')->get();
        if(count($user) != 0) return true;
        else return false;
    }
    
    public function classroutine_add(Request $request)

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

    public function classroutine_delete(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $group_name = $request->json()->get( 'group_name');
          
    if($this->realAuth($admin_email , $admin_token)){

        $user = Class_routine::where('group_name', '=', $group_name)->first();
        $user->delete();     
        return response()->json(['success'=>true, 'message' => 'done']);

    }else{
             return response()->json(['success'=>false, 'message' => 'fail']);
        }

    } 

    public function classroutine_update(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $group_name = $request->json()->get( 'group_name');
        $update_time = $request->json()->get( 'update_time');
        $update_teachername = $request->json()->get( 'update_teachername');
        $update_group_name = $request->json()->get( 'update_group_name');
        $update_location = $request->json()->get( 'update_location');
      
  
        	if($this->realAuth($admin_email , $admin_token)){
            $user = Class_routine::where('group_name', '=', $group_name)->first();

            $user->time = $update_time;
            $user->teacher_name =  $update_teachername;
            $user->group_name = $update_group_name;
            $user->location = $update_location;

            $user->save();
            return response()->json(['success'=>true, 'message' => 'done']);
       }
       else
       {
             return response()->json(['success'=>false, 'message' => 'fail']);
        }
    } 

     public function classroutine_show(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        
        if($this->realAuth($admin_email , $admin_token)){
       
        $users = Class_routine::all();
        echo $users;
       }
       else
       {
             return response()->json(['success'=>false, 'message' => 'fail']);
        }

    } 

}

