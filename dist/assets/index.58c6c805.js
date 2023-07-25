import{j as t,f as r,L as u,a9 as x,k as f,a as N,r as o,aa as v,M as C,G as d,S as b,T as c,ab as m,ac as k,ad as y}from"./index.7bebe4f2.js";import{Q as L,C as j,R as P}from"./react-paginate.a2ce58ed.js";import{E as S,a as F}from"./App.4d1775ff.js";/* empty css                                  */import{F as M}from"./index.6aa10831.js";import{h as T}from"./moment.4d75c86c.js";import"./emotion-memoize.esm.06f0e458.js";const B=[{name:"Bag ID",sortable:!0,minWidth:"320px",sortField:"bag_id",selector:e=>e.bag_id,cell:e=>t("span",{className:"",children:e==null?void 0:e.bag_id})},{name:"Total Letter",sortable:!0,minWidth:"320px",sortField:"total",selector:e=>e==null?void 0:e.total,cell:e=>{var i;return t("span",{className:"",children:(i=e==null?void 0:e.letter_id)==null?void 0:i.length})}},{name:"Created Date",sortable:!0,minWidth:"220px",sortField:"role",selector:e=>e==null?void 0:e.date,cell:e=>t("span",{children:T(e==null?void 0:e.date).format("DD/MM/YYYY")})},{name:"Action",minWidth:"100px",cell:e=>t("div",{className:"d-flex align-items-center",children:r(u,{className:"text-truncate text-capitalize align-middle",to:`/bag-letter/${e.id}`,id:`view-${e.id}`,children:[t(S,{size:18,className:"me-50"}),t(x,{placement:"top",target:`view-${e.id}`,children:"View all letter"})]})})}],z=()=>{const e=F(),i=f(),{paramsData:l,params:a,data:p}=N(n=>n.bags);o.exports.useEffect(()=>{e(v())},[a]);const g=()=>t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:r(b,{className:"mb-2",children:[t(c,{xl:"8",children:t(d,{className:"add-new-btn",color:"primary",onClick:()=>{k(y).fire({position:"top-end",icon:"error",title:"Under Development",showConfirmButton:!1,timer:1500})},outline:!0,children:"Print"})}),t(c,{xl:"2",className:"d-flex align-content-center justify-content-end flex-wrap",children:t("div",{children:"Date"})}),t(c,{xl:"2",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(M,{className:"form-control",value:a==null?void 0:a.date,name:"date",onChange:n=>{var s;e(m({date:new Date(((s=n[0])==null?void 0:s.getTime())+86399900)}))},id:"default-picker"})})})]})}),h=()=>{const n=Number(Math.ceil((l==null?void 0:l.total)/(a==null?void 0:a.perPage)));return t(P,{previousLabel:"",nextLabel:"",pageCount:n||1,activeClassName:"active",forcePage:(a==null?void 0:a.page)!==0?(a==null?void 0:a.page)-1:0,onPageChange:s=>{e(m({page:s.selected+1}))},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return t("div",{className:"app-user-list",children:t(o.exports.Fragment,{children:r(C,{className:"overflow-hidden",children:[t("span",{className:"p-2",children:t(g,{})}),!(l!=null&&l.isBag)>0?l!=null&&l.message?t("div",{className:"text-center mb-2",children:t("h1",{children:l==null?void 0:l.message})}):t("div",{className:"text-center mb-2",children:t(d,{color:"primary",onClick:()=>{i(`/bag-create/${a==null?void 0:a.date}`)},children:"Create Bag"})}):t("div",{className:"react-dataTable",children:t(L,{noHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:B,sortIcon:t(j,{}),className:"react-dataTable",paginationComponent:h,data:p})})]})})})};export{z as default};
