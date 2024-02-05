<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Facades\Schema;
use Flarum\Database\Migration;


return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('users')) {
            if ($schema->hasColumn('users', 'countryCode')) {
                return;
            } 
               
            /*return Migration::addColumns('users', [
                'countryCode' => ['type' => 'text']
            ]);*/
            $schema->table('users', function (Blueprint $table) {
                $table->addColumn('text', 'countryCode');
            });

        }
    },
    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            return;
            //$table->dropColumn('countryCode');
            //$table->removeColumn('countryCode');
        });
    }

];


