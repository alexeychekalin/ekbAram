<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use alhimik1986\PhpExcelTemplator\PhpExcelTemplator;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;


class IndexController extends Controller
{
    public function index()
    {
/*
        PhpExcelTemplator::saveToFile( base_path().'/public/templates/OSI.xlsx', base_path().'/public/templates/exported_file.xlsx', [
            '{current_date}' => date('d-m-Y'),
            '{department}' => 'Sales department',
        ]);

        $inputFileType = \PhpOffice\PhpSpreadsheet\IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
        $objReader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
        $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, 'Mpdf');
        $writer->save(base_path().'/public/templates/exported_file.pdf');

*/
        $user = DB::table('users')->get();
        return json_decode(json_encode($user), true);
    }

}
