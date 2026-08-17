import{f as b,j as a,r as i}from"./iframe-_RccL5V-.js";import{O as u}from"./object-table-BWqXJxpP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DD9OvIIK.js";import"./Table-DcC_Vlhh.js";import"./index-C6hccgOF.js";import"./Dialog-CFjdXxkD.js";import"./cross-CaF5yBdq.js";import"./svgIconContainer-Dkm7spTV.js";import"./useBaseUiId-DKx-HA2j.js";import"./InternalBackdrop-PGcyz6vF.js";import"./composite-DmZi_mQu.js";import"./index-C5klxPP6.js";import"./index-Cv-DuiVI.js";import"./index-DmEwvMYZ.js";import"./useEventCallback-BW47naCQ.js";import"./SkeletonBar-CujJHfJK.js";import"./LoadingCell-DyeBLpNq.js";import"./ColumnConfigDialog-Dx07fLmk.js";import"./DraggableList-a2VW3a69.js";import"./search-90zJh5kA.js";import"./Input-BrtWACOD.js";import"./useControlled-CcGBD7ay.js";import"./Button-CqbbN-n3.js";import"./small-cross-DkD11Lot.js";import"./ActionButton-BVQXVcb-.js";import"./Checkbox-DOqMBlHX.js";import"./useValueChanged-Dx-1nAgT.js";import"./CollapsiblePanel-DomQ1PEE.js";import"./MultiColumnSortDialog-XWI71dtA.js";import"./MenuTrigger-jxLgamJf.js";import"./CompositeItem-CyjZ1orr.js";import"./ToolbarRootContext-DPDAzzNp.js";import"./getDisabledMountTransitionStyles-B0EJhWbh.js";import"./getPseudoElementBounds-BxUCOJz2.js";import"./chevron-down-D0EZBNiO.js";import"./index-Bb5kSeb4.js";import"./error-DOBNWCIr.js";import"./BaseCbacBanner-gaJGghq7.js";import"./makeExternalStore-CPjz00Mq.js";import"./Tooltip-C8b9102L.js";import"./PopoverPopup-B0BKlT_Z.js";import"./debounce-DF3CmTOM.js";import"./useOsdkClient-C97lxKNX.js";import"./tick-Bv56pu8Q.js";import"./DropdownField-CgP9cILT.js";import"./isEqual-C8R8n9Yv.js";import"./withOsdkMetrics-CTkC1llm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
