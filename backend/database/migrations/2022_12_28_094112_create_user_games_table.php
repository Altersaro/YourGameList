<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_games', function (Blueprint $table) {
            $table->id('game_id');
            $table->integer('id')->unique();
            $table->string('background_image');
            $table->string('slug')->unique();
            $table->string('name')->unique();
            $table->string('user_id');
            $table->tinyInteger('completed');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_games');
    }
};
