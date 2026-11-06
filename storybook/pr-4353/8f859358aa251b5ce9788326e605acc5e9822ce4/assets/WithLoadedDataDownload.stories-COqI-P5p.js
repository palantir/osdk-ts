import{f as b,j as a,r as i}from"./iframe-BS0M2hwP.js";import{O as u}from"./object-table-7WjT7lpV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0HkGCdU.js";import"./Table-B88OXfMx.js";import"./index-CPPTt-fG.js";import"./Dialog-BP0H6HGJ.js";import"./cross-DzypzeyC.js";import"./svgIconContainer-NUXlWCmy.js";import"./useBaseUiId-77uYocVy.js";import"./InternalBackdrop-hDcB9FVt.js";import"./composite-Dtpk2934.js";import"./index-C8CN-2yF.js";import"./index-CnbN8-s2.js";import"./index-Cd_-CKig.js";import"./useEventCallback-CgXNOiJD.js";import"./SkeletonBar-D1-iix8R.js";import"./LoadingCell-BFik17i5.js";import"./ColumnConfigDialog-CGpO-jVp.js";import"./DraggableList-CKhydpzb.js";import"./search-DzKPAVbq.js";import"./Input-C2-Y_50j.js";import"./useControlled-C2cZAxJ2.js";import"./Button-Ba1VM7tv.js";import"./small-cross-DmunPPRL.js";import"./ActionButton-B-OGv12r.js";import"./Checkbox-KsdEkqmQ.js";import"./useValueChanged-DN5r-FMv.js";import"./CollapsiblePanel-BCL9LE3M.js";import"./MultiColumnSortDialog-BrDCJ6OQ.js";import"./MenuTrigger-TfSdmOH4.js";import"./CompositeItem-BonvX_5i.js";import"./ToolbarRootContext-3PBXuwUh.js";import"./getDisabledMountTransitionStyles-B7XR0ec5.js";import"./getPseudoElementBounds-CEDHgaG-.js";import"./chevron-down-OJJdZYcx.js";import"./index-CEsGU-7z.js";import"./error-B91-GI1R.js";import"./BaseCbacBanner-DXyM0xsn.js";import"./makeExternalStore-BO2WwozP.js";import"./Tooltip-D4cxOObb.js";import"./PopoverPopup-DpckpHOT.js";import"./debounce-DAswCS-u.js";import"./useOsdkClient-BxlQ8pCq.js";import"./tick-B7id9DB4.js";import"./DropdownField-BSb2qsUX.js";import"./isEqual-DhYjGK75.js";import"./withOsdkMetrics-DDHgU96d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
