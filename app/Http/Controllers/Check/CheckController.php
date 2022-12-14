<?php

namespace App\Http\Controllers\Check;

use App\Http\Controllers\Controller;
use App\Http\Requests\Check\CheckRequest;
use Illuminate\Support\Facades\DB;

class CheckController extends Controller
{
    public function people(CheckRequest $request)
    {
        $check = DB::table( 'users')->where('Phone', '=' ,$request['Phone'])->get();
        return json_decode(json_encode($check), true);
    }
    public function phone(CheckRequest $request)
    {
        $check = DB::table( 'users')->where('Phone', '=' ,$request['Phone'])->get();
        return json_decode(json_encode($check), true);
    }
    public function client(CheckRequest $request)
    {
        $check = DB::table( 'clients')->where('name', '=' ,$request['name'])->get();
        return json_decode(json_encode($check), true);
    }

    public function part(CheckRequest $request)
    {
        $check = DB::table( 'parts')->where('pn', '=' ,$request['pn'])->get();
        return json_decode(json_encode($check), true);
    }

    public function provider(CheckRequest $request)
    {
        $check = DB::table( 'providers')->where('name', '=' ,$request['name'])->get();
        return json_decode(json_encode($check), true);
    }

}
