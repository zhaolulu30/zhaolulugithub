(function(){var be=NEJ.P,bu=be("nm.w");var HotList=bu.mD.extend({config:function(){this.data.url="/store/api/hotcommonProduct/gets";this.data.isShowFilter=false;this.data.isNeedLazyLoad=true},formatList:function(result){if(result.code===200){var zp=result.data.allProduct||[],bji=this.data.ad,Uh=zp.length,QJ=[],bV=0;for(bV;bV<Uh;bV++){if(zp[bV].specialType===17||zp[bV].specialType===16){}else{QJ[bV]=zp[bV]}}return QJ}}});bu.Uf=HotList})();
(function(){var be=NEJ.P,bu=be("nm.w");var Slider=bu.eR.extend({template:"#slider",init:function(){this.autoPlay()},config:function(data){if(!data.active){data.active=0}},nav:function(active){var data=this.data;var len=data.items.length;data.active=(active+len)%len;this.$emit("play",data.items[data.active])},autoPlay:function(){setInterval(function(){if(this.data.isAuto){var data=this.data;var len=data.items.length;data.active=(data.active||0+len)%len;if(len-1>=data.active){data.active++;data.active=(data.active+len)%len}this.$update();this.$emit("play",data.items[data.active])}}.bind(this),2e3)},goOnAction:function(){this.data.isAuto=true},stopAction:function(){this.data.isAuto=false}});bu.TO=Slider})();
(function(){var be=NEJ.P,bd=be("nej.e"),bm=be("nej.v"),bj=be("nej.u"),bU=be("nej.ut"),bA=be("nej.j"),bM=be("nm.d"),bl=be("nm.x"),bL=be("nm.m"),bu=be("nm.w"),bF=be("nm.l"),bf,cg;bL.dq=NEJ.C();bf=bL.dq.bY(bL.en);bf.cR=function(){this.dc();this.cs=detailJson||{};this.bjn=true;this.bkn=[];this.ed();this.TN=bd.bK("recmd-list");this.TL=bd.bK("hot-list");this.TJ();this.TB();this.Tz();this.hj=bu.gD.bO({num:this.cs.validNum||0,isLogin:this.cs.isLogin||0});bm.bT(document.body,"click",this.cD.bn(this));bm.bT(this.TN,"click",this.Ty.bn(this));bm.bT(this.TL,"click",this.Tr.bn(this));bm.bT(window,"scroll",function(bg){this.Qv=bd.bK("m-top");var gG=document.body.scrollTop||document.documentElement.scrollTop;if(gG>310){bd.iH(this.Qv,{position:"fixed",top:"50%",marginTop:"-138px"})}else{bd.iH(this.Qv,{position:"absolute",top:"674px",marginTop:"0",bottom:"auto"})}}.bn(this));bm.bT(window,"scroll",this.bks.bn(this));this.bkr();this.bkq()};bf.ed=function(){this.fj=new bu.fi({data:{avatarUrl:this.cs.avatarUrl||"",isLogin:this.cs.isLogin||"false"}})};bf.TJ=function(){bA.cn("/store/api/product/ipbanner",{query:"type=0",type:"json",onload:function(dJ){if(dJ.code===200){this.Tp(dJ)}}.bn(this),onerror:function(){}})};bf.Tp=function(dJ){var slider=(new bu.TO({data:{theme:'<a class="f-pa" data-action="gobanner" href="{item.url}" target="_blank">'+'<img src="{item.picStr}" alt="banners"/></a>',items:dJ.banners,isAuto:true}})).$inject("#n-banner");var len=dJ.banners.length,index=0;slider.$on("play",function(data){if(index>len)return;bannerImpress(data);index++});function bannerImpress(data){bl.cN("impress",{type:"mallbanner",id:data.id,url:data.href,position:data.position})}};bf.bjx=function(){this.PZ=document.body.clientWidth||top.document.documentElement.clientWidth;this.PY=this.eY[0];this.FX=bd.fh(this.PY);for(var bV=0,gr=this.FX.length;bV<gr;bV++){bd.cr(this.FX[bV],"width",this.PZ+"px")}bd.cr(this.PY,"width",this.FX.length*this.PZ+"px")};bf.cD=function(bg){var bi=bm.cB(bg,"d:action"),ck=bd.bP(bi,"href");switch(bd.bP(bi,"action")){case"gobanner":var kF=bd.bP(bi,"pos");var bB=bd.bP(bi,"id");bl.cN("click",{type:"mallbanner",id:bB,url:ck,position:kF});break;case"gotopic":var bz=bd.bP(bi,"title"),jg=bd.bP(bi,"page");bl.cN("click",{type:bz,name:"mallhome",page:jg});location.href=ck;break;case"gocredit":if(this.cs.isLogin==="1"){bl.cN("click",{type:"creditmall",name:"mallhome"});location.href="/store/credit/index"}else{location.href="/login?targetUrl="+encodeURIComponent(location.href)}break;case"gosub":var bB=bd.bP(bi,"id"),fH=bd.bP(bi,"position");bl.cN("click",{type:"topic",position:fH,id:bB,name:"mallhome"});break;case"godigalb":bl.cN("click",{type:"album",name:"mallhome"});window.open(ck);break;case"gofootbanner":var fH=bd.bP(bi,"position");bl.cN("click",{type:"bottombanner",position:fH,name:"mallhome"});break}};bf.Ty=function(bg){var bi=bm.cB(bg,"d:action"),ck=bd.bP(bi,"href"),bB=bd.bP(bi,"id"),fH=bd.bP(bi,"position");var bko=Math.ceil((parseInt(fH)+1)/4);switch(bd.bP(bi,"action")){case"card":bl.cN("click",{type:"recommendgoods",id:bB||0,position:fH,name:"mallhome",row:bko});break;case"adclick":bl.cN("click",{type:"recommendgoods",url:ck||0,position:fH,name:"mallhome"});setTimeout(function(){location.href=ck},100);break}};bf.Tr=function(bg){var bi=bm.cB(bg,"d:action"),ck=bd.bP(bi,"href"),bB=bd.bP(bi,"id"),fH=bd.bP(bi,"position");var bko=Math.ceil((parseInt(fH)+1)/4);switch(bd.bP(bi,"action")){case"card":bl.cN("click",{type:"hotgoods",id:bB||0,name:"mallhome",row:bko});break;case"adclick":bl.cN("click",{type:"hotgoods",url:ck||0,position:fH,name:"mallhome"});setTimeout(function(){location.href=ck},100);break}};bf.TB=function(){if(!this.uC){this.uC=new bu.Pp;this.uC.$inject("#recmd-list")}};bf.Tz=function(){var FY=null,fW=24;var FY=null;if(detailJson.ads&&detailJson.ads["60_0"]){FY=detailJson.ads["60_0"]}if(!this.Og){this.Og=new bu.Uf({data:{ad:FY,num:fW}});this.Og.$inject("#hot-list");setTimeout(function(){this.bkp()}.bn(this),200)}};bf.bkr=function(){bl.cN("impress",{type:"top_buttons",name:"mallhome"});bl.cN("impress",{type:"topic",id:this.cs.subjs.data[0].id,name:"mallhome"});bl.cN("impress",{type:"topic",id:this.cs.subjs.data[1].id,name:"mallhome"})};bf.bkq=function(){var info={type:"album",name:"mallhome"};var bi=bd.bK("digalb");info.top=bi.getBoundingClientRect().top;this.bkn.push(info)};bf.bkp=function(node){var nodes=!!node?node:bd.bS(this.bC,"j-statistics");var len=nodes.length;this.jCardNodesLength=this.jCardNodesLength?this.jCardNodesLength+len:len;for(var i=0;i<len;i=i+4){var info={};info.top=!!node?nodes[i].getBoundingClientRect().top+this.lastNodesTop:nodes[i].getBoundingClientRect().top;if(i>7){info.type="hotgoods"}else{info.type="recommendgoods"}info.name="mallhome";info.id=bd.bP(nodes[i],"id");if(!info.id){info.url=bd.bP(nodes[i],"destination")}info.position=bd.bP(nodes[i],"position");info.row=Math.ceil((parseInt(info.position)+1)/4);this.bkn.push(info)}var lastNodeInfo=this.bkn.pop();this.lastNodesTop=lastNodeInfo.top};bf.bks=function(argument){var scrollBody=document.body||document.documentElement,viewPortHeight=window.innerHeight||document.documentElement.clientHeight;if(this.timeOut)clearTimeout(this.timeOut);var nodes=bd.bS(this.bC,"j-statistics");if(nodes.length>this.jCardNodesLength){nodes.splice(0,this.jCardNodesLength);this.bkp(nodes)}this.timeOut=setTimeout(function(){var i=0;this.bkn.forEach(function(info){if(scrollBody.scrollTop>info.top-viewPortHeight){i++;delete info.top;bl.cN("impress",info)}}.bn(this));this.bkn.splice(0,i)}.bn(this),100)};bd.eD("template-box");new bL.dq})()