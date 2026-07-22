import{f as b,j as a,r as i}from"./iframe-COsBkwN-.js";import{O as u}from"./object-table-c7gyRcbU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2KEka4g.js";import"./Table-DQ03bzYn.js";import"./index-Dzyv5lNn.js";import"./Dialog-CfEMSUqI.js";import"./cross-CWmtKzEJ.js";import"./svgIconContainer-DESpR6Na.js";import"./useBaseUiId-CrYfkKS-.js";import"./InternalBackdrop-Bluj3Mdb.js";import"./composite-N-ev52N7.js";import"./index-Ce8K8IPk.js";import"./index-pi4yE-No.js";import"./index-Rtj5Hj-2.js";import"./useEventCallback-B8p3CIl0.js";import"./SkeletonBar-Bh_PBj25.js";import"./LoadingCell-CKNPBx9p.js";import"./ColumnConfigDialog-BkGZV4g4.js";import"./DraggableList-DCFx2wmj.js";import"./search-B3yafYcI.js";import"./Input-BnxjD1st.js";import"./useControlled-OeG3im5l.js";import"./isEqual-D0rFCLts.js";import"./isObject-C_yA3jOF.js";import"./Button-9MwOUcQP.js";import"./ActionButton-D9YKaThO.js";import"./Checkbox-CQ-1wAcz.js";import"./useValueChanged-DyqDYB3r.js";import"./CollapsiblePanel-CYWA74CD.js";import"./MultiColumnSortDialog-DkGpsyqE.js";import"./MenuTrigger-DwpyTl2V.js";import"./CompositeItem-D8_4YPh_.js";import"./ToolbarRootContext-2lZchj18.js";import"./getDisabledMountTransitionStyles-Ce-q5I0h.js";import"./getPseudoElementBounds-UoxiI40Z.js";import"./chevron-down-CYND1yfl.js";import"./index-sBgXa9QS.js";import"./error-30orUfhG.js";import"./BaseCbacBanner-pRbKHM35.js";import"./makeExternalStore-BZSr_d3Q.js";import"./Tooltip-CS6x6FEa.js";import"./PopoverPopup-BdC-ViXE.js";import"./toNumber-Ct_pxQWb.js";import"./useOsdkClient-CiTMqk4D.js";import"./tick-DBOvSCxz.js";import"./DropdownField-zDQTJ1vy.js";import"./withOsdkMetrics-CkVV9LW6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
