<?php

/*
 * This file is part of datlechin/flarum-birthdays.
 *
 * Copyright (c) 2022 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Litalino\CountryFlags;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\UserValidator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;
use Symfony\Contracts\Translation\TranslatorInterface;

class CountryFlagValidation
{
    public function __construct(
        protected TranslatorInterface $translator,
        protected SettingsRepositoryInterface $settings
    ) {
    }

    public function __invoke(UserValidator $flarumValidator, Validator $validator): void
    {
        $rules = $validator->getRules();

        $isRequired = $this->settings->get('justoverclock-country-flags.required')
            && $this->settings->get('justoverclock-country-flags.set_on_registration');

        if ($isRequired  && ! $flarumValidator->getUser()) {
            $set_isRequired = 'required'; //|not_in:0
        } else {
            $set_isRequired = 'nullable';
        }

        //$rules['countryCode'] = [
            //'nullable',
            //Rule::requiredIf($isRequired && ! $flarumValidator->getUser()),
            //$set_isRequired
        //];
        //$rules = [
        //    'countryCode' => 'required', //, 'integer'
        //];
        $rules['countryCode'] = [
            //'countryCode' => ['required']
            'countryCode' => [$set_isRequired]
            //$set_isRequired
        ];

        $validator->setRules($rules);
    }
}
