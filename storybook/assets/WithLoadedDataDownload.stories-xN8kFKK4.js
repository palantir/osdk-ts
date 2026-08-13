import{f as b,j as a,r as i}from"./iframe-DCe6Mdm_.js";import{O as u}from"./object-table-CPHzaYxP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOJ4PoOi.js";import"./index-DEsJaMx2.js";import"./Dialog-DGwfutm-.js";import"./cross-CJsNmyRf.js";import"./svgIconContainer-DCGhfyJV.js";import"./useBaseUiId-BBf2jJQX.js";import"./InternalBackdrop-mRLBU6i0.js";import"./composite-D278LNPr.js";import"./index-w4e4JQ9Y.js";import"./index-DfEtL9_w.js";import"./index-D7eNBVK-.js";import"./useEventCallback-60DtBFBu.js";import"./SkeletonBar-lewdr35b.js";import"./LoadingCell-C7C7yuXh.js";import"./ColumnConfigDialog-ClE2fiGp.js";import"./DraggableList-DyLRFxn4.js";import"./search-i3wN8XPz.js";import"./Input-CexuDk3x.js";import"./useControlled-J08ycTXS.js";import"./Button-CMj35CzN.js";import"./small-cross-CKR9nVmW.js";import"./ActionButton-CxPFrJen.js";import"./Checkbox-CFvHGocX.js";import"./useValueChanged-CKSZHwBz.js";import"./CollapsiblePanel-wkW42G3A.js";import"./MultiColumnSortDialog-C8R_Sag-.js";import"./MenuTrigger-3KeKY9rT.js";import"./CompositeItem-QuRNq9IV.js";import"./ToolbarRootContext-Dg7t3l2c.js";import"./getDisabledMountTransitionStyles-90RwPzEQ.js";import"./getPseudoElementBounds-DUbM5yff.js";import"./chevron-down-1f-nO09j.js";import"./index-C2gC57rZ.js";import"./error-DDf8VeOI.js";import"./BaseCbacBanner-BsymODXL.js";import"./makeExternalStore-Z40vhwY9.js";import"./Tooltip-DL0JIbop.js";import"./PopoverPopup-453DLuVc.js";import"./toNumber-CNeIRQiS.js";import"./useOsdkClient-Ce4ACsVh.js";import"./tick-CmBo1oMB.js";import"./DropdownField-G_wbGU9M.js";import"./withOsdkMetrics-DaHbZvPF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
