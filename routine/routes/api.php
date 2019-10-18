<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get( '/{any}', function () {
    return view('index');
})->where('any', '.*');

//Route::get('user1', "Example@index");
Route::get('tasks', "TaskController@index");
Route::get('tasks/{id}', "TaskController@show");
Route::post('tasks', "TaskController@store");
Route::put('tasks/{id}', "TaskController@update");
Route::delete('tasks/{id}', "TaskController@delete");


//user login registrations

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Group registrations/get info