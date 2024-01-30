<?php

namespace Litalino\CountryFlags\Listeners;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddCountryFlagAttributes
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $actor = $serializer->getActor();

        //if ($actor->can('edit', $user)) {
            //$attributes['countryCode'] = $user->countryCode;
            //$attributes['canEditOwnBirthday'] = $actor->id === $user->id && $actor->can('editOwnBirthday', $user);
        //}

        $attributes['countryCode'] = $user->countryCode;

        return $attributes;
    }
}
