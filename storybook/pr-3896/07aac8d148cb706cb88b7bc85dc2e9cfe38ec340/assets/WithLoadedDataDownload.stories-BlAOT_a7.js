import{f as b,j as a,r as i}from"./iframe-CgO27IRu.js";import{O as u}from"./object-table-DXNAiDf6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFaeybdJ.js";import"./Table-BIALEz5r.js";import"./index-BYcjpIix.js";import"./Dialog-CkwYR2xh.js";import"./cross-7f4N_TUE.js";import"./svgIconContainer-DhCCLzjj.js";import"./useBaseUiId-BO2BnfXi.js";import"./InternalBackdrop-Cz0WVhEG.js";import"./composite-p801Jdqa.js";import"./index-D2mMtCtu.js";import"./index-BUqQhE-Z.js";import"./index-mNj5KG8f.js";import"./useEventCallback-DFjx1zjN.js";import"./SkeletonBar-BX4lka8z.js";import"./LoadingCell-D3D5c3XV.js";import"./ColumnConfigDialog-1UCfeJwM.js";import"./DraggableList-WrqVXuVf.js";import"./search-BsJeG7XA.js";import"./Input-Dj3Aq0gE.js";import"./useControlled-DQw2ttEs.js";import"./Button-IqR8HyTq.js";import"./small-cross-CPs8amt9.js";import"./ActionButton-DOTNR6TX.js";import"./Checkbox-BbzMjnfd.js";import"./useValueChanged-BE8D05Iz.js";import"./CollapsiblePanel-PEWKdp4D.js";import"./MultiColumnSortDialog-CjR7xFOj.js";import"./MenuTrigger-SbjN_ntN.js";import"./CompositeItem-DM5Ux4XM.js";import"./ToolbarRootContext-Dk5396e8.js";import"./getDisabledMountTransitionStyles-DXJXIwd_.js";import"./getPseudoElementBounds-DowlDy4M.js";import"./chevron-down-BHGyaEjN.js";import"./index-D4Z8a6hC.js";import"./error-CvjVBbuk.js";import"./BaseCbacBanner-BAMy2tjK.js";import"./makeExternalStore-BWlpa4eR.js";import"./Tooltip-BUDoMBLR.js";import"./PopoverPopup-DwKTUNJI.js";import"./debounce-CKeaQRTn.js";import"./useOsdkClient-B_-tZKM9.js";import"./tick-BaoeG2cB.js";import"./DropdownField-Doi6icK-.js";import"./isEqual-BZS2mAgW.js";import"./withOsdkMetrics-DT_01Uro.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
