import{f as b,j as a,r as i}from"./iframe-BBZCzStV.js";import{O as u}from"./object-table-DapV3Rol.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5SQDyWdl.js";import"./Table-fxlaPCGo.js";import"./index-B0mBcXI4.js";import"./Dialog-B-85Rx-2.js";import"./cross-CPvMVENn.js";import"./svgIconContainer-DfBgJD9-.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./InternalBackdrop-B_1kGoJ6.js";import"./composite-CFasADcm.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./index-Csh22FK0.js";import"./useEventCallback-C7wdVJUu.js";import"./SkeletonBar-Dh6u025G.js";import"./LoadingCell-CXYGJFXm.js";import"./ColumnConfigDialog-CV8tcLtB.js";import"./DraggableList-ed1YuQHx.js";import"./search-vc9aoGpm.js";import"./Input-CSnQRyFu.js";import"./useControlled-DoPklQtk.js";import"./Button-CfbDmY7F.js";import"./small-cross-DTHtoiVl.js";import"./ActionButton-NPe1j-Pf.js";import"./Checkbox-BBvJmZ_C.js";import"./useValueChanged-DDicrYhc.js";import"./CollapsiblePanel-DRW0CG7D.js";import"./MultiColumnSortDialog-uU-I92Wo.js";import"./MenuTrigger-CcvPK_Ol.js";import"./CompositeItem-DCNZBIgo.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./getDisabledMountTransitionStyles-p7s1v2Wq.js";import"./getPseudoElementBounds-CGyVBiW9.js";import"./chevron-down-CMFHrqJp.js";import"./index-DbFsgQOw.js";import"./error-DTmGvXOz.js";import"./BaseCbacBanner-CQos4IsY.js";import"./makeExternalStore-C0iVHY1V.js";import"./Tooltip-CIld4EMB.js";import"./PopoverPopup-Ct6679Cx.js";import"./debounce-CV2RI2D0.js";import"./useOsdkClient-qOAfm0EP.js";import"./tick-BCDmZou0.js";import"./DropdownField-CcyuWoJs.js";import"./isEqual-QmNJKBr8.js";import"./withOsdkMetrics-mfymYHOu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
