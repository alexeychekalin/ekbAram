<?php

namespace App\Http\Controllers\Documents;

use App\Http\Controllers\Controller;
use App\Http\Requests\Documents\DocumentsRequest;
use App\Models\About;
use App\Models\Clients;
use App\Models\Documents;
use App\Models\Order;
use App\Models\OrderList;
use App\Models\Provider;
use Illuminate\Support\Facades\DB;
use alhimik1986\PhpExcelTemplator\PhpExcelTemplator;
use alhimik1986\PhpExcelTemplator\params\ExcelParam;
use alhimik1986\PhpExcelTemplator\setters\CellSetterArrayValueSpecial;
use PhpOffice\PhpSpreadsheet\IOFactory;


class DocumentsController extends Controller
{
    public function ipo($filename){
        $path =public_path('upload/ipo/'). $filename;
        return response()->download($path);
    }

    public function opf($id, $idclient){
        define('SPECIAL_ARRAY_TYPE', CellSetterArrayValueSpecial::class);
        $counter = [];
        $pn = [];
        $quantity = [];
        $priceClient = [];
        $total = [];
        $subtotal = 0;
        $unit = [];

        $client = Clients::where('id', $idclient)->get();
        $order = Order::where('id', $id)->get();
        $about = About::where('id', 1)->get();
        $order_list = DB::table('order_lists')
            ->join('parts','parts.id', '=', 'order_lists.part')
            ->select(
                'parts.pn',
                'parts.description',
                'order_lists.quantity',
                'order_lists.priceClient',
            )
            ->where('order_lists.order_number', '=', $id)
            ->get();

        $order_list_providers = [];

        foreach ($order_list as $i => $item){
            $counter[] = $i+1;
            $pn[] = $item->pn . ', ' . $item->description;
            $quantity[] = $item->quantity;
            $priceClient[] = $item->priceClient;
            $total[] = $item->quantity * $item->priceClient;
            $subtotal += $item->quantity * $item->priceClient;
            $unit[] = 'EA';
        }

        $maxid = Order::max('id');

        $number = 'PF' . sprintf('%03d',$maxid) . $client[0]->code;

        $params = array(
            '{client_name}' => $client[0]->name,
            '{address}' => $client[0]->address,
            '{email}' => $client[0]->email,

            '{number}' => $number,

            '{number_ipo}' => $order[0]->number,
            '{datestart}' => $order[0]->datestart,
            '{dateend}' => $order[0]->dateend,
            '{currency}' => $order[0]->currency,

            '{subtotal}' => $subtotal,

            '{inn}' => $about[0]->inn,
            '{address_own}' => $about[0]->address,
            '{name_own}' => $about[0]->name,
            '{bank}' => $about[0]->bank,
            '{baddress}' => $about[0]->baddress,
            '{swift}' => $about[0]->swift,
            '{iban}' => $about[0]->iban,

            '[counter]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$counter),
            '[pn]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$pn),
            '[unit]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$unit),
            '[quantity]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$quantity),
            '[priceClient]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$priceClient),
            '[total]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$total)

        );

        PhpExcelTemplator::saveToFile( base_path().'/public/templates/opf.xlsx', base_path().'/public/templates/exported_file.xlsx', $params);

        $inputFileType = IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
        $objReader = IOFactory::createReader($inputFileType);
        $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');
        $objPHPExcel->getActiveSheet()->setShowGridlines(false);

        $writer = IOFactory::createWriter($objPHPExcel, 'Dompdf');
        $writer->save(base_path().'/public/upload/opf/'.$number.'.pdf');

        $path =public_path('upload/opf/'). $number.'.pdf';
        return response()->download($path, $number.'.pdf');
    }

