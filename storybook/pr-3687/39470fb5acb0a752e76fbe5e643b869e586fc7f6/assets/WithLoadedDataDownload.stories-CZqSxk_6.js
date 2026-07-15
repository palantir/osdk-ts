import{f as b,j as a,r as i}from"./iframe-BQdKTA3B.js";import{O as u}from"./object-table-DUXMXqzq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6pDrBrI.js";import"./Table-B4OFRVNa.js";import"./index-yRrmqH44.js";import"./Dialog-C_S1GTnZ.js";import"./cross-CHRhgEve.js";import"./svgIconContainer-zPLSAFiw.js";import"./useBaseUiId-AbGP9aXI.js";import"./InternalBackdrop-auwaipTn.js";import"./composite-BtNcypUO.js";import"./index-ClaWqMrq.js";import"./index-Cvi1Jpje.js";import"./index-41PzxBrL.js";import"./useEventCallback-DWZwSev6.js";import"./SkeletonBar-BiIBHtJm.js";import"./LoadingCell-BJ9mJwzo.js";import"./ColumnConfigDialog-Ddsh2Xqg.js";import"./DraggableList-B-ijSjkL.js";import"./search-BD9Xz5zR.js";import"./Input-B1zZBTfB.js";import"./useControlled-DA1gI_2t.js";import"./Button-BN0G4ykr.js";import"./small-cross-BUh4UV6f.js";import"./ActionButton-C8iMNpOr.js";import"./Checkbox-3jX7J9Dv.js";import"./useValueChanged-vNopdAys.js";import"./CollapsiblePanel-Ddo-FTp-.js";import"./MultiColumnSortDialog-B6P9ASVp.js";import"./MenuTrigger-DKL6cSxU.js";import"./CompositeItem-BjGWU9xA.js";import"./ToolbarRootContext-D6hSTuri.js";import"./getDisabledMountTransitionStyles-Dc7dDJ30.js";import"./getPseudoElementBounds-DJrKUOUw.js";import"./chevron-down-DXrq4IEb.js";import"./index-Duh_3BMp.js";import"./error-C9pGDhKB.js";import"./BaseCbacBanner-D-IdS_Iu.js";import"./makeExternalStore-BmyKLWUH.js";import"./Tooltip-B0ch_o5U.js";import"./PopoverPopup-CLEmV4w7.js";import"./toNumber-Bi4mkL5T.js";import"./useOsdkClient-CFMXGqkp.js";import"./tick-CWjGJdZO.js";import"./DropdownField-BSEfrZwS.js";import"./withOsdkMetrics-CLpE56yC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
