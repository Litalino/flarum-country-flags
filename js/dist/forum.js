(()=>{var o={n:a=>{var n=a&&a.__esModule?()=>a.default:()=>a;return o.d(n,{a:n}),n},d:(a,n)=>{for(var e in n)o.o(n,e)&&!o.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:n[e]})},o:(o,a)=>Object.prototype.hasOwnProperty.call(o,a),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},a={};(()=>{"use strict";o.r(a);const n=flarum.core.compat["forum/app"];var e=o.n(n);const t=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/SettingsPage"];var u=o.n(i);const l=flarum.core.compat["common/models/User"];var p=o.n(l);const r=flarum.core.compat["common/Model"];var v=o.n(r);function s(o,a){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},s(o,a)}const c=flarum.core.compat.Component;var d=function(o){var a,n;function t(){return o.apply(this,arguments)||this}n=o,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,s(a,n);var i=t.prototype;return i.oninit=function(a){o.prototype.oninit.call(this,a),this.countryCode=e().session.user.countryCode()},i.view=function(o){return m("fieldset",{className:"Settings-theme"},m("legend",null,e().translator.trans("justoverclock-country-flags.forum.inputCountryCode")),m("select",{className:"FormControl countryCode",id:"country",name:"country",value:this.countryCode,onblur:this.saveValue.bind(this)},m("option",{value:"",disabled:!0,selected:!0},e().translator.trans("justoverclock-country-flags.forum.clickToSelectCountry")),m("option",{value:"AF"},"Afghanistan"),m("option",{value:"AX"},"Aland Islands"),m("option",{value:"AL"},"Albania"),m("option",{value:"DZ"},"Algeria"),m("option",{value:"AS"},"American Samoa"),m("option",{value:"AD"},"Andorra"),m("option",{value:"AO"},"Angola"),m("option",{value:"AI"},"Anguilla"),m("option",{value:"AQ"},"Antarctica"),m("option",{value:"AG"},"Antigua and Barbuda"),m("option",{value:"AR"},"Argentina"),m("option",{value:"AM"},"Armenia"),m("option",{value:"AW"},"Aruba"),m("option",{value:"AU"},"Australia"),m("option",{value:"AT"},"Austria"),m("option",{value:"AZ"},"Azerbaijan"),m("option",{value:"BS"},"Bahamas"),m("option",{value:"BH"},"Bahrain"),m("option",{value:"BD"},"Bangladesh"),m("option",{value:"BB"},"Barbados"),m("option",{value:"BY"},"Belarus"),m("option",{value:"BE"},"Belgium"),m("option",{value:"BZ"},"Belize"),m("option",{value:"BJ"},"Benin"),m("option",{value:"BM"},"Bermuda"),m("option",{value:"BT"},"Bhutan"),m("option",{value:"BO"},"Bolivia"),m("option",{value:"BQ"},"Bonaire, Sint Eustatius and Saba"),m("option",{value:"BA"},"Bosnia and Herzegovina"),m("option",{value:"BW"},"Botswana"),m("option",{value:"BV"},"Bouvet Island"),m("option",{value:"BR"},"Brazil"),m("option",{value:"IO"},"British Indian Ocean Territory"),m("option",{value:"BN"},"Brunei Darussalam"),m("option",{value:"BG"},"Bulgaria"),m("option",{value:"BF"},"Burkina Faso"),m("option",{value:"BI"},"Burundi"),m("option",{value:"KH"},"Cambodia"),m("option",{value:"CM"},"Cameroon"),m("option",{value:"CA"},"Canada"),m("option",{value:"CV"},"Cape Verde"),m("option",{value:"KY"},"Cayman Islands"),m("option",{value:"CF"},"Central African Republic"),m("option",{value:"TD"},"Chad"),m("option",{value:"CL"},"Chile"),m("option",{value:"CN"},"China"),m("option",{value:"CX"},"Christmas Island"),m("option",{value:"CC"},"Cocos (Keeling) Islands"),m("option",{value:"CO"},"Colombia"),m("option",{value:"KM"},"Comoros"),m("option",{value:"CG"},"Congo"),m("option",{value:"CD"},"Congo, Democratic Republic of the Congo"),m("option",{value:"CK"},"Cook Islands"),m("option",{value:"CR"},"Costa Rica"),m("option",{value:"CI"},"Cote D'Ivoire"),m("option",{value:"HR"},"Croatia"),m("option",{value:"CU"},"Cuba"),m("option",{value:"CW"},"Curacao"),m("option",{value:"CY"},"Cyprus"),m("option",{value:"CZ"},"Czech Republic"),m("option",{value:"DK"},"Denmark"),m("option",{value:"DJ"},"Djibouti"),m("option",{value:"DM"},"Dominica"),m("option",{value:"DO"},"Dominican Republic"),m("option",{value:"EC"},"Ecuador"),m("option",{value:"EG"},"Egypt"),m("option",{value:"SV"},"El Salvador"),m("option",{value:"GQ"},"Equatorial Guinea"),m("option",{value:"ER"},"Eritrea"),m("option",{value:"EE"},"Estonia"),m("option",{value:"ET"},"Ethiopia"),m("option",{value:"FK"},"Falkland Islands (Malvinas)"),m("option",{value:"FO"},"Faroe Islands"),m("option",{value:"FJ"},"Fiji"),m("option",{value:"FI"},"Finland"),m("option",{value:"FR"},"France"),m("option",{value:"GF"},"French Guiana"),m("option",{value:"PF"},"French Polynesia"),m("option",{value:"TF"},"French Southern Territories"),m("option",{value:"GA"},"Gabon"),m("option",{value:"GM"},"Gambia"),m("option",{value:"GE"},"Georgia"),m("option",{value:"DE"},"Germany"),m("option",{value:"GH"},"Ghana"),m("option",{value:"GI"},"Gibraltar"),m("option",{value:"GR"},"Greece"),m("option",{value:"GL"},"Greenland"),m("option",{value:"GD"},"Grenada"),m("option",{value:"GP"},"Guadeloupe"),m("option",{value:"GU"},"Guam"),m("option",{value:"GT"},"Guatemala"),m("option",{value:"GG"},"Guernsey"),m("option",{value:"GN"},"Guinea"),m("option",{value:"GW"},"Guinea-Bissau"),m("option",{value:"GY"},"Guyana"),m("option",{value:"HT"},"Haiti"),m("option",{value:"HM"},"Heard Island and Mcdonald Islands"),m("option",{value:"VA"},"Holy See (Vatican City State)"),m("option",{value:"HN"},"Honduras"),m("option",{value:"HK"},"Hong Kong"),m("option",{value:"HU"},"Hungary"),m("option",{value:"IS"},"Iceland"),m("option",{value:"IN"},"India"),m("option",{value:"ID"},"Indonesia"),m("option",{value:"IR"},"Iran, Islamic Republic of"),m("option",{value:"IQ"},"Iraq"),m("option",{value:"IE"},"Ireland"),m("option",{value:"IM"},"Isle of Man"),m("option",{value:"IL"},"Israel"),m("option",{value:"IT"},"Italy"),m("option",{value:"JM"},"Jamaica"),m("option",{value:"JP"},"Japan"),m("option",{value:"JE"},"Jersey"),m("option",{value:"JO"},"Jordan"),m("option",{value:"KZ"},"Kazakhstan"),m("option",{value:"KE"},"Kenya"),m("option",{value:"KI"},"Kiribati"),m("option",{value:"KP"},"Korea, Democratic People's Republic of"),m("option",{value:"KR"},"Korea, Republic of"),m("option",{value:"XK"},"Kosovo"),m("option",{value:"KW"},"Kuwait"),m("option",{value:"KG"},"Kyrgyzstan"),m("option",{value:"LA"},"Lao People's Democratic Republic"),m("option",{value:"LV"},"Latvia"),m("option",{value:"LB"},"Lebanon"),m("option",{value:"LS"},"Lesotho"),m("option",{value:"LR"},"Liberia"),m("option",{value:"LY"},"Libyan Arab Jamahiriya"),m("option",{value:"LI"},"Liechtenstein"),m("option",{value:"LT"},"Lithuania"),m("option",{value:"LU"},"Luxembourg"),m("option",{value:"MO"},"Macao"),m("option",{value:"MK"},"Macedonia, the Former Yugoslav Republic of"),m("option",{value:"MG"},"Madagascar"),m("option",{value:"MW"},"Malawi"),m("option",{value:"MY"},"Malaysia"),m("option",{value:"MV"},"Maldives"),m("option",{value:"ML"},"Mali"),m("option",{value:"MT"},"Malta"),m("option",{value:"MH"},"Marshall Islands"),m("option",{value:"MQ"},"Martinique"),m("option",{value:"MR"},"Mauritania"),m("option",{value:"MU"},"Mauritius"),m("option",{value:"YT"},"Mayotte"),m("option",{value:"MX"},"Mexico"),m("option",{value:"FM"},"Micronesia, Federated States of"),m("option",{value:"MD"},"Moldova, Republic of"),m("option",{value:"MC"},"Monaco"),m("option",{value:"MN"},"Mongolia"),m("option",{value:"ME"},"Montenegro"),m("option",{value:"MS"},"Montserrat"),m("option",{value:"MA"},"Morocco"),m("option",{value:"MZ"},"Mozambique"),m("option",{value:"MM"},"Myanmar"),m("option",{value:"NA"},"Namibia"),m("option",{value:"NR"},"Nauru"),m("option",{value:"NP"},"Nepal"),m("option",{value:"NL"},"Netherlands"),m("option",{value:"AN"},"Netherlands Antilles"),m("option",{value:"NC"},"New Caledonia"),m("option",{value:"NZ"},"New Zealand"),m("option",{value:"NI"},"Nicaragua"),m("option",{value:"NE"},"Niger"),m("option",{value:"NG"},"Nigeria"),m("option",{value:"NU"},"Niue"),m("option",{value:"NF"},"Norfolk Island"),m("option",{value:"MP"},"Northern Mariana Islands"),m("option",{value:"NO"},"Norway"),m("option",{value:"OM"},"Oman"),m("option",{value:"PK"},"Pakistan"),m("option",{value:"PW"},"Palau"),m("option",{value:"PS"},"Palestinian Territory, Occupied"),m("option",{value:"PA"},"Panama"),m("option",{value:"PG"},"Papua New Guinea"),m("option",{value:"PY"},"Paraguay"),m("option",{value:"PE"},"Peru"),m("option",{value:"PH"},"Philippines"),m("option",{value:"PN"},"Pitcairn"),m("option",{value:"PL"},"Poland"),m("option",{value:"PT"},"Portugal"),m("option",{value:"PR"},"Puerto Rico"),m("option",{value:"QA"},"Qatar"),m("option",{value:"RE"},"Reunion"),m("option",{value:"RO"},"Romania"),m("option",{value:"RU"},"Russian Federation"),m("option",{value:"RW"},"Rwanda"),m("option",{value:"BL"},"Saint Barthelemy"),m("option",{value:"SH"},"Saint Helena"),m("option",{value:"KN"},"Saint Kitts and Nevis"),m("option",{value:"LC"},"Saint Lucia"),m("option",{value:"MF"},"Saint Martin"),m("option",{value:"PM"},"Saint Pierre and Miquelon"),m("option",{value:"VC"},"Saint Vincent and the Grenadines"),m("option",{value:"WS"},"Samoa"),m("option",{value:"SM"},"San Marino"),m("option",{value:"ST"},"Sao Tome and Principe"),m("option",{value:"SA"},"Saudi Arabia"),m("option",{value:"SN"},"Senegal"),m("option",{value:"RS"},"Serbia"),m("option",{value:"CS"},"Serbia and Montenegro"),m("option",{value:"SC"},"Seychelles"),m("option",{value:"SL"},"Sierra Leone"),m("option",{value:"SG"},"Singapore"),m("option",{value:"SX"},"Sint Maarten"),m("option",{value:"SK"},"Slovakia"),m("option",{value:"SI"},"Slovenia"),m("option",{value:"SB"},"Solomon Islands"),m("option",{value:"SO"},"Somalia"),m("option",{value:"ZA"},"South Africa"),m("option",{value:"GS"},"South Georgia and the South Sandwich Islands"),m("option",{value:"SS"},"South Sudan"),m("option",{value:"ES"},"Spain"),m("option",{value:"LK"},"Sri Lanka"),m("option",{value:"SD"},"Sudan"),m("option",{value:"SR"},"Suriname"),m("option",{value:"SJ"},"Svalbard and Jan Mayen"),m("option",{value:"SZ"},"Swaziland"),m("option",{value:"SE"},"Sweden"),m("option",{value:"CH"},"Switzerland"),m("option",{value:"SY"},"Syrian Arab Republic"),m("option",{value:"TW"},"Taiwan, Province of China"),m("option",{value:"TJ"},"Tajikistan"),m("option",{value:"TZ"},"Tanzania, United Republic of"),m("option",{value:"TH"},"Thailand"),m("option",{value:"TL"},"Timor-Leste"),m("option",{value:"TG"},"Togo"),m("option",{value:"TK"},"Tokelau"),m("option",{value:"TO"},"Tonga"),m("option",{value:"TT"},"Trinidad and Tobago"),m("option",{value:"TN"},"Tunisia"),m("option",{value:"TR"},"Turkey"),m("option",{value:"TM"},"Turkmenistan"),m("option",{value:"TC"},"Turks and Caicos Islands"),m("option",{value:"TV"},"Tuvalu"),m("option",{value:"UG"},"Uganda"),m("option",{value:"UA"},"Ukraine"),m("option",{value:"AE"},"United Arab Emirates"),m("option",{value:"GB"},"United Kingdom"),m("option",{value:"US"},"United States"),m("option",{value:"UM"},"United States Minor Outlying Islands"),m("option",{value:"UY"},"Uruguay"),m("option",{value:"UZ"},"Uzbekistan"),m("option",{value:"VU"},"Vanuatu"),m("option",{value:"VE"},"Venezuela"),m("option",{value:"VN"},"Viet Nam"),m("option",{value:"VG"},"Virgin Islands, British"),m("option",{value:"VI"},"Virgin Islands, U.s."),m("option",{value:"WF"},"Wallis and Futuna"),m("option",{value:"EH"},"Western Sahara"),m("option",{value:"YE"},"Yemen"),m("option",{value:"ZM"},"Zambia"),m("option",{value:"ZW"},"Zimbabwe")))},i.saveValue=function(o){e().session.user.save({countryCode:o.target.value}).then(e().alerts.show({type:"success"},e().translator.trans("justoverclock-country-flags.forum.countrySaved")))},t}(o.n(c)());const S=flarum.core.compat["forum/components/UserCard"];var y=o.n(S);const C=flarum.core.compat["forum/components/EditUserModal"];var M=o.n(C);const g=flarum.core.compat["forum/components/CommentPost"];var f=o.n(g);const h=flarum.core.compat["common/utils/Stream"];var b=o.n(h);const I=flarum.core.compat["forum/components/SignUpModal"];var G=o.n(I);const A=flarum.core.compat["forum/components/WelcomeHero"];var B=o.n(A);e().initializers.add("litalino/user-country-info",(function(){p().prototype.countryCode=v().attribute("countryCode"),(0,t.override)(B().prototype,"view",(function(o){if(e().session.user&&e().session.user.isEmailConfirmed()){if(null!=e().session.user.data.attributes.countryCode&&""!=e().session.user.data.attributes.countryCode)return o();if(!0===e().forum.attribute("justoverclock-country-flags.setCountryBindLogin"))return m("div.Alert",[m("div.container",[m("span.alert-danger",e().translator.trans("justoverclock-country-flags.forum.binding_country")),m("a.bind.Button--primary[href='/settings']",e().translator.trans("justoverclock-country-flags.forum.binding_country_click"))])])}return o()})),(0,t.extend)(u().prototype,"settingsItems",(function(o){o.add("countryFlag",m(d,null))})),(0,t.extend)(y().prototype,"infoItems",(function(o){var a=this.attrs.user.countryCode();if(""!==a&&null!=a){var n="https://purecatamphetamine.github.io/country-flag-icons/3x2/"+a+".svg";o.add("ipinfo",m("div",{className:"ipinfo",id:"countryCode"},m("img",{className:"countryFlag",loading:"lazy",src:n,width:"25",height:"25"})))}})),(0,t.extend)(M().prototype,"oninit",(function(){this.countryCode=b()(this.attrs.user.countryCode())})),(0,t.extend)(M().prototype,"fields",(function(o){o.add("countryCode",m("div",{className:"Form-group"},m("label",null,e().translator.trans("justoverclock-country-flags.forum.inputCountryCode")),m("input",{className:"FormControl",bidi:this.countryCode})),1)})),(0,t.extend)(M().prototype,"data",(function(o){var a=this.attrs.user;this.countryCode()!==a.countryCode()&&(o.countryCode=this.countryCode())})),(0,t.extend)(f().prototype,"headerItems",(function(o){if(!0===e().forum.attribute("justoverclock-country-flags.showFlagsOnPosts"))if(!0===e().forum.attribute("justoverclock-country-flags.showFlagsOnPosts_text")){var a=this.attrs.post.user();if(!a)return;var n=a.countryCode();if(""===n)return;if(void 0===n)return;if(null===n)return;if(!a)return;o.add("country-flag",m("div",{className:"ipinfo",id:"countryCode"},m("strong",null,n)))}else{var t=this.attrs.post.user();if(!t)return;var i=t.countryCode(),u="https://purecatamphetamine.github.io/country-flag-icons/3x2/"+i+".svg";if(""===i)return;if(void 0===i)return;if(null===i)return;if(!t)return;o.add("country-flag",m("div",{className:"ipinfo",id:"countryCode"},m("img",{className:"countryFlag post",loading:"lazy",src:u,alt:i,width:"25",height:"25"})))}})),(0,t.extend)(G().prototype,"oninit",(function(){e().forum.attribute("justoverclock-country-flags.setCountryFlagsOnRegistration")&&(this.countryCode=b()(""))})),(0,t.extend)(G().prototype,"fields",(function(o){e().forum.attribute("justoverclock-country-flags.setCountryFlagsOnRegistration")&&o.add("countryCode",m("div",{className:"Form-group"},m("select",{style:"width: 100%; margin: 0 auto; text-align: center; height: 50px;",className:"FormControl countryCode",id:"countryCode",name:"countryCode",placeholder:"Country Code","aria-invalid":"false"},m("option",{value:"",disabled:!0,selected:!0},e().translator.trans("justoverclock-country-flags.forum.clickToSelectCountry")),m("option",{value:"AF"},"Afghanistan"),m("option",{value:"AX"},"Aland Islands"),m("option",{value:"AL"},"Albania"),m("option",{value:"DZ"},"Algeria"),m("option",{value:"AS"},"American Samoa"),m("option",{value:"AD"},"Andorra"),m("option",{value:"AO"},"Angola"),m("option",{value:"AI"},"Anguilla"),m("option",{value:"AQ"},"Antarctica"),m("option",{value:"AG"},"Antigua and Barbuda"),m("option",{value:"AR"},"Argentina"),m("option",{value:"AM"},"Armenia"),m("option",{value:"AW"},"Aruba"),m("option",{value:"AU"},"Australia"),m("option",{value:"AT"},"Austria"),m("option",{value:"AZ"},"Azerbaijan"),m("option",{value:"BS"},"Bahamas"),m("option",{value:"BH"},"Bahrain"),m("option",{value:"BD"},"Bangladesh"),m("option",{value:"BB"},"Barbados"),m("option",{value:"BY"},"Belarus"),m("option",{value:"BE"},"Belgium"),m("option",{value:"BZ"},"Belize"),m("option",{value:"BJ"},"Benin"),m("option",{value:"BM"},"Bermuda"),m("option",{value:"BT"},"Bhutan"),m("option",{value:"BO"},"Bolivia"),m("option",{value:"BQ"},"Bonaire, Sint Eustatius and Saba"),m("option",{value:"BA"},"Bosnia and Herzegovina"),m("option",{value:"BW"},"Botswana"),m("option",{value:"BV"},"Bouvet Island"),m("option",{value:"BR"},"Brazil"),m("option",{value:"IO"},"British Indian Ocean Territory"),m("option",{value:"BN"},"Brunei Darussalam"),m("option",{value:"BG"},"Bulgaria"),m("option",{value:"BF"},"Burkina Faso"),m("option",{value:"BI"},"Burundi"),m("option",{value:"KH"},"Cambodia"),m("option",{value:"CM"},"Cameroon"),m("option",{value:"CA"},"Canada"),m("option",{value:"CV"},"Cape Verde"),m("option",{value:"KY"},"Cayman Islands"),m("option",{value:"CF"},"Central African Republic"),m("option",{value:"TD"},"Chad"),m("option",{value:"CL"},"Chile"),m("option",{value:"CN"},"China"),m("option",{value:"CX"},"Christmas Island"),m("option",{value:"CC"},"Cocos (Keeling) Islands"),m("option",{value:"CO"},"Colombia"),m("option",{value:"KM"},"Comoros"),m("option",{value:"CG"},"Congo"),m("option",{value:"CD"},"Congo, Democratic Republic of the Congo"),m("option",{value:"CK"},"Cook Islands"),m("option",{value:"CR"},"Costa Rica"),m("option",{value:"CI"},"Cote D'Ivoire"),m("option",{value:"HR"},"Croatia"),m("option",{value:"CU"},"Cuba"),m("option",{value:"CW"},"Curacao"),m("option",{value:"CY"},"Cyprus"),m("option",{value:"CZ"},"Czech Republic"),m("option",{value:"DK"},"Denmark"),m("option",{value:"DJ"},"Djibouti"),m("option",{value:"DM"},"Dominica"),m("option",{value:"DO"},"Dominican Republic"),m("option",{value:"EC"},"Ecuador"),m("option",{value:"EG"},"Egypt"),m("option",{value:"SV"},"El Salvador"),m("option",{value:"GQ"},"Equatorial Guinea"),m("option",{value:"ER"},"Eritrea"),m("option",{value:"EE"},"Estonia"),m("option",{value:"ET"},"Ethiopia"),m("option",{value:"FK"},"Falkland Islands (Malvinas)"),m("option",{value:"FO"},"Faroe Islands"),m("option",{value:"FJ"},"Fiji"),m("option",{value:"FI"},"Finland"),m("option",{value:"FR"},"France"),m("option",{value:"GF"},"French Guiana"),m("option",{value:"PF"},"French Polynesia"),m("option",{value:"TF"},"French Southern Territories"),m("option",{value:"GA"},"Gabon"),m("option",{value:"GM"},"Gambia"),m("option",{value:"GE"},"Georgia"),m("option",{value:"DE"},"Germany"),m("option",{value:"GH"},"Ghana"),m("option",{value:"GI"},"Gibraltar"),m("option",{value:"GR"},"Greece"),m("option",{value:"GL"},"Greenland"),m("option",{value:"GD"},"Grenada"),m("option",{value:"GP"},"Guadeloupe"),m("option",{value:"GU"},"Guam"),m("option",{value:"GT"},"Guatemala"),m("option",{value:"GG"},"Guernsey"),m("option",{value:"GN"},"Guinea"),m("option",{value:"GW"},"Guinea-Bissau"),m("option",{value:"GY"},"Guyana"),m("option",{value:"HT"},"Haiti"),m("option",{value:"HM"},"Heard Island and Mcdonald Islands"),m("option",{value:"VA"},"Holy See (Vatican City State)"),m("option",{value:"HN"},"Honduras"),m("option",{value:"HK"},"Hong Kong"),m("option",{value:"HU"},"Hungary"),m("option",{value:"IS"},"Iceland"),m("option",{value:"IN"},"India"),m("option",{value:"ID"},"Indonesia"),m("option",{value:"IR"},"Iran, Islamic Republic of"),m("option",{value:"IQ"},"Iraq"),m("option",{value:"IE"},"Ireland"),m("option",{value:"IM"},"Isle of Man"),m("option",{value:"IL"},"Israel"),m("option",{value:"IT"},"Italy"),m("option",{value:"JM"},"Jamaica"),m("option",{value:"JP"},"Japan"),m("option",{value:"JE"},"Jersey"),m("option",{value:"JO"},"Jordan"),m("option",{value:"KZ"},"Kazakhstan"),m("option",{value:"KE"},"Kenya"),m("option",{value:"KI"},"Kiribati"),m("option",{value:"KP"},"Korea, Democratic People's Republic of"),m("option",{value:"KR"},"Korea, Republic of"),m("option",{value:"XK"},"Kosovo"),m("option",{value:"KW"},"Kuwait"),m("option",{value:"KG"},"Kyrgyzstan"),m("option",{value:"LA"},"Lao People's Democratic Republic"),m("option",{value:"LV"},"Latvia"),m("option",{value:"LB"},"Lebanon"),m("option",{value:"LS"},"Lesotho"),m("option",{value:"LR"},"Liberia"),m("option",{value:"LY"},"Libyan Arab Jamahiriya"),m("option",{value:"LI"},"Liechtenstein"),m("option",{value:"LT"},"Lithuania"),m("option",{value:"LU"},"Luxembourg"),m("option",{value:"MO"},"Macao"),m("option",{value:"MK"},"Macedonia, the Former Yugoslav Republic of"),m("option",{value:"MG"},"Madagascar"),m("option",{value:"MW"},"Malawi"),m("option",{value:"MY"},"Malaysia"),m("option",{value:"MV"},"Maldives"),m("option",{value:"ML"},"Mali"),m("option",{value:"MT"},"Malta"),m("option",{value:"MH"},"Marshall Islands"),m("option",{value:"MQ"},"Martinique"),m("option",{value:"MR"},"Mauritania"),m("option",{value:"MU"},"Mauritius"),m("option",{value:"YT"},"Mayotte"),m("option",{value:"MX"},"Mexico"),m("option",{value:"FM"},"Micronesia, Federated States of"),m("option",{value:"MD"},"Moldova, Republic of"),m("option",{value:"MC"},"Monaco"),m("option",{value:"MN"},"Mongolia"),m("option",{value:"ME"},"Montenegro"),m("option",{value:"MS"},"Montserrat"),m("option",{value:"MA"},"Morocco"),m("option",{value:"MZ"},"Mozambique"),m("option",{value:"MM"},"Myanmar"),m("option",{value:"NA"},"Namibia"),m("option",{value:"NR"},"Nauru"),m("option",{value:"NP"},"Nepal"),m("option",{value:"NL"},"Netherlands"),m("option",{value:"AN"},"Netherlands Antilles"),m("option",{value:"NC"},"New Caledonia"),m("option",{value:"NZ"},"New Zealand"),m("option",{value:"NI"},"Nicaragua"),m("option",{value:"NE"},"Niger"),m("option",{value:"NG"},"Nigeria"),m("option",{value:"NU"},"Niue"),m("option",{value:"NF"},"Norfolk Island"),m("option",{value:"MP"},"Northern Mariana Islands"),m("option",{value:"NO"},"Norway"),m("option",{value:"OM"},"Oman"),m("option",{value:"PK"},"Pakistan"),m("option",{value:"PW"},"Palau"),m("option",{value:"PS"},"Palestinian Territory, Occupied"),m("option",{value:"PA"},"Panama"),m("option",{value:"PG"},"Papua New Guinea"),m("option",{value:"PY"},"Paraguay"),m("option",{value:"PE"},"Peru"),m("option",{value:"PH"},"Philippines"),m("option",{value:"PN"},"Pitcairn"),m("option",{value:"PL"},"Poland"),m("option",{value:"PT"},"Portugal"),m("option",{value:"PR"},"Puerto Rico"),m("option",{value:"QA"},"Qatar"),m("option",{value:"RE"},"Reunion"),m("option",{value:"RO"},"Romania"),m("option",{value:"RU"},"Russian Federation"),m("option",{value:"RW"},"Rwanda"),m("option",{value:"BL"},"Saint Barthelemy"),m("option",{value:"SH"},"Saint Helena"),m("option",{value:"KN"},"Saint Kitts and Nevis"),m("option",{value:"LC"},"Saint Lucia"),m("option",{value:"MF"},"Saint Martin"),m("option",{value:"PM"},"Saint Pierre and Miquelon"),m("option",{value:"VC"},"Saint Vincent and the Grenadines"),m("option",{value:"WS"},"Samoa"),m("option",{value:"SM"},"San Marino"),m("option",{value:"ST"},"Sao Tome and Principe"),m("option",{value:"SA"},"Saudi Arabia"),m("option",{value:"SN"},"Senegal"),m("option",{value:"RS"},"Serbia"),m("option",{value:"CS"},"Serbia and Montenegro"),m("option",{value:"SC"},"Seychelles"),m("option",{value:"SL"},"Sierra Leone"),m("option",{value:"SG"},"Singapore"),m("option",{value:"SX"},"Sint Maarten"),m("option",{value:"SK"},"Slovakia"),m("option",{value:"SI"},"Slovenia"),m("option",{value:"SB"},"Solomon Islands"),m("option",{value:"SO"},"Somalia"),m("option",{value:"ZA"},"South Africa"),m("option",{value:"GS"},"South Georgia and the South Sandwich Islands"),m("option",{value:"SS"},"South Sudan"),m("option",{value:"ES"},"Spain"),m("option",{value:"LK"},"Sri Lanka"),m("option",{value:"SD"},"Sudan"),m("option",{value:"SR"},"Suriname"),m("option",{value:"SJ"},"Svalbard and Jan Mayen"),m("option",{value:"SZ"},"Swaziland"),m("option",{value:"SE"},"Sweden"),m("option",{value:"CH"},"Switzerland"),m("option",{value:"SY"},"Syrian Arab Republic"),m("option",{value:"TW"},"Taiwan, Province of China"),m("option",{value:"TJ"},"Tajikistan"),m("option",{value:"TZ"},"Tanzania, United Republic of"),m("option",{value:"TH"},"Thailand"),m("option",{value:"TL"},"Timor-Leste"),m("option",{value:"TG"},"Togo"),m("option",{value:"TK"},"Tokelau"),m("option",{value:"TO"},"Tonga"),m("option",{value:"TT"},"Trinidad and Tobago"),m("option",{value:"TN"},"Tunisia"),m("option",{value:"TR"},"Turkey"),m("option",{value:"TM"},"Turkmenistan"),m("option",{value:"TC"},"Turks and Caicos Islands"),m("option",{value:"TV"},"Tuvalu"),m("option",{value:"UG"},"Uganda"),m("option",{value:"UA"},"Ukraine"),m("option",{value:"AE"},"United Arab Emirates"),m("option",{value:"GB"},"United Kingdom"),m("option",{value:"US"},"United States"),m("option",{value:"UM"},"United States Minor Outlying Islands"),m("option",{value:"UY"},"Uruguay"),m("option",{value:"UZ"},"Uzbekistan"),m("option",{value:"VU"},"Vanuatu"),m("option",{value:"VE"},"Venezuela"),m("option",{value:"VN"},"Viet Nam"),m("option",{value:"VG"},"Virgin Islands, British"),m("option",{value:"VI"},"Virgin Islands, U.s."),m("option",{value:"WF"},"Wallis and Futuna"),m("option",{value:"EH"},"Western Sahara"),m("option",{value:"YE"},"Yemen"),m("option",{value:"ZM"},"Zambia"),m("option",{value:"ZW"},"Zimbabwe"))),20)})),(0,t.extend)(G().prototype,"submitData",(function(o){if(e().forum.attribute("justoverclock-country-flags.setCountryFlagsOnRegistration")){var a=document.getElementById("countryCode"),n=a.options[a.selectedIndex].value;o.countryCode=n}}))}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map