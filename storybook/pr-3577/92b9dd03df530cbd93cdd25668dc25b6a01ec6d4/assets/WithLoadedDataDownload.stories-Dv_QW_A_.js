import{f as b,j as a,r as i}from"./iframe-Df7wAlvD.js";import{O as u}from"./object-table-NJqDowiI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DqpjBgxn.js";import"./Table-clHGuAQX.js";import"./index-BccTXbhX.js";import"./Dialog-DnK5D7W4.js";import"./cross-DWSiDlwX.js";import"./svgIconContainer-2oFhx_1q.js";import"./useBaseUiId-BOkuYL4j.js";import"./InternalBackdrop-_vFv8ToJ.js";import"./composite-CLfBjIvE.js";import"./index-CnfoFPSR.js";import"./index-DPFj9n2F.js";import"./index-QRBzez0J.js";import"./useEventCallback-Bpk8b7S_.js";import"./SkeletonBar-V18vXjPc.js";import"./LoadingCell-FZ-Mws4x.js";import"./ColumnConfigDialog-Co6i_7C1.js";import"./DraggableList-RIE4HdPn.js";import"./Input-B7U5egQu.js";import"./useControlled-HqqnQ2dL.js";import"./Button-CpGdy-VU.js";import"./small-cross-BrZMlIAa.js";import"./ActionButton-Hz-omFsA.js";import"./Checkbox-DZ9JDa4x.js";import"./minus-D_DRXj3S.js";import"./useValueChanged-D2oprhF4.js";import"./caret-down-BqhIyEtK.js";import"./CollapsiblePanel-DcDAztkJ.js";import"./MultiColumnSortDialog-Bmt2g9jL.js";import"./MenuTrigger-gxBd91Hs.js";import"./CompositeItem-D-JMACRH.js";import"./ToolbarRootContext-BHQz9_ey.js";import"./getDisabledMountTransitionStyles-CX77Evp4.js";import"./getPseudoElementBounds-DTTRGrxF.js";import"./chevron-down-DKmhsBxg.js";import"./index-9pL3iRcx.js";import"./error-BO5976cx.js";import"./BaseCbacBanner-B8ekiRQc.js";import"./makeExternalStore-DITO9XD_.js";import"./Tooltip-Vz33iQ7Z.js";import"./PopoverPopup-CCrdb--X.js";import"./toNumber-FI8kCcCo.js";import"./useOsdkClient-C6HDECsO.js";import"./DropdownField-9RIa50R4.js";import"./withOsdkMetrics-CaxA4gwL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
