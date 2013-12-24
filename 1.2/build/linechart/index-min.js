/*! kcharts - v1.2 - 2013-12-24 11:55:16 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/linechart/theme",function(){var t="{COLOR}",e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:4,"stroke-width":2},hoverAttr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:5,"stroke-width":2}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.2/linechart/index",function(t,e,i,r,n,s,a,o,c,l,h,f,d){var p,_=t.all,g=t.Event,u="ks-chart-",x=u+"default",v=u+"evtlayout",m="{COLOR}",y=["circle","triangle","rhomb","square"],b=function(t){var e=this;e._cfg=t,e.init()};return t.extend(b,n,{init:function(){var e,i,r=this;if(n.prototype.init.call(r,r._cfg),r.chartType="linechart",r._$ctnNode[0]){var a={themeCls:x,autoRender:!0,comparable:!1,lineType:"straight",colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:m},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:m,"stroke-width":0}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!1,css:{}},line:{isShow:!0,attr:{"stroke-width":"3px"},hoverAttr:{"stroke-width":"4px"}},pointLine:{isShow:!1,css:{}},legend:{isShow:!1},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};r._lines={},r._finished=[],x=r._cfg.themeCls||a.themeCls,r._cfg=t.mix(t.mix(a,c[x],l,l,!0),r._cfg,l,l,!0),r.color=p=new s({themeCls:x}),r._cfg.colors.length>0&&p.removeAllColors();for(var o in r._cfg.colors)p.setColor(r._cfg.colors[o]);r.__cfg=r.cloneSeriesConfig(["line","points"]),e=r._points[0],i=Math.round(e&&e[0]&&e[1]&&e[1].x-e[0].x||r.getInnerContainer().width),i&&r.set("area-width",i),r._cfg.autoRender&&r.render(!0)}},cloneSeriesConfig:function(e){var i,r=this,n={},s=t.clone(r._cfg);if(e){for(var a in e)for(var o in r._cfg.series)i=r._cfg.series[o][e[a]]?t.mix(s[e[a]],r._cfg.series[o][e[a]],l,l,!0):r._cfg[e[a]],i&&(n[e[a]]||(n[e[a]]=[]),n[e[a]][o]=i);return n}},drawTitle:function(){var e=this,i=e.htmlPaper,r=x+"-title",n=e._cfg,s=e._innerContainer,a=.6*s.y;n.title.isShow&&""!=n.title.content&&(e._title=i.rect(0,0,e._$ctnNode.width(),a).addClass(r).css(t.mix({"line-height":a+"px"},n.title.css)).html(n.title.content))},drawSubTitle:function(){var e=this,i=e.htmlPaper,r=x+"-subtitle",n=e._cfg,s=e._innerContainer,a=.4*s.y;n.subTitle.isShow&&""!=n.subTitle.content&&(e._subTitle=i.rect(0,.6*s.y,e._$ctnNode.width(),a).addClass(r).css(t.mix({"line-height":a+"px"},n.subTitle.css)).html(n.subTitle.content))},getRealPointsNum:function(t){var e=0;for(var i in t)t[i].x&&t[i].y&&e++;return e},getVisableLineNum:function(){for(var t=this,e=t._cfg,i=e.series.length,r=i,n=0;i>n;n++)0==e.series[n].isShow&&r--;return r},drawLine:function(t,e){var i=this,r=i._points[t];if(r&&r.length){var n=i.getLinePath(r),s=i.paper,a=i.color.getColor(t).DEFAULT,o=i.__cfg.line[t].attr,c=s.path(n).attr(o).attr({stroke:a}),l=i.getVisableLineNum();return i._stocks[t].stocks=i.drawStocks(t,i.processAttr(i._cfg.points.attr,a)),i._finished.push(!0),i._finished.length==l&&e&&e(),c}},getFirstUnEmptyPointIndex:function(t){var e=this,i=e._points[t];for(var r in i)if(!e.isEmptyPoint(i[r]))return r},animateLine:function(e,i){var n,s,a,o,c,l=this,h=[],d=0,_=0,g=l._cfg,u=l.paper,x=l._points[e],v=l._stocks[e].type,m=l.getLinePath(x),y=r.getTotalLength(m),b=(x.length||0,l.getRealPointsNum(x),g.anim?g.anim.duration||500:500),w="easeNone",k=l.get("area-width"),L=t.mix({stroke:p.getColor(e).DEFAULT},g.line.attr),C=l.__cfg.line[e].attr,A=u.path(n).attr(C).attr({stroke:p.getColor(e).DEFAULT});for(var S in l._points[e])h[S]="";return c=l.getFirstUnEmptyPointIndex(e),h[c]=l.drawStock(x[c].x,x[c].y,l.processAttr(g.points.attr,L.stroke),v),o=l.getVisableLineNum(),new f({},{},{duration:b,easing:w,frame:function(){s=arguments[1]*y,n=r.getSubpath(m,_,s),a=r.pathBBox(n),d=Math.floor(1.01*a.width/k)- -c,!h[d]&&x[d]&&(h[d]=l.drawStock(x[d].x,x[d].y,l.processAttr(g.points.attr,L.stroke),v));for(var t in x)d>t&&(h[t]||(h[t]=l.drawStock(x[t].x,x[t].y,l.processAttr(g.points.attr,L.stroke),v)));A&&A.attr({path:n})},endframe:function(){l._stocks[e].stocks=h,l._finished.push(!0),l._finished.length==o&&i&&i()}}),A},getLinePath:function(t){var e=this,i="",r=(e._innerContainer.bl.y,e.getRealPointsNum(t)),n=0;if(!t)return"";if(n=function(){for(var i in t)if(!e.isEmptyPoint(t[i]))return Math.round(i)}(),i+="M"+t[n].x+","+t[n].y,"arc"==e._cfg.lineType&&r>2){i+=" R";for(var s=n+1,r=t.length;r>s;s++)t[s].x&&t[s].y&&(i+=t[s].x+","+t[s].y+" ")}else for(var s=n+1,r=t.length;r>s;s++)t[s].x&&t[s].y&&(i+=" L"+t[s].x+","+t[s].y);return i},drawLines:function(e){var i=this,r=i._cfg,n=y.length;i._lines={},i._stocks={};for(var s in i._points){var a,o=i.getLinePath(i._points[s]),c=p.getColor(s),h=i.processAttr(i._cfg.points.attr,c.DEFAULT),f=i.processAttr(i._cfg.points.hoverAttr,c.HOVER);if(i._stocks[s]={points:i._points[s],color:c,attr:h,hoverAttr:f,type:"auto"==h.type?y[s%n]:h.type},r.anim)try{a=0==r.series[s].isShow?l:i.animateLine(s,e)}catch(d){a=0==r.series[s].isShow?l:i.drawLine(s,e)}else a=0==r.series[s].isShow?l:i.drawLine(s,e);i._lines[s]={line:a,path:o,points:i._points[s],color:c,attr:t.mix({stroke:c.DEFAULT},i._cfg.line.attr),isShow:r.series[s].isShow===!1?!1:!0}}return i._lines},processAttr:function(e,i){var r=t.clone(e);for(var n in r)r[n]&&"string"==typeof r[n]&&(r[n]=r[n].replace(m,i));return r},drawStocks:function(t,e){var i=this,r=[],n=i._points[t],s=i._stocks[t].type;for(var a in n)n[a].x&&n[a].y?r.push(i.drawStock(n[a].x,n[a].y,e,s)):r.push("");return r},drawStock:function(t,e,i,r){var n,s=this,a=s.paper,o=s._cfg.points.attr;if(t&&e){switch(r){case"triangle":n=d.triangle(a,t,e,1.4*o.r);break;case"rhomb":n=d.rhomb(a,t,e,2.4*o.r,2.4*o.r);break;case"square":n=d.rhomb(a,t,e,2.4*o.r,2.4*o.r,45);break;default:n=a.circle(t,e,o.r,i)}return n.attr(o).attr(i),n}return""},drawGridsX:function(){if(this._cfg.xGrids.isShow){for(var t=this,e=t._points[0],i=function(){var t=e.length,i=[];if(t>1){var r=(e[1].x-e[0].x)/2;i.push({x:e[0].x-r});for(var n in e)i.push({x:e[n].x- -r})}return i}(),r=0,n=i.length;n>r;r++){var s=t.drawGridX(i[r]);t._gridsX.push(s)}return t._gridsX}},drawGridX:function(t,e){var i=this,r=i._innerContainer.tl.y,n=i._innerContainer.height,e=e||i._cfg.xGrids.css,s=i.htmlPaper,a=i._cfg.themeCls+"-gridsx";return s.lineY(t.x,r,n).addClass(a).css(i._cfg.xGrids.css)},drawGridY:function(t,e){var i=this,r=i._innerContainer.width,e=e||i._cfg.yGrids.css,n=i.htmlPaper,s=i._cfg.themeCls+"-gridsy";return n.lineX(t.x,t.y,r).addClass(s).css(e)},drawGridsY:function(){if(this._cfg.yGrids.isShow)for(var t=this,e=t._innerContainer.tl.x,i=t._pointsY,r=0,n=i.length;n>r;r++)t._gridsY[r]={0:t.drawGridY({x:e,y:i[r].y}),num:t.coordNum[r]}},drawAreas:function(){if(this._cfg.areas.isShow)for(var t=this,e=t._innerContainer,i=e.tl.y,r=t._points[0],n=Math.round(r&&r[0]&&r[1]&&r[1].x-r[0].x||e.width),s=Math.round(t._innerContainer.height),a=t.htmlPaper,o=t._cfg.themeCls+"-areas",c=t._cfg.areas.css,l=0,h=r.length;h>l;l++){var f=a.rect(r[l].x-n/2,i,n,s).addClass(o).css(c);t._areas.push(f)}},drawAxisX:function(){if(this._cfg.xAxis.isShow){var t=this,e=t._innerContainer,i=e.bl,r=e.width,n=t.htmlPaper,s=t._cfg.themeCls+"-axisx";return t._axisX=n.lineX(i.x,i.y,r).addClass(s).css(t._cfg.xAxis.css||{}),t._axisX}},drawAxisY:function(){if(this._cfg.yAxis.isShow){var t=this,e=t._innerContainer,i=e.tl,r=e.height,n=t.htmlPaper,s=t._cfg.themeCls+"-axisy";return t._axisY=n.lineY(i.x,i.y,r).addClass(s).css(t._cfg.yAxis.css||{}),t._axisY}},drawLabelsX:function(){if(this._cfg.xLabels.isShow){var t=this,e=t._cfg.xAxis.text;for(var i in e)t._labelX[i]=t.drawLabelX(i,e[i])}},drawLabelsY:function(){if(this._cfg.yLabels.isShow){var t=this;for(var e in t._pointsY)t._labelY[e]={0:t.drawLabelY(e,t._pointsY[e].number),num:t._pointsY[e].number};return t._labelY}},drawLabelX:function(e,r){var n,s=this,a=s.htmlPaper,o=s._pointsX,c=o.length||0,h=s._cfg.themeCls+"-xlabels",f="{{data}}",d="";return c>e?(f=s._cfg.xLabels.template||f,d=t.isFunction(f)?f(e,r):i(f).render({data:r}),n=o[e],n[0]=a.text(n.x,n.y,"<span class="+h+">"+d+"</span>","center").children().css(s._cfg.xLabels.css),n[0]):l},drawLabelY:function(e,r){var n=this,s=n.htmlPaper,a=n._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=n._cfg.yLabels.template||o,c=t.isFunction(o)?o(e,r):i(o).render({data:r}),c&&s.text(n._pointsY[e].x,n._pointsY[e].y,"<span class="+a+">"+c+"</span>","right","middle").children().css(n._cfg.yLabels.css)},drawPointLine:function(){if(this._cfg.comparable){var t=this,e=t.htmlPaper,i=t._cfg.themeCls+"-pointline",r=t._innerContainer;return t._pointline=e.lineY(0,r.tl.y,r.height).addClass(i).css(t._cfg.pointLine.css).css({display:"none"}),t._pointline}},renderTip:function(){if(this._cfg.tip.isShow){var e=this,i=e._cfg,r=e._innerContainer,n=i.tip.boundryDetect?{x:r.tl.x,y:r.tl.y,width:r.width,height:r.height}:{},s=t.mix(i.tip,{rootNode:e._$ctnNode,clsName:i.themeCls,boundry:n},l,l,!0);return e.tip=new h(s),e.tip}},renderEvtLayout:function(){var t,e=this,i=e._innerContainer,r=(i.tl.y,e._points[0]),n=r&&r[0]&&r[1]&&r[1].x-r[0].x||i.width,s=i.height,o=e._multiple,c=e._evtEls._areas=[],l=e._evtEls._rects=[];t=e._evtEls.paper?e._evtEls.paper:e._evtEls.paper=new a(e._$ctnNode,{clsName:v,prependTo:!1,width:i.width,height:s,left:i.tl.x,top:i.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var h=0,f=r.length;f>h;h++)c[h]={x:r[h].x-n/2,y:i.tl.y,width:n,height:s};if(o)for(var h in e._stocks){var d=e._stocks[h],l=[],r=d.points;if(d.stocks){for(var p in r)l[p]={x:r[p].x-n/2,y:r[p].y-5,width:n,height:10};e._evtEls._rects[h]=l}}},clearEvtLayout:function(){var t=this;t._evtEls._areas&&t._evtEls._areas.length&&(t._evtEls._areas=[]),t._evtEls._rects&&t._evtEls._rects.length&&(t._evtEls._rects=[])},renderLegend:function(){if(this._cfg.legend.isShow){var e=this,i=e._cfg.legend,r=i.container&&_(i.container)[0]?_(i.container):e._$ctnNode,n=e._stocks,s=e._innerContainer,a=e.color._colors,c=a.length,l=e._cfg,h=e._cfg.series,f=t.map(h,function(t,e){e%=c;var i={},r=a[e];i.text=t.text,i.DEFAULT=r.DEFAULT,i.HOVER=r.HOVER;var s=n[e].type;return i.icontype="line"+s,i.iconsize=[1,1],i}),d=t.merge({interval:20,iconright:5,showicon:!0},l.legend.globalConfig);return e.legend=new o({container:r,paper:e.paper,bbox:{width:s.width,height:s.height,left:s.x,top:s.y},align:l.legend.align||"bc",offset:l.legend.offset||[0,30],globalConfig:d,config:f}),e.legend.on("click",function(t){var e=t.index,i=(t.text,t.icon,t.el);1!=i.hide?(this.hideLine(e),i.hide=1,i.disable()):(this.showLine(e),i.hide=0,i.enable())},this),e.legend}},render:function(e){var i=this,n=i._cfg,s=n.themeCls;i.beforeRender(),e&&i._$ctnNode.html(""),i.paper=r(i._$ctnNode[0],n.width,n.height),i.htmlPaper=new a(i._$ctnNode,{clsName:s}),i.drawTitle(),i.drawSubTitle(),i.renderTip(),i.drawAreas(),i.drawGridsX(),i.drawGridsY(),i.drawPointLine(),i.drawAxisX(),i.drawAxisY(),i.drawLabelsX(),i.drawLabelsY(),n.anim?i.drawLines(function(){i.renderEvtLayout(),i.bindEvt(),i.renderLegend(),t.log("finish"),i.afterRender(),i.fix2Resize()}):(i.drawLines(),i.renderEvtLayout(),i.bindEvt(),i.renderLegend(),i.afterRender(),i.fix2Resize()),t.log(i)},bindEvt:function(){var t=this,e=(t._cfg,t._evtEls);t.curStockIndex=function(){for(var e in t._stocks)if(t._stocks[e].stocks)return e}(),this.unbindEvt(),t.curLineIndex=t.getFirstVisibleLineIndex(),g.on(e.paper.$paper,"mouseleave",function(){t._lines[0].line.attr(t._lines[0].attr),t.tip&&t.tip.hide(),t._pointline&&t._pointline.hide();for(var e in t._stocks)for(var i in t._stocks[e].stocks)t._stocks[e].stocks[i]&&t._stocks[e].stocks[i].attr&&t._stocks[e].stocks[i].attr(t._stocks[e].attr);t.curStockIndex=l,t.paperLeave()}),g.on(e.paper.$paper,"mousemove",function(e){e=t.getOffset(e),t.delegateMouseMove(e)}),g.on(e.paper.$paper,"click",function(e){e=t.getOffset(e),t.delegateClick(e)})},unbindEvt:function(){var t=self._evtEls;t&&t.paper&&(g.detach(t.paper.$paper,"mousemove"),g.detach(t.paper.$paper,"mouseleave"),g.detach(t.paper.$paper,"click"))},delegateClick:function(t){var e=this,i=e.getInnerContainer();for(var r in e._evtEls._rects)for(var n in e._evtEls._rects[r]){var s=e._evtEls._rects[r][n];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,s.x,s.y,s.width,s.height))return e.stockClick(r,n),l}},delegateMouseMove:function(t){var e=this,i=e.getInnerContainer(),r=e.curStockIndex;for(var n in e._evtEls._areas){var s=e._evtEls._areas[n];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,s.x,s.y,s.width,s.height)&&(r===l||r!=n))return e.curStockIndex=n,e.tipHandler(e.curLineIndex,e.curStockIndex),l}for(var n in e._evtEls._rects)for(var a in e._evtEls._rects[n]){var o=e._evtEls._rects[n][a];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,o.x,o.y,o.width,o.height)){if(e.curLineIndex===n)return;return e.lineChangeTo(n),e.tipHandler(e.curLineIndex,e.curStockIndex),l}}},tipHandler:function(e,i){var r=this;if(e!==l&&i!==l){var s,a=r.tip,o=r._cfg,c=o.series,h=o.tip.template,f=(a.getInstance(),r._cfg.themeCls+"-areas-hover"),d=r._points[e][i],p=r._lines[e].color.DEFAULT;if(h&&o.tip.isShow&&r.curStockIndex!==l){if(currentPoints=r._points[e],currentStocks=r._stocks[e],currentPoints&&!r.isEmptyPoint(currentPoints[i])&&r._lines[e].isShow){r._pointline&&r._pointline.css({"margin-left":r._pointsX[i].x}).show();for(var _ in r._stocks)for(var g in r._stocks[_].stocks)r._stocks[_].stocks[g]&&r._stocks[_].stocks[g].attr&&r._stocks[_].stocks[g].attr(r._stocks[_].attr);if(r._cfg.comparable)for(var _ in r._stocks)r._stocks[_].stocks&&r._stocks[_].stocks[i]&&r._stocks[_].stocks[i].attr&&r._stocks[_].stocks[i].attr(r._stocks[_].hoverAttr);else currentStocks&&currentStocks.stocks&&currentStocks.stocks[i]&&currentStocks.stocks[i].attr&&currentStocks.stocks[i].attr(currentStocks.hoverAttr);r._areas[i]&&r._areas[i].addClass(f).siblings().removeClass(f)}else{var u=r.getFirstNotEmptyPointsLineIndex(i);u&&r.lineChangeTo(u)}if(r._points[e][i].dataInfo&&r._lines[e].isShow&&r.stockChange(e,i),r._cfg.comparable){var x={datas:{}},v=[];for(var _ in r._points)if(r._stocks[_].stocks&&r._points[_][i].dataInfo){r._points[_][i].dataInfo.color=r._stocks[_].color.DEFAULT;var m=t.merge(r._points[_][i].dataInfo,c[_]);delete m.data,x.datas[_]=m}for(var _ in x.datas)v.push(x.datas[_]);x.datas=n.prototype.arraySort(v,!0,"y"),s=x}else{var s=t.merge(r._points[e][i].dataInfo,c[e]);delete s.data}r.areaChange(i),r.isEmptyPoint(currentPoints[i])||(t.mix(s,{lineindex:e,pointindex:i}),a.fire("setcontent",{data:s}),a.fire("move",{x:d.x,y:d.y,style:r.processAttr(o.tip.css,p)}))}}},getFirstNotEmptyPointsLineIndex:function(t){var e=this;for(var i in e._points)if(!e.isEmptyPoint(e._points[i][t])&&e._lines[i].isShow)return i+"";return""},getFirstVisibleLineIndex:function(){var t=this;for(var e in t._lines)if(t._lines[e].isShow)return e},isEmptyPoint:function(t){return t&&t.dataInfo?!1:!0},hideLine:function(e){var i,r=this,s=500;if(r._lines[e].isShow){r._lines[e].isShow=!1,e==r.curLineIndex&&(r.curLineIndex=r.getFirstVisibleLineIndex()),n.prototype.removeData.call(r,e),r.animateGridsAndLabels(),r._lines[e].line.remove();for(var a in r._stocks){if(e==a){for(var o in r._stocks[e].stocks)r._stocks[e].stocks[o]&&r._stocks[e].stocks[o].remove();delete r._stocks[e].stocks}r._stocks[a].points=r._points[a]}for(var a in r._lines)if(a!=e){var c=r.getLinePath(r._points[a]),l=r._lines[a].path;if(l!=c&&""!=c){r._isAnimating=!0,r._lines[a].line&&r._lines[a].line.stop()&&r._lines[a].line.animate({path:c},s,function(){r._isAnimating=!1}),r._lines[a].path=c;for(var o in r._stocks[a].stocks)r._stocks[a].stocks[o]&&(i=r._stocks[a].stocks[o],i.stop().animate({transform:"T"+(r._stocks[a].points[o].x-r._stocks[a].stocks[o].attr("cx"))+","+(r._stocks[a].points[o].y-r._stocks[a].stocks[o].attr("cy"))},s))}}r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),t.log(r)}},showLine:function(t){var e,i=this,r=500;if(!i._lines[t].isShow){i._lines[t].isShow=!0,i._cfg.series[t].isShow=!0,n.prototype.recoveryData.call(i,t),i.animateGridsAndLabels(),i._lines[t].line=i.drawLine(t);for(var s in i._stocks)i._stocks[s].points=i._points[s];for(var s in i._lines){var a=i.getLinePath(i._points[s]),o=i._lines[s].path;if(o!=a&&i._lines[s].line){i._isAnimating=!0,i._lines[s].line&&i._lines[s].line.stop().animate({path:a},r,function(){i._isAnimating=!1}),i._lines[s].path=a;for(var c in i._stocks[s].stocks)i._stocks[s].stocks[c]&&(e=i._stocks[s].stocks[c],e.stop(),e.animate({transform:"T"+(i._stocks[s].points[c].x-i._stocks[s].stocks[c].attr("cx"))+","+(i._stocks[s].points[c].y-i._stocks[s].stocks[c].attr("cy"))},r))}}i.clearEvtLayout(),i.renderEvtLayout(),i.bindEvt()}},animateGridsAndLabels:function(){var t=this,e=t._cfg,i=e.zoomType;if("y"==i){for(var r in t._labelX)t._labelX[r]&&t._labelX[r][0]&&_(t._labelX[r][0]).remove();for(var r in t._gridsX)t._gridsX[r]&&t._gridsX[r][0]&&_(t._gridsX[r][0]).remove();t.drawLabelsX(),t.drawGridsX()}else if("x"==i){for(var r in t._labelY)t._labelY[r]&&t._labelY[r][0]&&t._labelY[r][0].remove();for(var r in t._gridsY)t._gridsY[r]&&t._gridsY[r][0]&&t._gridsY[r][0].remove();t.drawGridsY(),t.drawLabelsY()}},lineChangeTo:function(t){var e=this,i=(e._cfg,e.__cfg.line[t].hoverAttr);if(!e._isAnimating&&e._lines[t].isShow){for(var r in e._stocks)e._stocks[r].points=e._points[r];for(var r in e._lines)r!=t&&e._lines[r].line&&e._lines[r].line.attr(e.__cfg.line[r].attr);e._lines[t].line.remove();for(var r in e._stocks[t].stocks)e._stocks[t].stocks[r]&&e._stocks[t].stocks[r].remove&&e._stocks[t].stocks[r].remove();e._lines[t].line=e.drawLine(t).attr(i);for(var r in e._stocks)for(var n in e._stocks[r].stocks)if(e._stocks[r].stocks[n]){var s=e._stocks[r].stocks[n];s.attr&&s.attr(e._stocks[r].attr)}e.curLineIndex=t}},fix2Resize:function(){var e=this;e._$ctnNode,e._cfg.anim="";var i=t.buffer(function(){e.init()},200);!e.__isFix2Resize&&e.on("resize",function(){e.__isFix2Resize=1,i()})},areaChange:function(t){var e=this;e.fire("areaChange",{index:t})},paperLeave:function(){var t=this;t.fire("paperLeave",t)},stockClick:function(e,i){var r=this,n=r._stocks[e],s=n.stocks&&n.stocks[i],a=t.mix({target:s,currentTarget:s,lineIndex:Math.round(e),stockIndex:Math.round(i)},n.points[i]);r.fire("stockClick",a)},stockChange:function(e,i){var r=this,n=r._stocks[e],s=n.stocks&&n.stocks[i],a=t.mix({target:s,currentTarget:s,lineIndex:Math.round(e),stockIndex:Math.round(i)},n.points[i]);r.fire("stockChange",a)},beforeRender:function(){var t=this;t.fire("beforeRender",t)},afterRender:function(){var t=this;t.fire("afterRender",t)},getPaper:function(){return this.htmlPaper},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")},destroy:function(){this.unbindEvt(),this.clear()}}),b},{requires:["base","gallery/template/1.0/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index","gallery/kcharts/1.2/animate/index","gallery/kcharts/1.2/tools/graphtool/index"]});