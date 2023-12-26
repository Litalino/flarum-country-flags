<?php

namespace Litalino\CountryFlags\Listeners;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SaveCountryCodeToDatabase
{
    public function handle(Saving $event): void
    {
        //Allow admins to create users from the admin panel
        if ($event->actor->isAdmin()) {
            //return;
        }

        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $data = $event->data;

        /**
         * User is registering from Auth Provider
         */
        //if (isset($data['attributes']['token'])) {
        //    return;
        //}

        $isSelf = $actor->id === $user->id;
        $canEdit = $actor->can('edit', $user);
        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['countryCode'])) {
            if (!$isSelf) {
                //$actor->assertPermission($canEdit);
            }
            //$user->countryCode = $attributes['countryCode'];
            //$user->countryCode = $attributes['countryCode'] === '' ? 'null' : $attributes['countryCode'];
            $user->countryCode = $attributes['countryCode'] === '' ? '' : $attributes['countryCode'];
            //$user->save();
        }
    }
}
