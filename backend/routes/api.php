<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GameController;


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

Route::post('register', [UserController::class,'register']);
Route::get('list', [UserController::class,'list']);
Route::post('login', [UserController::class,'login']);
Route::post('addGame', [GameController::class,'addGame']);
Route::post('get', [GameController::class,'get']);
Route::post('delete', [GameController::class,'delete']);
Route::post('completed', [GameController::class,'completed']);
Route::post('uncompleted', [GameController::class,'uncompleted']);





