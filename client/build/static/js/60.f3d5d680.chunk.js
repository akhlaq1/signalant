(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1423:function(e,t,l){"undefined"!==typeof window?(window.React=l(0),window.ReactDOM=l(10),window.createReactClass=l(284),l(1425),e.exports=window.AmCharts):e.exports={}},1425:function(e,t){!function(){function e(e){return{}.toString.call(e)}function t(e,t){return{}.hasOwnProperty.call(e,t)}function l(a){switch(e(a)){case"[object Array]":return function(e){for(var t=e.length,a=new Array(t),i=0;i<t;++i)a[i]=l(e[i]);return a}(a);case"[object Object]":return function(e){var a={};for(var i in e)t(e,i)&&(a[i]=l(e[i]));return a}(a);case"[object Date]":return new Date(a.getTime());default:return a}}function a(e){return e!==e}function i(e,t,l){if(t!==l){null==t&&(t=[]),null==l&&(l=[]);for(var a=t.length,i=l.length,o=0;o<a;++o){for(var s=t[o],u=!1,d=0;d<i;++d){var n=l[d];if(s.event===n.event&&s.method===n.method){u=!0;break}}u||e.removeListener(e,s.event,s.method)}}}function o(i,u,d,n){var g=!1;if(d!==n&&t(i,u)){var v=e(d);if(v===e(n))switch(v){case"[object Array]":"groupToPeriods"===u?(i[u]=l(n),g=!0):function(e,t,a){var i=!1;if(t!==a){var s=t.length,u=a.length;s!==u&&(e.length=u,i=!0);for(var d=0;d<u;++d)d<s?o(e,d,t[d],a[d])&&(i=!0):(e[d]=l(a[d]),i=!0)}return i}(i[u],d,n)&&(g=!0);break;case"[object Object]":s(i[u],d,n)&&(g=!0);break;case"[object Date]":d.getTime()!==n.getTime()&&(i[u]=l(n),g=!0);break;case"[object Number]":(function(e,t){return e===t||a(e)&&a(t)})(d,n)||(i[u]=l(n),g=!0);break;default:i[u]=l(n),g=!0}else i[u]=l(n),g=!0}return g}function s(e,a,s){var u=!1;if(a!==s){for(var d in s)t(s,d)&&(t(a,d)?("listeners"===d&&i(e,a[d],s[d]),o(e,d,a[d],s[d])&&(u=!0)):(e[d]=l(s[d]),u=!0));for(var d in a)t(a,d)&&!t(s,d)&&("listeners"===d&&i(e,a[d],[]),delete e[d],u=!0)}return u}var u=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++u+"__",chart:null}},componentDidMount:function(){var e=l(this.props.options),t=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:t})},componentDidUpdate:function(e){this.state.chart&&(s(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1948:function(e,t,l){"use strict";l.r(t);var a=l(0),i=l.n(a),o=l(1403),s=l(1423),u=l.n(s),d=function(){var e="M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",t={type:"map",projection:"winkel3",theme:"none",imagesSettings:{rollOverColor:"#089282",rollOverScale:3,selectedScale:3,selectedColor:"#089282",color:"#13564e"},areasSettings:{unlistedAreasColor:"#15A892",outlineThickness:.1},dataProvider:{map:"worldLow",images:[{svgPath:e,zoomLevel:5,scale:.5,title:"Vienna",latitude:48.2092,longitude:16.3728},{svgPath:e,zoomLevel:5,scale:.5,title:"Minsk",latitude:53.9678,longitude:27.5766},{svgPath:e,zoomLevel:5,scale:.5,title:"Brussels",latitude:50.8371,longitude:4.3676},{svgPath:e,zoomLevel:5,scale:.5,title:"Sarajevo",latitude:43.8608,longitude:18.4214},{svgPath:e,zoomLevel:5,scale:.5,title:"Sofia",latitude:42.7105,longitude:23.3238},{svgPath:e,zoomLevel:5,scale:.5,title:"Zagreb",latitude:45.815,longitude:15.9785},{svgPath:e,zoomLevel:5,scale:.5,title:"Pristina",latitude:42.666667,longitude:21.166667},{svgPath:e,zoomLevel:5,scale:.5,title:"Prague",latitude:50.0878,longitude:14.4205},{svgPath:e,zoomLevel:5,scale:.5,title:"Copenhagen",latitude:55.6763,longitude:12.5681},{svgPath:e,zoomLevel:5,scale:.5,title:"Tallinn",latitude:59.4389,longitude:24.7545},{svgPath:e,zoomLevel:5,scale:.5,title:"Helsinki",latitude:60.1699,longitude:24.9384},{svgPath:e,zoomLevel:5,scale:.5,title:"Paris",latitude:48.8567,longitude:2.351},{svgPath:e,zoomLevel:5,scale:.5,title:"Berlin",latitude:52.5235,longitude:13.4115},{svgPath:e,zoomLevel:5,scale:.5,title:"Athens",latitude:37.9792,longitude:23.7166},{svgPath:e,zoomLevel:5,scale:.5,title:"Budapest",latitude:47.4984,longitude:19.0408},{svgPath:e,zoomLevel:5,scale:.5,title:"Reykjavik",latitude:64.1353,longitude:-21.8952},{svgPath:e,zoomLevel:5,scale:.5,title:"Dublin",latitude:53.3441,longitude:-6.2675},{svgPath:e,zoomLevel:5,scale:.5,title:"Rome",latitude:41.8955,longitude:12.4823},{svgPath:e,zoomLevel:5,scale:.5,title:"Riga",latitude:56.9465,longitude:24.1049},{svgPath:e,zoomLevel:5,scale:.5,title:"Vaduz",latitude:47.1411,longitude:9.5215},{svgPath:e,zoomLevel:5,scale:.5,title:"Vilnius",latitude:54.6896,longitude:25.2799},{svgPath:e,zoomLevel:5,scale:.5,title:"Luxembourg",latitude:49.61,longitude:6.1296},{svgPath:e,zoomLevel:5,scale:.5,title:"Skopje",latitude:42.0024,longitude:21.4361},{svgPath:e,zoomLevel:5,scale:.5,title:"Valletta",latitude:35.9042,longitude:14.5189},{svgPath:e,zoomLevel:5,scale:.5,title:"Chisinau",latitude:47.0167,longitude:28.8497},{svgPath:e,zoomLevel:5,scale:.5,title:"Monaco",latitude:43.7325,longitude:7.4189},{svgPath:e,zoomLevel:5,scale:.5,title:"Podgorica",latitude:42.4602,longitude:19.2595},{svgPath:e,zoomLevel:5,scale:.5,title:"Amsterdam",latitude:52.3738,longitude:4.891},{svgPath:e,zoomLevel:5,scale:.5,title:"Oslo",latitude:59.9138,longitude:10.7387},{svgPath:e,zoomLevel:5,scale:.5,title:"Warsaw",latitude:52.2297,longitude:21.0122},{svgPath:e,zoomLevel:5,scale:.5,title:"Lisbon",latitude:38.7072,longitude:-9.1355},{svgPath:e,zoomLevel:5,scale:.5,title:"Bucharest",latitude:44.4479,longitude:26.0979},{svgPath:e,zoomLevel:5,scale:.5,title:"Moscow",latitude:55.7558,longitude:37.6176},{svgPath:e,zoomLevel:5,scale:.5,title:"San Marino",latitude:43.9424,longitude:12.4578},{svgPath:e,zoomLevel:5,scale:.5,title:"Belgrade",latitude:44.8048,longitude:20.4781},{svgPath:e,zoomLevel:5,scale:.5,title:"Bratislava",latitude:48.2116,longitude:17.1547},{svgPath:e,zoomLevel:5,scale:.5,title:"Ljubljana",latitude:46.0514,longitude:14.506},{svgPath:e,zoomLevel:5,scale:.5,title:"Madrid",latitude:40.4167,longitude:-3.7033},{svgPath:e,zoomLevel:5,scale:.5,title:"Stockholm",latitude:59.3328,longitude:18.0645},{svgPath:e,zoomLevel:5,scale:.5,title:"Bern",latitude:46.948,longitude:7.4481},{svgPath:e,zoomLevel:5,scale:.5,title:"Kiev",latitude:50.4422,longitude:30.5367},{svgPath:e,zoomLevel:5,scale:.5,title:"London",latitude:51.5002,longitude:-.1262},{svgPath:e,zoomLevel:5,scale:.5,title:"Gibraltar",latitude:36.1377,longitude:-5.3453},{svgPath:e,zoomLevel:5,scale:.5,title:"Saint Peter Port",latitude:49.466,longitude:-2.5522},{svgPath:e,zoomLevel:5,scale:.5,title:"Douglas",latitude:54.167,longitude:-4.4821},{svgPath:e,zoomLevel:5,scale:.5,title:"Saint Helier",latitude:49.1919,longitude:-2.1071},{svgPath:e,zoomLevel:5,scale:.5,title:"Longyearbyen",latitude:78.2186,longitude:15.6488},{svgPath:e,zoomLevel:5,scale:.5,title:"Kabul",latitude:34.5155,longitude:69.1952},{svgPath:e,zoomLevel:5,scale:.5,title:"Yerevan",latitude:40.1596,longitude:44.509},{svgPath:e,zoomLevel:5,scale:.5,title:"Baku",latitude:40.3834,longitude:49.8932},{svgPath:e,zoomLevel:5,scale:.5,title:"Manama",latitude:26.1921,longitude:50.5354},{svgPath:e,zoomLevel:5,scale:.5,title:"Dhaka",latitude:23.7106,longitude:90.3978},{svgPath:e,zoomLevel:5,scale:.5,title:"Thimphu",latitude:27.4405,longitude:89.673},{svgPath:e,zoomLevel:5,scale:.5,title:"Bandar Seri Begawan",latitude:4.9431,longitude:114.9425},{svgPath:e,zoomLevel:5,scale:.5,title:"Phnom Penh",latitude:11.5434,longitude:104.8984},{svgPath:e,zoomLevel:5,scale:.5,title:"Peking",latitude:39.9056,longitude:116.3958},{svgPath:e,zoomLevel:5,scale:.5,title:"Nicosia",latitude:35.1676,longitude:33.3736},{svgPath:e,zoomLevel:5,scale:.5,title:"T'bilisi",latitude:41.701,longitude:44.793},{svgPath:e,zoomLevel:5,scale:.5,title:"New Delhi",latitude:28.6353,longitude:77.225},{svgPath:e,zoomLevel:5,scale:.5,title:"Jakarta",latitude:-6.1862,longitude:106.8063},{svgPath:e,zoomLevel:5,scale:.5,title:"Teheran",latitude:35.7061,longitude:51.4358},{svgPath:e,zoomLevel:5,scale:.5,title:"Baghdad",latitude:33.3157,longitude:44.3922},{svgPath:e,zoomLevel:5,scale:.5,title:"Jerusalem",latitude:31.76,longitude:35.17},{svgPath:e,zoomLevel:5,scale:.5,title:"Tokyo",latitude:35.6785,longitude:139.6823},{svgPath:e,zoomLevel:5,scale:.5,title:"Amman",latitude:31.9394,longitude:35.9349},{svgPath:e,zoomLevel:5,scale:.5,title:"Astana",latitude:51.1796,longitude:71.4475},{svgPath:e,zoomLevel:5,scale:.5,title:"Kuwait",latitude:29.3721,longitude:47.9824},{svgPath:e,zoomLevel:5,scale:.5,title:"Bishkek",latitude:42.8679,longitude:74.5984},{svgPath:e,zoomLevel:5,scale:.5,title:"Vientiane",latitude:17.9689,longitude:102.6137},{svgPath:e,zoomLevel:5,scale:.5,title:"Beyrouth / Beirut",latitude:33.8872,longitude:35.5134},{svgPath:e,zoomLevel:5,scale:.5,title:"Kuala Lumpur",latitude:3.1502,longitude:101.7077},{svgPath:e,zoomLevel:5,scale:.5,title:"Ulan Bator",latitude:47.9138,longitude:106.922},{svgPath:e,zoomLevel:5,scale:.5,title:"Pyinmana",latitude:19.7378,longitude:96.2083},{svgPath:e,zoomLevel:5,scale:.5,title:"Kathmandu",latitude:27.7058,longitude:85.3157},{svgPath:e,zoomLevel:5,scale:.5,title:"Muscat",latitude:23.6086,longitude:58.5922},{svgPath:e,zoomLevel:5,scale:.5,title:"Islamabad",latitude:33.6751,longitude:73.0946},{svgPath:e,zoomLevel:5,scale:.5,title:"Manila",latitude:14.579,longitude:120.9726},{svgPath:e,zoomLevel:5,scale:.5,title:"Doha",latitude:25.2948,longitude:51.5082},{svgPath:e,zoomLevel:5,scale:.5,title:"Riyadh",latitude:24.6748,longitude:46.6977},{svgPath:e,zoomLevel:5,scale:.5,title:"Singapore",latitude:1.2894,longitude:103.85},{svgPath:e,zoomLevel:5,scale:.5,title:"Seoul",latitude:37.5139,longitude:126.9828},{svgPath:e,zoomLevel:5,scale:.5,title:"Colombo",latitude:6.9155,longitude:79.8572},{svgPath:e,zoomLevel:5,scale:.5,title:"Damascus",latitude:33.5158,longitude:36.2939},{svgPath:e,zoomLevel:5,scale:.5,title:"Taipei",latitude:25.0338,longitude:121.5645},{svgPath:e,zoomLevel:5,scale:.5,title:"Dushanbe",latitude:38.5737,longitude:68.7738},{svgPath:e,zoomLevel:5,scale:.5,title:"Bangkok",latitude:13.7573,longitude:100.502},{svgPath:e,zoomLevel:5,scale:.5,title:"Dili",latitude:-8.5662,longitude:125.588},{svgPath:e,zoomLevel:5,scale:.5,title:"Ankara",latitude:39.9439,longitude:32.856},{svgPath:e,zoomLevel:5,scale:.5,title:"Ashgabat",latitude:37.9509,longitude:58.3794},{svgPath:e,zoomLevel:5,scale:.5,title:"Abu Dhabi",latitude:24.4764,longitude:54.3705},{svgPath:e,zoomLevel:5,scale:.5,title:"Tashkent",latitude:41.3193,longitude:69.2481},{svgPath:e,zoomLevel:5,scale:.5,title:"Hanoi",latitude:21.0341,longitude:105.8372},{svgPath:e,zoomLevel:5,scale:.5,title:"Sanaa",latitude:15.3556,longitude:44.2081},{svgPath:e,zoomLevel:5,scale:.5,title:"Buenos Aires",latitude:-34.6118,longitude:-58.4173},{svgPath:e,zoomLevel:5,scale:.5,title:"Bridgetown",latitude:13.0935,longitude:-59.6105},{svgPath:e,zoomLevel:5,scale:.5,title:"Belmopan",latitude:17.2534,longitude:-88.7713},{svgPath:e,zoomLevel:5,scale:.5,title:"Sucre",latitude:-19.0421,longitude:-65.2559},{svgPath:e,zoomLevel:5,scale:.5,title:"Brasilia",latitude:-15.7801,longitude:-47.9292},{svgPath:e,zoomLevel:5,scale:.5,title:"Ottawa",latitude:45.4235,longitude:-75.6979},{svgPath:e,zoomLevel:5,scale:.5,title:"Santiago",latitude:-33.4691,longitude:-70.642},{svgPath:e,zoomLevel:5,scale:.5,title:"Bogota",latitude:4.6473,longitude:-74.0962},{svgPath:e,zoomLevel:5,scale:.5,title:"San Jose",latitude:9.9402,longitude:-84.1002},{svgPath:e,zoomLevel:5,scale:.5,title:"Havana",latitude:23.1333,longitude:-82.3667},{svgPath:e,zoomLevel:5,scale:.5,title:"Roseau",latitude:15.2976,longitude:-61.39},{svgPath:e,zoomLevel:5,scale:.5,title:"Santo Domingo",latitude:18.479,longitude:-69.8908},{svgPath:e,zoomLevel:5,scale:.5,title:"Quito",latitude:-.2295,longitude:-78.5243},{svgPath:e,zoomLevel:5,scale:.5,title:"San Salvador",latitude:13.7034,longitude:-89.2073},{svgPath:e,zoomLevel:5,scale:.5,title:"Guatemala",latitude:14.6248,longitude:-90.5328},{svgPath:e,zoomLevel:5,scale:.5,title:"Ciudad de Mexico",latitude:19.4271,longitude:-99.1276},{svgPath:e,zoomLevel:5,scale:.5,title:"Managua",latitude:12.1475,longitude:-86.2734},{svgPath:e,zoomLevel:5,scale:.5,title:"Panama",latitude:8.9943,longitude:-79.5188},{svgPath:e,zoomLevel:5,scale:.5,title:"Asuncion",latitude:-25.3005,longitude:-57.6362},{svgPath:e,zoomLevel:5,scale:.5,title:"Lima",latitude:-12.0931,longitude:-77.0465},{svgPath:e,zoomLevel:5,scale:.5,title:"Castries",latitude:13.9972,longitude:-60.0018},{svgPath:e,zoomLevel:5,scale:.5,title:"Paramaribo",latitude:5.8232,longitude:-55.1679},{svgPath:e,zoomLevel:5,scale:.5,title:"Washington D.C.",latitude:38.8921,longitude:-77.0241},{svgPath:e,zoomLevel:5,scale:.5,title:"Montevideo",latitude:-34.8941,longitude:-56.0675},{svgPath:e,zoomLevel:5,scale:.5,title:"Caracas",latitude:10.4961,longitude:-66.8983},{svgPath:e,zoomLevel:5,scale:.5,title:"Oranjestad",latitude:12.5246,longitude:-70.0265},{svgPath:e,zoomLevel:5,scale:.5,title:"Cayenne",latitude:4.9346,longitude:-52.3303},{svgPath:e,zoomLevel:5,scale:.5,title:"Plymouth",latitude:16.6802,longitude:-62.2014},{svgPath:e,zoomLevel:5,scale:.5,title:"San Juan",latitude:18.45,longitude:-66.0667},{svgPath:e,zoomLevel:5,scale:.5,title:"Algiers",latitude:36.7755,longitude:3.0597},{svgPath:e,zoomLevel:5,scale:.5,title:"Luanda",latitude:-8.8159,longitude:13.2306},{svgPath:e,zoomLevel:5,scale:.5,title:"Porto-Novo",latitude:6.4779,longitude:2.6323},{svgPath:e,zoomLevel:5,scale:.5,title:"Gaborone",latitude:-24.657,longitude:25.9089},{svgPath:e,zoomLevel:5,scale:.5,title:"Ouagadougou",latitude:12.3569,longitude:-1.5352},{svgPath:e,zoomLevel:5,scale:.5,title:"Bujumbura",latitude:-3.3818,longitude:29.3622},{svgPath:e,zoomLevel:5,scale:.5,title:"Yaounde",latitude:3.8612,longitude:11.5217},{svgPath:e,zoomLevel:5,scale:.5,title:"Bangui",latitude:4.3621,longitude:18.5873},{svgPath:e,zoomLevel:5,scale:.5,title:"Brazzaville",latitude:-4.2767,longitude:15.2662},{svgPath:e,zoomLevel:5,scale:.5,title:"Kinshasa",latitude:-4.3369,longitude:15.3271},{svgPath:e,zoomLevel:5,scale:.5,title:"Yamoussoukro",latitude:6.8067,longitude:-5.2728},{svgPath:e,zoomLevel:5,scale:.5,title:"Djibouti",latitude:11.5806,longitude:43.1425},{svgPath:e,zoomLevel:5,scale:.5,title:"Cairo",latitude:30.0571,longitude:31.2272},{svgPath:e,zoomLevel:5,scale:.5,title:"Asmara",latitude:15.3315,longitude:38.9183},{svgPath:e,zoomLevel:5,scale:.5,title:"Addis Abeba",latitude:9.0084,longitude:38.7575},{svgPath:e,zoomLevel:5,scale:.5,title:"Libreville",latitude:.3858,longitude:9.4496},{svgPath:e,zoomLevel:5,scale:.5,title:"Banjul",latitude:13.4399,longitude:-16.6775},{svgPath:e,zoomLevel:5,scale:.5,title:"Accra",latitude:5.5401,longitude:-.2074},{svgPath:e,zoomLevel:5,scale:.5,title:"Conakry",latitude:9.537,longitude:-13.6785},{svgPath:e,zoomLevel:5,scale:.5,title:"Bissau",latitude:11.8598,longitude:-15.5875},{svgPath:e,zoomLevel:5,scale:.5,title:"Nairobi",latitude:-1.2762,longitude:36.7965},{svgPath:e,zoomLevel:5,scale:.5,title:"Maseru",latitude:-29.2976,longitude:27.4854},{svgPath:e,zoomLevel:5,scale:.5,title:"Monrovia",latitude:6.3106,longitude:-10.8047},{svgPath:e,zoomLevel:5,scale:.5,title:"Tripoli",latitude:32.883,longitude:13.1897},{svgPath:e,zoomLevel:5,scale:.5,title:"Antananarivo",latitude:-18.9201,longitude:47.5237},{svgPath:e,zoomLevel:5,scale:.5,title:"Lilongwe",latitude:-13.9899,longitude:33.7703},{svgPath:e,zoomLevel:5,scale:.5,title:"Bamako",latitude:12.653,longitude:-7.9864},{svgPath:e,zoomLevel:5,scale:.5,title:"Nouakchott",latitude:18.0669,longitude:-15.99},{svgPath:e,zoomLevel:5,scale:.5,title:"Port Louis",latitude:-20.1654,longitude:57.4896},{svgPath:e,zoomLevel:5,scale:.5,title:"Rabat",latitude:33.9905,longitude:-6.8704},{svgPath:e,zoomLevel:5,scale:.5,title:"Maputo",latitude:-25.9686,longitude:32.5804},{svgPath:e,zoomLevel:5,scale:.5,title:"Windhoek",latitude:-22.5749,longitude:17.0805},{svgPath:e,zoomLevel:5,scale:.5,title:"Niamey",latitude:13.5164,longitude:2.1157},{svgPath:e,zoomLevel:5,scale:.5,title:"Abuja",latitude:9.058,longitude:7.4891},{svgPath:e,zoomLevel:5,scale:.5,title:"Kigali",latitude:-1.9441,longitude:30.0619},{svgPath:e,zoomLevel:5,scale:.5,title:"Dakar",latitude:14.6953,longitude:-17.4439},{svgPath:e,zoomLevel:5,scale:.5,title:"Freetown",latitude:8.4697,longitude:-13.2659},{svgPath:e,zoomLevel:5,scale:.5,title:"Mogadishu",latitude:2.0411,longitude:45.3426},{svgPath:e,zoomLevel:5,scale:.5,title:"Pretoria",latitude:-25.7463,longitude:28.1876},{svgPath:e,zoomLevel:5,scale:.5,title:"Mbabane",latitude:-26.3186,longitude:31.141},{svgPath:e,zoomLevel:5,scale:.5,title:"Dodoma",latitude:-6.167,longitude:35.7497},{svgPath:e,zoomLevel:5,scale:.5,title:"Lome",latitude:6.1228,longitude:1.2255},{svgPath:e,zoomLevel:5,scale:.5,title:"Tunis",latitude:36.8117,longitude:10.1761}]},export:{enabled:!0}};return i.a.createElement("div",{className:"App"},i.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:t}))},n=l(8);t.default=function(){return i.a.createElement(o.a,{className:"gx-card",title:i.a.createElement(n.a,{id:"sidebar.map.capitals.map"})},i.a.createElement(d,null))}}}]);
//# sourceMappingURL=60.f3d5d680.chunk.js.map