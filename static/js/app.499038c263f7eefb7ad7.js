webpackJsonp([1],{"2BRN":function(t,e){},FwkA:function(t,e){},GK12:function(t,e){},MlNz:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Calculator"}}},[this._v("\n      Calculator\n    ")]),this._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Disclaimer"}}},[this._v("\n      Disclaimer\n    ")]),this._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"About"}}},[this._v("\n      About\n    ")]),this._v(" "),this._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])}]};var n={name:"App",components:{TopNav:o("VU/8")({name:"TopNav"},s,!1,function(t){o("NYq+")},"data-v-5cd7457a",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TopNav"),this._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("router-view")],1)])],1)},staticRenderFns:[]};var i=o("VU/8")(n,r,!1,function(t){o("2BRN")},null,null).exports,l=o("fZjL"),c=o.n(l),u=o("NYxO");a.a.use(u.a);var d=new u.a.Store({strict:!0,state:{amount:1e3,selectedPortfolioType:"moderate",loaded:!1,portfolios:{},changedValues:{}},mutations:{setState:function(t,e){var o=e.key,a=e.value;t[o]=a},setChangedValues:function(t,e){var o=e.key,s=e.value;a.a.set(t.changedValues,o,s)}},getters:{totalChanged:function(t){return c()(t.changedValues).reduce(function(e,o){return e+t.changedValues[o]},0)},totalChangedPercent:function(t,e){return(e.totalChanged-t.amount)/t.amount}}}),v=o("/ocq"),m=o("ViqS"),p=o.n(m);function f(t){switch(t){case"conservative":return{VOO:.12,VB:.02,VWO:0,VNQ:.02,SHY:.4,LQD:.4,VEA:.04};case"moderateConservative":return{VOO:.24,VB:.04,VWO:0,VNQ:.04,SHY:.3,LQD:.3,VEA:.08};case"moderate":return{VOO:.29,VB:.1,VWO:.03,VNQ:.06,SHY:.2,LQD:.2,VEA:.12};case"moderateAggressive":return{VOO:.38,VB:.14,VWO:.04,VNQ:.08,SHY:.1,LQD:.1,VEA:.16};case"aggressive":return{VOO:.4,VB:.2,VWO:.1,VNQ:.1,SHY:0,LQD:0,VEA:.2}}}var h={name:"PortfolioItemContainer",props:["label","symbol","portfolioType","amount","portfolios"],data:function(){return{}},beforeUpdate:function(){},computed:{amountChanged:function(){var t=this.amountAllocated+this.amountAllocated*this.percentChanged;return this.$store.commit("setChangedValues",{key:this.symbol,value:t}),t},allocationPercentage:function(){return f(this.portfolioType)[this.symbol]},amountAllocated:function(){return this.amount*this.allocationPercentage},percentChanged:function(){return this.$props.portfolios[this.symbol].stats.year1ChangePercent},totalChange:function(){return this.amountChanged-this.amountAllocated},symbolLink:function(){return"https://www.barchart.com/etfs-funds/quotes/"+this.symbol}},filters:{currency:function(t){return p()(Math.abs(t)).format("$0,0.00")},percentage:function(t){return p()(Math.abs(t)).format("0.00%")},percentageShort:function(t){return p()(Math.abs(t)).format("0%")}}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),o("td",[o("a",{attrs:{href:t.symbolLink}},[t._v("\n    "+t._s(t.symbol)+"\n    ")])]),t._v(" "),o("td",{staticClass:"has-sign",class:t.percentChanged>0?"positive":"negative"},[t._v("\n    "+t._s(t._f("percentage")(t.percentChanged))+"\n  ")]),t._v(" "),o("td",[t._v("\n    "+t._s(t._f("percentageShort")(t.allocationPercentage))+"\n  ")]),t._v(" "),o("td",[t._v("\n    "+t._s(t._f("currency")(t.amountAllocated))+"\n  ")]),t._v(" "),o("td",{class:t.amountChanged==t.amountAllocated?"":t.amountChanged>t.amountAllocated?"positive":"negative"},[t._v("\n    "+t._s(t._f("currency")(t.amountChanged))+"\n  ")]),t._v(" "),o("td",{staticClass:"has-sign",class:0==t.totalChange?"":t.totalChange>0?"positive":"negative"},[t._v("\n    "+t._s(t._f("currency")(t.totalChange))+"\n  ")])])},staticRenderFns:[]};var g,y=o("VU/8")(h,_,!1,function(t){o("MlNz")},"data-v-3d9a03a8",null).exports,C=o("Xxa5"),b=o.n(C),P=o("exGp"),T=o.n(P),$=o("mtWM"),V=o.n($),k=(g=T()(b.a.mark(function t(){var e;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=voo,vb,vwo,vnq,shy,lqd,vea&types=stats");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)})),function(){return g.apply(this,arguments)}),A={name:"Calulator",components:{PortfolioItem:y},data:function(){return{}},created:function(){var t=this;k().then(function(e){t.$store.commit("setState",{key:"portfolios",value:e}),t.$store.commit("setState",{key:"loaded",value:!0})}),console.log(f(this.$store.state.selectedPortfolioType))},methods:{setValue:function(t,e){this.$store.commit("setValues",{key:t,value:e})}},computed:{amount:{get:function(){return this.$store.state.amount},set:function(t){this.$store.commit("setState",{key:"amount",value:t})}},selectedPortfolioType:{get:function(){return this.$store.state.selectedPortfolioType},set:function(t){this.$store.commit("setState",{key:"selectedPortfolioType",value:t})}}},filters:{currency:function(t){return p()(t).format("$0,0.00")},percentage:function(t){return p()(t).format("0.00%")}}},E={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$store.state.loaded?o("div",[o("div",{staticClass:"is-size-3 center"},[t._v("\n    Starting with\n    "),o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"input is-large",attrs:{type:"number",placeholder:"1000"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v("\n    allocated using the\n    "),o("div",{staticClass:"control portfolios"},[o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPortfolioType,expression:"selectedPortfolioType"}],attrs:{type:"radio",id:"conservative",value:"conservative"},domProps:{checked:t._q(t.selectedPortfolioType,"conservative")},on:{change:function(e){t.selectedPortfolioType="conservative"}}}),t._v("\n        Conservative\n      ")]),t._v(" "),o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPortfolioType,expression:"selectedPortfolioType"}],attrs:{type:"radio",id:"moderateConservative",value:"moderateConservative"},domProps:{checked:t._q(t.selectedPortfolioType,"moderateConservative")},on:{change:function(e){t.selectedPortfolioType="moderateConservative"}}}),t._v("\n        Moderate Conservative\n      ")]),t._v(" "),o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPortfolioType,expression:"selectedPortfolioType"}],attrs:{type:"radio",id:"moderate",value:"moderate"},domProps:{checked:t._q(t.selectedPortfolioType,"moderate")},on:{change:function(e){t.selectedPortfolioType="moderate"}}}),t._v("\n        Moderate\n      ")]),t._v(" "),o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPortfolioType,expression:"selectedPortfolioType"}],attrs:{type:"radio",id:"moderateAggressive",value:"moderateAggressive"},domProps:{checked:t._q(t.selectedPortfolioType,"moderateAggressive")},on:{change:function(e){t.selectedPortfolioType="moderateAggressive"}}}),t._v("\n        Moderate Aggressive\n      ")]),t._v(" "),o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPortfolioType,expression:"selectedPortfolioType"}],attrs:{type:"radio",id:"aggressive",value:"aggressive"},domProps:{checked:t._q(t.selectedPortfolioType,"aggressive")},on:{change:function(e){t.selectedPortfolioType="aggressive"}}}),t._v("\n        Aggressive\n      ")])]),t._v("\n    Acorns portfolio after 1 year returns:\n  ")]),t._v(" "),o("div",{staticClass:"center results"},[o("div",{staticClass:"is-size-2"},[t._v("\n      "+t._s(t._f("currency")(t.$store.getters.totalChanged))+"\n      "),o("router-link",{attrs:{to:{name:"Disclaimer"}}},[t._v("\n        *\n      ")])],1),t._v(" "),o("div",{staticClass:"is-size-4"},[o("span",{staticClass:"has-sign",class:t.$store.getters.totalChanged-t.$store.state.amount>0?"positive":"negative"},[t._v("\n  "+t._s(t._f("currency")(t.$store.getters.totalChanged-t.$store.state.amount))+",\n  ")]),t._v(" "),o("span",{staticClass:"has-sign",class:t.$store.getters.totalChangedPercent>0?"positive":"negative"},[t._v("\n  "+t._s(t._f("percentage")(t.$store.getters.totalChangedPercent))+"\n  ")])])]),t._v(" "),o("div",{staticClass:"center"},[o("table",{staticClass:"table is-hoverable"},[t._m(1),t._v(" "),o("tbody",[o("PortfolioItem",{attrs:{label:"Large Company Stocks",symbol:"VOO",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}}),t._v(" "),o("PortfolioItem",{attrs:{label:"Small Company Stocks",symbol:"VB",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}}),t._v(" "),o("PortfolioItem",{attrs:{label:"Emerging Market Stocks",symbol:"VWO",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}}),t._v(" "),o("PortfolioItem",{attrs:{label:"Real Estate Stocks",symbol:"VNQ",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}}),t._v(" "),o("PortfolioItem",{attrs:{label:"Government Bonds",symbol:"SHY",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}}),t._v(" "),o("PortfolioItem",{attrs:{label:"Corporate Bonds",symbol:"LQD",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}}),t._v(" "),o("PortfolioItem",{attrs:{label:"Intl Large Company Stocks",symbol:"VEA",portfolioType:t.$store.state.selectedPortfolioType,amount:t.$store.state.amount,portfolios:t.$store.state.portfolios}})],1)])])]):o("div",[o("progress",{staticClass:"progress is-large",attrs:{value:"60",max:"100"}},[t._v("60%")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-dollar-sign"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("th",[t._v("\n        Holdings Type\n      ")]),t._v(" "),o("th",[t._v("\n        ETF Symbol\n      ")]),t._v(" "),o("th",[t._v("\n        ETF 1 Year Change %\n      ")]),t._v(" "),o("th",[o("abbr",{attrs:{title:"Percentage amount of your total allocation used for this ETF"}},[t._v("\n          Allocation %\n        ")])]),t._v(" "),o("th",[o("abbr",{attrs:{title:"Dollar amount of your total allocation used for this ETF"}},[t._v("\n          Allocation $\n        ")])]),t._v(" "),o("th",[o("abbr",{attrs:{title:"Dollar amount your allocation changed for this ETF"}},[t._v("\n          1 Year Change $\n        ")])]),t._v(" "),o("th",[o("abbr",{attrs:{title:"Percentage amount your allocation changed for this ETF"}},[t._v("\n          1 Year Change %\n        ")])])])}]};var N=o("VU/8")(A,E,!1,function(t){o("Npgt")},"data-v-75311692",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-offset-2 is-8"},[e("p",{staticClass:"is-size-5"},[this._v("\n      These calculations are extremely naive and simply split the allocated amount\n      between the various ETFs and calculate the P/L for each time. The values provided are supposed\n      to give a ball park estimate performance for each Acorns portfolio type for the given timeframe.\n      "),e("strong",[this._v("The calculations do not take the Acorns fee, dividends, additional roundups\n        or contributions, or any other magic or services Acorns provides its customers "),e("em",[this._v("into account in any way")]),this._v(".")]),this._v(" The\n      calculations presented here will differ from the amount returned from Acorns for the given time period.\n    ")])])])}]};var S=o("VU/8")({name:"Disclaimer"},w,!1,function(t){o("FwkA")},"data-v-701191ac",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-offset-2 is-8"},[o("p",[t._v("\n      ETF information provided by "),o("a",{attrs:{href:"https://iextrading.com/developer/docs/"}},[t._v("IEX's API")]),t._v(".\n    ")]),t._v(" "),o("p",[t._v("\n      Built using Vuejs and Bulma css.\n    ")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/andyklimczak/portfolio-calculator"}},[t._v("Code on GitHub")])]),t._v(" "),o("p",[t._v("\n      If you would like to join Acorns, here is my "),o("a",{attrs:{href:"https://acorns.com/invite/74Q9PR"}},[t._v("referral link")]),t._v(".\n      But definitely do not feel obligated to use it.\n    ")])])])}]};var O=o("VU/8")({name:"About"},x,!1,function(t){o("Oh9k")},"data-v-93f8d06a",null).exports;a.a.use(v.a);var F=new v.a({routes:[{path:"/",name:"Calculator",component:N},{path:"/disclaimer",name:"Disclaimer",component:S},{path:"/about",name:"About",component:O}]});o("GK12");a.a.config.productionTip=!1,new a.a({el:"#app",router:F,components:{App:i},template:"<App/>",store:d})},"NYq+":function(t,e){},Npgt:function(t,e){},Oh9k:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.499038c263f7eefb7ad7.js.map