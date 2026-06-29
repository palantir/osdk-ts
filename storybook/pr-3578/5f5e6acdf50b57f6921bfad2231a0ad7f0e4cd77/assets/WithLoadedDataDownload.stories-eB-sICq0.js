import{f as b,j as a,r as i}from"./iframe-Bdo2Di7r.js";import{O as u}from"./object-table-BKv79kcT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B15x2S9q.js";import"./Table-BC2_4q45.js";import"./index-BdqDAckw.js";import"./Dialog-CsuwZu7C.js";import"./cross-CzBgvdiS.js";import"./svgIconContainer-Cv1BdOht.js";import"./useBaseUiId-Bi1WURGV.js";import"./InternalBackdrop-BHCFzCwP.js";import"./composite-B6AQIM1z.js";import"./index-BAVX2Eg5.js";import"./index-GVK2X5FZ.js";import"./index-CUsHopsA.js";import"./useEventCallback-_vyLgHXX.js";import"./SkeletonBar-BbdMKpku.js";import"./LoadingCell-eDitSB8a.js";import"./ColumnConfigDialog-MlALCRHT.js";import"./DraggableList-DYKQaxzi.js";import"./search-DEYIpsf_.js";import"./Input-DXGGFzVW.js";import"./useControlled-DHUJClmm.js";import"./Button-Bwp5yWEl.js";import"./small-cross-DHpfRRFe.js";import"./ActionButton-DTxv_v0p.js";import"./Checkbox-BLDFI16X.js";import"./minus-2GBm80LR.js";import"./tick-DCnAG0Kc.js";import"./useValueChanged-B-za9cGu.js";import"./caret-down-XGfgYBFP.js";import"./CollapsiblePanel-DKHFrFAW.js";import"./MultiColumnSortDialog-D2GuKRCN.js";import"./MenuTrigger-DdHdL1-q.js";import"./CompositeItem-B2GuXSMq.js";import"./ToolbarRootContext-C-Lj4Taw.js";import"./getDisabledMountTransitionStyles-BIimCZjE.js";import"./getPseudoElementBounds-Dvse4gv_.js";import"./chevron-down-D67R2oZA.js";import"./index-CQkhqH3A.js";import"./error-Cha-oVGp.js";import"./BaseCbacBanner-D22cPiMK.js";import"./makeExternalStore-DaUtM8qt.js";import"./Tooltip-CxH1rknr.js";import"./PopoverPopup-EI_5lSgH.js";import"./toNumber-B1eLxWqg.js";import"./useOsdkClient-BgmGbDu0.js";import"./DropdownField-7C4q1h8_.js";import"./withOsdkMetrics-4YWdMVFl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
