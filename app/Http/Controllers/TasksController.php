<?php
/**
 * Created by PhpStorm.
 * User: soltan
 * Date: 11/22/2018
 * Time: 1:53 AM
 */
namespace App\Http\Controllers;
use App\Http\Models\TasksModel;

use App\Http\Requests;
use Illuminate\Http\Request;


class TasksController extends Controller
{

    public function getTasks(Request $request){
        $requsetd=$request->all();
        $result=TasksModel::getTasksList($requsetd);
     /*   $rows=array();
        if(!empty($result) && is_array($result)){
            foreach ($result as $k=>$v){
                $rows[]=array(
                    $k=>$v
                );
            }
        }*/


        return response()->json(
            array(
                'data'=>$result,
            )

        );
    }
}