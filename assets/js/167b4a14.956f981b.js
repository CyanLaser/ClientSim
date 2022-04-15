"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[9186],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return n?i.createElement(h,a(a({ref:t},l),{},{components:n})):i.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var i=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],o={id:"input",title:"Input",hide_title:!0},u="Input",p={unversionedId:"systems/runtime/input",id:"systems/runtime/input",title:"Input",description:"In ClientSim, all input calls are in one class to handle input and send events. The ClientSimInputManager uses the new Input System, allowing for event-driven input. It uses the PlayerInput component to gain access to the specific input events based on the Input Bindings displayed below. Since the new Unity Input System package is not included by default, and Unity requires a special setting to enable, all references to the Input System are wrapped in define conditions, which prevents errors when importing into new projects.",source:"@site/docs/systems/runtime/input.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/input",permalink:"/systems/runtime/input",editUrl:"https://github.com/vrchat-community/ClientSim/edit/main/Docs/Source/${docPath}",tags:[],version:"current",frontMatter:{id:"input",title:"Input",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"HighlightManager",permalink:"/systems/runtime/highlight-manager"},next:{title:"InteractiveLayerProvider",permalink:"/systems/runtime/interactive-layer-provider"}},l={},c=[{value:"Input Events",id:"input-events",level:2},{value:"Input Bindings",id:"input-bindings",level:2},{value:"UdonInput",id:"udoninput",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"input"},"Input"),(0,s.kt)("p",null,"In ClientSim, all input calls are in one class to handle input and send events. The ClientSimInputManager uses the new Input System, allowing for event-driven input. It uses the PlayerInput component to gain access to the specific input events based on the Input Bindings displayed below. Since the new Unity Input System package is not included by default, and Unity requires a special setting to enable, all references to the Input System are wrapped in define conditions, which prevents errors when importing into new projects."),(0,s.kt)("h2",{id:"input-events"},"Input Events"),(0,s.kt)("p",null,"Similar to the ",(0,s.kt)("a",{parentName:"p",href:"/systems/runtime/event-dispatcher"},"EventDispatcher"),", the InputManager also has its own Events that different systems can listen to directly. These events are separated from the EventDispatcher itself because all input events have similar parameters and also has input values that are not broadcasted through events but require the listening system to poll for updated axis values."),(0,s.kt)("h2",{id:"input-bindings"},"Input Bindings"),(0,s.kt)("p",null,"The Input System also allows for different bindings for various control schemes. See below for the included bindings: KeyboardMouse, Gamepad, and Experimental XR Controller bindings. Note that XR input bindings within the InputSystem are very limited in Unity 2019. The InputManager will need to be expanded to properly support various VR Controllers"),(0,s.kt)("h2",{id:"udoninput"},"UdonInput"),(0,s.kt)("p",null,"The UdonInput system is part of the InputManager Prefab, which subscribes to the proper events in the InputManager and also polls for updates on movement and look-based inputs. Due to the timing of when Unity sends input events, and when Udon should receive input events, all button-based input is queued and processed later in the frame at the same time as movement and look-based input. This queuing and processing allows input events to happen after Udon\u2019s update method is called, similar to how it is in VRChat."))}m.isMDXComponent=!0}}]);