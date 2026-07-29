import{f as b,j as a,r as i}from"./iframe-B7YfKj_r.js";import{O as u}from"./object-table-MNwgz7c9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-zLh7gNhX.js";import"./Table-CVOmZ436.js";import"./index-CbJ6-D60.js";import"./Dialog-BXtqyTtu.js";import"./cross-0p6Vac4C.js";import"./svgIconContainer-Cz-PKCx4.js";import"./useBaseUiId-BdhKr30W.js";import"./InternalBackdrop-wAKazhys.js";import"./composite-DPXSfqsf.js";import"./index-BnfXHeb4.js";import"./index-s7UAVR_E.js";import"./index-CP1mkO19.js";import"./useEventCallback-x5Alg8Rl.js";import"./SkeletonBar-CoteejN9.js";import"./LoadingCell-KZnN3LUF.js";import"./ColumnConfigDialog-BiK-7kVu.js";import"./DraggableList-F7dQobt1.js";import"./search-Gvi_C_xs.js";import"./Input-CH_xkTTH.js";import"./useControlled-n47txmPS.js";import"./isEqual-B3yB_zqx.js";import"./isObject-HAXozI9M.js";import"./Button-OvcAa909.js";import"./ActionButton-DTC4pJjC.js";import"./Checkbox-BcQmQvKM.js";import"./useValueChanged-dNqqBU5J.js";import"./CollapsiblePanel-BxW4Hb4X.js";import"./MultiColumnSortDialog-CmowWdqV.js";import"./MenuTrigger-C9VeEY2O.js";import"./CompositeItem-DCU6fW8B.js";import"./ToolbarRootContext-BNxVHquj.js";import"./getDisabledMountTransitionStyles-ceQ6Bpps.js";import"./getPseudoElementBounds-BCdtuT11.js";import"./chevron-down-CEfOWXYF.js";import"./index-DO5HNGTZ.js";import"./error-CsyKVqOH.js";import"./BaseCbacBanner-BpD5Op_I.js";import"./makeExternalStore-qy5hPVIr.js";import"./Tooltip-D1b-uI4u.js";import"./PopoverPopup-Dbeile-5.js";import"./toNumber-lfnzEnWR.js";import"./useOsdkClient-DPaJk8c1.js";import"./tick-CAGbRlL2.js";import"./DropdownField-CUs6cqrJ.js";import"./withOsdkMetrics-C_jrvusq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
