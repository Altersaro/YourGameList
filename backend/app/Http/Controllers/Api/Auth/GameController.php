<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Models\UserGames;


class GameController extends Controller
{
    //
    function addGame(Request $request){
        $user = new UserGames;
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
        $userGames = DB::table('user_games')
        ->select('user_games.*')
            ->join('sign_in', function ($join) use ($id) {
                $join->on('user_games.user_id', '=', 'sign_in.id')
                    ->where('user_games.user_id', '=', $id);
        })
        ->get();
        return $userGames;
    }

    function delete(Request $request){
        $id = $request['id'];
        $user_id =$request['user_id'];
        $game = UserGames::where('id',$id)
                ->where('user_id',$user_id)
                ->delete();
        return $game;
    }

    function completed(Request $request){
        $id = $request['id'];
        $user_id =$request['user_id'];
        $game = UserGames::where('id',$id)
                ->where('user_id',$user_id)
                ->update(['completed'=> true]);
        return $game;
    }

    function uncompleted(Request $request){
        $id = $request['id'];
        $user_id =$request['user_id'];
        $game = UserGames::where('id',$id)
                ->where('user_id',$user_id)
                ->update(['completed'=> false]);
        return $game;
    }
    }
