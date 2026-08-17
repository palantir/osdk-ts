import{f as b,j as a,r as i}from"./iframe-DxXKdltG.js";import{O as u}from"./object-table-Bj4-DbWM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DeiUyftX.js";import"./Table-BCRzEpGp.js";import"./index-BtfwOrEP.js";import"./Dialog-CDoh5PA7.js";import"./cross-BuyZb8_W.js";import"./svgIconContainer-cbdygDVB.js";import"./useBaseUiId-BIU3X4c6.js";import"./InternalBackdrop-CWJDzul9.js";import"./composite-thvm4Qx2.js";import"./index-Zxk0DmkR.js";import"./index-cP62887E.js";import"./index-oU8fVFfk.js";import"./useEventCallback-CHffR8EK.js";import"./SkeletonBar-120LEEzJ.js";import"./LoadingCell-BpiL5yLu.js";import"./ColumnConfigDialog-DtWOobBZ.js";import"./DraggableList-CHRK6gSE.js";import"./search-BGr984X9.js";import"./Input-B2m11alO.js";import"./useControlled-CaTiOTAf.js";import"./Button-DmXHdCRF.js";import"./small-cross-B7cAW_f_.js";import"./ActionButton-BxZEyn-_.js";import"./Checkbox-DA9O83FT.js";import"./useValueChanged-aU9wdss0.js";import"./CollapsiblePanel-DE-53r5b.js";import"./MultiColumnSortDialog-CHEYUa-f.js";import"./MenuTrigger-RBwYXjaK.js";import"./CompositeItem-Co5br9Tc.js";import"./ToolbarRootContext-Oju08BfH.js";import"./getDisabledMountTransitionStyles-kwkiwBEE.js";import"./getPseudoElementBounds-BTSwOJ5D.js";import"./chevron-down-vwGCQFp5.js";import"./index-QYya9p5M.js";import"./error-JxDwIdvE.js";import"./BaseCbacBanner--K3_UuZs.js";import"./makeExternalStore-B1C7zDDl.js";import"./Tooltip-BS-tcXN-.js";import"./PopoverPopup-DDqVXp1Q.js";import"./debounce-C0urt5pH.js";import"./useOsdkClient-DQ_KPrvO.js";import"./tick-BRyYqbgU.js";import"./DropdownField-ClA4NquN.js";import"./isEqual-DrAT4LG7.js";import"./withOsdkMetrics-B-_hpiKp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
