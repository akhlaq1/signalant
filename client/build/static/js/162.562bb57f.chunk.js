(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{2011:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1420),i=a(31),o=a(32),l=a(35),s=a(33),u=a(34),m=a(1758),d=a.n(m),f=a(1451),h=a(1760),p=a.n(h),b=Object(f.withGoogleMap)(function(e){return r.a.createElement(f.GoogleMap,{defaultZoom:3,defaultCenter:{lat:25.0391667,lng:121.525}},r.a.createElement(p.a,{averageCenter:!0,enableRetinaIcons:!0,gridSize:60},e.markers.map(function(e){return r.a.createElement(f.Marker,{position:{lat:e.latitude,lng:e.longitude},key:e.photo_id})})))}),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={markers:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;d()("https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json").then(function(e){return e.json()}).then(function(t){e.setState({markers:t.photos})})}},{key:"render",value:function(){return r.a.createElement(b,{loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"550px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),markers:this.state.markers})}}]),t}(n.Component),E=a(8);t.default=function(){return r.a.createElement(c.a,{className:"gx-card",title:r.a.createElement(E.a,{id:"sidebar.map.mapClustering"})},r.a.createElement(g,null))}}}]);
//# sourceMappingURL=162.562bb57f.chunk.js.map