<?php
namespace App\Http\Models;
/**
 * Created by PhpStorm.
 * User: soltan
 * Date: 11/27/2018
 * Time: 1:22 AM
 */
use Illuminate\Support\Facades\DB;
use App\Exceptions;
class TasksModel{
    public static function getTasksList($data){
        $params=array();
        $params[]=1000;
        $params[]=0;
        try {
            $res=DB::select('SELECT *  FROM tasks LIMIT ? OFFSET ?',$params);
        }
        catch (\Exception $e) {
            return $e->getMessage();
        }

        return $res;

    }
    public static function getSummary($data){
        $summary=DB::select('SELECT 
            SUM(IF(status=1,1,0)) as completed,
            SUM(IF(status=0,1,0)) as uncompleted,
            SUM(IF(isDeleted=1,1,0)) as deleted,
            SUM(status) as total
              FROM tasks where isDeleted=0');
        return $summary;

    }

    public static function addNewTask($data){
        try {
            $res=DB::table('tasks')->insert(array('task_name'=>$data['task_name']));
        }
        catch (\Exception $e) {
            return $e->getMessage();
        }

        return $res;

    }
   /* public static function deletePeopleFromList($data){

        return DB::table('people')->where('id', '=', $data['id'])->delete();

    }*/
}