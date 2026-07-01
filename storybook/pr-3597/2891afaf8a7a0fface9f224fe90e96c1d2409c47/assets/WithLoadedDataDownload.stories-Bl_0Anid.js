import{f as b,j as a,r as i}from"./iframe-CNeLbKR0.js";import{O as u}from"./object-table-Dq_9LDhY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-t6i53lZY.js";import"./Table-CweYi1DH.js";import"./index-8cQwkJos.js";import"./Dialog-DU0uDqGo.js";import"./cross-CBV_IYC3.js";import"./svgIconContainer-BZaeorZI.js";import"./useBaseUiId-DIhe_FS8.js";import"./InternalBackdrop-CtrCM3Nw.js";import"./composite-C-XAEXGU.js";import"./index-Ds4ML4jl.js";import"./index-7euDZAsg.js";import"./index-D5kHiwHU.js";import"./useEventCallback-ItVUyazS.js";import"./SkeletonBar-CPPhJVSG.js";import"./LoadingCell-Bn_XkVu1.js";import"./ColumnConfigDialog-B0jo3WhG.js";import"./DraggableList-Fe-9Iy-Q.js";import"./search-BHuH4UT5.js";import"./Input-BgnrhhXf.js";import"./useControlled-DDWfgMvb.js";import"./Button-Bk9cUjq4.js";import"./small-cross-BnJQuN1A.js";import"./ActionButton-iLDHmZ0i.js";import"./Checkbox-EeHuuSTo.js";import"./minus-DPOXvMeN.js";import"./tick-BrkQyvqG.js";import"./useValueChanged-tizwmzr9.js";import"./caret-down-B4mmkM1f.js";import"./CollapsiblePanel-vthxulNQ.js";import"./MultiColumnSortDialog-loZgDEZ9.js";import"./MenuTrigger-CtbVfHkL.js";import"./CompositeItem-njWh5NE4.js";import"./ToolbarRootContext-BVIcN7p5.js";import"./getDisabledMountTransitionStyles-DmqgBKm9.js";import"./getPseudoElementBounds-Dy3M3vCL.js";import"./chevron-down-DFSDxaLc.js";import"./index-CI27Aptl.js";import"./error-liY-14PA.js";import"./BaseCbacBanner-DyTgz13d.js";import"./makeExternalStore-BurdIEcc.js";import"./Tooltip-DU3ybuZN.js";import"./PopoverPopup-CiG_Uniw.js";import"./toNumber-DQW_pIUl.js";import"./useOsdkClient-Ci3rcIet.js";import"./DropdownField-C9qfiJKP.js";import"./withOsdkMetrics-vMOAMzjU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
