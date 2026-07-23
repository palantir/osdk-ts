import{f as b,j as a,r as i}from"./iframe-C9l55MfW.js";import{O as u}from"./object-table-D-D4FfWh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BaR7j1qy.js";import"./Table-17RoFdRU.js";import"./index-B8sSDI6e.js";import"./Dialog-Br-r_Jz5.js";import"./cross-BiQ3YqUJ.js";import"./svgIconContainer-B36bqId8.js";import"./useBaseUiId-ChnMimVR.js";import"./InternalBackdrop-BlruP4ni.js";import"./composite-BIs1fDYc.js";import"./index-DO7KJbr1.js";import"./index-DgjXWxOU.js";import"./index-BW1Lfmqj.js";import"./useEventCallback-ZnSS4zGT.js";import"./SkeletonBar-QDieq497.js";import"./LoadingCell-Sgc_tfkm.js";import"./ColumnConfigDialog-CfUHoNW-.js";import"./DraggableList-Buw5fkzU.js";import"./search-CxxUnvng.js";import"./Input-Bv6ABtkM.js";import"./useControlled-D2BKU9rQ.js";import"./isEqual-Cxmw8cnE.js";import"./isObject-CIVrJQuX.js";import"./Button-CoqVnaSH.js";import"./ActionButton-CaEwDF2o.js";import"./Checkbox-DKEhj8Z0.js";import"./useValueChanged-BE3KwSjZ.js";import"./CollapsiblePanel-BsOt4_8Y.js";import"./MultiColumnSortDialog-Te6ZGCOe.js";import"./MenuTrigger-Doe0cvbN.js";import"./CompositeItem-DE8DbRAW.js";import"./ToolbarRootContext-CKqEQDfC.js";import"./getDisabledMountTransitionStyles-CPanS3YJ.js";import"./getPseudoElementBounds-D7kXGV-U.js";import"./chevron-down-eHbfMIJ5.js";import"./index-CjA4akcY.js";import"./error-DWli6fEA.js";import"./BaseCbacBanner-DNKIogTC.js";import"./makeExternalStore-grWifcgC.js";import"./Tooltip-CfVILNIE.js";import"./PopoverPopup-CUz-lUmi.js";import"./toNumber-Bf2vR-0U.js";import"./useOsdkClient-CTaCGmot.js";import"./tick-t-B9nwZ6.js";import"./DropdownField-BugMZ8yX.js";import"./withOsdkMetrics-DMdezYaS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
