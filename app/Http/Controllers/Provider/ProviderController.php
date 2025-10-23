<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Http\Requests\Provider\ProviderRequest;
use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class ProviderController extends Controller
{
    public function index(ProviderRequest $request)
    {
        $data = $request->validated();
        $provider = Provider::create($data);
        return $provider;
    }
    public function get()
    {
        $provider = DB::table('providers')->orderBy('name')->get();
        return json_decode(json_encode($provider), true);
    }

    public function update(ProviderRequest $request){
        $data = $request->validated();
        Provider::where('id', $request['id'])->update($data);
        return $request['id'];
    }
    public function delete(ProviderRequest $request){
        Provider::where('id',$request['id'])->delete();
    }

}
