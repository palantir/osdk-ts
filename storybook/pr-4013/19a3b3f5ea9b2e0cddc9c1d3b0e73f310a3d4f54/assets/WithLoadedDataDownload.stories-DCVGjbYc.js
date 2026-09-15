import{f as b,j as a,r as i}from"./iframe-CBLGayoe.js";import{O as u}from"./object-table-Dfnb9q2S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-iqQbXwPR.js";import"./Table-3tUBpcgb.js";import"./index-WWQs816-.js";import"./Dialog-DDIWOZ7A.js";import"./cross-BsTZCMZo.js";import"./svgIconContainer-C6h86pFp.js";import"./useBaseUiId-1t0yXeWR.js";import"./InternalBackdrop-D-1bVe6k.js";import"./composite-B0OuyU4e.js";import"./index-DRnkv5ky.js";import"./index-cNWLnacK.js";import"./index-CJYhDRX8.js";import"./useEventCallback-Vi0Pn5Sv.js";import"./SkeletonBar-BnJ1P5Dc.js";import"./LoadingCell-joRgzu6e.js";import"./ColumnConfigDialog-DGG2zCSJ.js";import"./DraggableList-YSyn2lX_.js";import"./search-fj4r3aII.js";import"./Input-B3gcQSCO.js";import"./useControlled-aG0yjyc1.js";import"./Button-CjUTiVzv.js";import"./small-cross-1A3qDgIz.js";import"./ActionButton-k24uyueG.js";import"./Checkbox-Bl8YlgaC.js";import"./useValueChanged-DUE2Yivj.js";import"./CollapsiblePanel-NhOksXv9.js";import"./MultiColumnSortDialog-C3XrF8TS.js";import"./MenuTrigger-BxU3BSa9.js";import"./CompositeItem-DM2eqzsD.js";import"./ToolbarRootContext-DXoHeFWe.js";import"./getDisabledMountTransitionStyles-DjkeLEx-.js";import"./getPseudoElementBounds-O8sM1SFz.js";import"./chevron-down-fvU8e7Xa.js";import"./index-BlgAqsZh.js";import"./error-pMIF5hcF.js";import"./BaseCbacBanner-CTxjuNnU.js";import"./makeExternalStore-C4cF0z0U.js";import"./Tooltip-D0gzo0UL.js";import"./PopoverPopup-B6LNoEH2.js";import"./debounce-D5ZCw2WL.js";import"./useOsdkClient-C4j--X5m.js";import"./tick-CN0oe-d-.js";import"./DropdownField-BahT1QHv.js";import"./isEqual-BaMniWjI.js";import"./withOsdkMetrics-BgHhPSx8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
