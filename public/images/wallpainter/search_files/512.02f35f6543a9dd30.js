(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{470:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/spin.6ffd8bb2.svg",height:38,width:38}},6512:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(5893),n=s(1664),i=s.n(n);s(5675);var r=s(2240),o=s.n(r),l=s(8798);s(4571);var c=s(7294),h=function(e){let{searchType:t}=e,[s,n]=(0,c.useState)("default");return(0,c.useState)(()=>{},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:o().header,children:(0,a.jsxs)("div",{className:o().headerHolder,children:[(0,a.jsx)(i(),{href:"/",style:{display:"open"==s?"none":"auto"},children:(0,a.jsx)("span",{className:o().logoHolder,children:(0,a.jsx)("img",{className:o().logo,src:"/logo.svg",width:73,height:22,alt:"SVG Repo - Search, explore, edit and share open licensed SVG vectors"})})}),(0,a.jsx)(l.Z,{searchType:t,mobileSearchState:s}),(0,a.jsxs)("ul",{className:o().menuMobile,style:{display:"open"==s?"none":"auto"},children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{legacyBehavior:!0,href:"/saved/",alt:"Saved Vectors",title:"Saved Vectors",children:(0,a.jsx)("a",{alt:"Saved Vectors",title:"Saved Vectors",children:(0,a.jsx)("svg",{style:{position:"relative",top:5,marginLeft:5,marginRight:5},width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{onClick:()=>n("open"),children:(0,a.jsx)("svg",{style:{position:"relative",top:5,marginLeft:5,marginRight:5},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"21",height:"21",fill:"#333",children:(0,a.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})})})})]}),(0,a.jsxs)("ul",{className:o().menu,children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/collections/",children:"Vector Collections"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{legacyBehavior:!0,href:"/saved/",alt:"Saved Vectors",title:"Saved Vectors",children:(0,a.jsx)("a",{alt:"Saved Vectors",title:"Saved Vectors",children:(0,a.jsx)("svg",{style:{position:"relative",top:5,marginLeft:5,marginRight:5},width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})})})]})]})}),(0,a.jsx)("div",{className:o().headerSpacer})]})}},8798:function(e,t,s){"use strict";var a=s(4924),n=s(5893),i=s(7294),r=s(1664),o=s.n(r),l=s(5675),c=s.n(l),h=s(1163),d=s.n(h),p=s(3347),m=s.n(p);class u extends i.Component{componentDidMount(){this.onCMDK=e=>{e.keyCode>=65&&e.keyCode<=90&&(e.metaKey||e.ctrlKey)&&75==e.keyCode&&(e.preventDefault(),this.refs._searchInput.focus())},window.addEventListener("keydown",this.onCMDK,!1),this.isMacLike=/(Mac|iPhone|iPod|iPad)/i.test(window.navigator.platform),this.setState({isMacLike:this.isMacLike}),this.props.isHome}componentWillUnmount(){window.removeEventListener("keydown",this.onCMDK,!1)}componentDidUpdate(e){this.props.mobileSearchState!==e.mobileSearchState&&"open"==this.props.mobileSearchState&&this.refs._searchInput.focus()}handleTermChange(e){this.setState({inputValue:e}),clearTimeout(this.timeout),e.length>1&&e!=this.state.term&&(this.setState({searching:!this.state.searchType}),this.timeout=setTimeout(()=>{this.setState({term:e,searching:!this.state.searchType}),this.searchTerm(e)},300)),0==e.length&&this.setState({term:e,searching:!1,recommendation:null})}handleKeyDown(e){8==(e.keyCode||e.charCode)&&""==this.refs._searchInput.value&&this.setState({searchType:!1})}searchTerm(e){this.state.searchType||fetch("https://api.svgrepo.com/term/".concat(e)).then(e=>e.json()).then(e=>{e.sort((e,t)=>e.title.length-t.title.length),this.setState({searching:!1,recommendation:e})})}handleSubmit(e){this.setState({searching:!1,recommendation:null});let t=this.refs._searchInput.value.toLowerCase();(t.endsWith("-")||t.endsWith(" "))&&(t=t.substr(0,t.length-1)),this.handleSearchEnd(t);let s=t.replace(/ /g,"-");"collection"==this.state.searchType?s?d().push("".concat(d().asPath.split("?")[0],"?search=").concat(s)):d().push("".concat(d().asPath.split("?")[0])):"collections"==this.state.searchType?d().push("/collections/".concat(s,"/")):d().push("/vectors/".concat(s,"/")),e.preventDefault()}handleSearchEnd(e){clearTimeout(this.timeout),setTimeout(()=>{this.setState({term:"",searching:!1,recommendation:null})},100),this.refs._searchInput.value=e}clearCollectionSearch(){this.setState({searchType:!1}),this.refs._searchInput.focus()}handleBlur(){clearTimeout(this.timeout),this.setState({recommendationOpacity:0}),setTimeout(()=>{this.setState({recommendationOpacity:1,recommendation:null,searching:!1})},300)}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:this.props.isHome?m().searchHolderHome:m().searchHolder,style:{display:"open"==this.props.mobileSearchState?"block":"auto"},children:(0,n.jsxs)("div",{className:m().search,children:[0==this.state.term.length&&(0,n.jsxs)("div",{className:m().pressEnter,children:[this.state.isMacLike?(0,n.jsx)("small",{style:{fontSize:12},children:"⌘"}):(0,n.jsx)("span",{children:"CTRL"})," + K"]}),this.state.term.length>1&&(0,n.jsx)("div",{className:m().pressEnter,children:this.state.searchType?"PRESS ENTER":"PRESS ENTER FOR MORE"}),(0,n.jsxs)("div",{className:this.state.searchType?m().searchIndicatorCollection:m().searchIndicator,children:[(0,n.jsx)("svg",{alt:"Search",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",style:{transform:this.state.searching?"scale(0)":"scale(1)"},children:(0,n.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})}),(0,n.jsx)(c(),{src:s(470),alt:"Searching",width:21,height:21,style:{opacity:this.state.searching?1:0}}),this.state.searchType&&(0,n.jsxs)("span",{onClick:()=>this.clearCollectionSearch(),children:[this.state.searchType," ",(0,n.jsx)("span",{style:{fontWeight:500},children:"\xd7"})]})]}),(0,n.jsxs)("form",{onSubmit:e=>this.handleSubmit(e),children:[(0,n.jsx)("input",{className:this.state.recommendation?m().inputWithRecommendations:m().input,type:"text",placeholder:"Search for vectors and icons...",defaultValue:this.state.term,onChange:e=>this.handleTermChange(e.target.value),onKeyDown:e=>this.handleKeyDown(e),onFocus:e=>this.handleTermChange(e.target.value),onBlur:e=>this.handleBlur(),style:{textIndent:this.state.searchType?145:40},ref:"_searchInput"}),this.state.searchType&&""==this.state.inputValue&&(0,n.jsx)("div",{className:m().searchTypeIndicator,children:(0,n.jsxs)("span",{children:["Search in ",this.state.searchType,", ",(0,n.jsx)("b",{children:"Press ←"})," for general search"]})}),(0,n.jsx)("input",{type:"submit",style:{display:"none"}})]}),(0,n.jsx)("div",{className:""==this.state.term?m().recommendation:m().recommendationActive,style:{opacity:this.state.recommendationOpacity},children:this.state.recommendation&&(0,n.jsx)("ul",{className:m().recommendationListing,children:this.state.recommendation.map((e,t)=>(0,n.jsx)(o(),{legacyBehavior:!0,href:"/vectors/".concat(e.title.toLowerCase().replace(/ /g,"-"),"/"),children:(0,n.jsx)("a",{onClick:()=>this.handleSearchEnd(e.title),children:(0,n.jsxs)("li",{children:[e.title[0].toUpperCase()+e.title.substr(1)," ",(0,n.jsxs)("span",{children:[e.count," vector",1!=e.count?"s":""]})]})})},"search-"+t))})})]})})})}constructor(...e){super(...e),(0,a.Z)(this,"state",{inputValue:"",term:"",searching:!1,recommendation:null,recommendationOpacity:1,searchType:this.props.searchType,isMacLike:!1})}}t.Z=u},4571:function(e,t,s){"use strict";s.d(t,{t3:function(){return h}});var a=s(9729),n=s.n(a),i=s(6803),r=s.n(i),o=s(3454);let l={dataset:"production",projectId:"yy2m8799",useCdn:!0,apiVersion:"2021-10-21"},c=n()(l),h=r()(c);n()({...l,useCdn:!1,token:o.env.SANITY_API_TOKEN})},2240:function(e){e.exports={header:"style_header__lTCx7",logo:"style_logo__gz2Sh",logoHolder:"style_logoHolder__3izgA",logoHolderDark:"style_logoHolderDark__TlmeS",headerHolder:"style_headerHolder__1WdsD",headerContentHolder:"style_headerContentHolder__1cLX0",menuMobile:"style_menuMobile__TV3LS",menu:"style_menu__vWKtz",dropdown:"style_dropdown__prAqS",dropdownHolder:"style_dropdownHolder__dvS45",dropdownContent:"style_dropdownContent__78BjN",dropdownInner:"style_dropdownInner__xURzT",dropdownFooter:"style_dropdownFooter__52qsR",dropdownImage:"style_dropdownImage__VhDsn",seeAll:"style_seeAll__UG_8h",headerSpacer:"style_headerSpacer__wNj8n"}},3347:function(e){e.exports={searchHolder:"style_searchHolder___4aSi",search:"style_search__GBeSD",inputWithRecommendations:"style_inputWithRecommendations__8QmVa",recommendation:"style_recommendation__bGo0A",recommendationListing:"style_recommendationListing__l_8ep",searchIndicator:"style_searchIndicator__lpNtj",searchIndicatorCollection:"style_searchIndicatorCollection__Bh3fM",pressEnter:"style_pressEnter__EhBZp",searchHolderHome:"style_searchHolderHome__ezSZI",searchTypeIndicator:"style_searchTypeIndicator__GB0lY"}},4924:function(e,t,s){"use strict";function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,{Z:function(){return a}})}}]);