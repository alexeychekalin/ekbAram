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
Route::group(['namespace' => 'FileUpload', 'prefix' => 'fileupload', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\FileUpload::class, 'index']);
});
Route::group(['namespace' => 'Order', 'prefix' => 'order', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Order\OrderController::class, 'index']);
    Route::get('/{id}/{role}', [App\Http\Controllers\Order\OrderController::class, 'get'])->name('order.get');
});
Route::group(['namespace' => 'OrderList', 'prefix' => 'orderlist', 'middleware' => 'auth:sanctum'], function (){
    Route::post('/', [App\Http\Controllers\Order\OrderListController::class, 'index']);
});
Route::group(['namespace' => 'Documents', 'prefix' => 'documents', 'middleware' => 'auth:sanctum'], function (){
    Route::get('/opf', [App\Http\Controllers\Documents\DocumentsController::class, 'opf'])->name('documents.opf');
    Route::get('/opo', [App\Http\Controllers\Documents\DocumentsController::class, 'opo'])->name('documents.opo');
    Route::get('/opl', [App\Http\Controllers\Documents\DocumentsController::class, 'opl'])->name('documents.opl');
    Route::get('/osi', [App\Http\Controllers\Documents\DocumentsController::class, 'osi'])->name('documents.osi');

});
