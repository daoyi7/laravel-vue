<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
    $api->get('blog', 'App\Api\Controllers\BlogController@index');
    $api->post('blog', 'App\Api\Controllers\BlogController@edit');
    $api->post('auth', 'App\Api\Controllers\BlogController@authenticate');
    $api->get('auth', 'App\Api\Controllers\BlogController@user');
});
