(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["admin/app"];var r=t.n(o);const a=flarum.core.compat["common/extend"],n=flarum.core.compat["admin/components/UserListPage"];var s=t.n(n);r().initializers.add("litalino/flarum-country-flags",(function(){r().extensionData.for("justoverclock-country-flags").registerSetting({setting:"justoverclock-country-flags.showFlagsOnPosts",label:r().translator.trans("justoverclock-country-flags.admin.showFlagsOnPosts"),type:"boolean"}).registerSetting({setting:"justoverclock-country-flags.showFlagsOnPosts_text",label:r().translator.trans("justoverclock-country-flags.admin.showFlagsOnPosts_text"),type:"boolean"}).registerSetting({setting:"justoverclock-country-flags.set_on_registration",type:"boolean",label:r().translator.trans("justoverclock-country-flags.admin.set_on_registration_label")}).registerSetting({setting:"justoverclock-country-flags.required",type:"boolean",label:r().translator.trans("justoverclock-country-flags.admin.required_label"),help:r().translator.trans("justoverclock-country-flags.admin.required_help")}),(0,a.extend)(s().prototype,"columns",(function(t){t.add("country",{name:r().translator.trans("justoverclock-country-flags.admin.countryColumn"),content:function(t){var e=t.data.attributes.countryCode;return""===e?" ":m("div",null,m("img",{className:"adminFlag",loading:"lazy",src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/"+e+".svg",alt:e}))}},-50)}))}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map