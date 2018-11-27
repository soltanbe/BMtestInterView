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
    public static function deletePeopleFromList($data){

        return DB::table('people')->where('id', '=', $data['id'])->delete();

    }
}