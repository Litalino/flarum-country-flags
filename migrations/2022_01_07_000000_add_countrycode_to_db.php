<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
//use Illuminate\Support\Facades\Schema;
use Flarum\Database\Migration;


return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('user')) {
            if ($schema->hasColumn('user', 'countryCode')) {
                return;
            }

        }
       
        return Migration::addColumns('users', [
            'countryCode' => ['type' => 'text']
        ]);
    },
    'down' => function (Builder $schema) {
        $schema->table('user', function (Blueprint $table) {
            return;
            //$table->dropColumn('countryCode');
        });
    }

];


