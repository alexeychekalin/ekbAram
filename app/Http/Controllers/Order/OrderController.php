<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order\OrderRequest;
use App\Models\Order;
use App\Models\OrderList;
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
            $orders = DB::table('orders')
                ->join('clients', 'orders.client', '=', 'clients.id')
                ->join('users', 'orders.manager', '=', 'users.id')
                ->join('order_lists', 'orders.id', '=', 'order_lists.order_number')
                ->select(
                    'orders.number',
                    'orders.datestart',
                    'orders.id',
                    'orders.dateend',
                    'orders.delivery',
                    'orders.comission',
                    'orders.ipo',
                    'clients.id as idclient',
                    'clients.name as client',
                    'users.name as manager',
                    DB::raw('SUM(order_lists.quantity*order_lists.price) as expence'),
                    DB::raw('SUM(order_lists.quantity*order_lists.priceClient) as revenue'),
                    'orders.currency'
                )
                ->groupBy('orders.id')
                ->get();
        }
        else{
            $orders = DB::table('orders')
                ->join('clients', 'orders.client', '=', 'clients.id')
                ->join('users', 'orders.manager', '=', 'users.id')
                ->join('order_lists', 'orders.id', '=', 'order_lists.order_number')
                ->select(
                    'orders.number',
                    'orders.datestart',
                    'orders.id',
                    'orders.dateend',
                    'orders.delivery',
                    'orders.comission',
                    'orders.ipo',
                    'clients.id as idclient',
                    'users.name as manager',
                    DB::raw('SUM(order_lists.quantity*order_lists.price) as expence'),
                    DB::raw('SUM(order_lists.quantity*order_lists.priceClient) as revenue'),
                    'orders.currency'
                )
                ->where('users.id', '=', $id)
                ->groupBy('orders.id')
                ->get();
        }

        return json_decode(json_encode($orders), true);
    }

    public function change($id){
        $order = DB::table('orders')
            ->where('orders.id', '=', $id)
            ->get();

        $order_list = DB::table('order_lists')
            ->join('parts','parts.id', '=', 'order_lists.part')
            ->join('providers','providers.id', '=', 'order_lists.provider')
            ->select(
                'parts.id as pid',
                'parts.pn',
                'parts.description',
                'order_lists.id',
                'order_lists.quantity',
                'order_lists.price',
                'order_lists.priceClient',
                'providers.id as prid',
                'providers.name',
                'order_lists.order_number',
                'order_lists.cd',
                'order_lists.mfg',
                'order_lists.coo',
                'order_lists.schb',
                'order_lists.eccn',
                'order_lists.sb'
            )
            ->where('order_lists.order_number', '=', $id)
            ->get();

        return json_decode(json_encode([$order, $order_list]), true);
    }

    public function update(OrderRequest $request){
        $id = $request['id'];
        unset($request['id']);
        $data = $request->validated();
        Order::where('id', $id)->update($data);
        OrderList::where('order_number', $id)->delete();
        return $id;
    }

    public function delete($id){
        Order::where('id',$id)->delete();
        OrderList::where('order_number',$id)->delete();
    }

}
