<?php

namespace App\Http\Controllers\Clients;

use App\Http\Controllers\Controller;
use App\Http\Requests\Clients\ClientsRequest;
use App\Models\Clients;
use Illuminate\Support\Facades\DB;


class ClientsController extends Controller
{
    public function index(ClientsRequest $request)
    {
        $data = $request->validated();
        return Clients::create($data);
    }
    public function get()
    {
        $clients = DB::table('clients')->get();
        return json_decode(json_encode($clients), true);
    }

    public function update(ClientsRequest $request){
        $data = $request->validated();
        Clients::where('id', $request['id'])->update($data);
        return $request['id'];
    }

    public function delete(ClientsRequest $request){
        Clients::where('id',$request['id'])->delete();
    }

    public function address(ClientsRequest $request){
        Clients::where('id', $request['id'])->update(array('address3' => $request['newaddress']));
    }

}
