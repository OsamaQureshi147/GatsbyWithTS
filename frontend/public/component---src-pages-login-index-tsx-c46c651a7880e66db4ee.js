(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[526],{2512:function(e,t,a){"use strict";a.r(t);var r=a(2137),n=a(7757),c=a.n(n),o=a(7294),l=a(778),s=a(5313),i=a(4251),u=a(1939);t.default=function(){var e,t=(0,o.useState)(""),a=t[0],n=t[1],m=(0,o.useState)(""),p=m[0],d=m[1],g=(0,o.useState)(""),E=g[0],f=g[1],b=(0,l.useMutation)(u.lW,{onCompleted:(e=(0,r.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.signinUser,localStorage.setItem("token",a.token),(0,s.navigate)("/",{replace:!0}),f("");case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)}),onError:function(e){var t=e.networkError,a=e.graphQLErrors;t&&console.log("Network Error:",t.message),a&&a.map((function(e){var t=e.message;f(t),console.log("gQL Error",E)}))}}),v=b[0],w=(b[1].loading,function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v({variables:{email:a,password:p}});case 3:n(""),d("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return o.createElement(o.Fragment,null,o.createElement(i.Z,{title:"Recipe | Login"}),o.createElement("div",{className:"container"},o.createElement("div",{className:"background-image"}),o.createElement("div",{className:"login-container"},o.createElement("div",{className:"card-container"},o.createElement("form",{className:"form",onSubmit:w},o.createElement("h3",{id:"title"},"Login"),o.createElement("label",{className:"label"},"Email Address*"),o.createElement("input",{className:"input",type:"email",placeholder:"Enter Email",required:!0,value:a,onChange:function(e){return n(e.currentTarget.value)}}),o.createElement("label",{className:"label"},"Password*"),o.createElement("input",{className:"input",type:"password",placeholder:"Enter Password",value:p,required:!0,onChange:function(e){return d(e.currentTarget.value)}}),o.createElement("div",{className:"check-box-container"},o.createElement("input",{className:"check-box",type:"checkbox"}),o.createElement("label",null,"Remember me")),o.createElement("button",{className:"submit-button"},"Submit"),o.createElement("label",{className:"forgot-password"},"Forgot ",o.createElement("b",{style:{color:"gold"}},"Password?")))))))}},4251:function(e,t,a){"use strict";var r=a(7294),n=a(5414),c=a(5313);function o(e){var t,a=e.description,o=e.lang,l=e.meta,s=e.title,i=(0,c.useStaticQuery)("63159454").site,u=a||i.siteMetadata.description;return r.createElement(n.q,{htmlAttributes:{lang:o},title:s,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(t=i.siteMetadata)||void 0===t?void 0:t.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(l)})}o.defaultProps={lang:"en",meta:[],description:""},t.Z=o}}]);
//# sourceMappingURL=component---src-pages-login-index-tsx-c46c651a7880e66db4ee.js.map