import{f as b,j as a,r as i}from"./iframe-B45Fwd24.js";import{O as u}from"./object-table-DnmxIZHU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGPdPr-Q.js";import"./Table-EPEQXkHa.js";import"./index-CmB0aajK.js";import"./Dialog-DYoKM1ix.js";import"./cross-B-_C0TOb.js";import"./svgIconContainer-BNBtt37M.js";import"./useBaseUiId-Dr28hnWl.js";import"./InternalBackdrop-DuT4vDby.js";import"./composite-DJooMdlw.js";import"./index-D1eZs0rV.js";import"./index-CdlABH-y.js";import"./index-DHb9isl8.js";import"./useEventCallback-BNNaumvW.js";import"./SkeletonBar-BI6TrWj8.js";import"./LoadingCell-CicnvjVp.js";import"./ColumnConfigDialog-BeOQ92Sz.js";import"./DraggableList-CwEkfG_A.js";import"./Input-AViTwUB1.js";import"./useControlled-CC9KrKB_.js";import"./Button-Cm22MXXv.js";import"./small-cross-D-vI3K0u.js";import"./ActionButton-B4L14FBV.js";import"./Checkbox-DvDXiCC7.js";import"./minus-CiD-ecns.js";import"./useValueChanged-BvDHTHdp.js";import"./caret-down-CTTfY8rv.js";import"./CollapsiblePanel-D7Gi9bOG.js";import"./MultiColumnSortDialog-CZ8KzKuk.js";import"./MenuTrigger-DPIpDMOj.js";import"./CompositeItem-C488MAie.js";import"./ToolbarRootContext-DlOiOwv2.js";import"./getDisabledMountTransitionStyles-BuIdFrh6.js";import"./getPseudoElementBounds-HYVEuAwz.js";import"./chevron-down-Cwz3ukGp.js";import"./index-CzUHto2v.js";import"./error-BOHdpUwg.js";import"./BaseCbacBanner-Cb08zWrB.js";import"./makeExternalStore-B9iK3ZWK.js";import"./Tooltip-C1ZDOXBw.js";import"./PopoverPopup-ZIZLA3wZ.js";import"./toNumber-BP6HhfeY.js";import"./useOsdkClient-xhyXVxPX.js";import"./DropdownField-DRMPFiAY.js";import"./withOsdkMetrics-hjyJZf0c.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
