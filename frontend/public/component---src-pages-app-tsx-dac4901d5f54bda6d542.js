(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[891,526,869],{4322:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n,r=a(7294),l=a(3155),s=a(9499),o=a(2512),c=a(697),i=a(6672),m=a(778),u=a(7264),p=(n=function(e){var t=e.session;return e.refetch,r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("nav",null,r.createElement(s.Link,{to:"/"},"Home"),r.createElement(s.Link,{to:"login"},"Login"),r.createElement(s.Link,{to:"register"},"Register"),r.createElement(s.Link,{to:"xyz"},"Add Recipe"))),r.createElement(s.Router,null,r.createElement(l.default,{path:"/"}),r.createElement(o.default,{path:"/login"}),r.createElement(c.default,{path:"/register"}),r.createElement(i.default,{path:"/xyz",session:t,username:"Hello World"})))},function(e){var t=(0,m.useQuery)(u.P,{onCompleted:function(e){console.log(e)},onError:function(e){var t=e.networkError,a=e.graphQLErrors;t&&console.log(t),a&&a.map((function(e){var t=e.message;return console.log(t)}))}}),a=t.data,l=t.loading,s=t.refetch;return t.error,l?null:r.createElement(n,Object.assign({},e,{session:a,refetch:s}))})},6672:function(e,t,a){"use strict";a.r(t);var n=a(2137),r=a(7329),l=a(7757),s=a.n(l),o=a(7294),c=a(778),i=a(1939),m=a(7264);t.default=function(e){e.session;var t=e.username,a=(0,o.useState)(),l=a[0];a[1];console.log("Session in add recipe page",t);var u=(0,o.useState)({name:"",username:l,category:"Breakfast",description:"",instructions:""}),p=u[0],d=u[1],E=(0,c.useMutation)(i.JL,{update:function(e,t){var a=t.data.addRecipe,n=e.readQuery({query:m.N}).getAllRecipes;e.writeQuery({query:m.N,data:{getAllRecipes:[].concat((0,r.Z)(n),[a])}})},onCompleted:function(){d({name:"",category:"breakfast",description:"",instructions:"",username:""})}})[0],g=function(e){var t;d(Object.assign({},p,((t={})[e.target.name]=e.target.value,t)))},f=function(){var e=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Submitted with data",p),e.next=4,E({variables:p});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.createElement(o.Fragment,null,o.createElement("div",{className:"recipe-container"},o.createElement("form",{className:"recipe-form",onSubmit:f},o.createElement("h2",{id:"title"},"Add Recipe"),o.createElement("label",{className:"label"},"Name*"),o.createElement("input",{className:"input",type:"text",placeholder:"Enter Name",required:!0,name:"name",onChange:g}),o.createElement("label",{className:"label"},"Category*"),o.createElement("select",{className:"input",name:"category",value:p.category,onChange:g},o.createElement("option",{value:"breakfast"},"Breakfast"),o.createElement("option",{value:"lunch"},"Lunch"),o.createElement("option",{value:"dinner"},"Dinner"),o.createElement("option",{value:"snack"},"Snack")),o.createElement("label",{className:"label"},"Description*"),o.createElement("input",{className:"input",type:"text",name:"description",placeholder:"Enter Description",onChange:g,required:!0}),o.createElement("label",{className:"label"},"Instructions*"),o.createElement("textarea",{className:"input",rows:5,placeholder:"Enter Instructions",name:"instructions",onChange:g,required:!0}),o.createElement("button",{className:"submit-button"},"Submit"))))}},2512:function(e,t,a){"use strict";a.r(t);var n=a(2137),r=a(7757),l=a.n(r),s=a(7294),o=a(778),c=a(5313),i=a(4251),m=a(1939);t.default=function(){var e,t=(0,s.useState)(""),a=t[0],r=t[1],u=(0,s.useState)(""),p=u[0],d=u[1],E=(0,s.useState)(""),g=E[0],f=E[1],v=(0,o.useMutation)(m.lW,{onCompleted:(e=(0,n.Z)(l().mark((function e(t){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.signinUser,localStorage.setItem("token",a.token),(0,c.navigate)("/",{replace:!0}),f("");case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)}),onError:function(e){var t=e.networkError,a=e.graphQLErrors;t&&console.log("Network Error:",t.message),a&&a.map((function(e){var t=e.message;f(t),console.log("gQL Error",g)}))}}),b=v[0],h=(v[1].loading,function(){var e=(0,n.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b({variables:{email:a,password:p}});case 3:r(""),d("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return s.createElement(s.Fragment,null,s.createElement(i.Z,{title:"Recipe | Login"}),s.createElement("div",{className:"container"},s.createElement("div",{className:"background-image"}),s.createElement("div",{className:"login-container"},s.createElement("div",{className:"card-container"},s.createElement("form",{className:"form",onSubmit:h},s.createElement("h3",{id:"title"},"Login"),s.createElement("label",{className:"label"},"Email Address*"),s.createElement("input",{className:"input",type:"email",placeholder:"Enter Email",required:!0,value:a,onChange:function(e){return r(e.currentTarget.value)}}),s.createElement("label",{className:"label"},"Password*"),s.createElement("input",{className:"input",type:"password",placeholder:"Enter Password",value:p,required:!0,onChange:function(e){return d(e.currentTarget.value)}}),s.createElement("div",{className:"check-box-container"},s.createElement("input",{className:"check-box",type:"checkbox"}),s.createElement("label",null,"Remember me")),s.createElement("button",{className:"submit-button"},"Submit"),s.createElement("label",{className:"forgot-password"},"Forgot ",s.createElement("b",{style:{color:"gold"}},"Password?")))))))}},697:function(e,t,a){"use strict";a.r(t);var n=a(2137),r=a(7757),l=a.n(r),s=a(7294),o=a(778),c=a(5313),i=a(1939);t.default=function(){var e,t={username:"",email:"",password:"",confirm_password:""},a=(0,o.useMutation)(i.qK,{onError:function(e){var t=e.networkError,a=e.graphQLErrors;t&&console.log("NetworkError:",t.message),a&&a.map((function(e){var t=e.message;console.log(t)}))},onCompleted:(e=(0,n.Z)(l().mark((function e(a){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.signupUser,localStorage.setItem("token",n.token),(0,c.navigate)("/",{replace:!0}),p(t);case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})}),r=a[0],m=(a[1].loading,(0,s.useState)(t)),u=m[0],p=m[1],d=u.username,E=u.email,g=u.password,f=u.confirm_password,v=function(e){var t;p(Object.assign({},u,((t={})[e.target.name]=e.target.value,t)))};return s.createElement("div",{className:"container"},s.createElement("div",{className:"background-image"}),s.createElement("div",{className:"login-container"},s.createElement("div",{className:"card-container"},s.createElement("form",{className:"form",onSubmit:function(e){var t=u.username,a=u.email,n=u.password;n===u.confirm_password&&(e.preventDefault(),r({variables:{username:t,email:a,password:n}}))}},s.createElement("h3",{id:"title"},"Register"),s.createElement("label",{className:"label"},"Username"),s.createElement("input",{name:"username",className:"input",type:"text",placeholder:"Enter Username",required:!0,value:d,onChange:v}),s.createElement("label",{className:"label"},"Email Address*"),s.createElement("input",{name:"email",className:"input",type:"email",placeholder:"Enter Email",required:!0,value:E,onChange:v}),s.createElement("label",{className:"label"},"Password*"),s.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Enter Password",value:g,onChange:v,required:!0}),s.createElement("label",{className:"label"},"Confirm Password*"),s.createElement("input",{name:"confirm_password",className:"input",type:"password",placeholder:"Enter Password",value:f,onChange:v,required:!0}),s.createElement("button",{className:"submit-button"},"Submit"),s.createElement("label",{className:"forgot-password"},"Already have an account?"," ",s.createElement("b",{style:{color:"gold"}},s.createElement(c.Link,{to:"../login"},"Sign In")))))))}},4251:function(e,t,a){"use strict";var n=a(7294),r=a(5414),l=a(5313);function s(e){var t,a=e.description,s=e.lang,o=e.meta,c=e.title,i=(0,l.useStaticQuery)("63159454").site,m=a||i.siteMetadata.description;return n.createElement(r.q,{htmlAttributes:{lang:s},title:c,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(t=i.siteMetadata)||void 0===t?void 0:t.author)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o)})}s.defaultProps={lang:"en",meta:[],description:""},t.Z=s}}]);
//# sourceMappingURL=component---src-pages-app-tsx-dac4901d5f54bda6d542.js.map