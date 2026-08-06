import{f as b,j as a,r as i}from"./iframe-OyuMXdrr.js";import{O as u}from"./object-table-WbmxHzOJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-_x9aAxJx.js";import"./Table-C2HfxcFz.js";import"./index-CME39S5e.js";import"./Dialog-C_4ccFQm.js";import"./cross-CaP_ypC8.js";import"./svgIconContainer-91GtXVWB.js";import"./useBaseUiId-CxWaSe1x.js";import"./InternalBackdrop-C0GxCzv2.js";import"./composite-CkaTKBTw.js";import"./index-PckWXlEL.js";import"./index-CzWqRMoQ.js";import"./index-3rZ9IWOh.js";import"./useEventCallback-CNSBH2bg.js";import"./SkeletonBar-Bpa29lfc.js";import"./LoadingCell-CE0uX5x-.js";import"./ColumnConfigDialog-DhvijquX.js";import"./DraggableList-oY_qzXXn.js";import"./search-D5f-ghxr.js";import"./Input-imDy7DTE.js";import"./useControlled-4AMSQyom.js";import"./isEqual-BdYTuTxb.js";import"./isObject-D6IZDeSm.js";import"./Button-BO7yKCcC.js";import"./ActionButton-D8khtr3e.js";import"./Checkbox-a2OVP_Gh.js";import"./useValueChanged-Cr5aH0fh.js";import"./CollapsiblePanel-DTf0Tm-0.js";import"./MultiColumnSortDialog-Bx7E33Rl.js";import"./MenuTrigger-CppLD_4q.js";import"./CompositeItem-B-4Vgrgy.js";import"./ToolbarRootContext-XKHI_qO5.js";import"./getDisabledMountTransitionStyles--PrC0Gh8.js";import"./getPseudoElementBounds-CMhbjwPm.js";import"./chevron-down-BF1gUlxP.js";import"./index-DQgKy5OY.js";import"./error-D1Yo1J9l.js";import"./BaseCbacBanner-C_Gima15.js";import"./makeExternalStore-DBUQL4bm.js";import"./Tooltip-AfOE4C-S.js";import"./PopoverPopup-DNemk0rN.js";import"./toNumber-DB6O7AtD.js";import"./useOsdkClient-q8bkUL6Q.js";import"./tick-Cr-cM9yt.js";import"./DropdownField-gotRGKM7.js";import"./withOsdkMetrics-DiqAT51F.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
