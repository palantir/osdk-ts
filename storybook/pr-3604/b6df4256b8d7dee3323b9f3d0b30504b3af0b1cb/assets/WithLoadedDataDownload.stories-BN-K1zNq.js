import{f as b,j as a,r as i}from"./iframe-D4v6mEn1.js";import{O as u}from"./object-table-D33tr1XO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-cbRsP1zf.js";import"./Table-OE_i_xPX.js";import"./index-BLDi9A8o.js";import"./Dialog-DR1GKnzg.js";import"./cross-BB7vr1gI.js";import"./svgIconContainer-mFWmX3qp.js";import"./useBaseUiId-CX8CHixx.js";import"./InternalBackdrop-74vI1ez0.js";import"./composite-DD0mt_Ur.js";import"./index-CdI-0PmB.js";import"./index-BLke2j3w.js";import"./index-CZIkCEvv.js";import"./useEventCallback-DvotY5zK.js";import"./SkeletonBar-CI_kXOPs.js";import"./LoadingCell-DKefoLG9.js";import"./ColumnConfigDialog-spNIj7WG.js";import"./DraggableList-DPm_zsAi.js";import"./search-BcKgp1Di.js";import"./Input-D7akk8dr.js";import"./useControlled-BKDEzTh5.js";import"./Button-DQB5SbCy.js";import"./small-cross-B1fDr7ZV.js";import"./ActionButton-DVBYSDCI.js";import"./Checkbox-BLUL9Ldz.js";import"./minus-DhWxclpl.js";import"./tick-BlRrWYH0.js";import"./useValueChanged-rynAGIrE.js";import"./caret-down-C9R4WHQ2.js";import"./CollapsiblePanel-BJCLgdcx.js";import"./MultiColumnSortDialog-BFNKK5wW.js";import"./MenuTrigger-BwQ0OLvk.js";import"./CompositeItem-GxHcENsz.js";import"./ToolbarRootContext-BAVjkYc-.js";import"./getDisabledMountTransitionStyles-Bj4vjgLE.js";import"./getPseudoElementBounds-Bj01wAIb.js";import"./chevron-down-BeDHxKfS.js";import"./index-CoiNuHwc.js";import"./error-LJVwwXWD.js";import"./BaseCbacBanner-B8mQkjTp.js";import"./makeExternalStore-DboLJKQP.js";import"./Tooltip-tolnLG8O.js";import"./PopoverPopup-DQmN9__a.js";import"./toNumber-DCSkxSp7.js";import"./useOsdkClient-BXpTsNKc.js";import"./DropdownField-D6TGd-3U.js";import"./withOsdkMetrics-D-aEMXQf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
