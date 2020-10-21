(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(92)),o={id:"environment-variables",title:"Environment Variables",sidebar_label:"Environment Variables",slug:"/environment-variables"},l={unversionedId:"environment-variables",id:"environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"Environment variables can be specified via the command line on deploy and made available to your Rails app when it starts. By default, Kuby will automatically copy over any environment variable that begins with RAILS, eg. RAILSSERVESTATICFILES, RAILSCACHEID, etc.",source:"@site/docs/environment_variables.md",slug:"/environment-variables",permalink:"/docs/environment-variables",editUrl:"https://github.com/getkuby/kuby-core/edit/master/docs/docs/environment_variables.md",version:"current",sidebar_label:"Environment Variables",sidebar:"sidebar",previous:{title:"Customizing Kubernetes Resources",permalink:"/docs/customizing-kubernetes-resources"},next:{title:"Managing Secrets",permalink:"/docs/managing-secrets"}},c=[{value:"Custom Environment Variables",id:"custom-environment-variables",children:[]}],s={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Environment variables can be specified via the command line on deploy and made available to your Rails app when it starts. By default, Kuby will automatically copy over any environment variable that begins with ",Object(i.b)("inlineCode",{parentName:"p"},"RAILS_"),", eg. ",Object(i.b)("inlineCode",{parentName:"p"},"RAILS_SERVE_STATIC_FILES"),", ",Object(i.b)("inlineCode",{parentName:"p"},"RAILS_CACHE_ID"),", etc."),Object(i.b)("h2",{id:"custom-environment-variables"},"Custom Environment Variables"),Object(i.b)("p",null,"You can specify additional key/value pairs by adding them in your Kuby config. Since Kuby config is just Ruby, you're free to pull in environment variables, specify static values, etc. All the key/value pairs you specify will show up as environment variables available to your app when it starts."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"Kuby.define('my-app') do\n  environment(:production) do\n    plugin(:rails_app) do\n      env do\n        add 'MY_ENV_VAR', ENV['MY_ENV_VAR']\n        add 'MY_STATIC_ENV_VAR', '123abc'\n      end\n    end\n  end\nend\n")),Object(i.b)("p",null,"Set ",Object(i.b)("inlineCode",{parentName:"p"},"MY_ENV_VAR")," via the command line when running ",Object(i.b)("inlineCode",{parentName:"p"},"kuby deploy")," like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"MY_ENV_VAR='some value' bundle exec kuby -e production deploy\n")))}u.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return t?a.a.createElement(d,l(l({ref:n},s),{},{components:t})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);