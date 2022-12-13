<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    public $timestamps=false;
    protected $table = 'usergame';


    use HasFactory;
}
