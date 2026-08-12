import{f as b,j as a,r as i}from"./iframe-CFVb3Ps1.js";import{O as u}from"./object-table-JJpjSfXj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUoBkcgp.js";import"./Table-C2qgkEda.js";import"./index-j_9_-Knb.js";import"./Dialog-u29b7JHZ.js";import"./cross-F64g4juI.js";import"./svgIconContainer-BIq4W7rh.js";import"./useBaseUiId-CYUQh1eE.js";import"./InternalBackdrop-C3_T0t_S.js";import"./composite-jNoK6z7Q.js";import"./index-PnPL-ngj.js";import"./index-BCwpvRKP.js";import"./index-MQFZGLtj.js";import"./useEventCallback-DfWEp3Qi.js";import"./SkeletonBar-DsIQ6u2E.js";import"./LoadingCell-Brtw5k8F.js";import"./ColumnConfigDialog-DCfB-Yy2.js";import"./DraggableList-BHy4YGXC.js";import"./search-dFaASQnw.js";import"./Input-DrcYzl24.js";import"./useControlled-DrQ2fT0v.js";import"./isEqual-DZJ5fEd6.js";import"./isObject-B_0v44vx.js";import"./Button-YOYPucvk.js";import"./ActionButton-DsjiNWUu.js";import"./Checkbox-CvxuqX69.js";import"./useValueChanged-u72R6kQz.js";import"./CollapsiblePanel-BVLs8nbx.js";import"./MultiColumnSortDialog-DkRJeCZc.js";import"./MenuTrigger-DYapyQQR.js";import"./CompositeItem-DCUGYySc.js";import"./ToolbarRootContext-AlgrHhlC.js";import"./getDisabledMountTransitionStyles-hPO0FBhu.js";import"./getPseudoElementBounds-DbAHztz7.js";import"./chevron-down-Bq_Zi3-5.js";import"./index-Chak816X.js";import"./error-BTpRUOI6.js";import"./BaseCbacBanner-Djq95ilw.js";import"./makeExternalStore-D5L1QyPs.js";import"./Tooltip-Cy4QqDmK.js";import"./PopoverPopup-Bkp1GJEw.js";import"./toNumber-BkArYVYP.js";import"./useOsdkClient-SiBep89O.js";import"./tick-BEPEfegi.js";import"./DropdownField-D_0so34u.js";import"./withOsdkMetrics-BZU3mB8s.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
