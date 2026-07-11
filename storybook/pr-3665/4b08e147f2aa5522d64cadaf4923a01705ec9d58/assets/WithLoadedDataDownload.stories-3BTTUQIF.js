import{f as b,j as a,r as i}from"./iframe-CMkXY9vq.js";import{O as u}from"./object-table-D50hm4v-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRC_Gkn6.js";import"./Table-CSlub9kl.js";import"./index-C89y38Jp.js";import"./Dialog-BCCwjr7c.js";import"./cross-m3IENhwq.js";import"./svgIconContainer-_wsKauUL.js";import"./useBaseUiId-dEHi8snl.js";import"./InternalBackdrop-BsCFMz0s.js";import"./composite-DzQ4L13Q.js";import"./index-C3-XDJLb.js";import"./index-CZ7_YZIP.js";import"./index-CJ-YESpP.js";import"./useEventCallback-QZ1IolRn.js";import"./SkeletonBar-BD8Bflim.js";import"./LoadingCell-DrbtEgwn.js";import"./ColumnConfigDialog-CfOzNWBr.js";import"./DraggableList-I4dbCzxj.js";import"./search-C9uRQAua.js";import"./Input-p0BLi9h8.js";import"./useControlled-CrasA_u-.js";import"./Button-ve1uziVE.js";import"./small-cross-BMK3pf_F.js";import"./ActionButton-6Hy9Hthl.js";import"./Checkbox-_hyqjQgX.js";import"./useValueChanged-DuUFXIRX.js";import"./CollapsiblePanel-mYKmsQNS.js";import"./MultiColumnSortDialog-z3dVumF9.js";import"./MenuTrigger-Br82d0PS.js";import"./CompositeItem-CPQyUgzp.js";import"./ToolbarRootContext-DNuP58yv.js";import"./getDisabledMountTransitionStyles-BdvFdV8e.js";import"./getPseudoElementBounds-DpYGpbey.js";import"./chevron-down-FOpVA2s6.js";import"./index-DWJXRN0q.js";import"./error-B1g86qG0.js";import"./BaseCbacBanner-Ci6x8QBf.js";import"./makeExternalStore-A283sC7o.js";import"./Tooltip-CO2hqCEf.js";import"./PopoverPopup-Dci4o2cY.js";import"./toNumber-BZt0Xown.js";import"./useOsdkClient-B9ZacZ4H.js";import"./tick-CLWS7J_D.js";import"./DropdownField-CM96JSu8.js";import"./withOsdkMetrics-B_uy_PA8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
