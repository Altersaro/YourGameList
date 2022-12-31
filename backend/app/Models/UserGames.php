<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGames extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    
    protected $fillable = [
        'background_image',
        'slug',
        'name',
        'user_id',
        'completed',
    ];

    public $timestamps=false;

    use HasFactory;
}
