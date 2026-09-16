import{f as b,j as a,r as i}from"./iframe-nlmHRzbs.js";import{O as u}from"./object-table-DOQUbULy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bb4XP1JR.js";import"./Table-Iflxq4LK.js";import"./index-BgU0BklA.js";import"./Dialog-B--HyOFO.js";import"./cross-BQ8TIcPZ.js";import"./svgIconContainer-DS8QHuIj.js";import"./useBaseUiId-BvXBgh7R.js";import"./InternalBackdrop-CEbVru8y.js";import"./composite-9JvUOFhV.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./index-BvyZUx7D.js";import"./useEventCallback-DdbGqZSc.js";import"./SkeletonBar-CecNAbci.js";import"./LoadingCell-BR6nn8z5.js";import"./ColumnConfigDialog-CsSbs-RH.js";import"./DraggableList-CgQsJlL7.js";import"./search-KdHomzFH.js";import"./Input-C_WMBA0h.js";import"./useControlled-CL-2sXEB.js";import"./Button-u5u7l_L-.js";import"./small-cross-BOjbtokm.js";import"./ActionButton-DjrG6zzQ.js";import"./Checkbox-CNVwyFF7.js";import"./useValueChanged-Ct9fu7Wh.js";import"./CollapsiblePanel-CY5PmDvT.js";import"./MultiColumnSortDialog-C9_8osWy.js";import"./MenuTrigger-0I9U1fuS.js";import"./CompositeItem-DKy9HSNC.js";import"./ToolbarRootContext-C84AlWji.js";import"./getDisabledMountTransitionStyles-BPlx4jy3.js";import"./getPseudoElementBounds-CbqeOO0o.js";import"./chevron-down-DrD3cVw1.js";import"./index-B9KsoBHZ.js";import"./error-D0sD9myM.js";import"./BaseCbacBanner-rlX41YP5.js";import"./makeExternalStore-CDFtpytl.js";import"./Tooltip-h8u3LTdZ.js";import"./PopoverPopup-Cv6VjVH2.js";import"./debounce-tbCf9dd0.js";import"./useOsdkClient-upaDZFfa.js";import"./tick-jNCOjvIC.js";import"./DropdownField-CYPegbUm.js";import"./isEqual-CLpN-Ztb.js";import"./withOsdkMetrics-CYPNcnBx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
