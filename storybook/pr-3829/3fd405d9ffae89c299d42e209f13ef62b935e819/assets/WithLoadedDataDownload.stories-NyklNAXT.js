import{f as b,j as a,r as i}from"./iframe-85l92LuF.js";import{O as u}from"./object-table-C0GnWyPt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DoBjmup7.js";import"./Table-BnDs73HF.js";import"./index-BnAHZs62.js";import"./Dialog-C4vZ3GgX.js";import"./cross-DZhpzTXU.js";import"./svgIconContainer-9VtSpFHF.js";import"./useBaseUiId-CGJCIeBX.js";import"./InternalBackdrop-DbM0HmsH.js";import"./composite-CaqHqJ_a.js";import"./index-zU9OYY3O.js";import"./index-OfsSx2G7.js";import"./index-DM4Gegry.js";import"./useEventCallback-DXmG8K1Y.js";import"./SkeletonBar-CWeveXAy.js";import"./LoadingCell-B3KBO1t6.js";import"./ColumnConfigDialog-C5kNLuT3.js";import"./DraggableList-DYFgJu_P.js";import"./search-HhZWfkPx.js";import"./Input-Bs9FOxx_.js";import"./useControlled-D-3f0MFO.js";import"./isEqual-DSvlbf0L.js";import"./isObject-Doo8UJXv.js";import"./Button-C177onMO.js";import"./ActionButton-DRuDmXXC.js";import"./Checkbox-Cf9AR_dN.js";import"./useValueChanged-KsIwXjTG.js";import"./CollapsiblePanel-726yqMtN.js";import"./MultiColumnSortDialog-psYjQqrg.js";import"./MenuTrigger-u-yWNfeM.js";import"./CompositeItem-B2i1pVuI.js";import"./ToolbarRootContext-Bi6RhBRT.js";import"./getDisabledMountTransitionStyles-BaxpKOOx.js";import"./getPseudoElementBounds-DyArnjjm.js";import"./chevron-down-UflpNh7y.js";import"./index-BPWj9FJk.js";import"./error-Cj2vyR90.js";import"./BaseCbacBanner-g8nywgDC.js";import"./makeExternalStore-WSruEEDk.js";import"./Tooltip-cHdPf_B7.js";import"./PopoverPopup-CG85ep_B.js";import"./toNumber-Cs7eH4rR.js";import"./useOsdkClient-C2cGCo7o.js";import"./tick-BCKGptbI.js";import"./DropdownField-BpqvP_BY.js";import"./withOsdkMetrics-SMjq4TP8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
