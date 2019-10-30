<?php

namespace App\Http\Controllers;
use App\User;
use App\Groups;
use App\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\JWTManager as JWT;


class LocationController extends Controller
{   

   public function realAuth($admin_email , $admin_token)
    {
        $user = User::where('email', '=', $admin_email)->Where('token', '=', $admin_token)->Where('type', '=', 'admin')->get();
        if(count($user) != 0) return true;
        else return false;
    }
    
    public function location_add(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $group_name = $request->json()->get( 'group_name');

        $data = Groups::where('group_name', '=', $group_name)->get();

        if(count($data) != 0){

            return response()->json(['success'=>false, 'message' => 'Try Again']);
        }

       if($this->realAuth($admin_email , $admin_token)){

            $location = Location::create([
            'building_name' => $request->json()->get('building_name'),
            'link' => $request->json()->get('link'),
            
        ]); 
        
        $location->save();

       return response()->json(compact('location'),201);
    }

    else{
         return response()->json(['success'=>false, 'message' => 'not create']);
        }
    } 


    public function location_delete(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $email = $request->json()->get( 'email');  
          
    if($this->realAuth($admin_email , $admin_token)){

        $user = Groups::where('email', '=', $email)->first();
        $user->delete();     
        return response()->json(['success'=>true, 'message' => 'done']);

    }else{
             return response()->json(['success'=>false, 'message' => 'fail']);
        }

    } 

    public function location_update(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        $email = $request->json()->get( 'email');
        $update_email = $request->json()->get( 'update_email');
        $update_group = $request->json()->get( 'update_group');

        $data = Groups::where('email', '=', $email)->get();

       
  
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

     public function location_show(Request $request)

    {
        $admin_email = $request->json()->get( 'admin_email');
        $admin_token = $request->json()->get( 'admin_token');
        
        if($this->realAuth($admin_email , $admin_token)){
       
        $users = Groups::distinct('group_name')->get();
        echo $users;
       }
       else
       {
             return response()->json(['success'=>false, 'message' => 'fail']);
        }

    } 

}

