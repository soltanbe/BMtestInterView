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
    public function getSummay(Request $request){
        $requsetd=$request->all();
        $result=TasksModel::getSummary($requsetd);
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
                'summary'=>$result,
            )

        );
    }
    public function addNewTask(Request $request){
        $requsetd=$request->all();
        $result=TasksModel::addNewTask($requsetd);
        return response()->json(
            array(
                'status'=>$result,
            )

        );
    }
    public function deleteTask(Request $request){
        $requsetd=$request->all();
        $result=TasksModel::deleteTask($requsetd);
        if($result==1){
            return response()->json(
                array(
                    'status'=>'success',
                )

            );
        }else{
            return response()->json(
                array(
                    'error'=>$result,
                )

            );
        }

    }
    public function editTask(Request $request){
        $requsetd=$request->all();
        $result=TasksModel::editTask($requsetd);
        if($result==1){
            return response()->json(
                array(
                    'status'=>'success',
                )

            );
        }else{
            return response()->json(
                array(
                    'error'=>$result,
                )

            );
        }

    }

}