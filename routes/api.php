<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Check\CheckController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'User', 'prefix' => 'users', 'middleware' => 'auth:sanctum'], function (){
   Route::post('/', [App\Http\Controllers\User\UserController::class, 'index']);
   Route::get('/', [App\Http\Controllers\User\IndexController::class, 'index']);
   Route::post('/update', [App\Http\Controllers\User\UserController::class, 'update'])->name('user.update');
   Route::post('/delete', [App\Http\Controllers\User\UserController::class, 'delete'])->name('user.delete');
});
Route::group(['namespace' => 'Depart', 'prefix' => 'depart', 'middleware' => 'auth:sanctum'], function (){
    Route::get('/', [App\Http\Controllers\Depart\DepartController::class, 'index']);
});
Route::group(['namespace' => 'Check', 'prefix' => 'check', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/phone', [App\Http\Controllers\Check\CheckController::class, 'phone'])->name('check.phone');
    Route::post('/people', [App\Http\Controllers\Check\CheckController::class, 'people'])->name('check.people');
    Route::post('/client', [App\Http\Controllers\Check\CheckController::class, 'client'])->name('check.client');
    Route::post('/part', [App\Http\Controllers\Check\CheckController::class, 'part'])->name('check.part');
    Route::post('/provider', [App\Http\Controllers\Check\CheckController::class, 'provider'])->name('check.provider');
});
Route::group(['namespace' => 'Parts', 'prefix' => 'parts', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Parts\PartsController::class, 'index']);
    Route::get('/', [App\Http\Controllers\Parts\PartsController::class, 'get'])->name('parts.get');
    Route::post('/update', [App\Http\Controllers\Parts\PartsController::class, 'update'])->name('parts.update');
    Route::post('/delete', [App\Http\Controllers\Parts\PartsController::class, 'delete'])->name('parts.delete');
});
Route::group(['namespace' => 'Provider', 'prefix' => 'provider', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Provider\ProviderController::class, 'index']);
    Route::get('/', [App\Http\Controllers\Provider\ProviderController::class, 'get'])->name('provider.get');
    Route::post('/update', [App\Http\Controllers\Provider\ProviderController::class, 'update'])->name('provider.update');
    Route::post('/delete', [App\Http\Controllers\Provider\ProviderController::class, 'delete'])->name('provider.delete');
});
Route::group(['namespace' => 'Clients', 'prefix' => 'clients', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Clients\ClientsController::class, 'index']);
    Route::get('/', [App\Http\Controllers\Clients\ClientsController::class, 'get'])->name('clients.get');
    Route::post('/update', [App\Http\Controllers\Clients\ClientsController::class, 'update'])->name('clients.update');
    Route::post('/delete', [App\Http\Controllers\Clients\ClientsController::class, 'delete'])->name('clients.delete');
    Route::post('/address', [App\Http\Controllers\Clients\ClientsController::class, 'address'])->name('clients.address');
});
Route::group(['namespace' => 'About', 'prefix' => 'about', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\About\AboutController::class, 'index']);
    Route::get('/', [App\Http\Controllers\About\AboutController::class, 'get']);
});
Route::group(['namespace' => 'FileUpload', 'prefix' => 'fileupload'], function (){
    Route::get('/{id}', [App\Http\Controllers\FileUpload::class, 'get'])->name('fileupload.get');;
    Route::post('/', [App\Http\Controllers\FileUpload::class, 'index']);
    Route::post('/other/{id}', [App\Http\Controllers\FileUpload::class, 'other'])->name('fileupload.other');
    Route::post('/delete', [App\Http\Controllers\FileUpload::class, 'delete'])->name('fileupload.delete');
    Route::get('/download/{filename}/{id}', [App\Http\Controllers\FileUpload::class, 'download'])->name('fileupload.download');
});
Route::group(['namespace' => 'Order', 'prefix' => 'order', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Order\OrderController::class, 'index']);
    Route::get('/{id}/{role}', [App\Http\Controllers\Order\OrderController::class, 'get'])->name('order.get');
    Route::get('/{id}', [App\Http\Controllers\Order\OrderController::class, 'change'])->name('order.change');
    Route::post('/update', [App\Http\Controllers\Order\OrderController::class, 'update'])->name('order.update');
    Route::post('/delete/{id}', [App\Http\Controllers\Order\OrderController::class, 'delete'])->name('order.delete');
});
Route::group(['namespace' => 'OrderList', 'prefix' => 'orderlist', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Order\OrderListController::class, 'index']);
});
Route::group(['namespace' => 'Documents', 'prefix' => 'documents', 'middleware' => 'auth:sanctum'], function (){
    Route::get('/ipo/{filename}', [App\Http\Controllers\Documents\DocumentsController::class, 'ipo'])->name('documents.ipo');
    Route::get('/opf/{id}/{idclient}', [App\Http\Controllers\Documents\DocumentsController::class, 'opf'])->name('documents.opf');
    Route::get('/opo/{id}/{idclient}', [App\Http\Controllers\Documents\DocumentsController::class, 'opo'])->name('documents.opo');
    Route::get('/opl/{id}/{idclient}', [App\Http\Controllers\Documents\DocumentsController::class, 'opl'])->name('documents.opl');
    Route::get('/osi/{id}/{idclient}', [App\Http\Controllers\Documents\DocumentsController::class, 'osi'])->name('documents.osi');

});
