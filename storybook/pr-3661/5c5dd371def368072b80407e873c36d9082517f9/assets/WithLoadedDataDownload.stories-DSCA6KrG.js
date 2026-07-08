import{f as b,j as a,r as i}from"./iframe-B8pB1bJY.js";import{O as u}from"./object-table-BMMzP9pT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DXZ8dl6a.js";import"./Table-DQl-g1P4.js";import"./index-Cct9Hzyk.js";import"./Dialog-CdKXD5Av.js";import"./cross-DT9_3V5M.js";import"./svgIconContainer-CoYMcxhp.js";import"./useBaseUiId-hbqorb2C.js";import"./InternalBackdrop-CmCeozM3.js";import"./composite-B3ZXUS7R.js";import"./index-BWu2MeTs.js";import"./index-Dr9KdU4I.js";import"./index-BjGuZNF2.js";import"./useEventCallback-C9g6BFmY.js";import"./SkeletonBar-B2q4ElyM.js";import"./LoadingCell-Eb76HUxR.js";import"./ColumnConfigDialog-BNPNn-0i.js";import"./DraggableList-BfoDhciT.js";import"./search-BSMZLluX.js";import"./Input-mD30rmJY.js";import"./useControlled-DrYY3vU9.js";import"./Button-GtjGt5F3.js";import"./small-cross-BfmMb7q-.js";import"./ActionButton-CHCp7m3N.js";import"./Checkbox-CR9-8RGI.js";import"./useValueChanged-CelK5b0Z.js";import"./CollapsiblePanel-m5ysI4-y.js";import"./MultiColumnSortDialog-CpXJSeFe.js";import"./MenuTrigger-1Tas0aoj.js";import"./CompositeItem-BYF7NSQK.js";import"./ToolbarRootContext-BRiMAfYn.js";import"./getDisabledMountTransitionStyles-BtBdaacH.js";import"./getPseudoElementBounds-Ctp0mDIz.js";import"./chevron-down-BBglpfYU.js";import"./index-CTRDrVhu.js";import"./error-DhkniUj3.js";import"./BaseCbacBanner-BLUhJ4zd.js";import"./makeExternalStore-DL_nt-sT.js";import"./Tooltip-3dZgSM1I.js";import"./PopoverPopup-C_cisDW6.js";import"./toNumber-DIAATGYs.js";import"./useOsdkClient-BEiD1g6Z.js";import"./tick-CIEXnMMA.js";import"./DropdownField-DH73ERTG.js";import"./withOsdkMetrics-CnndoLRa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
