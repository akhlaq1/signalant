(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1440:function(e,a,t){"undefined"!==typeof window?(window.React=t(0),window.ReactDOM=t(11),window.createReactClass=t(292),t(1442),e.exports=window.AmCharts):e.exports={}},1441:function(e,a,t){"use strict";var l=t(0),r=t.n(l);a.a=function(e){var a=e.title;e.match;return r.a.createElement("div",{className:"gx-page-heading"},r.a.createElement("h2",{className:"gx-page-title"},a))}},1442:function(e,a){!function(){function e(e){return{}.toString.call(e)}function a(e,a){return{}.hasOwnProperty.call(e,a)}function t(l){switch(e(l)){case"[object Array]":return function(e){for(var a=e.length,l=new Array(a),r=0;r<a;++r)l[r]=t(e[r]);return l}(l);case"[object Object]":return function(e){var l={};for(var r in e)a(e,r)&&(l[r]=t(e[r]));return l}(l);case"[object Date]":return new Date(l.getTime());default:return l}}function l(e){return e!==e}function r(e,a,t){if(a!==t){null==a&&(a=[]),null==t&&(t=[]);for(var l=a.length,r=t.length,i=0;i<l;++i){for(var n=a[i],o=!1,s=0;s<r;++s){var c=t[s];if(n.event===c.event&&n.method===c.method){o=!0;break}}o||e.removeListener(e,n.event,n.method)}}}function i(r,o,s,c){var u=!1;if(s!==c&&a(r,o)){var m=e(s);if(m===e(c))switch(m){case"[object Array]":"groupToPeriods"===o?(r[o]=t(c),u=!0):function(e,a,l){var r=!1;if(a!==l){var n=a.length,o=l.length;n!==o&&(e.length=o,r=!0);for(var s=0;s<o;++s)s<n?i(e,s,a[s],l[s])&&(r=!0):(e[s]=t(l[s]),r=!0)}return r}(r[o],s,c)&&(u=!0);break;case"[object Object]":n(r[o],s,c)&&(u=!0);break;case"[object Date]":s.getTime()!==c.getTime()&&(r[o]=t(c),u=!0);break;case"[object Number]":(function(e,a){return e===a||l(e)&&l(a)})(s,c)||(r[o]=t(c),u=!0);break;default:r[o]=t(c),u=!0}else r[o]=t(c),u=!0}return u}function n(e,l,n){var o=!1;if(l!==n){for(var s in n)a(n,s)&&(a(l,s)?("listeners"===s&&r(e,l[s],n[s]),i(e,s,l[s],n[s])&&(o=!0)):(e[s]=t(n[s]),o=!0));for(var s in l)a(l,s)&&!a(n,s)&&("listeners"===s&&r(e,l[s],[]),delete e[s],o=!0)}return o}var o=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++o+"__",chart:null}},componentDidMount:function(){var e=t(this.props.options),a=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:a})},componentDidUpdate:function(e){this.state.chart&&(n(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1466:function(e,a,t){"use strict";a.a=[{name:"Page A",uv:4e3,price:2400,amt:2400},{name:"Page B",uv:3e3,price:1398,amt:2210},{name:"Page C",uv:2e3,price:9800,amt:2290},{name:"Page D",uv:2780,price:3908,amt:2e3},{name:"Page E",uv:1890,price:4800,amt:2181},{name:"Page F",uv:2390,price:3800,amt:2500},{name:"Page G",uv:3490,price:4300,amt:2100}]},1517:function(e,a,t){"use strict";var l=t(0),r=t.n(l),i=t(20),n=t(1466);a.a=function(){return r.a.createElement(i.v,{width:"100%",height:200},r.a.createElement(i.d,{data:n.a,margin:{top:10,right:0,left:-15,bottom:0}},r.a.createElement(i.B,{dataKey:"name"}),r.a.createElement(i.C,null),r.a.createElement(i.f,{strokeDasharray:"3 3"}),r.a.createElement(i.z,null),r.a.createElement(i.i,null),r.a.createElement(i.c,{dataKey:"price",stackId:"a",fill:"#003366"}),r.a.createElement(i.c,{dataKey:"uv",stackId:"a",fill:"#FE9E15"})))}},1901:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),i=t(199),n=t(105),o=t(1420),s=t(1441),c=t(1440),u=t.n(c),m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:70,dataProvider:[{country:"USA",visits:3025,color:"#FF0F00"},{country:"China",visits:1882,color:"#FF6600"},{country:"Japan",visits:1809,color:"#FF9E01"},{country:"Germany",visits:1322,color:"#FCD202"},{country:"UK",visits:1122,color:"#F8FF01"},{country:"France",visits:1114,color:"#B0DE09"},{country:"India",visits:984,color:"#04D215"},{country:"Spain",visits:711,color:"#0D8ECF"},{country:"Netherlands",visits:665,color:"#0D52D1"},{country:"Russia",visits:580,color:"#2A0CD0"},{country:"South Korea",visits:443,color:"#8A0CCF"},{country:"Canada",visits:441,color:"#CD0D74"}],valueAxes:[{axisAlpha:0,position:"left",title:"Visitors from country"}],startDuration:1,graphs:[{balloonText:"<b>[[category]]: [[value]]</b>",fillColorsField:"color",fillAlphas:.9,lineAlpha:.2,type:"column",valueField:"visits"}],chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"country",categoryAxis:{gridPosition:"start",labelRotation:45},export:{enabled:!0}}}))},p=t(8),d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",dataProvider:[{country:"USA",visits:2025},{country:"China",visits:1882},{country:"Japan",visits:1809},{country:"Germany",visits:1322},{country:"UK",visits:1122},{country:"France",visits:1114},{country:"India",visits:984},{country:"Spain",visits:711},{country:"Netherlands",visits:665},{country:"Russia",visits:580},{country:"South Korea",visits:443},{country:"Canada",visits:441},{country:"Brazil",visits:395}],valueAxes:[{gridColor:"#FFFFFF",gridAlpha:.2,dashLength:0}],gridAboveGraphs:!0,startDuration:1,graphs:[{balloonText:"[[category]]: <b>[[value]]</b>",fillAlphas:.8,lineAlpha:.2,type:"column",valueField:"visits"}],chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"country",categoryAxis:{gridPosition:"start",gridAlpha:0,tickPosition:"start",tickLength:20},export:{enabled:!0}}}))},h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",addClassNames:!0,theme:"light",autoMargins:!1,marginLeft:30,marginRight:8,marginTop:10,marginBottom:26,balloon:{adjustBorderColor:!1,horizontalPadding:10,verticalPadding:8,color:"#ffffff"},dataProvider:[{year:2009,income:23.5,expenses:21.1},{year:2010,income:26.2,expenses:30.5},{year:2011,income:30.1,expenses:34.9},{year:2012,income:29.5,expenses:31.1},{year:2013,income:30.6,expenses:28.2,dashLengthLine:5},{year:2014,income:34.1,expenses:32.9,dashLengthColumn:5,alpha:.2,additional:"(projection)"}],valueAxes:[{axisAlpha:0,position:"left"}],startDuration:1,graphs:[{alphaField:"alpha",balloonText:"<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",fillAlphas:1,title:"Income",type:"column",valueField:"income",dashLengthField:"dashLengthColumn"},{id:"graph2",balloonText:"<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",bullet:"round",lineThickness:3,bulletSize:7,bulletBorderAlpha:1,bulletColor:"#FFFFFF",useLineColorForBulletBorder:!0,bulletBorderThickness:3,fillAlphas:0,lineAlpha:1,title:"Expenses",valueField:"expenses",dashLengthField:"dashLengthLine"}],categoryField:"year",categoryAxis:{gridPosition:"start",axisAlpha:0,tickLength:0},export:{enabled:!0}}}))},y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{theme:"light",type:"serial",startDuration:2,dataProvider:[{country:"USA",visits:4025,color:"#FF0F00"},{country:"China",visits:1882,color:"#FF6600"},{country:"Japan",visits:1809,color:"#FF9E01"},{country:"Germany",visits:1322,color:"#FCD202"},{country:"UK",visits:1122,color:"#F8FF01"},{country:"France",visits:1114,color:"#B0DE09"},{country:"India",visits:984,color:"#04D215"},{country:"Spain",visits:711,color:"#0D8ECF"},{country:"Netherlands",visits:665,color:"#0D52D1"},{country:"Russia",visits:580,color:"#2A0CD0"},{country:"South Korea",visits:443,color:"#8A0CCF"},{country:"Canada",visits:441,color:"#CD0D74"},{country:"Brazil",visits:395,color:"#754DEB"},{country:"Italy",visits:386,color:"#DDDDDD"},{country:"Taiwan",visits:338,color:"#333333"}],valueAxes:[{position:"left",axisAlpha:0,gridAlpha:0}],graphs:[{balloonText:"[[category]]: <b>[[value]]</b>",colorField:"color",fillAlphas:.85,lineAlpha:.1,type:"column",topRadius:1,valueField:"visits"}],depth3D:40,angle:30,chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"country",categoryAxis:{gridPosition:"start",axisAlpha:0,gridAlpha:0},export:{enabled:!0}}}))},g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{theme:"light",type:"serial",startDuration:2,dataProvider:[{country:"USA",visits:4025,color:"#FF0F00"},{country:"China",visits:1882,color:"#FF6600"},{country:"Japan",visits:1809,color:"#FF9E01"},{country:"Germany",visits:1322,color:"#FCD202"},{country:"UK",visits:1122,color:"#F8FF01"},{country:"France",visits:1114,color:"#B0DE09"},{country:"India",visits:984,color:"#04D215"},{country:"Spain",visits:711,color:"#0D8ECF"},{country:"Netherlands",visits:665,color:"#0D52D1"},{country:"Russia",visits:580,color:"#2A0CD0"},{country:"South Korea",visits:443,color:"#8A0CCF"},{country:"Canada",visits:441,color:"#CD0D74"},{country:"Brazil",visits:395,color:"#754DEB"},{country:"Italy",visits:386,color:"#DDDDDD"},{country:"Australia",visits:384,color:"#999999"},{country:"Taiwan",visits:338,color:"#333333"},{country:"Poland",visits:328,color:"#000000"}],valueAxes:[{position:"left",title:"Visitors"}],graphs:[{balloonText:"[[category]]: <b>[[value]]</b>",fillColorsField:"color",fillAlphas:1,lineAlpha:.1,type:"column",valueField:"visits"}],depth3D:20,angle:30,chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"country",categoryAxis:{gridPosition:"start",labelRotation:90},export:{enabled:!0}}}))},v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{theme:"light",type:"serial",dataProvider:[{country:"USA",year2004:3.5,year2005:4.2},{country:"UK",year2004:1.7,year2005:3.1},{country:"Canada",year2004:2.8,year2005:2.9},{country:"Japan",year2004:2.6,year2005:2.3},{country:"France",year2004:1.4,year2005:2.1},{country:"Brazil",year2004:2.6,year2005:4.9}],valueAxes:[{unit:"%",position:"left",title:"GDP growth rate"}],startDuration:1,graphs:[{balloonText:"GDP grow in [[category]] (2004): <b>[[value]]</b>",fillAlphas:.9,lineAlpha:.2,title:"2004",type:"column",valueField:"year2004"},{balloonText:"GDP grow in [[category]] (2005): <b>[[value]]</b>",fillAlphas:.9,lineAlpha:.2,title:"2005",type:"column",clustered:!1,columnWidth:.5,valueField:"year2005"}],plotAreaFillAlphas:.1,categoryField:"country",categoryAxis:{gridPosition:"start"},export:{enabled:!0}}}))},x=function(){var e={type:"serial",theme:"light",rotate:!0,marginBottom:50,dataProvider:[{age:"85+",male:-.1,female:.3},{age:"80-54",male:-.2,female:.3},{age:"75-79",male:-.3,female:.6},{age:"70-74",male:-.5,female:.8},{age:"65-69",male:-.8,female:1},{age:"60-64",male:-1.1,female:1.3},{age:"55-59",male:-1.7,female:1.9},{age:"50-54",male:-2.2,female:2.5},{age:"45-49",male:-2.8,female:3},{age:"40-44",male:-3.4,female:3.6},{age:"35-39",male:-4.2,female:4.1},{age:"30-34",male:-5.2,female:4.8},{age:"25-29",male:-5.6,female:5.1},{age:"20-24",male:-5.1,female:5.1},{age:"15-19",male:-3.8,female:3.8},{age:"10-14",male:-3.2,female:3.4},{age:"5-9",male:-4.4,female:4.1},{age:"0-4",male:-5,female:4.8}],startDuration:1,graphs:[{fillAlphas:.8,lineAlpha:.2,type:"column",valueField:"male",title:"Male",labelText:"[[value]]",clustered:!1,labelFunction:function(e){return Math.abs(e.values.value)},balloonFunction:function(e){return e.category+": "+Math.abs(e.values.value)+"%"}},{fillAlphas:.8,lineAlpha:.2,type:"column",valueField:"female",title:"Female",labelText:"[[value]]",clustered:!1,labelFunction:function(e){return Math.abs(e.values.value)},balloonFunction:function(e){return e.category+": "+Math.abs(e.values.value)+"%"}}],categoryField:"age",categoryAxis:{gridPosition:"start",gridAlpha:.2,axisAlpha:0},valueAxes:[{gridAlpha:0,ignoreAxisWidth:!0,labelFunction:function(e){return Math.abs(e)+"%"},guides:[{value:0,lineAlpha:.2}]}],balloon:{fixedPosition:!0},chartCursor:{valueBalloonsEnabled:!1,cursorAlpha:.05,fullWidth:!0},allLabels:[{text:"Male",x:"28%",y:"97%",bold:!0,align:"middle"},{text:"Female",x:"75%",y:"97%",bold:!0,align:"middle"}],export:{enabled:!0}};return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:e}))},b=t(1517),A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",legend:{horizontalGap:10,maxColumns:1,position:"right",useGraphSettings:!0,markerSize:10},dataProvider:[{year:2003,europe:2.5,namerica:2.5,asia:2.1,lamerica:.3,meast:.2,africa:.1},{year:2004,europe:2.6,namerica:2.7,asia:2.2,lamerica:.3,meast:.3,africa:.1},{year:2005,europe:2.8,namerica:2.9,asia:2.4,lamerica:.3,meast:.3,africa:.1}],valueAxes:[{stackType:"regular",axisAlpha:.3,gridAlpha:0}],graphs:[{balloonText:"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",fillAlphas:.8,labelText:"[[value]]",lineAlpha:.3,title:"Europe",type:"column",color:"#000000",valueField:"europe"},{balloonText:"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",fillAlphas:.8,labelText:"[[value]]",lineAlpha:.3,title:"North America",type:"column",color:"#000000",valueField:"namerica"},{balloonText:"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",fillAlphas:.8,labelText:"[[value]]",lineAlpha:.3,title:"Asia-Pacific",type:"column",color:"#000000",valueField:"asia"},{balloonText:"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",fillAlphas:.8,labelText:"[[value]]",lineAlpha:.3,title:"Latin America",type:"column",color:"#000000",valueField:"lamerica"},{balloonText:"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",fillAlphas:.8,labelText:"[[value]]",lineAlpha:.3,title:"Middle-East",type:"column",color:"#000000",valueField:"meast"},{balloonText:"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",fillAlphas:.8,labelText:"[[value]]",lineAlpha:.3,title:"Africa",type:"column",color:"#000000",valueField:"africa"}],categoryField:"year",categoryAxis:{gridPosition:"start",axisAlpha:0,gridAlpha:0,position:"left"},export:{enabled:!0}}}))},f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",dataProvider:[{name:"John",points:35654,color:"#7F8DA9",bullet:"https://www.amcharts.com/lib/images/faces/A04.png"},{name:"Damon",points:65456,color:"#FEC514",bullet:"https://www.amcharts.com/lib/images/faces/C02.png"},{name:"Patrick",points:45724,color:"#DB4C3C",bullet:"https://www.amcharts.com/lib/images/faces/D02.png"},{name:"Mark",points:13654,color:"#DAF0FD",bullet:"https://www.amcharts.com/lib/images/faces/E01.png"}],valueAxes:[{maximum:8e4,minimum:0,axisAlpha:0,dashLength:4,position:"left"}],startDuration:1,graphs:[{balloonText:"<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",bulletOffset:10,bulletSize:52,colorField:"color",cornerRadiusTop:8,customBulletField:"bullet",fillAlphas:.8,lineAlpha:0,type:"column",valueField:"points"}],marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,autoMargins:!1,categoryField:"name",categoryAxis:{axisAlpha:0,gridAlpha:0,inside:!0,tickLength:0},export:{enabled:!0}}}))},F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",categoryField:"year",rotate:!0,startDuration:1,categoryAxis:{gridPosition:"start",position:"left"},trendLines:[],graphs:[{balloonText:"Income:[[value]]",fillAlphas:.8,id:"AmGraph-1",lineAlpha:.2,title:"Income",type:"column",valueField:"income"},{balloonText:"Expenses:[[value]]",fillAlphas:.8,id:"AmGraph-2",lineAlpha:.2,title:"Expenses",type:"column",valueField:"expenses"}],guides:[],valueAxes:[{id:"ValueAxis-1",position:"top",axisAlpha:0}],allLabels:[],balloon:{},titles:[],dataProvider:[{year:2005,income:23.5,expenses:18.1},{year:2006,income:26.2,expenses:22.8},{year:2007,income:30.1,expenses:23.9},{year:2008,income:29.5,expenses:25.1},{year:2009,income:24.6,expenses:25}],export:{enabled:!0}}}))},E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{theme:"light",type:"serial",dataProvider:[{year:2005,income:23.5},{year:2006,income:26.2},{year:2007,income:30.1},{year:2008,income:29.5},{year:2009,income:24.6}],valueAxes:[{title:"Income in millions, USD"}],graphs:[{balloonText:"Income in [[category]]:[[value]]",fillAlphas:1,lineAlpha:.2,title:"Income",type:"column",valueField:"income"}],depth3D:20,angle:30,rotate:!0,categoryField:"year",categoryAxis:{gridPosition:"start",fillAlpha:.05,position:"left"},export:{enabled:!0}}}))},C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",handDrawn:!0,handDrawScatter:3,legend:{useGraphSettings:!0,markerSize:12,valueWidth:0,verticalGap:0},dataProvider:[{year:2005,income:23.5,expenses:18.1},{year:2006,income:26.2,expenses:22.8},{year:2007,income:30.1,expenses:23.9},{year:2008,income:29.5,expenses:25.1},{year:2009,income:24.6,expenses:25}],valueAxes:[{minorGridAlpha:.08,minorGridEnabled:!0,position:"top",axisAlpha:0}],startDuration:1,graphs:[{balloonText:"<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",title:"Income",type:"column",fillAlphas:.8,valueField:"income"},{balloonText:"<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",useLineColorForBulletBorder:!0,fillAlphas:0,lineThickness:2,lineAlpha:1,bulletSize:7,title:"Expenses",valueField:"expenses"}],rotate:!0,categoryField:"year",categoryAxis:{gridPosition:"start"},export:{enabled:!0}}}))},D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",dataProvider:[{country:"USA",visits:2025},{country:"China",visits:1882},{country:"Japan",visits:1809},{country:"Germany",visits:1322},{country:"UK",visits:1122},{country:"France",visits:1114},{country:"India",visits:984},{country:"Spain",visits:711},{country:"Netherlands",visits:665},{country:"Russia",visits:580},{country:"South Korea",visits:443},{country:"Canada",visits:441},{country:"Brazil",visits:395}],valueAxes:[{gridColor:"#FFFFFF",gridAlpha:.2,dashLength:0}],gridAboveGraphs:!0,startDuration:1,graphs:[{balloonText:"[[category]]: <b>[[value]]</b>",fillAlphas:.8,lineAlpha:.2,type:"column",valueField:"visits"}],chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"country",categoryAxis:{gridPosition:"start",gridAlpha:0,tickPosition:"start",tickLength:20},export:{enabled:!0}}}))},w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a.React,{style:{width:"100%",height:"500px"},options:{theme:"light",type:"serial",dataProvider:[{country:"USA",year2004:3.5,year2005:4.2},{country:"UK",year2004:1.7,year2005:3.1},{country:"Canada",year2004:2.8,year2005:2.9},{country:"Japan",year2004:2.6,year2005:2.3},{country:"France",year2004:1.4,year2005:2.1},{country:"Brazil",year2004:2.6,year2005:4.9},{country:"Russia",year2004:6.4,year2005:7.2},{country:"India",year2004:8,year2005:7.1},{country:"China",year2004:9.9,year2005:10.1}],valueAxes:[{stackType:"3d",unit:"%",position:"left",title:"GDP growth rate"}],startDuration:1,graphs:[{balloonText:"GDP grow in [[category]] (2004): <b>[[value]]</b>",fillAlphas:.9,lineAlpha:.2,title:"2004",type:"column",valueField:"year2004"},{balloonText:"GDP grow in [[category]] (2005): <b>[[value]]</b>",fillAlphas:.9,lineAlpha:.2,title:"2005",type:"column",valueField:"year2005"}],plotAreaFillAlphas:.1,depth3D:60,angle:30,categoryField:"country",categoryAxis:{gridPosition:"start"},export:{enabled:!0}}}))};a.default=function(e){var a=e.match;return r.a.createElement("div",{className:"gx-main-content"},r.a.createElement(s.a,{title:r.a.createElement(p.a,{id:"sidebar.chart.bar"}),match:a}),r.a.createElement(i.a,null,r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Column With Rotated Series"},r.a.createElement(m,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Simple Column Chart"},r.a.createElement(d,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Column And Line Mix"},r.a.createElement(h,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Stacked Bar Chart With Negative Values"},r.a.createElement(x,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Column 3D Chart"},r.a.createElement(g,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Cylinder 3D Chart"},r.a.createElement(y,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Layered Column Chart"},r.a.createElement(v,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"3D Stacked Column Chart"},r.a.createElement(w,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Layered Column Chart"},r.a.createElement(D,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Bar And Line Chart Mix"},r.a.createElement(C,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"3D Bar Chart"},r.a.createElement(E,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Column And Line Mix"},r.a.createElement(F,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Column Chart With Images On Top"},r.a.createElement(f,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Column With Rotated Series"},r.a.createElement(m,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Stacked Bar Chart"},r.a.createElement(b.a,null))),r.a.createElement(n.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Stacked Column Chart"},r.a.createElement(A,null)))))}}}]);
//# sourceMappingURL=21.32dc8a28.chunk.js.map