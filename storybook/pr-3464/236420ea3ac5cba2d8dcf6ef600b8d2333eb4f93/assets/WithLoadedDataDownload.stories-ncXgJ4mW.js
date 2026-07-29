import{f as b,j as a,r as i}from"./iframe-BQLDwnYS.js";import{O as u}from"./object-table-CiK00j02.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DrYcjSID.js";import"./Table-39N7hKFI.js";import"./index-C1Y5AWrw.js";import"./Dialog-BcylHAZC.js";import"./cross-BwP0gjCc.js";import"./svgIconContainer-Dm2wCbyW.js";import"./useBaseUiId-BmyAjBD4.js";import"./InternalBackdrop-CoW5ayVh.js";import"./composite-DO2M4lPA.js";import"./index-Bwp8y7R4.js";import"./index-vNuHTMxc.js";import"./index-DQoyM81Q.js";import"./useEventCallback-tpYRyOos.js";import"./SkeletonBar-D08ug57N.js";import"./LoadingCell-CYR3A6wl.js";import"./ColumnConfigDialog-BI5bvEmf.js";import"./DraggableList-DpC9TOx3.js";import"./search-DJ9ja1DT.js";import"./Input-BSFiHdyo.js";import"./useControlled-AOt-_DXq.js";import"./Button-BJ0OLq1S.js";import"./small-cross-CZoDFuCq.js";import"./ActionButton-DzOL_DSi.js";import"./Checkbox-Pzbxjy4i.js";import"./minus-DFg9Ebm5.js";import"./tick-MskXhkUM.js";import"./useValueChanged-DxvYCI11.js";import"./caret-down-Dp47fQLJ.js";import"./CollapsiblePanel-BGZgqils.js";import"./MultiColumnSortDialog-D6GsvYfQ.js";import"./MenuTrigger-CKpvMl9S.js";import"./CompositeItem-Ca06aqdO.js";import"./ToolbarRootContext-1yW1bLAK.js";import"./getDisabledMountTransitionStyles-DYnR0Bkc.js";import"./getPseudoElementBounds-C1EUm1wS.js";import"./chevron-down-Dacr4Tgv.js";import"./index-DpFgnV-t.js";import"./error-xOyZOf-R.js";import"./BaseCbacBanner-DIDHLDjY.js";import"./makeExternalStore-DNKGCL3m.js";import"./Tooltip-B5DVSsqB.js";import"./PopoverPopup-nA5qKkd7.js";import"./toNumber-CTlQZHTU.js";import"./useOsdkClient-C-nulLpb.js";import"./DropdownField-C0U6-mTz.js";import"./withOsdkMetrics-DFy95XQr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
