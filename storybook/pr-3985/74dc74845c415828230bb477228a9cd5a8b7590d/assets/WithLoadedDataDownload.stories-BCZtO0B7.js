import{f as b,j as a,r as i}from"./iframe-B0aax5t4.js";import{O as u}from"./object-table-CrSjyILN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_i0Odcu.js";import"./Table-C8ig-ejt.js";import"./index-CA_7V0ln.js";import"./Dialog-BP_aLww7.js";import"./cross-C3BbzJF1.js";import"./svgIconContainer-DSeQyMEd.js";import"./useBaseUiId-C9EFBUqt.js";import"./InternalBackdrop-YHaUWllu.js";import"./composite-Cu5vApVf.js";import"./index-FaCZN02u.js";import"./index-BOMUn4js.js";import"./index-Crxx3EiI.js";import"./useEventCallback-81QtWnOW.js";import"./SkeletonBar-DvtukVW0.js";import"./LoadingCell-CgaGKxH-.js";import"./ColumnConfigDialog-CIctkUBq.js";import"./DraggableList-CQExoIKz.js";import"./search-7EK0E19p.js";import"./Input-DuNf2WGN.js";import"./useControlled-Cjro_C_L.js";import"./Button-DcLOyqPK.js";import"./small-cross-BXeSo4Fh.js";import"./ActionButton-B3wz3E9S.js";import"./Checkbox-CopBKgc0.js";import"./useValueChanged-DrFFTdCP.js";import"./CollapsiblePanel-BouT-1X2.js";import"./MultiColumnSortDialog-D65JRXoT.js";import"./MenuTrigger-_QNNWd1o.js";import"./CompositeItem-DhB66LbS.js";import"./ToolbarRootContext-D_WwjLAe.js";import"./getDisabledMountTransitionStyles-DopRS8uM.js";import"./getPseudoElementBounds-CxIE0dVy.js";import"./chevron-down-59Pc7DyK.js";import"./index-DhaocRdq.js";import"./error-DSukmTRO.js";import"./BaseCbacBanner-B0R2rA0w.js";import"./makeExternalStore-C8fdPEkr.js";import"./Tooltip-D1IoO4LU.js";import"./PopoverPopup-Dawl7HJi.js";import"./debounce-DhQIUNPS.js";import"./useOsdkClient-Bk4AmunN.js";import"./tick-CGBQp0dn.js";import"./DropdownField-ELR4mU-J.js";import"./isEqual-BU7ie3df.js";import"./withOsdkMetrics-BMYYjUQJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
