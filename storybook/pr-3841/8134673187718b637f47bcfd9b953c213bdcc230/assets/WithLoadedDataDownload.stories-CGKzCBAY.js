import{f as b,j as a,r as i}from"./iframe-BOPH40aM.js";import{O as u}from"./object-table-CwbcJ0co.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dk7sOnp6.js";import"./Table-DDg19h3D.js";import"./index-C6HCGinX.js";import"./Dialog-D5Vta0XL.js";import"./cross-Dyy1QuxQ.js";import"./svgIconContainer-C74jhUFY.js";import"./useBaseUiId-FmUF_HCn.js";import"./InternalBackdrop-DXhiZMhg.js";import"./composite-D2Y_yGja.js";import"./index-BdcQoi5s.js";import"./index-Dn6uDsye.js";import"./index-5cDTy_56.js";import"./useEventCallback-DFtwstmX.js";import"./SkeletonBar-BFZg22dk.js";import"./LoadingCell-DktVzcvW.js";import"./ColumnConfigDialog--5UMrtN6.js";import"./DraggableList-D--051Oi.js";import"./search-CzcjumOg.js";import"./Input-IJOIjizp.js";import"./useControlled-D0weT_xr.js";import"./Button-BEu920XA.js";import"./small-cross-G4HnNcP3.js";import"./ActionButton-Av230VXe.js";import"./Checkbox-Dp3MELm6.js";import"./useValueChanged--LsWGCe4.js";import"./CollapsiblePanel-CKq8a2Q7.js";import"./MultiColumnSortDialog-puJirV83.js";import"./MenuTrigger-DJNmOI8Y.js";import"./CompositeItem-BrrSAdxA.js";import"./ToolbarRootContext-BQh3Vmwb.js";import"./getDisabledMountTransitionStyles-ZNI7YJ6O.js";import"./getPseudoElementBounds-CX_DMQ51.js";import"./chevron-down-BwPY74Fq.js";import"./index-DIdLImiR.js";import"./error-CQh9rOC1.js";import"./BaseCbacBanner-BMq0Yx7G.js";import"./makeExternalStore-CDJtVkjz.js";import"./Tooltip-Bi19yJDJ.js";import"./PopoverPopup-D_yfhwEP.js";import"./debounce-DNlMjLPc.js";import"./useOsdkClient-B8kqEZV4.js";import"./tick-dQV5Bvko.js";import"./DropdownField-BTKnt1ZR.js";import"./isEqual-Bhet0e8P.js";import"./withOsdkMetrics-CxsZe37o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
