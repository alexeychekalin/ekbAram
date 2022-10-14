<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use App\Http\Requests\About\AboutRequest;
use App\Models\About;
use Illuminate\Support\Facades\DB;


class AboutController extends Controller
{
    public function index(AboutRequest $request)
    {
        $data = $request->validated();
        Db::table('abouts')->truncate();
        $about = About::create($data);
        return $about;
    }
    public function get()
    {
        $about = DB::table('abouts')->get();
        return json_decode(json_encode($about), true);
    }

}
