import{k as y,ad as x,a as N,r as h,au as v,j as e,X as c,Y as n,Z as b,f as i,P as C,Q as S,S as j,T as F,$ as p,a0 as u,G as P,I as T,a7 as $,as as k,av as w}from"./index.a261bd1f.js";import{a as B}from"./App.56e6246c.js";const z=()=>{const r=B(),f=y(),{id:l}=x(),{uploadData:s,paramsData:t}=N(a=>a.types);h.exports.useEffect(()=>{r(v(l))},[]);const d=a=>{var o,m;r(k({...s,[(o=a==null?void 0:a.target)==null?void 0:o.name]:(m=a.target)==null?void 0:m.value}))},g=async()=>{const a=await r(w(l));a!=null&&a.payload&&f("/type")};return e(h.exports.Fragment,{children:e(c,{children:e(n,{md:"6",sm:"12",children:e(b,{children:i(C,{children:[e(S,{children:e(j,{tag:"h4",children:"Edit Type"})}),i(F,{children:[i(c,{children:[i(n,{sm:"12",children:[e(p,{className:"form-label",for:"name",children:"Name"}),e(u,{type:"text",name:"name",id:"name",placeholder:"Name",value:s==null?void 0:s.name,onChange:d})]}),i(n,{sm:"12",children:[e(p,{className:"form-label",for:"description",children:"Description"}),e(u,{type:"textarea",name:"description",id:"description",placeholder:"Description",value:s==null?void 0:s.description,onChange:d})]})]}),e(c,{children:e(n,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(P,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),g()},disabled:t==null?void 0:t.loading,children:t!=null&&t.loading?i(T,{children:[e($,{className:"me-25",size:"sm"}),"Please Wait..."]}):"Submit"})})})})]})]})})})})})};export{z as default};
