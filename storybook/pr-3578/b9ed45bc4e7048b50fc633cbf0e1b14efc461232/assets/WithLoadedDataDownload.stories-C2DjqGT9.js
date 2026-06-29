import{f as b,j as a,r as i}from"./iframe-pGfIdeQc.js";import{O as u}from"./object-table-BArKXBO7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CfacRwlT.js";import"./Table-G0vcCb1p.js";import"./index-CStqrya9.js";import"./Dialog-CUTCHWPi.js";import"./cross-n7I6WPV2.js";import"./svgIconContainer-BJ58DwaZ.js";import"./useBaseUiId-Badx_cLW.js";import"./InternalBackdrop-Be4MTCYQ.js";import"./composite-CtokHJrB.js";import"./index-RE0gqYn2.js";import"./index-CHA9YxKQ.js";import"./index-C7qBYqUM.js";import"./useEventCallback-CbWflxtf.js";import"./SkeletonBar-ogDWHeXY.js";import"./LoadingCell-B5czONrt.js";import"./ColumnConfigDialog-ChxQiK8a.js";import"./DraggableList-DGtGQCqK.js";import"./search-AfopOu5Z.js";import"./Input-8V8uS3j5.js";import"./useControlled-PagK95Rv.js";import"./Button-DoGnhWiU.js";import"./small-cross-Ce8ec5G6.js";import"./ActionButton-uLEszX_C.js";import"./Checkbox-88W520q5.js";import"./minus-sTaE8AEC.js";import"./tick-gT5oedKV.js";import"./useValueChanged-NkE5T430.js";import"./caret-down-CYkst58K.js";import"./CollapsiblePanel-COhmQEk_.js";import"./MultiColumnSortDialog-DIFngpLy.js";import"./MenuTrigger-ByEk1qcP.js";import"./CompositeItem-CtOetl_o.js";import"./ToolbarRootContext-D4zIBKav.js";import"./getDisabledMountTransitionStyles-hQU3Asuc.js";import"./getPseudoElementBounds-CFCQXWgd.js";import"./chevron-down-CK2TsFli.js";import"./index-CdDft0m1.js";import"./error-DcgEoChb.js";import"./BaseCbacBanner-CiBXQPYT.js";import"./makeExternalStore-kADLtrD4.js";import"./Tooltip-xorOm9Gb.js";import"./PopoverPopup-CfY8vhJz.js";import"./toNumber-CSS6K2f5.js";import"./useOsdkClient-B2isH-4J.js";import"./DropdownField-_uLQ7QN-.js";import"./withOsdkMetrics-LTIE-KQO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
