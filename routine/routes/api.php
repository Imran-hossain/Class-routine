<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get( '/{any}', function () {
    return view('index');
})->where('any', '.*');



//User Login and Registrations

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');

//Route::get('profile', 'UserController@getAuthenticatedUser');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//user
Route::post('user_show', 'UserController@user_show');
Route::post('user_delete', 'UserController@user_delete');
Route::post('user_update', 'UserController@user_update');

//Groups ADD,Delete,Update and show

Route::post('groups_show', 'GroupController@groups_show');
Route::post('groups_add', 'GroupController@groups_add');
Route::post('groups_delete', 'GroupController@groups_delete');
Route::post('groups_update', 'GroupController@groups_update');

//location

Route::post('location_show', 'LocationController@location_show');
Route::post('location_add', 'LocationController@location_add');
Route::post('location_delete', 'LocationController@location_delete');
Route::post('location_update', 'LocationController@location_update');


//Class ADD,Delete,Update and show

Route::post('classroutine_show', 'ClassController@classroutine_show');
Route::post('classroutine_add', 'ClassController@classroutine_add');
Route::post('classroutine_delete', 'ClassController@classroutine_delete');
Route::post('classroutine_update', 'ClassController@classroutine_update');

//Student Details

Route::post('classroutine', 'StudentController@classroutine');
