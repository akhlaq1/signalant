(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1711:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InfoBox=void 0;var n,o=g(i(11)),s=g(i(660)),d=g(i(6)),l=g(i(12)),h=g(i(5)),a=g(i(7)),r=g(i(1483)),p=g(i(55)),f=g(i(0)),u=g(i(10)),_=g(i(1)),c=i(1428),v=i(1427);function g(t){return t&&t.__esModule?t:{default:t}}var y=e.InfoBox=function(t){function e(){var t,i,n,l;(0,d.default)(this,e);for(var a=arguments.length,r=Array(a),p=0;p<a;p++)r[p]=arguments[p];return i=n=(0,h.default)(this,(t=e.__proto__||(0,s.default)(e)).call.apply(t,[this].concat(r))),n.state=(0,o.default)({},v.INFO_BOX,null),l=i,(0,h.default)(n,l)}return(0,a.default)(e,t),(0,l.default)(e,[{key:"componentWillMount",value:function(){if(r.default&&!this.state[v.INFO_BOX]){var t=new(0,i(1712).InfoBox);(0,c.construct)(e.propTypes,b,this.props,t),t.setMap(this.context[v.MAP]),this.setState((0,o.default)({},v.INFO_BOX,t))}}},{key:"componentDidMount",value:function(){(0,c.componentDidMount)(this,this.state[v.INFO_BOX],m);var t=document.createElement("div");u.default.unstable_renderSubtreeIntoContainer(this,f.default.Children.only(this.props.children),t),this.state[v.INFO_BOX].setContent(t),x(this.state[v.INFO_BOX],this.context[v.ANCHOR])}},{key:"componentDidUpdate",value:function(t){(0,c.componentDidUpdate)(this,this.state[v.INFO_BOX],m,b,t),this.props.children!==t.children&&u.default.unstable_renderSubtreeIntoContainer(this,f.default.Children.only(this.props.children),this.state[v.INFO_BOX].getContent())}},{key:"componentWillUnmount",value:function(){(0,c.componentWillUnmount)(this);var t=this.state[v.INFO_BOX];t&&(t.getContent()&&u.default.unmountComponentAtNode(t.getContent()),t.setMap(null))}},{key:"render",value:function(){return!1}},{key:"getPosition",value:function(){return this.state[v.INFO_BOX].getPosition()}},{key:"getVisible",value:function(){return this.state[v.INFO_BOX].getVisible()}},{key:"getZIndex",value:function(){return this.state[v.INFO_BOX].getZIndex()}}]),e}(f.default.PureComponent);y.propTypes={defaultOptions:_.default.any,defaultPosition:_.default.any,defaultVisible:_.default.bool,defaultZIndex:_.default.number,options:_.default.any,position:_.default.any,visible:_.default.bool,zIndex:_.default.number,onCloseClick:_.default.func,onDomReady:_.default.func,onContentChanged:_.default.func,onPositionChanged:_.default.func,onZindexChanged:_.default.func},y.contextTypes=(n={},(0,o.default)(n,v.MAP,_.default.object),(0,o.default)(n,v.ANCHOR,_.default.object),n),e.default=y;var x=function(t,e){e?t.open(t.getMap(),e):t.getPosition()?t.open(t.getMap()):(0,p.default)(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoBox>.")},m={onCloseClick:"closeclick",onDomReady:"domready",onContentChanged:"content_changed",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},b={options:function(t,e){t.setOptions(e)},position:function(t,e){t.setPosition(e)},visible:function(t,e){t.setVisible(e)},zIndex:function(t,e){t.setZIndex(e)}}},1712:function(t,e){function i(t){t=t||{},google.maps.OverlayView.apply(this,arguments),this.content_=t.content||"",this.disableAutoPan_=t.disableAutoPan||!1,this.maxWidth_=t.maxWidth||0,this.pixelOffset_=t.pixelOffset||new google.maps.Size(0,0),this.position_=t.position||new google.maps.LatLng(0,0),this.zIndex_=t.zIndex||null,this.boxClass_=t.boxClass||"infoBox",this.boxStyle_=t.boxStyle||{},this.closeBoxMargin_=t.closeBoxMargin||"2px",this.closeBoxURL_=t.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===t.closeBoxURL&&(this.closeBoxURL_=""),this.infoBoxClearance_=t.infoBoxClearance||new google.maps.Size(1,1),"undefined"===typeof t.visible&&("undefined"===typeof t.isHidden?t.visible=!0:t.visible=!t.isHidden),this.isHidden_=!t.visible,this.alignBottom_=t.alignBottom||!1,this.pane_=t.pane||"floatPane",this.enableEventPropagation_=t.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.mapListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null}i.prototype=new google.maps.OverlayView,i.prototype.createInfoBoxDiv_=function(){var t,e,i,n=this,o=function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()};if(!this.div_){if(this.div_=document.createElement("div"),this.setBoxStyle_(),"undefined"===typeof this.content_.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:0!==this.maxWidth_&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.fixedWidthSet_=!0):(i=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-i.left-i.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_),!this.enableEventPropagation_){for(this.eventListeners_=[],e=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],t=0;t<e.length;t++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,e[t],o));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(t){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",function(t){t.returnValue=!1,t.preventDefault&&t.preventDefault(),n.enableEventPropagation_||o(t)}),google.maps.event.trigger(this,"domready")}},i.prototype.getCloseBoxImg_=function(){var t="";return""!==this.closeBoxURL_&&(t="<img",t+=" src='"+this.closeBoxURL_+"'",t+=" align=right",t+=" style='",t+=" position: relative;",t+=" cursor: pointer;",t+=" margin: "+this.closeBoxMargin_+";",t+="'>"),t},i.prototype.addClickHandler_=function(){var t;""!==this.closeBoxURL_?(t=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(t,"click",this.getCloseClickHandler_())):this.closeListener_=null},i.prototype.getCloseClickHandler_=function(){var t=this;return function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),google.maps.event.trigger(t,"closeclick"),t.close()}},i.prototype.panBox_=function(t){var e,i=0,n=0;if(!t&&(e=this.getMap())instanceof google.maps.Map){e.getBounds().contains(this.position_)||e.setCenter(this.position_),e.getBounds();var o=e.getDiv(),s=o.offsetWidth,d=o.offsetHeight,l=this.pixelOffset_.width,h=this.pixelOffset_.height,a=this.div_.offsetWidth,r=this.div_.offsetHeight,p=this.infoBoxClearance_.width,f=this.infoBoxClearance_.height,u=this.getProjection().fromLatLngToContainerPixel(this.position_);if(u.x<-l+p?i=u.x+l-p:u.x+a+l+p>s&&(i=u.x+a+l+p-s),this.alignBottom_?u.y<-h+f+r?n=u.y+h-f-r:u.y+h+f>d&&(n=u.y+h+f-d):u.y<-h+f?n=u.y+h-f:u.y+r+h+f>d&&(n=u.y+r+h+f-d),0!==i||0!==n){e.getCenter();e.panBy(i,n)}}},i.prototype.setBoxStyle_=function(){var t,e;if(this.div_){for(t in this.div_.className=this.boxClass_,this.div_.style.cssText="",e=this.boxStyle_)e.hasOwnProperty(t)&&(this.div_.style[t]=e[t]);this.div_.style.WebkitTransform="translateZ(0)","undefined"!==typeof this.div_.style.opacity&&""!==this.div_.style.opacity&&(this.div_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*this.div_.style.opacity+')"',this.div_.style.filter="alpha(opacity="+100*this.div_.style.opacity+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",null!==this.zIndex_&&(this.div_.style.zIndex=this.zIndex_),this.div_.style.overflow||(this.div_.style.overflow="auto")}},i.prototype.getBoxWidths_=function(){var t,e={top:0,bottom:0,left:0,right:0},i=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(t=i.ownerDocument.defaultView.getComputedStyle(i,""))&&(e.top=parseInt(t.borderTopWidth,10)||0,e.bottom=parseInt(t.borderBottomWidth,10)||0,e.left=parseInt(t.borderLeftWidth,10)||0,e.right=parseInt(t.borderRightWidth,10)||0):document.documentElement.currentStyle&&i.currentStyle&&(e.top=parseInt(i.currentStyle.borderTopWidth,10)||0,e.bottom=parseInt(i.currentStyle.borderBottomWidth,10)||0,e.left=parseInt(i.currentStyle.borderLeftWidth,10)||0,e.right=parseInt(i.currentStyle.borderRightWidth,10)||0),e},i.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},i.prototype.draw=function(){this.createInfoBoxDiv_();var t=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=t.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(t.y+this.pixelOffset_.height)+"px":this.div_.style.top=t.y+this.pixelOffset_.height+"px",this.isHidden_?this.div_.style.visibility="hidden":this.div_.style.visibility="visible"},i.prototype.setOptions=function(t){"undefined"!==typeof t.boxClass&&(this.boxClass_=t.boxClass,this.setBoxStyle_()),"undefined"!==typeof t.boxStyle&&(this.boxStyle_=t.boxStyle,this.setBoxStyle_()),"undefined"!==typeof t.content&&this.setContent(t.content),"undefined"!==typeof t.disableAutoPan&&(this.disableAutoPan_=t.disableAutoPan),"undefined"!==typeof t.maxWidth&&(this.maxWidth_=t.maxWidth),"undefined"!==typeof t.pixelOffset&&(this.pixelOffset_=t.pixelOffset),"undefined"!==typeof t.alignBottom&&(this.alignBottom_=t.alignBottom),"undefined"!==typeof t.position&&this.setPosition(t.position),"undefined"!==typeof t.zIndex&&this.setZIndex(t.zIndex),"undefined"!==typeof t.closeBoxMargin&&(this.closeBoxMargin_=t.closeBoxMargin),"undefined"!==typeof t.closeBoxURL&&(this.closeBoxURL_=t.closeBoxURL),"undefined"!==typeof t.infoBoxClearance&&(this.infoBoxClearance_=t.infoBoxClearance),"undefined"!==typeof t.isHidden&&(this.isHidden_=t.isHidden),"undefined"!==typeof t.visible&&(this.isHidden_=!t.visible),"undefined"!==typeof t.enableEventPropagation&&(this.enableEventPropagation_=t.enableEventPropagation),this.div_&&this.draw()},i.prototype.setContent=function(t){this.content_=t,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),"undefined"===typeof t.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+t:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(t)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px","undefined"===typeof t.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+t:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(t))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},i.prototype.setPosition=function(t){this.position_=t,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},i.prototype.setZIndex=function(t){this.zIndex_=t,this.div_&&(this.div_.style.zIndex=t),google.maps.event.trigger(this,"zindex_changed")},i.prototype.setVisible=function(t){this.isHidden_=!t,this.div_&&(this.div_.style.visibility=this.isHidden_?"hidden":"visible")},i.prototype.getContent=function(){return this.content_},i.prototype.getPosition=function(){return this.position_},i.prototype.getZIndex=function(){return this.zIndex_},i.prototype.getVisible=function(){return"undefined"!==typeof this.getMap()&&null!==this.getMap()&&!this.isHidden_},i.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},i.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},i.prototype.open=function(t,e){var i=this;e&&(this.position_=e.getPosition(),this.moveListener_=google.maps.event.addListener(e,"position_changed",function(){i.setPosition(this.getPosition())}),this.mapListener_=google.maps.event.addListener(e,"map_changed",function(){i.setMap(this.map)})),this.setMap(t),this.div_&&this.panBox_()},i.prototype.close=function(){var t;if(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.eventListeners_){for(t=0;t<this.eventListeners_.length;t++)google.maps.event.removeListener(this.eventListeners_[t]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.mapListener_&&(google.maps.event.removeListener(this.mapListener_),this.mapListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)},t.exports={default:i,InfoBox:i}}}]);
//# sourceMappingURL=116.9fe1d671.chunk.js.map