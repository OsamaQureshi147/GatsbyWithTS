(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[869],{697:function(e,a,r){"use strict";r.r(a);var t=r(2137),n=r(7757),s=r.n(n),l=r(7294),o=r(778),c=r(5313),m=r(1939);a.default=function(){var e,a={username:"",email:"",password:"",confirm_password:""},r=(0,o.useMutation)(m.qK,{onError:function(e){var a=e.networkError,r=e.graphQLErrors;a&&console.log("NetworkError:",a.message),r&&r.map((function(e){var a=e.message;console.log(a)}))},onCompleted:(e=(0,t.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.signupUser,localStorage.setItem("token",t.token),(0,c.navigate)("/",{replace:!0}),p(a);case 4:case"end":return e.stop()}}),e)}))),function(a){return e.apply(this,arguments)})}),n=r[0],i=(r[1].loading,(0,l.useState)(a)),u=i[0],p=i[1],d=u.username,E=u.email,g=u.password,f=u.confirm_password,b=function(e){var a;p(Object.assign({},u,((a={})[e.target.name]=e.target.value,a)))};return l.createElement("div",{className:"container"},l.createElement("div",{className:"background-image"}),l.createElement("div",{className:"login-container"},l.createElement("div",{className:"card-container"},l.createElement("form",{className:"form",onSubmit:function(e){var a=u.username,r=u.email,t=u.password;t===u.confirm_password&&(e.preventDefault(),n({variables:{username:a,email:r,password:t}}))}},l.createElement("h3",{id:"title"},"Register"),l.createElement("label",{className:"label"},"Username"),l.createElement("input",{name:"username",className:"input",type:"text",placeholder:"Enter Username",required:!0,value:d,onChange:b}),l.createElement("label",{className:"label"},"Email Address*"),l.createElement("input",{name:"email",className:"input",type:"email",placeholder:"Enter Email",required:!0,value:E,onChange:b}),l.createElement("label",{className:"label"},"Password*"),l.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Enter Password",value:g,onChange:b,required:!0}),l.createElement("label",{className:"label"},"Confirm Password*"),l.createElement("input",{name:"confirm_password",className:"input",type:"password",placeholder:"Enter Password",value:f,onChange:b,required:!0}),l.createElement("button",{className:"submit-button"},"Submit"),l.createElement("label",{className:"forgot-password"},"Already have an account?"," ",l.createElement("b",{style:{color:"gold"}},l.createElement(c.Link,{to:"../login"},"Sign In")))))))}}}]);
//# sourceMappingURL=component---src-pages-register-index-tsx-941ce8e1360f246d5155.js.map