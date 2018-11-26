<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

/*Route::get('/loginTo', 'LoginToController@authenticate');*/

Route::group(['prefix' => 'api'], function () {
    Route::get('tasks', function ()    {
        return response()->json([
            'task_name' => 'dsadasdasd',
            'status' => '1',
            'isDeleted' => '0',
            'update_date' => '',
            'added_date' => '',
        ]);
    });

});

Route::get('{ember?}', function() {
    return View::make('ember');
})->where('ember', '.*');

