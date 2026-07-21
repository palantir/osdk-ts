import{f as b,j as a,r as i}from"./iframe-BVFrXrYq.js";import{O as u}from"./object-table-_DZ9lpOV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-HXZr6wiN.js";import"./Table-Dmj2Y7oP.js";import"./index-DYfZu-Ee.js";import"./Dialog-Bhz8eZfs.js";import"./cross-D5G1I7-7.js";import"./svgIconContainer-iyTG0sGg.js";import"./useBaseUiId-rUB46zhQ.js";import"./InternalBackdrop-DiYac6EC.js";import"./composite-giO6rXsy.js";import"./index-CwOjfOXs.js";import"./index-Bc-PTka1.js";import"./index-Ml01DX1I.js";import"./useEventCallback-CUdfYZ6y.js";import"./SkeletonBar-pRxix1-R.js";import"./LoadingCell-CK6JVuPY.js";import"./ColumnConfigDialog-CcejyjLj.js";import"./DraggableList-DmnVrfrG.js";import"./search-Ck_fv0WH.js";import"./Input-x53Ed6WS.js";import"./useControlled-DWUZNbgT.js";import"./isEqual-6Yce6y8_.js";import"./isObject-dsp37kJd.js";import"./Button-ByKYiqBb.js";import"./ActionButton-D8qgIS-F.js";import"./Checkbox-DqVZ3p_k.js";import"./useValueChanged-LAJ3lPNB.js";import"./CollapsiblePanel-DfTUE1Bz.js";import"./MultiColumnSortDialog-d3f07pOz.js";import"./MenuTrigger-DOdyAP5y.js";import"./CompositeItem-CGK1pG4p.js";import"./ToolbarRootContext-C9c31ZG8.js";import"./getDisabledMountTransitionStyles-CYOXvBKc.js";import"./getPseudoElementBounds-Cp8S3x4v.js";import"./chevron-down-CSaEu3Fq.js";import"./index-BrQWPLKv.js";import"./error-utCnBBOj.js";import"./BaseCbacBanner-C2gq-aH_.js";import"./makeExternalStore-KFg2pyql.js";import"./Tooltip-B5hdvKf4.js";import"./PopoverPopup-BdzgsnSh.js";import"./toNumber-BTpZeaDZ.js";import"./useOsdkClient-ClVlFYGM.js";import"./tick-CH1h6JpF.js";import"./DropdownField-BS33wLpJ.js";import"./withOsdkMetrics-J13aY73Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
