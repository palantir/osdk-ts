import{f as b,j as a,r as i}from"./iframe-q73h-SNz.js";import{O as u}from"./object-table-KjuvFoNU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvXISORE.js";import"./Table-BS6ZxxSV.js";import"./index-CNgILQVN.js";import"./Dialog-X4SIqq2i.js";import"./cross-UurqhnpQ.js";import"./svgIconContainer-BnJjPefi.js";import"./useBaseUiId-BT4TVIMU.js";import"./InternalBackdrop-3dmgnm-B.js";import"./composite-DsUUOBpL.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./index-CE_isF10.js";import"./useEventCallback-DHiiVSQq.js";import"./SkeletonBar-CyVdL5QR.js";import"./LoadingCell-BKwB91ug.js";import"./ColumnConfigDialog-Cuo6i1hm.js";import"./DraggableList-DYXgWAZz.js";import"./search-CyIDS8Xl.js";import"./Input-CUYY-XQS.js";import"./useControlled-CIDCJXAS.js";import"./Button-DMD0TrjN.js";import"./small-cross-KtqmkdiH.js";import"./ActionButton-DUEoS-Oq.js";import"./Checkbox-CnshtcrJ.js";import"./useValueChanged-vcJ35Sa1.js";import"./CollapsiblePanel-D1igOUIW.js";import"./MultiColumnSortDialog-chUbYR3p.js";import"./MenuTrigger-Dfchi1IP.js";import"./CompositeItem-8Q0GNXmT.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./getDisabledMountTransitionStyles-dAfff5JR.js";import"./getPseudoElementBounds-BcUe90OX.js";import"./chevron-down-CcztAG1Q.js";import"./index-CgMWGLyW.js";import"./error-BBRDAF1W.js";import"./BaseCbacBanner-D5GS6fO6.js";import"./makeExternalStore-CvHnGZr3.js";import"./Tooltip-C1ULjr5P.js";import"./PopoverPopup-Djh0qu5C.js";import"./debounce-DSfFacxB.js";import"./useOsdkClient-CVuR42rF.js";import"./tick-CDEBgOjy.js";import"./DropdownField-DpBuPkD-.js";import"./isEqual-DRblV8Co.js";import"./withOsdkMetrics-mt0BkM0o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
