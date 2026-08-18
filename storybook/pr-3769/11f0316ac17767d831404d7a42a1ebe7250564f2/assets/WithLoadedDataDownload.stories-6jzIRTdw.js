import{f as b,j as a,r as i}from"./iframe-BK0RufGl.js";import{O as u}from"./object-table-t3beq0jM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B1x3XWjh.js";import"./Table-b9fWb8-J.js";import"./index-BC49ZXOf.js";import"./Dialog-CbB9yRpZ.js";import"./cross-fqPA6CW1.js";import"./svgIconContainer-BlFMB5mu.js";import"./useBaseUiId-frLuJhJZ.js";import"./InternalBackdrop-CCU68TOf.js";import"./composite-DlFm6szC.js";import"./index-zkQRtd-f.js";import"./index-DkQ29aQ-.js";import"./index-BGA0Seny.js";import"./useEventCallback-D-WAZtwW.js";import"./SkeletonBar-B3ZfYzgc.js";import"./LoadingCell-CHCWipwZ.js";import"./ColumnConfigDialog-COKkJ2pr.js";import"./DraggableList-CygnTHuy.js";import"./search-DuhXtbsI.js";import"./Input-BEeAXmcy.js";import"./useControlled-unttFX2J.js";import"./Button-DvmwcYmH.js";import"./small-cross-LgLYRP96.js";import"./ActionButton-balBVwMY.js";import"./Checkbox-DTs0zrQe.js";import"./useValueChanged-CepPqKH_.js";import"./CollapsiblePanel-LAagTPh8.js";import"./MultiColumnSortDialog-CC4yow6c.js";import"./MenuTrigger-ByOTJWGh.js";import"./CompositeItem-BbIk1WEG.js";import"./ToolbarRootContext-qtgBfN3j.js";import"./getDisabledMountTransitionStyles-B5ZQPzmi.js";import"./getPseudoElementBounds-CUox1hQw.js";import"./chevron-down-RflKAGzX.js";import"./index-CHiFjEhv.js";import"./error-0TFzhvIK.js";import"./BaseCbacBanner-BLULDpAD.js";import"./makeExternalStore-h_6mTVKe.js";import"./Tooltip-i56DZZjj.js";import"./PopoverPopup-Dmd4Fc1j.js";import"./debounce-Ay-ce3CA.js";import"./useOsdkClient-Bp4Do1pN.js";import"./tick-H75vELII.js";import"./DropdownField-XRnSzaZr.js";import"./isEqual-xJAxAgWV.js";import"./withOsdkMetrics-CflMk9Ld.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
