import{f as b,j as a,r as i}from"./iframe-56aCtkcZ.js";import{O as u}from"./object-table-DY9jOMSL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DP50sY1P.js";import"./Table-BD41Pu4l.js";import"./index-BM5nCcvA.js";import"./Dialog-C8sI_IUj.js";import"./cross-BkceNYXb.js";import"./svgIconContainer-Da40OoQe.js";import"./useBaseUiId-D82-BIAj.js";import"./InternalBackdrop-BWk9Mij_.js";import"./composite-Bol_PDWG.js";import"./index-WgXTqvYF.js";import"./index-2i5LUS2T.js";import"./index-6JhW2qtZ.js";import"./useEventCallback--SPa_rCD.js";import"./SkeletonBar-B6_sPXiY.js";import"./LoadingCell-9Bkob7fj.js";import"./ColumnConfigDialog-E8E7Cf-b.js";import"./DraggableList-BgkHsuk4.js";import"./search-Df5_6yBi.js";import"./Input-BUSfhI-b.js";import"./useControlled-BNAN5oeG.js";import"./Button-C0vE2bzb.js";import"./small-cross-BScMbdWS.js";import"./ActionButton-juMisa4o.js";import"./Checkbox-BQvICqoB.js";import"./useValueChanged-B9dcid5j.js";import"./CollapsiblePanel-BK9buE6t.js";import"./MultiColumnSortDialog-BHrG4DuP.js";import"./MenuTrigger-CYnmjXqd.js";import"./CompositeItem-CtIfORVC.js";import"./ToolbarRootContext-DWmT4M8t.js";import"./getDisabledMountTransitionStyles-C3g2m2GA.js";import"./getPseudoElementBounds-DhoqY1uL.js";import"./chevron-down--SGqA3gF.js";import"./index-BglOGw85.js";import"./error-t-pHJ0in.js";import"./BaseCbacBanner-FU9mX3LF.js";import"./makeExternalStore-C8LtB6Bq.js";import"./Tooltip-DPvc60vQ.js";import"./PopoverPopup-1nRwWEZN.js";import"./debounce-CmP_j_Q8.js";import"./useOsdkClient-jilUbAUE.js";import"./tick-BVwIBB0x.js";import"./DropdownField-3Ad7m87u.js";import"./isEqual-CeyZKxlT.js";import"./withOsdkMetrics-BQAZKQ7x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
