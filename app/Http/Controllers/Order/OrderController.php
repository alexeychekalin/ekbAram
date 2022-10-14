<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order\OrderRequest;
use App\Models\Order;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{
    public function index(OrderRequest $request)
    {
        $data = $request->validated();
        return Order::create($data);
    }

    public function get($id, $role)
    {
        if($role == 1){
            $clients = DB::table('orders')
                ->join('clients', 'orders.client', '=', 'clients.id')
                ->join('users', 'orders.manager', '=', 'users.id')
                ->select('orders.number', 'orders.datestart', 'orders.dateend', 'clients.name as client', 'users.name as manager')
                ->get();
        }
        else{
            $clients = DB::table('orders')
                ->join('clients', 'orders.client', '=', 'clients.id')
                ->join('users', 'orders.manager', '=', 'users.id')
                ->where('users.id', '=', $id)
                ->get();
        }

        return json_decode(json_encode($clients), true);
    }
    /*
    public function update(ClientsRequest $request){
        $data = $request->validated();
        Clients::where('id', $request['id'])->update($data);
        return $request['id'];
    }
    public function delete(ClientsRequest $request){
        Clients::where('id',$request['id'])->delete();
    }
    */

}
