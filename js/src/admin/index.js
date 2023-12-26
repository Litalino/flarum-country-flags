import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import UserListPage from 'flarum/admin/components/UserListPage';

app.initializers.add('litalino/flarum-country-flags', () => {
  app.extensionData
    .for('litalino-country-flags')
    .registerSetting({
      setting: 'justoverclock-country-flags.showFlagsOnPosts',
      label: app.translator.trans('justoverclock-country-flags.admin.showFlagsOnPosts'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'justoverclock-country-flags.showFlagsOnPosts_text',
      label: app.translator.trans('justoverclock-country-flags.admin.showFlagsOnPosts_text'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'justoverclock-country-flags.set_on_registration',
      type: 'boolean',
      label: app.translator.trans('justoverclock-country-flags.admin.set_on_registration_label'),
    })
    .registerSetting({
      setting: 'justoverclock-country-flags.required',
      type: 'boolean',
      label: app.translator.trans('justoverclock-country-flags.admin.required_label'),
      help: app.translator.trans('justoverclock-country-flags.admin.required_help'),
    })
  extend(UserListPage.prototype, 'columns', function (items) {
    items.add(
      'country',
      {
        name: app.translator.trans('justoverclock-country-flags.admin.countryColumn'),
        content: (user) => {
          const countryFlag = user.data.attributes.countryCode;
          const showFlag = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + countryFlag + '.svg';

          if (countryFlag === '') return ' ';

          return (
            <div>
              <img className="adminFlag" loading="lazy" src={showFlag} alt={countryFlag} />
            </div>
          );
        },
      },
      -50
    );
  });
});
