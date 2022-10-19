<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order\OrderListRequest;
use App\Models\OrderList;
use Illuminate\Support\Facades\DB;


class OrderListController extends Controller
{
    public function index(OrderListRequest $request)
    {
        $data = $request->all();
        return OrderList::insert($data);
    }

    /*
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
    public function delete($id){
        OrderList::where('id',$id)->delete();
    }
    */

}
