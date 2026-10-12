import{f as b,j as a,r as i}from"./iframe-BpjAczHY.js";import{O as u}from"./object-table-CbPG2EbH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-n775iZGy.js";import"./Table-C8bNeHtW.js";import"./index-B865hR58.js";import"./Dialog-C0PdJPQK.js";import"./cross-C6qTQWHW.js";import"./svgIconContainer-C3jJhmpt.js";import"./useBaseUiId-99hOwMJj.js";import"./InternalBackdrop-Nq7KwH4o.js";import"./composite-Dz8fJC5u.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./index-DA4_2A10.js";import"./useEventCallback-B6zcZW3p.js";import"./SkeletonBar-BecfrY7r.js";import"./LoadingCell-vBGp6yxc.js";import"./ColumnConfigDialog-CfCkja_H.js";import"./DraggableList-DuvP9j4v.js";import"./search-NVe0lSCh.js";import"./Input-BK2Nmyqv.js";import"./useControlled-DGtH5z0Q.js";import"./Button-Dj8yiv60.js";import"./small-cross-DupO9VP4.js";import"./ActionButton-CRHWpJnS.js";import"./Checkbox-DfWTU0cg.js";import"./useValueChanged-CSF7lu2m.js";import"./CollapsiblePanel-By7EAy8-.js";import"./MultiColumnSortDialog-Ciz1sd7u.js";import"./MenuTrigger-Be270hxZ.js";import"./CompositeItem-DG1i5uV0.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./getDisabledMountTransitionStyles-BgiX7odw.js";import"./getPseudoElementBounds-CCx4Tlrc.js";import"./chevron-down-_ycbe8m1.js";import"./index-DmLzhgLv.js";import"./error-Biwv1K3K.js";import"./BaseCbacBanner-B6WijF8k.js";import"./makeExternalStore-RoIlT1g0.js";import"./Tooltip-VrYqX_Lh.js";import"./PopoverPopup-BxpA88JM.js";import"./debounce-Ds0PQScg.js";import"./useOsdkClient-D0Eek7Y4.js";import"./tick-B4peCy1V.js";import"./DropdownField-BJglwOE0.js";import"./isEqual-D9lvvdTI.js";import"./withOsdkMetrics-C6lIiCV7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