    public function opo($id, $idclient){
        define('SPECIAL_ARRAY_TYPE', CellSetterArrayValueSpecial::class);
        $path = [];

        $order = Order::where('id', $id)->get();
        $about = About::where('id', 1)->get();
        $order_list = DB::table('order_lists')
            ->join('parts','parts.id', '=', 'order_lists.part')
            ->select(
                'parts.pn',
                'parts.description',
                'order_lists.quantity',
                'order_lists.provider',
                'order_lists.cd',
                'order_lists.price',
            )
            ->where('order_lists.order_number', '=', $id)
            ->get();

        $order_list_providers = [];

        $client = Clients::where('id', $idclient)->get();
        $maxid = Order::max('id');
        $number = 'PF' . sprintf('%03d',$maxid) . $client[0]->code;

        foreach ($order_list as $i => $item){
            $order_list_providers[$item->provider][] = $item;
        }
        $count = 1;
        foreach ($order_list_providers as $ii => $o)
        {
            $counter = [];
            $pn = [];
            $quantity = [];
            $price = [];
            $total = [];
            $subtotal = 0;
            $unit = [];
            $description = [];
            $cd = [];

            foreach ($o as $i => $item){

                $counter[] = $count;
                $pn[] = $item->pn;
                $description[] = $item->description;
                $cd[] = $item->cd;
                $quantity[] = $item->quantity;
                $price[] = $item->price;
                $total[] = $item->quantity * $item->price;
                $subtotal += $item->quantity * $item->price;
                $unit[] = 'EA';
            }

            $provider = Provider::where('id', $ii)->get();

            $params = array(
                '{pname}' => $provider[0]->name,
                '{paddress}' => $client[0]->address,
                '{pemail}' => $client[0]->email,

                '{number}' => $number,

                '{datestart}' => $order[0]->datestart,
                '{currency}' => $order[0]->currency,

                '{subtotal}' => $subtotal,

                '{inn}' => $about[0]->inn,
                '{address_own}' => $about[0]->address,
                '{name_own}' => $about[0]->name,
                '{bank}' => $about[0]->bank,
                '{baddress}' => $about[0]->baddress,
                '{swift}' => $about[0]->swift,
                '{iban}' => $about[0]->iban,

                '[counter]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$counter),
                '[pn]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$pn),
                '[cd]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$cd),
                '[description]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$description),
                '[unit]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$unit),
                '[quantity]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$quantity),
                '[price]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$price),
                '[total]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$total)
            );

            PhpExcelTemplator::saveToFile( base_path().'/public/templates/opo.xlsx', base_path().'/public/templates/exported_file.xlsx', $params);

            $inputFileType = IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
            $objReader = IOFactory::createReader($inputFileType);
            $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');
            $objPHPExcel->getActiveSheet()->setShowGridlines(false);

            $writer = IOFactory::createWriter($objPHPExcel, 'Dompdf');
            $writer->save(base_path().'/public/upload/opo/'.$number.$count.'.pdf');

            $path[] =public_path('upload/opo/'). $number.$count.'.pdf';
            $count++;
        }

        if(count($path) == 1){
            return response()->download(public_path($path[0]), $number.'1.pdf');
        }
        else{
            $zip = new \ZipArchive();
            $fileName = $number.'.zip';
            if ($zip->open(public_path($fileName), \ZipArchive::CREATE))
            {
                foreach ($path as $key => $value){
                    $relativeName = basename($value);
                    $zip->addFile($value, $relativeName);
                }
                $zip->close();
            }
            return response()->download(public_path($fileName), $number.'.zip');
        }
    }

    public function opl($id, $idclient){
        define('SPECIAL_ARRAY_TYPE', CellSetterArrayValueSpecial::class);
        $path = [];

        $order = Order::where('id', $id)->get();
        $about = About::where('id', 1)->get();
        $order_list = DB::table('order_lists')
            ->join('parts','parts.id', '=', 'order_lists.part')
            ->select(
                'parts.pn',
                'parts.description',
                'order_lists.quantity',
                'order_lists.provider',
                'order_lists.cd',
                'order_lists.price',
            )
            ->where('order_lists.order_number', '=', $id)
            ->get();

        $order_list_providers = [];

        $client = Clients::where('id', $idclient)->get();
        $maxid = Order::max('id');
        $number = 'PF' . sprintf('%03d',$maxid) . $client[0]->code;

        foreach ($order_list as $i => $item){
            $order_list_providers[$item->provider][] = $item;
        }
        $count = 1;
        foreach ($order_list_providers as $ii => $o)
        {
            $counter = [];
            $pn = [];
            $quantity = [];
            $total = 0;
            $description = [];
            $cd = [];

            foreach ($o as $i => $item){

                $counter[] = $count;
                $pn[] = 'p/n:' . $item->pn;
                $description[] = $item->description;
                $cd[] = $item->cd;
                $quantity[] = $item->quantity;
                $total += $item->quantity;
            }

            $provider = Provider::where('id', $ii)->get();

            $params = array(
                '{address}' => $client[0]->address,
                '{client}' => $client[0]->name,

                '{number}' => $number,

                '{datestart}' => $order[0]->datestart,
                '{dateend}' => $order[0]->dateend,
                '{number_ipo}' => $order[0]->number,

                '{total}' => $total,

                '{inn}' => $about[0]->inn,
                '{address_own}' => $about[0]->address,
                '{name_own}' => $about[0]->name,
                '{licence}' => $about[0]->licence,
                '{phone_own}' => $about[0]->phone,

                '[counter]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$counter),
                '[pn]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$pn),
                '[cd]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$cd),
                '[description]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$description),
                '[quantity]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$quantity),
            );

            PhpExcelTemplator::saveToFile( base_path().'/public/templates/opl.xlsx', base_path().'/public/templates/exported_file.xlsx', $params);

            $inputFileType = IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
            $objReader = IOFactory::createReader($inputFileType);
            $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');
            $objPHPExcel->getActiveSheet()->setShowGridlines(false);

            $writer = IOFactory::createWriter($objPHPExcel, 'Mpdf');
            $writer->save(base_path().'/public/upload/opl/'.$number.$count.'.pdf');

            $path[] =public_path('upload/opl/'). $number.$count.'.pdf';
            $count++;
        }

        if(count($path) == 1){
            return response()->download(public_path($path[0]), $number.'1.pdf');
        }
        else{
            $zip = new \ZipArchive();
            $fileName = $number.'.zip';
            if ($zip->open(public_path($fileName), \ZipArchive::CREATE))
            {
                foreach ($path as $key => $value){
                    $relativeName = basename($value);
                    $zip->addFile($value, $relativeName);
                }
                $zip->close();
            }
            return response()->download(public_path($fileName), $number.'.zip');
        }
    }

    /*
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
