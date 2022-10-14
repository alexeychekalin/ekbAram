<?php

namespace App\Http\Controllers\Depart;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DepartController extends Controller
{
    public function index()
    {
        $results = DB::table('depart')->get();
        return $results;
    }

}
