<?php

namespace App\Http\Middleware;

use App\Utilities\CustomResponse;
use Closure;
use Exception;
use Illuminate\Http\Request;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Lang;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;


class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {   
        try{
        $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e){
            if($e instanceof TokenInvalidException){
                return CustomResponse::setFailResponse(Lang::get('errors.token.invalid'), Response::HTTP_NOT_ACCEPTABLE,'');
            }else if($e instanceof TokenExpiredException){
                return CustomResponse::setFailResponse(Lang::get('errors.token.expired'), Response::HTTP_NOT_ACCEPTABLE,'');
            }else {
                return CustomResponse::setFailResponse(Lang::get('errors.token.not_found'), Response::HTTP_NOT_ACCEPTABLE,'');
            }
        }

        return $next($request);
    }
}
