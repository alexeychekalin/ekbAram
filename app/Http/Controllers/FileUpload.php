<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUpload extends Controller
{
    public function index (Request $request)
    {
        $upload_path = public_path('upload');
        $generated_new_name = time() . '.' . $request->file->getClientOriginalExtension();
        $request->file->move($upload_path, $generated_new_name);

        return response()->json(['success' => $generated_new_name]);
    }
}
