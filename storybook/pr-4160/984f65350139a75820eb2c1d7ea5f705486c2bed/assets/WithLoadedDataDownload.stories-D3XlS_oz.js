import{f as b,j as a,r as i}from"./iframe-B7lh4g6p.js";import{O as u}from"./object-table-Bkm9lh3W.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bs-nMSmN.js";import"./Table-B_46x3FM.js";import"./index-DEvGhliI.js";import"./Dialog-BzopL0Vi.js";import"./cross-BYT7TYIn.js";import"./svgIconContainer-BNlhaeSZ.js";import"./useBaseUiId-Bb1FrUqT.js";import"./InternalBackdrop-D0lSPPfD.js";import"./composite-Dkx2J5ep.js";import"./index-DhDUpT6q.js";import"./index-DPe8iSwh.js";import"./index-DsIDLdue.js";import"./useEventCallback-CqT8udWU.js";import"./SkeletonBar-BnnPCVvc.js";import"./LoadingCell-DL0oq-Y1.js";import"./ColumnConfigDialog-OUdG8yLN.js";import"./DraggableList-GejUIgG3.js";import"./search-LFDcG9Bw.js";import"./Input-Cv8mC2jD.js";import"./useControlled-CPKeQZ_f.js";import"./Button-Cdt1t7O2.js";import"./small-cross-Q4Mn0c4O.js";import"./ActionButton-vOzY96R-.js";import"./Checkbox-CGscG7J1.js";import"./useValueChanged-BwX_swTd.js";import"./CollapsiblePanel-CSh4ea_Q.js";import"./MultiColumnSortDialog-QKJ7omg5.js";import"./MenuTrigger-BaFbYHCc.js";import"./CompositeItem-DtBwKtoa.js";import"./ToolbarRootContext-oEsqExNC.js";import"./getDisabledMountTransitionStyles-DT79YMLS.js";import"./getPseudoElementBounds-C8FT8HZf.js";import"./chevron-down-B2xEAqn8.js";import"./index-D2-d5N75.js";import"./error-CTtfffuQ.js";import"./BaseCbacBanner-Bm92q348.js";import"./makeExternalStore-DqOv6fSv.js";import"./Tooltip-i5Zb1xth.js";import"./PopoverPopup-BdiLEXnM.js";import"./debounce-BwLH3R9O.js";import"./useOsdkClient-C1-7Io4T.js";import"./tick-xBqsThOV.js";import"./DropdownField-heO63W5v.js";import"./isEqual-B2jZ4Prp.js";import"./withOsdkMetrics-FDsqzYBW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
