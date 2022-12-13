<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Models\Games;


class GameController extends Controller
{
    //
    function addGame(Request $request){
        $user = new Games;
        $user->id = $request->input('id');
        $user->background_image = $request->input('background_image');
        $user->slug = $request->input('slug');
        $user->name = $request->input('name');
        $user->user_id = $request->input('user_id');
        $user->completed = $request->input('completed');
        $user->save();
        return $user;
    }
    
    function get(Request $request){
        $id = $request[0]['user_id'];
        $userGames = DB::table('usergame')
        ->select('usergame.*')
            ->join('sign_in', function ($join) use ($id) {
                $join->on('usergame.user_id', '=', 'sign_in.id')
                    ->where('usergame.user_id', '=', $id);
        })
        ->get();
        return $userGames;
    }

    function delete(Request $request){
        $id = $request['id'];
        $user_id =$request['user_id'];
        $game = Games::where('id',$id)
                ->where('user_id',$user_id)
                ->delete();
        return $game;
    }

    function completed(Request $request){
        $id = $request['id'];
        $user_id =$request['user_id'];
        $game = Games::where('id',$id)
                ->where('user_id',$user_id)
                ->update(['completed'=> true]);
        return $game;
    }

    function uncompleted(Request $request){
        $id = $request['id'];
        $user_id =$request['user_id'];
        $game = Games::where('id',$id)
                ->where('user_id',$user_id)
                ->update(['completed'=> false]);
        return $game;
    }
    }
