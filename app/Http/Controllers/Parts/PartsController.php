<?php

namespace App\Http\Controllers\Parts;

use App\Http\Controllers\Controller;
use App\Http\Requests\Parts\PartsRequest;
use App\Models\Parts;
use Illuminate\Support\Facades\DB;


class PartsController extends Controller
{
    public function index(PartsRequest $request)
    {
        $data = $request->validated();
        $parts = Parts::create($data);
        return $parts;
    }

    public function get()
    {
        $parts = DB::table('parts')->get();
        return json_decode(json_encode($parts), true);
    }

    public function update(PartsRequest $request){
        $data = $request->validated();
        DB::table('parts')
            ->where('id', $request['id'])
            ->update(
                [
                    'pn' => $data['pn'],
                    'description' => $data['description']
                ]
            );
        return $request['id'];
    }
    public function delete(PartsRequest $request){
        Parts::where('id',$request['id'])->delete();
    }

}
