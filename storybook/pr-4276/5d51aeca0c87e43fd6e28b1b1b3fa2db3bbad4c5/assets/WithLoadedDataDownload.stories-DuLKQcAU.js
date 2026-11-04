import{f as b,j as a,r as i}from"./iframe-DWecEh6Z.js";import{O as u}from"./object-table-DAMoRfJu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bbi2Z730.js";import"./Table-BQIL32i2.js";import"./index-6GDxt5zW.js";import"./Dialog-BTJHEOWb.js";import"./cross-DJ8vlukc.js";import"./svgIconContainer-CzZM0mPh.js";import"./useBaseUiId-DGtSF2d7.js";import"./InternalBackdrop-Dwui7Iwy.js";import"./composite-Dkoqcymr.js";import"./index-DwNzNK9a.js";import"./index-CgyINOqj.js";import"./index-D1u_zvAB.js";import"./useEventCallback-BnrirAaK.js";import"./SkeletonBar-BtmrMCoY.js";import"./LoadingCell-C2TXzPgY.js";import"./ColumnConfigDialog-DQxLvf4V.js";import"./DraggableList-Drxl4Ij8.js";import"./search-Dq1J9kTw.js";import"./Input-CalqcJQf.js";import"./useControlled-DxZ-cBby.js";import"./Button-Cipj2Ppc.js";import"./small-cross-CtR_-pfW.js";import"./ActionButton-BHq7nCiC.js";import"./Checkbox-gSoIZfAY.js";import"./useValueChanged-MajtV6Am.js";import"./CollapsiblePanel-DKsnYU-Y.js";import"./MultiColumnSortDialog-F5EwEeJC.js";import"./MenuTrigger-DQPZVbQo.js";import"./CompositeItem-K9AR25LJ.js";import"./ToolbarRootContext-D-1OWq12.js";import"./getDisabledMountTransitionStyles-DyI0iHRG.js";import"./getPseudoElementBounds-DnVQyjld.js";import"./chevron-down-C6k7Uas0.js";import"./index-B-5_Mr4U.js";import"./error-BHOwo5JQ.js";import"./BaseCbacBanner-DBe9XQkF.js";import"./makeExternalStore-BKGvKQz7.js";import"./Tooltip-CvzGGbpE.js";import"./isObject-4ImOr-SM.js";import"./debounce-BVhyQSqg.js";import"./useOsdkClient-BfFw3qSS.js";import"./tick-DrdvNN56.js";import"./DropdownField-CrXyCQrM.js";import"./isEqual-DnM3Sqmr.js";import"./_baseIsEqual-DJDOeQCT.js";import"./withOsdkMetrics-BTTMLJya.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
