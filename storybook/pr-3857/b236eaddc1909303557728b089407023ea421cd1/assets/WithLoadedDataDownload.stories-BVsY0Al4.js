import{f as b,j as a,r as i}from"./iframe-C8cvGscG.js";import{O as u}from"./object-table-Bl9llTCt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DC1YHagZ.js";import"./Table-BVcwqCvL.js";import"./index-D4FQYl0T.js";import"./Dialog-RKsRHohX.js";import"./cross-CprIKEkv.js";import"./svgIconContainer-D4IADJhB.js";import"./useBaseUiId-CTQW4Qod.js";import"./InternalBackdrop-BV3x9fEB.js";import"./composite-BI_-Y8ZI.js";import"./index-Cv_Heaoa.js";import"./index-oJ8Xwr6M.js";import"./index-B2ai54ZH.js";import"./useEventCallback-DsFzeAUD.js";import"./SkeletonBar-cjwpOSyO.js";import"./LoadingCell-Dd5UKK1z.js";import"./ColumnConfigDialog-Cg99CLu5.js";import"./DraggableList-CcV87Ef7.js";import"./search-DscZjBaM.js";import"./Input-4ZH7Uf17.js";import"./useControlled-DPYDb1X5.js";import"./Button-s9umFZ1s.js";import"./small-cross-DIzXOG7S.js";import"./ActionButton-QzUJAPB3.js";import"./Checkbox-BmClsKng.js";import"./useValueChanged-QH4DQ2zL.js";import"./CollapsiblePanel-5tt-I1EX.js";import"./MultiColumnSortDialog-vSwuKr4r.js";import"./MenuTrigger-DU4NXXCA.js";import"./CompositeItem-CZOJvSSZ.js";import"./ToolbarRootContext-DOPDMGFM.js";import"./getDisabledMountTransitionStyles-EkzwfJQM.js";import"./getPseudoElementBounds-BljzcTzT.js";import"./chevron-down-Bg2Fi8_v.js";import"./index-BTdV_y6h.js";import"./error-BmJxtr8m.js";import"./BaseCbacBanner-3TLBV2iJ.js";import"./makeExternalStore-a9HEG5rq.js";import"./Tooltip-BO4BL-3C.js";import"./PopoverPopup-D6rFG9a_.js";import"./toNumber-DmqLeUcD.js";import"./useOsdkClient-BOTALPg3.js";import"./tick-Dq7YPYRG.js";import"./DropdownField-BoUvaA8o.js";import"./withOsdkMetrics-Bep4H7WL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
