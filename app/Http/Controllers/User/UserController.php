<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function index(UserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        return User::create($data);
    }

    public function update(UserRequest $request){
    //return DB::raw($data['phone'];
        if($request['password'] != 'null'){
            $data = $request->validated();
            $data['password'] = bcrypt($data['password']);
            DB::table('users')
                ->where('id', $request['id'])
                ->update(
                    [
                        'name' =>$data['name'],
                        'phone' => $data['phone'],
                        'prefix' => $data['prefix'],
                        'role' => $data['role'],
                        'password' => $data['password']
                    ]
                );
            return $request['id'];
        }
        else{
            $data = $request->validated();
            DB::table('users')
                ->where('id', $request['id'])
                ->update(
                    [
                        'name' =>$data['name'],
                        'phone' => $data['phone'],
                        'prefix' => $data['prefix'],
                        'role' => $data['role']
                    ]
                );
            return $request['id'];

        }
    }
    public function delete(UserRequest $request){
        User::where('id',$request['id'])->delete();
    }

}
