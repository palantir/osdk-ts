import{f as b,j as a,r as i}from"./iframe-DPcQ5jr3.js";import{O as u}from"./object-table-Cvi2wsSZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DaFFMXPg.js";import"./Table-JBCu0p6N.js";import"./index-BszcYN5m.js";import"./Dialog-DF8bCGRt.js";import"./cross-Ex3v7yAY.js";import"./svgIconContainer-knuh2bP-.js";import"./useBaseUiId-BfxjoMWT.js";import"./InternalBackdrop-BzDztsGv.js";import"./composite-cfOgAKY3.js";import"./index-Pgg50vLk.js";import"./index-D9X45JE7.js";import"./index-Iri7IIar.js";import"./useEventCallback-CaNhgfml.js";import"./SkeletonBar-C16aZ_fC.js";import"./LoadingCell-D9M7rjOe.js";import"./ColumnConfigDialog-Xzoir5jn.js";import"./DraggableList-B30YwC0o.js";import"./search-B1p0IMpD.js";import"./Input-D9StspzA.js";import"./useControlled-DdUaVlhi.js";import"./isEqual-CjzuMNVr.js";import"./isObject-CCdIJM0g.js";import"./Button-C7yoanwN.js";import"./ActionButton-DmcXermo.js";import"./Checkbox-DoBj_QBg.js";import"./useValueChanged-DgXaNmo2.js";import"./CollapsiblePanel-CwlNVmFC.js";import"./MultiColumnSortDialog-D5QJrZUi.js";import"./MenuTrigger-DxZ_38mw.js";import"./CompositeItem-DWSmEBV1.js";import"./ToolbarRootContext-DmbNoojd.js";import"./getDisabledMountTransitionStyles-2mqSuo-H.js";import"./getPseudoElementBounds-BxPMf3nx.js";import"./chevron-down-CMCQfOjD.js";import"./index-m3p1lG2O.js";import"./error-68oFQ-J3.js";import"./BaseCbacBanner-CWBS5cM7.js";import"./makeExternalStore-KDZTlrjP.js";import"./Tooltip-C-kXwqkE.js";import"./PopoverPopup-7zJxTzug.js";import"./toNumber-ClsUi4f1.js";import"./useOsdkClient-79jhrNfk.js";import"./tick-CLohUieJ.js";import"./DropdownField-Ih0KYJXy.js";import"./withOsdkMetrics-Bg5F8JCY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
