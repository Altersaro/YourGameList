<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\PrivateUserResource;
use App\Utilities\CustomResponse;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    //
    function register(RegisterRequest $request){

        $user = new User;
        $user->username = $request->input('username');
        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return $user;
    }

    function login(LoginRequest $request){

        if(!$token = auth()->attempt($request->only('email', 'password'))){
            $errorMsg = Lang::get('auth.failed');
            return CustomResponse::setFailResponse($errorMsg, Response::HTTP_NOT_ACCEPTABLE,'');
        };
        
        return response()->json(['token'=> $token]);
    }

    function list(Request $request){
        return new PrivateUserResource($request->user());
    }

    function logOut(Request $request){
        auth()->logout();
        return CustomResponse::setSuccessResponse(Response::HTTP_OK, Lang::get('auth.logout'));
    }
}
