import{k as L,r as f,j as e,f as a,X as S,L as i,t as N,Y as c,S as j,V as D,Z as F,$ as m,a0 as b,G as r,a1 as I}from"./index.1e70b2a1.js";import{u as P,a as T,M as z}from"./App.10cbd332.js";import{I as M,F as G,T as $,G as R}from"./index.a8f58cf9.js";/* empty css                            */const B="/assets/login-v2-dark.64585bf3.svg",E="/assets/login-v2.4644671a.svg",Z=()=>{var h,g;const{skin:x}=P(),v=T(),w=L(),k=x==="dark"?B:E,[d,y]=f.exports.useState(null),[l,C]=f.exports.useState(null),o=t=>{var s,n;y({...d,[(s=t==null?void 0:t.target)==null?void 0:s.name]:(n=t.target)==null?void 0:n.value})},X=async t=>{var n,p,u;t.preventDefault();const s=await v(I(d));(n=s==null?void 0:s.payload)!=null&&n.status?w("/dashboard"):C((u=(p=s==null?void 0:s.payload)==null?void 0:p.data)==null?void 0:u.errors)};return e("div",{className:"auth-wrapper auth-cover",children:a(S,{className:"auth-inner m-0",children:[a(i,{className:"brand-logo",onClick:t=>t.preventDefault(),children:[e("img",{src:N.app.appLogoImage,alt:"logo",height:"28"}),e("h2",{className:"brand-text text-primary ms-1",children:(g=(h=N)==null?void 0:h.app)==null?void 0:g.appName})]}),e(c,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:e("img",{className:"img-fluid",src:k,alt:"Login Cover"})})}),e(c,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:a(c,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e(j,{tag:"h2",className:"fw-bold mb-1",children:"Welcome to DMS!"}),e(D,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),a(F,{className:"auth-login-form mt-2",children:[a("div",{className:"mb-1",children:[e(m,{className:"form-label",for:"phone",children:"Phone number"}),e(b,{type:"text",id:"phone",name:"phone",placeholder:"016XXXXXXXX",autoFocus:!0,onChange:o}),e("small",{className:"text-danger",children:l==null?void 0:l.phone})]}),a("div",{className:"mb-1",children:[a("div",{className:"d-flex justify-content-between",children:[e(m,{className:"form-label",for:"login-password",children:"Password"}),e(i,{to:"/forgot-password",children:e("small",{children:"Forgot Password?"})})]}),e(M,{className:"input-group-merge",id:"login-password",name:"password",onChange:o}),e("small",{className:"text-danger",children:l==null?void 0:l.password})]}),a("div",{className:"form-check mb-1",children:[e(b,{type:"checkbox",id:"remember-me",name:"remember_me",onChange:o}),e(m,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),e(r,{color:"primary",name:"signin",onClick:X,children:"Sign in"})]}),a("p",{className:"text-center mt-2",children:[e("span",{className:"me-25",children:"New on our platform?"}),e(i,{to:"/register",children:e("span",{children:"Create an account"})})]}),e("div",{className:"divider my-2",children:e("div",{className:"divider-text",children:"or"})}),a("div",{className:"auth-footer-btn d-flex justify-content-center",children:[e(r,{color:"facebook",children:e(G,{size:14})}),e(r,{color:"twitter",children:e($,{size:14})}),e(r,{color:"google",children:e(z,{size:14})}),e(r,{className:"me-0",color:"github",children:e(R,{size:14})})]})]})})]})})};export{Z as default};
