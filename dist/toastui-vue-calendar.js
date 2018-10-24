!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("tui-calendar")):"function"==typeof define&&define.amd?define(["tui-calendar"],t):"object"==typeof exports?exports.toastui=t(require("tui-calendar")):e.toastui=t(e.tui.Calendar)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"tuiCalendar"})};r._withStripped=!0;var i=n(0),a=n.n(i),o=["afterRenderSchedule","beforeCreateSchedule","beforeDeleteSchedule","beforeUpdateSchedule","clickDayname","clickSchedule","clickTimezonesCollapseBtn"],s=["start","category"];var u=function(e,t,n,r,i,a,o,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}({name:"ToastUICalendar",props:{calendars:{type:Array,default:function(){return[]}},schedules:{type:Array,default:function(){return[]},validator:function(e){var t=!1;return e.forEach(function(e){t=s.some(function(t){return!e.hasOwnProperty(t)})}),!t}},view:{type:String,default:function(){return"week"}},taskView:{type:[Boolean,Array],default:function(){return!0}},scheduleView:{type:[Boolean,Array],default:function(){return!0}},theme:{type:Object,default:function(){return{}}},template:{type:Object,default:function(){return{}}},week:{type:Object,default:function(){return{}}},month:{type:Object,default:function(){return{}}},useCreationPopup:{type:Boolean,default:function(){return!0}},useDetailPopup:{type:Boolean,default:function(){return!0}},timezones:{type:Array,default:function(){return[]}},disableDblClick:{type:Boolean,default:function(){return!1}},isReadOnly:{type:Boolean,default:function(){return!1}}},watch:{calendars:function(e){this.calendarInstance.setCalendars(e)},schedules:function(){this.calendarInstance.clear(),this.reflectSchedules()},view:function(e){this.calendarInstance.changeView(e,!0)},taskView:function(e){this.calendarInstance.setOptions({taskView:e})},scheduleView:function(e){this.calendarInstance.setOptions({scheduleView:e})},theme:{handler:function(e){this.calendarInstance.setTheme(e)},deep:!0},week:{handler:function(e){var t="week"!==this.view&&"day"!==this.view;this.calendarInstance.setOptions({week:e},t)},deep:!0},month:{handler:function(e){var t="month"!==this.view;this.calendarInstance.setOptions({month:e},t)},deep:!0},timezones:function(e){this.calendarInstance.setOptions({timezones:e})},disableDblClick:function(e){this.calendarInstance.setOptions({disableDblClick:e})},isReadOnly:function(e){this.calendarInstance.setOptions({isReadOnly:e})}},data:function(){return{calendarInstance:null}},mounted:function(){this.calendarInstance=new a.a(this.$refs.tuiCalendar,{defaultView:this.view,taskView:this.taskView,scheduleView:this.scheduleView,theme:this.theme,template:this.template,week:this.week,month:this.month,calendars:this.calendars,useCreationPopup:this.useCreationPopup,useDetailPopup:this.useDetailPopup,timezones:this.timezones,disableDblClick:this.disableDblClick,isReadOnly:this.isReadOnly}),this.addEventListeners(),this.reflectSchedules()},destroyed:function(){var e=this;o.forEach(function(t){return e.calendarInstance.off(t)}),this.calendarInstance.destroy()},methods:{addEventListeners:function(){var e=this;o.forEach(function(t){e.calendarInstance.on(t,function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.$emit.apply(e,[t].concat(r))})})},reflectSchedules:function(){this.schedules.length>0&&this.invoke("createSchedules",this.schedules)},getRootElement:function(){return this.$refs.tuiCalendar},invoke:function(e){var t;if(this.calendarInstance[e]){for(var n,r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t=(n=this.calendarInstance)[e].apply(n,i)}return t}}},r,[],!1,null,null,null);u.options.__file="src/Calendar.vue";var c=u.exports;n.d(t,"Calendar",function(){return c})}])});