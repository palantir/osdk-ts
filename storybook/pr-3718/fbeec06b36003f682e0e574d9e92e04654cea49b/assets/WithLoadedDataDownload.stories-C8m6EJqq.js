import{f as b,j as a,r as i}from"./iframe-C5_sv1s8.js";import{O as u}from"./object-table-v3LsKZBs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DjZSPLuP.js";import"./Table-lNj_J5-I.js";import"./index-BLhgFNKv.js";import"./Dialog-BKqUWBZB.js";import"./cross-Dahj-HJO.js";import"./svgIconContainer-suHm6UJN.js";import"./useBaseUiId-B7lNuAlM.js";import"./InternalBackdrop-BVcyrUFc.js";import"./composite-hy6sYsr4.js";import"./index-6RY7HM-5.js";import"./index-DtkutMrn.js";import"./index-UtctJkaV.js";import"./useEventCallback-B7DOgLCn.js";import"./SkeletonBar-dcCd5zMp.js";import"./LoadingCell-DQwCyEXn.js";import"./ColumnConfigDialog-Ctntyuws.js";import"./DraggableList-v-Nwqx-I.js";import"./search-BgAZQbRW.js";import"./Input-CoKcstBP.js";import"./useControlled-xIkiPHDU.js";import"./isEqual-DRfpqkXI.js";import"./isObject-CMH7e9WV.js";import"./Button-BbM3G3vl.js";import"./ActionButton-28BLF9tj.js";import"./Checkbox-DfflJiVN.js";import"./useValueChanged-B2yMWxYM.js";import"./CollapsiblePanel-C_Zs33ep.js";import"./MultiColumnSortDialog-m60u75st.js";import"./MenuTrigger-ClodRh-f.js";import"./CompositeItem-B8lW9pG5.js";import"./ToolbarRootContext-C-yAVa7Z.js";import"./getDisabledMountTransitionStyles-Dpr0J2-_.js";import"./getPseudoElementBounds-fu3PN89u.js";import"./chevron-down-Dn2sQGC_.js";import"./index-5Ghi4G9U.js";import"./error-BnM4bYa4.js";import"./BaseCbacBanner-DOnrGzTs.js";import"./makeExternalStore-BQN1UQRK.js";import"./Tooltip-wHAqb7UL.js";import"./PopoverPopup-ChKLE0gU.js";import"./toNumber-2ARIFGaj.js";import"./useOsdkClient-znHnj-A5.js";import"./tick-Dq8pW14E.js";import"./DropdownField-CfC-KJxp.js";import"./withOsdkMetrics-C_RQ9Eem.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = ${f};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/u.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from the ObjectTable's data. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an \`Error\` instance from \`row.getValue\`, which the CSV renders as a literal marker."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);\`
      }
    }
  },
  render: () => <LoadedDataDownloadExample />
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
