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
use Illuminate\Http\Request;
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

    public function opf($id, $idclient, Request $request){
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
            $priceClient[] = number_format( $item->priceClient, 2, ',', ' ');
            $total[] = number_format( $item->quantity * $item->priceClient, 2, ',', ' ');
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
            '{datestart}' => date("d-M-Y", strtotime($order[0]->datestart)),
            '{dateend}' => date("d-M-Y", strtotime($order[0]->dateend)),
            '{currency}' => $order[0]->currency,

            '{note1}' => $request->note1,
            '{note2}' => $request->note2,
            '{note3}' => $request->note3,

            '{subtotal}' => number_format( $subtotal, 2, ',', ' '),

            '{inn}' => $about[0]->inn,
            '{address_own}' => $about[0]->address,
            '{name_own}' => $about[0]->name,
            '{bank}' => $about[0]->accountNumber,
            '{baddress}' => $about[0]->bank . ", ".$about[0]->baddress,
            '{swift}' => $about[0]->swift,
            '{iban}' => $about[0]->iban,

            '[counter]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$counter),
            '[pn]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$pn),
            '[unit]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$unit),
            '[quantity]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$quantity),
            '[priceClient]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$priceClient),
            '[total]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$total)

        );

        PhpExcelTemplator::saveToFile( base_path().'/public/templates/opf3.xlsx', base_path().'/public/templates/exported_file.xlsx', $params);

        $inputFileType = IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
        $objReader = IOFactory::createReader($inputFileType);
        $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');
        $objPHPExcel->getActiveSheet()->setShowGridlines(false);

        $writer = IOFactory::createWriter($objPHPExcel, 'Mpdf');
        $writer->save(base_path().'/public/upload/opf/'.$number.'.pdf');

        $path =public_path('upload/opf/'). $number.'.pdf';
        return response()->download($path, $number.'.pdf');
    }

    public function opo($id, $idclient, Request $request){
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
                $price[] = number_format( $item->price, 2, ',', ' ');
                $total[] = number_format( $item->quantity * $item->price, 2, ',', ' ');
                $subtotal += $item->quantity * $item->price;
                $unit[] = 'EA';
            }

            $provider = Provider::where('id', $ii)->get();

            $count = count($order_list_providers) > 1 ? $count : '';

            $params = array(
                '{pname}' => $provider[0]->name,
                '{paddress}' => $provider[0]->address,
                '{pemail}' => $provider[0]->email,

                '{number}' => $number.$count,

                '{datestart}' => date("d-M-Y", strtotime($order[0]->datestart)),
                '{dateend}' => date("d-M-Y", strtotime($order[0]->dateend)),
                '{currency}' => $order[0]->currency,

                '{subtotal}' =>  number_format( $subtotal, 2, ',', ' '),

                '{note1}' => $request->note1,
                '{note2}' => $request->note2,
                '{note3}' => $request->note3,

                '{inn}' => $about[0]->inn,
                '{address_own}' => $about[0]->address,
                '{name_own}' => $about[0]->name,
                '{bank}' => $about[0]->accountNumber,
                '{baddress}' => $about[0]->bank . ", ".$about[0]->baddress,
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

            $writer = IOFactory::createWriter($objPHPExcel, 'Mpdf');

            $writer->save(base_path().'/public/upload/opo/'.'PO '. $number.$count.'.pdf');
            $path[] = public_path('upload/opo/'). 'PO '.  $number.$count.'.pdf';
            $count++;
        }

        if(count($path) == 1){
            return response()->download($path[0], 'PO '. $number.'.pdf');
        }
        else{
            $zip = new \ZipArchive();
            $fileName = $number.'.zip';
            if ($zip->open(public_path('upload/opo/').$fileName, \ZipArchive::CREATE))
            {
                foreach ($path as $key => $value){
                    $relativeName = basename($value);
                    $zip->addFile($value, $relativeName);
                }
                $zip->close();
            }
            return response()->download(public_path('upload/opo/').$fileName, 'PO-'.$number.'.zip');
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
                'order_lists.mfg',
                'order_lists.coo',
                'order_lists.schb',
                'order_lists.eccn',
                'order_lists.sb'
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
            $sb = [];

            $countOrders = 1;

            foreach ($o as $i => $item){

                $counter[] = $countOrders;
                $pn[] = 'p/n:' . $item->pn;
                $description[] =
                    $item->description . PHP_EOL .
                    'Mfg:' . $item->mfg . PHP_EOL .
                    'Country of origin:' . $item->coo . PHP_EOL .
                'Sch. B.: ' . $item->schb . '; ECCN: ' . $item->eccn . PHP_EOL . 'NLR';
                $cd[] = $item->cd;
                $quantity[] = $item->quantity;
                $total += $item->quantity;
                $sb[] = $item->sb;
                $countOrders++;
            }
            $count = count($order_list_providers) > 1 ? $count : '';
            $params = array(
                '{address}' => $client[0]->address,
                '{client}' => $client[0]->name,

                '{number}' => $number.$count,

                '{datestart}' => date("d-M-Y", strtotime($order[0]->datestart)),
                '{dateend}' => date("d-M-Y", strtotime($order[0]->dateend)),
                '{number_ipo}' => $order[0]->number,
                '{shipto}' => $order[0]->shipto,
                '{terms}' => $order[0]->terms,
                '{wd}' => $order[0]->wd,

                '{total}' => $total,

                '{inn}' => 'TRN: '. $about[0]->inn,
                '{address_own}' => $about[0]->address,
                '{name_own}' => $about[0]->name,
                '{licence}' => 'License #'.$about[0]->licence,
                '{phone_own}' => 'T: ' . $about[0]->phone,

                '[counter]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$counter),
                '[pn]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$pn),
                '[cd]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$cd),
                '[sb]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$sb),
                '[description]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$description),
                '[quantity]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$quantity),
            );

            PhpExcelTemplator::saveToFile( base_path().'/public/templates/opl2.xlsx', base_path().'/public/templates/exported_file.xlsx', $params);

            $inputFileType = IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
            $objReader = IOFactory::createReader($inputFileType);
            $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');
            $objPHPExcel->getActiveSheet()->setShowGridlines(false);

            $writer = IOFactory::createWriter($objPHPExcel, 'Mpdf');



            $writer->save(base_path().'/public/upload/opl/'.'PL '. $number.$count.'.pdf');

            $path[] =public_path('upload/opl/'). 'PL ' . $number.$count.'.pdf';
            $count++;
        }

        if(count($path) == 1){
            return response()->download($path[0], 'PL '.$number.'.pdf');
        }
        else{
            $zip = new \ZipArchive();
            $fileName = $number.'.zip';
            if ($zip->open(public_path('upload/opl/').$fileName, \ZipArchive::CREATE))
            {
                foreach ($path as $key => $value){
                    $relativeName = basename($value);
                    $zip->addFile($value, $relativeName);
                }
                $zip->close();
            }
            return response()->download(public_path('upload/opl/').$fileName, 'PL '.$number.'.zip');
        }
    }

    public function osi($id, $idclient){
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
                'order_lists.mfg',
                'order_lists.coo',
                'order_lists.schb',
                'order_lists.eccn',
                'order_lists.sb',
                'order_lists.priceClient'
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
            $sb = [];
            $price = [];
            $amount = [];

            $countOrders = 1;

            foreach ($o as $i => $item){
                $counter[] = $countOrders;
                $pn[] = 'p/n:' . $item->pn . PHP_EOL . 's/n: '. $item->sb;
                $description[] =
                    $item->description . PHP_EOL .
                    'Mfg:' . $item->mfg . PHP_EOL .
                    'Country of origin:' . $item->coo . PHP_EOL .
                    'Sch. B.: ' . $item->schb . '; ECCN: ' . $item->eccn . PHP_EOL . 'NLR';
                $cd[] = $item->cd;
                $quantity[] = $item->quantity;
                $total += $item->quantity * $item->priceClient;
                $sb[] = $item->sb;
                $price[] = number_format( $item->priceClient, 2, ',', ' ');
                $amount[] = number_format( $item->quantity * $item->priceClient, 2, ',', ' ');
                $countOrders++;
            }

            $count = count($order_list_providers) > 1 ? $count : '';

            $params = array(
                '{address}' => $client[0]->address,
                '{client}' => $client[0]->name,

                '{number}' => $number.$count,

                '{datestart}' => date("d-M-Y", strtotime($order[0]->datestart)),
                '{dateend}' => date("d-M-Y", strtotime($order[0]->dateend)),
                '{number_ipo}' => $order[0]->number,
                '{shipto}' => $order[0]->shipto,
                '{terms}' => $order[0]->terms,
                '{currency}' => $order[0]->currency,

                '{total}' => number_format( $total, 2, ',', ' '),

                '{inn}' => 'TRN: '.$about[0]->inn,
                '{address_own}' => $about[0]->address,
                '{name_own}' => $about[0]->name,
                '{licence}' => 'License # '.$about[0]->licence,
                '{phone_own}' => 'T: '.$about[0]->phone,
                '{bank}' => $about[0]->accountNumber,
                '{baddress}' => $about[0]->bank . ", ".$about[0]->baddress,
                '{iban}' => $about[0]->iban,
                '{swift}' => $about[0]->swift,

                '[counter]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$counter),
                '[pn]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$pn),
                '[cd]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$cd),
                '[description]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$description),
                '[quantity]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$quantity),
                '[price]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$price),
                '[amount]' => new ExcelParam(SPECIAL_ARRAY_TYPE,$amount),
            );

            PhpExcelTemplator::saveToFile( base_path().'/public/templates/osi.xlsx', base_path().'/public/templates/exported_file.xlsx', $params);

            $inputFileType = IOFactory::identify(base_path().'/public/templates/exported_file.xlsx');
            $objReader = IOFactory::createReader($inputFileType);
            $objPHPExcel = $objReader->load(base_path().'/public/templates/exported_file.xlsx');
            $objPHPExcel->getActiveSheet()->setShowGridlines(false);

            $writer = IOFactory::createWriter($objPHPExcel, 'Mpdf');

            $writer->save(base_path().'/public/upload/osi/'.'SI '.$number.$count.'.pdf');

            $path[] =public_path('upload/osi/'). 'SI '. $number.$count.'.pdf';
            $count++;
        }

        if(count($path) == 1){
            return response()->download($path[0], 'SI '.$number.'.pdf');
        }
        else{
            $zip = new \ZipArchive();
            $fileName = $number.'.zip';
            if ($zip->open(public_path('upload/osi/').$fileName, \ZipArchive::CREATE))
            {
                foreach ($path as $key => $value){
                    $relativeName = basename($value);
                    $zip->addFile($value, $relativeName);
                }
                $zip->close();
            }
            return response()->download(public_path('upload/osi/').$fileName, 'SI '.$number.'.zip');
        }
    }

}
