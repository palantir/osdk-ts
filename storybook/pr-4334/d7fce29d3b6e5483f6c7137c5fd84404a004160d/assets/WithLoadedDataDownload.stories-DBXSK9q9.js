import{f as b,j as a,r as i}from"./iframe-BrmQZ3gv.js";import{O as u}from"./object-table-CEcHHP_q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bFlMnFhE.js";import"./Table-DnUpQkRl.js";import"./index-BukqnFRF.js";import"./Dialog-C7vXG1dO.js";import"./cross-CyQ2LR1N.js";import"./svgIconContainer-1ZxcqWPt.js";import"./useBaseUiId-DOEJb2YQ.js";import"./InternalBackdrop-B6fWmh38.js";import"./composite-CToHHLnK.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./index-PCKTTVVz.js";import"./useEventCallback-D7yysNmp.js";import"./SkeletonBar-Bnl4zbTE.js";import"./LoadingCell-645SZiNQ.js";import"./ColumnConfigDialog-BOerTDNx.js";import"./DraggableList-VQAbVc9N.js";import"./search-3yVqV9Ja.js";import"./Input-CJbUQK7W.js";import"./useControlled-BKcLfL-m.js";import"./Button-DFW8ZRr_.js";import"./small-cross-DWB62PqX.js";import"./ActionButton-Cvda-cXU.js";import"./Checkbox-D2C-eWc7.js";import"./useValueChanged-B2eN2qPg.js";import"./CollapsiblePanel-C6bZdZ49.js";import"./MultiColumnSortDialog-DRMFjLTN.js";import"./MenuTrigger-CuPbLnV7.js";import"./CompositeItem-Cj9sjJEA.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./getDisabledMountTransitionStyles-oZQkDeF-.js";import"./getPseudoElementBounds-GhphztYg.js";import"./chevron-down-DjoNZ0eU.js";import"./index-Lz8g2hRL.js";import"./error-BoTJC5k7.js";import"./BaseCbacBanner-Df4PMHpV.js";import"./makeExternalStore-B5wDpA-S.js";import"./Tooltip-B67VaBcv.js";import"./PopoverPopup-CsNA8h91.js";import"./debounce-DktWngHR.js";import"./useOsdkClient-DMIbxZRi.js";import"./tick-DQnQI0KH.js";import"./DropdownField-BDpM5rcW.js";import"./isEqual-DRj2__AA.js";import"./withOsdkMetrics-CjsWDT1I.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
