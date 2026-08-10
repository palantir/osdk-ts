import{f as b,j as a,r as i}from"./iframe-T1o6DwQn.js";import{O as u}from"./object-table-DZY8b-86.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CkSYKUqL.js";import"./Table-3iJd7gyC.js";import"./index-C-Yvvs3G.js";import"./Dialog-gA5oXLZl.js";import"./cross-DNFg9adP.js";import"./svgIconContainer-BEph9AST.js";import"./useBaseUiId-CQK9r6XJ.js";import"./InternalBackdrop-DwRohRWz.js";import"./composite-BUVy4G6Q.js";import"./index-Cj5oaWDZ.js";import"./index-DzvoDz4m.js";import"./index-B2yL0vo-.js";import"./useEventCallback-DCBJT6LD.js";import"./SkeletonBar-D77QBKOp.js";import"./LoadingCell-Idw7S2wY.js";import"./ColumnConfigDialog-vuVx74WT.js";import"./DraggableList-BY1xQfTl.js";import"./search-CLuqE52U.js";import"./Input-Dan1z7PJ.js";import"./useControlled-KFuOJB7y.js";import"./isEqual-DPxqtn2A.js";import"./isObject-BPUwpKdJ.js";import"./Button-B5AFRMRx.js";import"./ActionButton-DFoxUgo7.js";import"./Checkbox-CLP1JsNX.js";import"./useValueChanged-D-Nexx1O.js";import"./CollapsiblePanel-VveLCUij.js";import"./MultiColumnSortDialog-fd0ORnEb.js";import"./MenuTrigger-B-v3EPiU.js";import"./CompositeItem-Cwg9cZxl.js";import"./ToolbarRootContext-CmFCJCtX.js";import"./getDisabledMountTransitionStyles-BPa-nMbj.js";import"./getPseudoElementBounds-Hdyo3ffU.js";import"./chevron-down-DR4svmgW.js";import"./index-D1JQTjX2.js";import"./error-Cwg5VJo2.js";import"./BaseCbacBanner-Cz8vVRvX.js";import"./makeExternalStore-BlXYWwZo.js";import"./Tooltip-CZ9oTlF0.js";import"./PopoverPopup-GGnOhBXr.js";import"./toNumber-B0doV3z3.js";import"./useOsdkClient-30aL_up_.js";import"./tick-6XDwjxMK.js";import"./DropdownField-djZ4N90-.js";import"./withOsdkMetrics-B2606ITo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
