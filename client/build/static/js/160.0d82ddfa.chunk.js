(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{2009:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(1420),i=n(31),c=n(32),l=n(35),s=n(33),u=n(34),d=n(1451),m=n(1500),g=n.n(m),p=n(36),f=n.n(p),h=g.a&&navigator.geolocation?navigator.geolocation:{getCurrentPosition:function(e,t){t("Your browser doesn't support geolocation.")}},E=Object(d.withGoogleMap)(function(e){return a.a.createElement(d.GoogleMap,{defaultZoom:10,center:e.center},e.center&&a.a.createElement(d.InfoWindow,{position:e.center},a.a.createElement("div",null,e.content)),e.center&&a.a.createElement(d.Circle,{center:e.center,radius:e.radius,options:{fillColor:"red",fillOpacity:.2,strokeColor:"red",strokeOpacity:1,strokeWeight:1}}))}),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={center:null,content:null,radius:6e3},n.isUnmounted=!1,n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function t(){e.isUnmounted||(e.setState({radius:Math.max(e.state.radius-20,0)}),e.state.radius>200&&f()(t))};h.getCurrentPosition(function(n){e.isUnmounted||(e.setState({center:{lat:n.coords.latitude,lng:n.coords.longitude},content:"Location found using HTML5."}),f()(t))},function(t){e.isUnmounted||e.setState({center:{lat:60,lng:105},content:"Error: The Geolocation service failed (".concat(t,").")})})}},{key:"componentWillUnmount",value:function(){this.isUnmounted=!0}},{key:"render",value:function(){return a.a.createElement(E,{loadingElement:a.a.createElement("div",{style:{height:"100%"}}),containerElement:a.a.createElement("div",{style:{height:"550px"}}),mapElement:a.a.createElement("div",{style:{height:"100%"}}),center:this.state.center,content:this.state.content,radius:this.state.radius})}}]),t}(o.Component),b=n(8);t.default=function(){return a.a.createElement(r.a,{className:"gx-card",title:a.a.createElement(b.a,{id:"sidebar.map.geoLocation"})},a.a.createElement(v,null))}}}]);
//# sourceMappingURL=160.0d82ddfa.chunk.js.map