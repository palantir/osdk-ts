import{f as b,j as a,r as i}from"./iframe-BjbHRI0z.js";import{O as u}from"./object-table-CRsH42Ki.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BUM7BTsm.js";import"./Table-CjrVb0t9.js";import"./index-CGlA5dXU.js";import"./Dialog-DAdIz198.js";import"./cross-DFCaIKoy.js";import"./svgIconContainer-BQW7jGob.js";import"./useBaseUiId-BfNPJ7-Z.js";import"./InternalBackdrop-44a6AIl-.js";import"./composite-BFEQAufL.js";import"./index-CI8QNR9V.js";import"./index-CiZKopjl.js";import"./index-DLLtCTGJ.js";import"./useEventCallback-C_WUDWdo.js";import"./SkeletonBar-CAHftrLV.js";import"./LoadingCell-E8N45omU.js";import"./ColumnConfigDialog-BDpr2Vqq.js";import"./DraggableList-UwyC-4Gj.js";import"./search-DugTyXej.js";import"./Input-BVornoU9.js";import"./useControlled-rSaw5pb5.js";import"./Button-D9KcyGxn.js";import"./small-cross-CN9po8rh.js";import"./ActionButton-BDL-FgSv.js";import"./Checkbox-BJPUMEsA.js";import"./useValueChanged-ls6nut0P.js";import"./CollapsiblePanel-D9oIVLW-.js";import"./MultiColumnSortDialog-Bj0wdEYx.js";import"./MenuTrigger-EwmqbwYj.js";import"./CompositeItem-BUg5QAEv.js";import"./ToolbarRootContext-BIp7KVlb.js";import"./getDisabledMountTransitionStyles-DIaPn1J1.js";import"./getPseudoElementBounds-Cz_FAddT.js";import"./chevron-down-C9nnJYZM.js";import"./index-D90yLxts.js";import"./error-Cl6EUNrf.js";import"./BaseCbacBanner-CF7bmkgw.js";import"./makeExternalStore-CeeAAQpn.js";import"./Tooltip-B88xm2HD.js";import"./PopoverPopup-DUUESn5Y.js";import"./debounce-B0atJeU8.js";import"./useOsdkClient-EcavFoEZ.js";import"./tick-BUlj9YHj.js";import"./DropdownField-D4-t_biV.js";import"./isEqual-BsA9kd7g.js";import"./withOsdkMetrics-BjQ5Qn0j.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
