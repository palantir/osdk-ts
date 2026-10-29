import{f as b,j as a,r as i}from"./iframe-DFu988a9.js";import{O as u}from"./object-table-bEsZnepU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ct8docw7.js";import"./Table-BrsdB9KA.js";import"./index-DtOhOCRY.js";import"./Dialog-tM8zvQcb.js";import"./cross-CTTF3yR9.js";import"./svgIconContainer-HyV1TJqY.js";import"./useBaseUiId-DfpfcE5B.js";import"./InternalBackdrop-DpxPfaGd.js";import"./composite-CqpVVzkR.js";import"./index-oZKnD5HE.js";import"./index-B1t2YxMt.js";import"./index-CkBJ6EJa.js";import"./useEventCallback-W1QvEMUe.js";import"./SkeletonBar-DjgWC4S2.js";import"./LoadingCell-ddXxCcm9.js";import"./ColumnConfigDialog-DIqFtw19.js";import"./DraggableList-DFuo8Shv.js";import"./search-IsQI8GuL.js";import"./Input-BESoTzvx.js";import"./useControlled-yPSACah0.js";import"./Button-6zqiKmKY.js";import"./small-cross-fz8OFb0W.js";import"./ActionButton-Dzobjq1d.js";import"./Checkbox-BD4Nf9SM.js";import"./useValueChanged-CYbng77M.js";import"./CollapsiblePanel-CpkVrlz9.js";import"./MultiColumnSortDialog-DE9pbNYw.js";import"./MenuTrigger-BpsMCIxo.js";import"./CompositeItem-DmVR8xyg.js";import"./ToolbarRootContext-C15MGeq9.js";import"./getDisabledMountTransitionStyles-C3yZ6yy9.js";import"./getPseudoElementBounds-BIueGgLb.js";import"./chevron-down-NXTIxDJ_.js";import"./index-Dsc2iZcF.js";import"./error-DqAZcTwE.js";import"./BaseCbacBanner-Bfv7AWzP.js";import"./makeExternalStore-D9C8VaXr.js";import"./Tooltip-BTqW7Tma.js";import"./PopoverPopup-CW_pGXjQ.js";import"./debounce-CabyEDng.js";import"./useOsdkClient-D2jZVLbn.js";import"./tick-BR3rer0s.js";import"./DropdownField-CF3gsiae.js";import"./isEqual-CF6RhxlN.js";import"./withOsdkMetrics-BYOAqz11.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
