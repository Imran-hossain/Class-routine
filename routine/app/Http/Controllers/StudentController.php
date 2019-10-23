<?php

namespace App\Http\Controllers;
use App\User;
use App\Groups;
use App\Class_routine;
use App\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\JWTManager as JWT;


class StudentController extends Controller
{   

    public function realAuth($student_email , $student_token)
    {
        $student= User::where('email', '=', $student_email)->Where('token', '=', $student_token)->get();
        if(!empty($student) != 0) return true;
        else return false;
    }
    
    public function classroutine(Request $request)
    {
        $student_email = $request->json()->get( 'student_email');
        $student_token = $request->json()->get( 'student_token');
        //$email = $request->json()->get( 'email');


       if($this->realAuth($student_email , $student_token)){
        echo $student_email."\n".$student_token."\n\n\n";

        $data = Groups::where('email', '=', $student_email)->first(); 
        $group_n = $data->group_name;

        $routine = Class_routine::where('group_name', '=', $group_n)->first();
        echo $routine;

    }else{
         return response()->json(['success'=>false, 'message' => 'not create']);
        }
    } 
   
}

