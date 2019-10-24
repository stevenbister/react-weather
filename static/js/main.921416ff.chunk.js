(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{11:function(e,t,a){},23:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},29:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=(a(28),a(1)),o=a(2),l=a(4),u=a(3),m=a(7),h=a(5),d=(a(11),a(29),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"grid-row"},r.a.createElement("form",{className:"grid-cell form-search",onSubmit:this.props.onSubmit},r.a.createElement("label",{htmlFor:"search"},"Search for your city"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"search",type:"text",name:"search",placeholder:"Search for your city...",onChange:this.handleChange,value:this.state.value}),r.a.createElement("input",{type:"submit",value:"Search"}))))}}]),t}(r.a.Component)),p=a(9),b=a.n(p),f=a(21),v=a(22),g=a.n(v).a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather"}),j="dd6866086c793ca95487b4ee51f83cf5",O=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{className:"city"},this.props.cityName)}}]),t}(r.a.Component)),w=(a(49),a(8),{width:75,height:"auto"}),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.icon,t="".concat("/react-weather","/img/").concat(e,".svg");return r.a.createElement("div",{className:"grid-cell spans-12 weather-block"},r.a.createElement("img",{src:t,alt:"",style:w}),r.a.createElement("p",{className:"detail"},this.props.weather))}}]),t}(r.a.Component),E=(a(50),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{className:"temp"},this.props.temp,"\xb0C")}}]),t}(r.a.Component));var S=function(){return new Date(Date.now()).toDateString({day:"numeric",month:"long",hour:"numeric",minute:"2-digit"})},k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{className:"detail"},S())}}]),t}(r.a.Component),N={width:25,height:"auto",marginBottom:".5rem"},C={marginTop:0,marginBottom:".5rem"},T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="".concat("/react-weather","/img/").concat("wind",".svg");return r.a.createElement("div",null,r.a.createElement("img",{src:e,alt:"",style:N}),r.a.createElement("p",{className:"detail",style:C},"Wind Speed"),r.a.createElement("p",{style:C},this.props.windSpeed," m/s"))}}]),t}(r.a.Component),D={width:25,height:"auto",marginBottom:".5rem"},B={marginTop:0,marginBottom:".5rem"},L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).formatTimeString=a.formatTimeString.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"formatTimeString",value:function(e){var t=new Date(1e3*e),a=t.getHours(),n="0".concat(t.getMinutes());return"".concat(a,":").concat(n.substr(-2))}},{key:"render",value:function(){var e="Sunrise"===this.props.desc?"sunrise":"sunset",t="".concat("/react-weather","/img/").concat(e,".svg");return r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"",style:D}),r.a.createElement("p",{className:"detail",style:B},this.props.desc),r.a.createElement("p",{style:B},this.formatTimeString(this.props.sun)))}}]),t}(r.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).apiCall=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.searchTerm,"uk","metric",e.next=5,g.get("?q=".concat(t,",").concat("uk","&units=").concat("metric","&APPID=").concat(j)).then((function(e){return e.data})).then((function(e){a.setState({isLoaded:!0,error:null,items:e,city:e.name,weather:e.weather[0].description,weatherIcon:e.weather[0].icon,temp:e.main.temp,sunrise:e.sys.sunrise,sunset:e.sys.sunset,windSpeed:e.wind.speed})}),(function(e){a.setState({isLoaded:!0,error:e})}));case 5:case"end":return e.stop()}}),e)}))),a.state={error:null,isLoaded:!1,items:[],city:void 0,weather:void 0,weatherIcon:void 0,temp:void 0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"componentDidUpdate",value:function(e){this.props.searchTerm!==e.searchTerm&&this.apiCall()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.city,c=e.weather,i=e.weatherIcon,s=e.sunset,o=e.sunrise,l=e.windSpeed,u=Math.round(this.state.temp);return t?r.a.createElement("div",null,"Error: ",t.response.data.message):a?r.a.createElement("div",{className:"grid-row center"},r.a.createElement("div",{className:"grid-cell spans-12"},r.a.createElement(O,{cityName:n}),r.a.createElement(k,null)),r.a.createElement(y,{weather:c,icon:i}),r.a.createElement("div",{className:"grid-cell spans-12"},r.a.createElement(E,{temp:u})),r.a.createElement("div",{className:"grid-cell spans-4"},r.a.createElement(L,{sun:o,desc:"Sunrise"})),r.a.createElement("div",{className:"grid-cell spans-4"},r.a.createElement(L,{sun:s,desc:"Sunset"})),r.a.createElement("div",{className:"grid-cell spans-4"},r.a.createElement(T,{windSpeed:l}))):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).search=function(e){e.preventDefault(),a.setState({search:e.target.elements.search.value})},a.state={search:"Birmingham"},a.search=a.search.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},r.a.createElement(d,{onSubmit:this.search}),r.a.createElement(I,{searchTerm:this.state.search}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.921416ff.chunk.js.map