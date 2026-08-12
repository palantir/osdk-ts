import{f as b,j as a,r as i}from"./iframe-BX_ZglJt.js";import{O as u}from"./object-table-BrfdoMYW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DgkZQ_xq.js";import"./Table-D8_HSV8U.js";import"./index-Bc3Cl_41.js";import"./Dialog-Bu6-Kj-W.js";import"./cross-Bb6sq-qZ.js";import"./svgIconContainer-BXbbsTGb.js";import"./useBaseUiId-B1-OngoV.js";import"./InternalBackdrop-CVXRM7LX.js";import"./composite-zDdFGMPL.js";import"./index-f-SNNIDI.js";import"./index-DEXm8OLH.js";import"./index-Bymt254M.js";import"./useEventCallback-CY3efkIf.js";import"./SkeletonBar-OhTF8r69.js";import"./LoadingCell-jCSIzRv-.js";import"./ColumnConfigDialog-CVbQvdjb.js";import"./DraggableList-DYouQU8K.js";import"./search-fr7iJOod.js";import"./Input-Dhz0W6pJ.js";import"./useControlled-CJlGLYfk.js";import"./isEqual-CjhHFU-O.js";import"./isObject-DOPaAV0g.js";import"./Button-E6kiD0yr.js";import"./ActionButton-DOP9LOd9.js";import"./Checkbox-Blm_4ilg.js";import"./useValueChanged-D4-4-7b2.js";import"./CollapsiblePanel-BhOuAUWU.js";import"./MultiColumnSortDialog-Dzzs7tfF.js";import"./MenuTrigger-DoPJIVoM.js";import"./CompositeItem-nc6zMu_C.js";import"./ToolbarRootContext-DkSLh-9D.js";import"./getDisabledMountTransitionStyles-BysbxaoP.js";import"./getPseudoElementBounds-BPL1ZlaK.js";import"./chevron-down-Enjce5n9.js";import"./index-CEWEVwT2.js";import"./error-aw4kUWZA.js";import"./BaseCbacBanner-2hGgw6l3.js";import"./makeExternalStore-BMycxTdB.js";import"./Tooltip-DalQkWyU.js";import"./PopoverPopup-BsXM6vRc.js";import"./toNumber-DE4wMns7.js";import"./useOsdkClient-Duhffiqv.js";import"./tick-Dnu4AhpX.js";import"./DropdownField-DfSuo6wk.js";import"./withOsdkMetrics-CwOfdRmG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
