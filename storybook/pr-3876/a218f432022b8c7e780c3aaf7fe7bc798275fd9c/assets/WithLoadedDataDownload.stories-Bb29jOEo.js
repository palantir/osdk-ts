import{f as b,j as a,r as i}from"./iframe-D9x1t_vp.js";import{O as u}from"./object-table-Cd9VFz_z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-G-W5TAZO.js";import"./Table-D-dmi1MD.js";import"./index-DkawwfeN.js";import"./Dialog-BLyxmt60.js";import"./cross-B-D0ldT_.js";import"./svgIconContainer-GJo4FLSZ.js";import"./useBaseUiId-BXGjoli7.js";import"./InternalBackdrop-C5Ik5Fts.js";import"./composite-DbEdsmcW.js";import"./index-CDz91Otv.js";import"./index-DvF6dXob.js";import"./index-B5v3ZKm8.js";import"./useEventCallback-krj6U4d7.js";import"./SkeletonBar-CP1BDtVG.js";import"./LoadingCell-B4rVMJ4V.js";import"./ColumnConfigDialog-C4Zysgf-.js";import"./DraggableList-CSUV0r3I.js";import"./search-C5Hx3O16.js";import"./Input-BURRu-rg.js";import"./useControlled-B_3qzWS0.js";import"./Button-Dn0Wamri.js";import"./small-cross-sMMaN9EK.js";import"./ActionButton-C1dVj4zE.js";import"./Checkbox-LmMfFJQa.js";import"./useValueChanged-DpwRfbwV.js";import"./CollapsiblePanel-DYQ1sJgE.js";import"./MultiColumnSortDialog-CWdW0w0p.js";import"./MenuTrigger-23dZsPJo.js";import"./CompositeItem-DbzCphWS.js";import"./ToolbarRootContext-CB_Eo7a2.js";import"./getDisabledMountTransitionStyles-C_9Bw_r_.js";import"./getPseudoElementBounds-ZlfF0Rjy.js";import"./chevron-down-BPV9QsLo.js";import"./index-BuAwYtSM.js";import"./error-BA6zdh3z.js";import"./BaseCbacBanner-C9zQ2cua.js";import"./makeExternalStore-DFF9EkpS.js";import"./Tooltip-CsqLoml-.js";import"./PopoverPopup-BLCb0pYf.js";import"./debounce-CBcbM-BZ.js";import"./useOsdkClient-D8vUR2ip.js";import"./tick-Ct0EC7-q.js";import"./DropdownField-DLdDRCMy.js";import"./isEqual-D71CH4xY.js";import"./withOsdkMetrics-C_ks6dJ2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
