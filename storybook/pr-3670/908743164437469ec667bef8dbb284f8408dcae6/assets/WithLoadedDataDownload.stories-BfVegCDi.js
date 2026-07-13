import{f as b,j as a,r as i}from"./iframe-DCqHKbrB.js";import{O as u}from"./object-table-Dp1ctJWL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BpC0Xix4.js";import"./Table-NOB19mqr.js";import"./index-DksTdEAE.js";import"./Dialog-VevNUS4m.js";import"./cross-CU1mVuqS.js";import"./svgIconContainer-C_r3XmUZ.js";import"./useBaseUiId-DneFdTlE.js";import"./InternalBackdrop-DR_kFkG7.js";import"./composite-CQu6WcFD.js";import"./index-BDBkMqeU.js";import"./index-Cg1yXLif.js";import"./index-7Y2zG3k5.js";import"./useEventCallback-Dv-E5PJ0.js";import"./SkeletonBar-D2cCx3SW.js";import"./LoadingCell-CxWGnSSd.js";import"./ColumnConfigDialog-BWmfjp0G.js";import"./DraggableList-lAAucr3g.js";import"./search-CdpFNP5g.js";import"./Input-D4PweGk6.js";import"./useControlled-DaKi3qlI.js";import"./Button-yOAN8cB8.js";import"./small-cross-D3vT9YkD.js";import"./ActionButton-C02Ldtzd.js";import"./Checkbox-BEhqJdwX.js";import"./useValueChanged-DKXFFzAk.js";import"./CollapsiblePanel-CMm7MsDp.js";import"./MultiColumnSortDialog-CmxGAF0y.js";import"./MenuTrigger-BAswjT3N.js";import"./CompositeItem-DnhineeP.js";import"./ToolbarRootContext-CCGnrXPP.js";import"./getDisabledMountTransitionStyles-DIZwTKjs.js";import"./getPseudoElementBounds-BAJjPnom.js";import"./chevron-down-CGNIDolt.js";import"./index-BCF8iDXD.js";import"./error-Dy63jnhf.js";import"./BaseCbacBanner-R1rwtr3v.js";import"./makeExternalStore-DMQ9I4QN.js";import"./Tooltip-3genz2FN.js";import"./PopoverPopup-D9A9UqLo.js";import"./toNumber-DazHSMOl.js";import"./useOsdkClient-BabGOx0D.js";import"./tick-WX0Zm-Wi.js";import"./DropdownField-BKL6B-_4.js";import"./withOsdkMetrics-BFTHdOY7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
