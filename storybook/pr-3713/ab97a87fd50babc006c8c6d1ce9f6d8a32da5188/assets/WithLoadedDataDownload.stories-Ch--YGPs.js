import{f as b,j as a,r as i}from"./iframe-DH5YCN2j.js";import{O as u}from"./object-table-CSMY63rl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DoLZtznl.js";import"./Table-BP8dzo3s.js";import"./index-_qf75Onr.js";import"./Dialog-BJZRp9sR.js";import"./cross-sheK920l.js";import"./svgIconContainer-DCm06bfe.js";import"./useBaseUiId-BbdPl4JJ.js";import"./InternalBackdrop-BUowTIPC.js";import"./composite-DlaEkCZH.js";import"./index-C4rwa2_n.js";import"./index-DTdwmsEM.js";import"./index-5uHL8ogI.js";import"./useEventCallback-Y1zbh2EC.js";import"./SkeletonBar-X8pEShvj.js";import"./LoadingCell-DKqnXTAv.js";import"./ColumnConfigDialog-BnamNzoV.js";import"./DraggableList-DnuVGn_n.js";import"./search-nrDeCzJk.js";import"./Input-C7lIrWzz.js";import"./useControlled-DR13xq1i.js";import"./isEqual-C7KvJXXt.js";import"./isObject-EnOnoi_N.js";import"./Button-BWYkYhEl.js";import"./ActionButton-DJZMVqmN.js";import"./Checkbox-D4Yae8oc.js";import"./useValueChanged-DowjCehF.js";import"./CollapsiblePanel-B5KwBzdC.js";import"./MultiColumnSortDialog-C3B9X-EY.js";import"./MenuTrigger-CpOFVQud.js";import"./CompositeItem-CEroXGJN.js";import"./ToolbarRootContext-7yy9e54A.js";import"./getDisabledMountTransitionStyles-CPIV7r6Z.js";import"./getPseudoElementBounds-fGIJ-GSz.js";import"./chevron-down-BioSFIuk.js";import"./index-BPKS3fVr.js";import"./error-wfC3mCU4.js";import"./BaseCbacBanner-CyjHXM2X.js";import"./makeExternalStore-C_s2klxa.js";import"./Tooltip-CQdBjzvk.js";import"./PopoverPopup-DQ0dzB20.js";import"./toNumber-4X5E2Tt3.js";import"./useOsdkClient-AMRs0oag.js";import"./tick-C-dag8Zh.js";import"./DropdownField-BAA_dvC4.js";import"./withOsdkMetrics-CG4b5vbn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
