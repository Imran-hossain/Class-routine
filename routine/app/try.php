 public function member_list(Request $request)

    {

        $type = $request->input('type')->get();
        $email = User::where('type', '=', $type)->distinct('email')->get();
        $token = User::where('type', '=', $type)->distinct('token')->get();


        $data = User::where('email', '=', $email)->Where('token', '=', $token)->Where('type', '=', 'admin')->get();
        
        //echo $user;

        if ($data) {
            //$type = $request->input('type');
            
            echo $data;
        // echo $user;
        }
        else
        {
            return response()->json(['success'=>false, 'message' => 'you cannot allow']);
        }
         
        }