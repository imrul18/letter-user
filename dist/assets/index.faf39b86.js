import{j as t,k as p,a as g,r as m,aB as h,M as f,f as x,S as v,T as s,aC as o,G as N}from"./index.4043e07d.js";import{Q as b,C,R as y}from"./react-paginate.e61576ae.js";import{a as j}from"./App.d480ec34.js";/* empty css                                  */import{l as k}from"./index.c4f1b8a0.js";import{F}from"./index.9f4f4f4f.js";import{h as L}from"./moment.4d75c86c.js";import"./emotion-memoize.esm.06f0e458.js";const D=[{name:"Image",sortable:!0,minWidth:"120px",sortField:"image",selector:e=>e==null?void 0:e.image_url,cell:e=>t("span",{className:"fw-bolder",children:t("img",{src:e==null?void 0:e.image_url,alt:e==null?void 0:e.name,width:"50",height:"50"})})},{name:"Letter ID",sortable:!0,minWidth:"320px",sortField:"letter_id",selector:e=>e.letter_id,cell:e=>t("span",{className:"",children:e==null?void 0:e.letter_id})},{name:"Type",sortable:!0,minWidth:"320px",sortField:"type",selector:e=>e.type,cell:e=>{var i;return t("span",{className:"",children:(i=e==null?void 0:e.type)==null?void 0:i.name})}},{name:"Received Date/Time",sortable:!0,minWidth:"220px",sortField:"role",selector:e=>e.received_at,cell:e=>t("span",{children:L(e==null?void 0:e.received_at).format("DD/MM/YYYY hh:mm A")})}],R=()=>{const e=j(),i=p(),{paramsData:n,params:a,data:r}=g(l=>l.letterLists);m.exports.useEffect(()=>{e(h())},[a]);const d=()=>t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:x(v,{className:"mb-2",children:[t(s,{xl:"3",className:"d-flex align-content-center justify-content-end flex-wrap",children:t("div",{children:"Search by Letter Number"})}),t(s,{xl:"2",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(k.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:500,placeholder:"Search Here",autoFocus:!0,value:a==null?void 0:a.q,onChange:l=>{l.preventDefault(),e(o({...a,q:l.target.value}))}})})}),t(s,{xl:"2",className:"d-flex align-content-center justify-content-end flex-wrap",children:t("div",{children:"Date"})}),t(s,{xl:"2",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(F,{className:"form-control",value:a==null?void 0:a.date,name:"date",onChange:l=>{var c;e(o({date:new Date(((c=l[0])==null?void 0:c.getTime())+86399900)}))},id:"default-picker"})})}),t(s,{xl:"3",className:"d-flex align-content-center justify-content-start flex-wrap",children:(r==null?void 0:r.length)>0&&t(N,{color:"primary",onClick:l=>{l.preventDefault(),i(`/bag-create/${a==null?void 0:a.date}`)},disabled:n==null?void 0:n.isBag,children:n!=null&&n.isBag?"Bag Already Created":"Create Bag"})})]})}),u=()=>{const l=Number(Math.ceil((n==null?void 0:n.total)/(a==null?void 0:a.perPage)));return t(y,{previousLabel:"",nextLabel:"",pageCount:l||1,activeClassName:"active",forcePage:(a==null?void 0:a.page)!==0?(a==null?void 0:a.page)-1:0,onPageChange:c=>{e(o({page:c.selected+1}))},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return t("div",{className:"app-user-list",children:t(m.exports.Fragment,{children:t(f,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(b,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:D,sortIcon:t(C,{}),className:"react-dataTable",paginationComponent:u,data:r,subHeaderComponent:t(d,{})})})})})})};export{R as default};