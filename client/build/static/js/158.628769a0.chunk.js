(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1973:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(1403),i=a(30),r=a(31),o=a(33),s=a(32),u=a(46),m=a(34),d=a(102),h=a(1433),p={mapContainer:{height:500},overlayView:{background:"#fff",border:"1px solid #ccc",padding:15}};function v(e,t){return{x:-e/2,y:-t/2}}var E=Object(h.withGoogleMap)(function(e){return l.a.createElement(h.GoogleMap,{defaultZoom:15,defaultCenter:{lat:47.646935,lng:-122.303763}},l.a.createElement(h.OverlayView,{position:{lat:47.646935,lng:-122.303763},mapPaneName:h.OverlayView.OVERLAY_MOUSE_TARGET,getPixelPositionOffset:v},l.a.createElement("div",{className:"gx-map-content",style:p.overlayView},l.a.createElement("h1",null,"OverlayView"),l.a.createElement(d.a,{variant:"raised",color:"primary",onClick:e.onClick},"I have been clicked ",e.count," time",1===e.count?"":"s"))))}),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={count:0},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){return l.a.createElement(E,{loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"550px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),count:this.state.count,onClick:this.handleClick})}}]),t}(n.Component),y=a(8);t.default=function(){return l.a.createElement(c.a,{className:"gx-card",title:l.a.createElement(y.a,{id:"sidebar.map.overlay"})},l.a.createElement(f,null))}}}]);
//# sourceMappingURL=158.628769a0.chunk.js.map