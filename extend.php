<?php

/*
 * This file is part of justoverclock/country-flags.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Litalino\CountryFlags;

use Flarum\Settings\Event\Serializing;
use Litalino\CountryFlags\Listeners\SaveCountryCodeToDatabase;
use Litalino\CountryFlags\Listeners\AddCountryFlagAttributes;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;
use Flarum\User\UserValidator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
         ->serializeToForum('justoverclock-country-flags.showFlagsOnPosts', 'justoverclock-country-flags.showFlagsOnPosts', 'boolval', false)
         ->serializeToForum('justoverclock-country-flags.showFlagsOnPosts_text', 'justoverclock-country-flags.showFlagsOnPosts_text', 'boolval', false)
         ->serializeToForum('justoverclock-country-flags.setCountryFlagsOnRegistration', 'justoverclock-country-flags.set_on_registration', 'boolval')
         ->serializeToForum('justoverclock-country-flags.setCountryBindLogin', 'justoverclock-country-flags.bind_login', 'boolval'),

    (new Extend\Event())
        ->listen(Saving::class, SaveCountryCodeToDatabase::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(AddCountryFlagAttributes::class),

    (new Extend\Validator(UserValidator::class))
        ->configure(CountryFlagValidation::class),

];
