<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProviderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('licence')->nullable();
            $table->string('inn')->nullable();
            $table->string('code')->nullable();
            $table->string('bank')->nullable();
            $table->string('baddress')->nullable();
            $table->string('iban')->nullable();
            $table->string('swift')->nullable();
            $table->string('branch')->nullable();
            $table->string('accountNumber')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('providers');
    }
}
