import{f as b,j as a,r as i}from"./iframe-DQpCivO1.js";import{O as u}from"./object-table-CU8mywAw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BNtpiPnv.js";import"./Table-38llNuJy.js";import"./index-DS8-D35g.js";import"./Dialog-Cu8mAO9_.js";import"./cross-Ccdwkdk3.js";import"./svgIconContainer-CxU-QT8u.js";import"./useBaseUiId-C8ulXah6.js";import"./InternalBackdrop-DLd7Lwe4.js";import"./composite-xfEh3o5g.js";import"./index-BKAa7pmt.js";import"./index-Dqn9XUWy.js";import"./index-DmKdPFBX.js";import"./useEventCallback-8OJUCRRT.js";import"./SkeletonBar-CjumgPcn.js";import"./LoadingCell-BVmS8W3w.js";import"./ColumnConfigDialog-DlUolUQ-.js";import"./DraggableList-y6afPaq6.js";import"./search-GD8U0S68.js";import"./Input-i7VlWrgO.js";import"./useControlled-LcZaVq-T.js";import"./Button-CstsYLg_.js";import"./small-cross-BRsClvfH.js";import"./ActionButton-DrMcD0_E.js";import"./Checkbox-CgtUdNtY.js";import"./useValueChanged-C2RXTXRu.js";import"./CollapsiblePanel-DboLvc9U.js";import"./MultiColumnSortDialog-B6-XrrkP.js";import"./MenuTrigger-DThFqPHZ.js";import"./CompositeItem-BwdYO-ps.js";import"./ToolbarRootContext-DQ_5rIHb.js";import"./getDisabledMountTransitionStyles-C-frLZTH.js";import"./getPseudoElementBounds-DDo7a-AL.js";import"./chevron-down-DfHD6Nmf.js";import"./index-CliSQRrA.js";import"./error-CRC1V3FY.js";import"./BaseCbacBanner-TTjkw73J.js";import"./makeExternalStore-CZgijSTY.js";import"./Tooltip-DlyF3AAY.js";import"./PopoverPopup-BQXF4BGx.js";import"./debounce--yNODiaS.js";import"./useOsdkClient-CwqyybRI.js";import"./tick-BA8CGTis.js";import"./DropdownField-Or1B8bG-.js";import"./isEqual-DASnWbpg.js";import"./withOsdkMetrics-dKG6bw4N.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
