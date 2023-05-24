import{r as x,f as c,j as t,p as d,L as m,ak as v,a5 as u,al as N,a as y,am as b,P as C,k,X as P,Y as p,an as h,G as z}from"./index.1e70b2a1.js";import{a as g,b as j,S as D}from"./App.10cbd332.js";import{E as U,T as O,Q as $,C as L,l as S,R as T}from"./react-paginate.04b9f4c2.js";import"./emotion-memoize.esm.06f0e458.js";function W(e,s){if(e==null)return{};var a=_(e,s),i,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(s.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,i)||(a[i]=e[i]))}return a}function _(e,s){if(e==null)return{};var a={},i=Object.keys(e),n,l;for(l=0;l<i.length;l++)n=i[l],!(s.indexOf(n)>=0)&&(a[n]=e[n]);return a}var f=x.exports.forwardRef(function(e,s){var a=e.color,i=a===void 0?"currentColor":a,n=e.size,l=n===void 0?24:n,r=W(e,["color","size"]);return c("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[t("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),t("circle",{cx:"8.5",cy:"7",r:"4"}),t("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),t("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]})});f.propTypes={color:d.exports.string,size:d.exports.oneOfType([d.exports.string,d.exports.number])};f.displayName="UserPlus";const F=f,A=e=>{const s=g();return c("div",{className:"column-action",children:[c(m,{className:"text-truncate text-capitalize align-middle",onClick:a=>{a.preventDefault(),s(v(e.id))},children:[e!=null&&e.status?t(j,{size:18,className:"text-info me-50",id:`status-${e.id}`}):t(D,{size:18,className:"text-info me-50",id:`status-${e.id}`}),t(u,{placement:"top",target:`status-${e.id}`,children:e!=null&&e.status?"Deactive User":"Active User"})]}),c(m,{className:"text-truncate text-capitalize align-middle",to:`/post_office_edit/${e.id}`,id:`edit-${e.id}`,children:[t(U,{size:18,className:"text-info me-50"}),t(u,{placement:"top",target:`edit-${e.id}`,children:(e!=null&&e.status,"Edit User")})]}),c(m,{className:"text-truncate text-capitalize align-middle",id:`delete-${e.id}`,onClick:a=>{a.preventDefault(),s(N(e.id))},children:[t(O,{size:18,className:"text-info me-50"}),t(u,{placement:"top",target:`delete-${e.id}`,children:(e!=null&&e.status,"Delete User")})]})]})},E=[{name:"Name",sortable:!0,minWidth:"220px",sortField:"name",selector:e=>e.name,cell:e=>t("span",{className:"fw-bolder",children:e==null?void 0:e.name})},{name:"Phone",minWidth:"120px",sortField:"phone",selector:e=>e.phone,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.phone})},{name:"Role",minWidth:"120px",sortField:"type",selector:e=>e.type,cell:e=>t("span",{className:"text-capitalize",children:(e==null?void 0:e.type)=="user"?"User":(e==null?void 0:e.type)=="delivery"?"Post Man":"Admin"})},{name:"Post Office",minWidth:"220px",sortField:"phone",selector:e=>e.post_office,cell:e=>{var s,a;return c("span",{children:[(s=e==null?void 0:e.post_office)==null?void 0:s.code,"-",(a=e==null?void 0:e.post_office)==null?void 0:a.name]})}},{name:"Status",sortable:!0,minWidth:"120px",sortField:"role",selector:e=>e.status,cell:e=>t("span",{className:"text-capitalize",children:e!=null&&e.status?"Active":"Deactive"})},{name:"Actions",minWidth:"120px",cell:e=>A(e)}],q=()=>{const e=g(),{data:s,params:a,paramsData:i}=y(r=>r.users);x.exports.useEffect(()=>{e(b())},[a]);const n=()=>{const r=k();return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:c(P,{children:[t(p,{xl:"3"}),t(p,{xl:"3",className:"d-flex align-items-end align-content-center flex-wrap",children:t("div",{children:"Search by Name/PO code"})}),t(p,{xl:"3",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(S.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:1e3,placeholder:"Search Here",autoFocus:!0,value:a==null?void 0:a.q,onChange:o=>{o.preventDefault(),e(h({...a,q:o.target.value}))}})})}),t(p,{xl:"3",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions",children:c(z,{className:"add-new-user",color:"primary",onClick:o=>{o.preventDefault(),r("/user_add")},children:[t(F,{size:14})," User"]})})})]})})},l=()=>{const r=Number(Math.ceil((i==null?void 0:i.total)/(a==null?void 0:a.perPage)));return t(T,{previousLabel:"",nextLabel:"",pageCount:r||1,activeClassName:"active",forcePage:(a==null?void 0:a.page)!==0?(a==null?void 0:a.page)-1:0,onPageChange:o=>{e(h({page:o.selected+1}))},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return t("div",{className:"app-user-list",children:t(x.exports.Fragment,{children:t(C,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t($,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:E,sortIcon:t(L,{}),className:"react-dataTable",paginationComponent:l,data:s,subHeaderComponent:t(n,{})})})})})})};export{q as default};
