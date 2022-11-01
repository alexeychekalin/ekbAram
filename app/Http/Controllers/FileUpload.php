<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUpload extends Controller
{
    public function index (Request $request)
    {
        $upload_path = public_path('upload/ipo');
        $generated_new_name = $request->file->getClientOriginalName();
        $request->file->move($upload_path, $generated_new_name);

        return response()->json(['success' => $generated_new_name]);
    }

    public function other (Request $request, $id)
    {
        if (!file_exists(public_path('upload/other/'.$id))) {
            mkdir(public_path('upload/other/'.$id), 0777, true);
        }
        $upload_path = public_path('upload/other/'.$id);
        $generated_new_name =  $request->file->getClientOriginalName();
        $request->file->move($upload_path, $generated_new_name);

        return response()->json(['success'=>'You have successfully upload file.']);
    }

    public function delete (Request $request)
    {
        unlink(public_path('upload/other/'.$request->id.'/'.$request->name));
    }

    public function get ($id)
    {
        $files = array_diff(scandir(public_path('upload/other/'.$id), 1), array('.', '..'));
        return json_decode(json_encode($files, true));
    }

    public function download($filename, $id){
        $path = public_path('upload/other/'.$id.'/'). $filename;
        return response()->download($path, $filename);
    }
}
