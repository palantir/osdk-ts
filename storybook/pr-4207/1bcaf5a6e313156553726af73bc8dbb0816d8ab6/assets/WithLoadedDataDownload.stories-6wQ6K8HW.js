import{f as b,j as a,r as i}from"./iframe-BxrMAPhN.js";import{O as u}from"./object-table-kLrWn1bD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DrnFR1_M.js";import"./Table-_lbqKSTc.js";import"./index-3ce-DqIm.js";import"./Dialog-C8L9xW1b.js";import"./cross-CgUMfDbf.js";import"./svgIconContainer-BTC4I1jP.js";import"./useBaseUiId-CYhkk9Wl.js";import"./InternalBackdrop-fby99vEC.js";import"./composite-Dd7hy379.js";import"./index-C4XN9ow6.js";import"./index-DZWGTrRj.js";import"./index-CUS5I621.js";import"./useEventCallback-ztQWmBPn.js";import"./SkeletonBar-Dijlhnp9.js";import"./LoadingCell-Beq5gjYy.js";import"./ColumnConfigDialog-DCt_o6YG.js";import"./DraggableList-B_XL0fvE.js";import"./search-DDIdgg65.js";import"./Input-B49f-IH3.js";import"./useControlled-CBAJvoho.js";import"./Button-BHjA9vXD.js";import"./small-cross-DcC-nrRa.js";import"./ActionButton-CV_MAkW4.js";import"./Checkbox-ccqMIQBw.js";import"./useValueChanged-kVe0_w2P.js";import"./CollapsiblePanel-Dc01KugY.js";import"./MultiColumnSortDialog-DNdkPCtc.js";import"./MenuTrigger-Dpo_htYB.js";import"./CompositeItem-DrJtYX8s.js";import"./ToolbarRootContext-BseqN11S.js";import"./getDisabledMountTransitionStyles-CmE2wGB-.js";import"./getPseudoElementBounds-DT1sYSxK.js";import"./chevron-down-vMhLf0Yn.js";import"./index-B8D9hLY9.js";import"./error-AaI7Sssv.js";import"./BaseCbacBanner-CLTovdFm.js";import"./makeExternalStore-BOIpe8LX.js";import"./Tooltip-NlgzcR6l.js";import"./PopoverPopup-VtScEPpW.js";import"./debounce-B6IFkGZ6.js";import"./useOsdkClient-BmkTGWD1.js";import"./tick-F7U5QknT.js";import"./DropdownField-Dn-sPpxO.js";import"./isEqual-BBx3w4Uo.js";import"./withOsdkMetrics-PY8DhDl3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
