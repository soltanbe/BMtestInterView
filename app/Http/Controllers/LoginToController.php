<?php
/**
 * Created by PhpStorm.
 * User: soltan
 * Date: 11/22/2018
 * Time: 1:53 AM
 */
namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginToController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function authenticate(Request $request)
    {
        return response()->json([
            'yesy'=>'yesy'
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return response()->json([
                'yesy'=>'yesy'
            ]);
        }else{
            return response()->json([
                'no'=> $request->all()
            ]);
        }
    }
}