import{f as b,j as a,r as i}from"./iframe-Dxf4Pfii.js";import{O as u}from"./object-table-teUVeBQF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ci8NMOYF.js";import"./Table-Dq5REfPe.js";import"./index-BPBHjHBt.js";import"./Dialog-mndqTSLP.js";import"./cross-COrhxFBC.js";import"./svgIconContainer-BdxGOMXV.js";import"./useBaseUiId-BBachgDn.js";import"./InternalBackdrop-CFrJwRy4.js";import"./composite-BAA7WPxj.js";import"./index-Dsk0oEX3.js";import"./index-DlHivqB_.js";import"./index-CA0xM10N.js";import"./useEventCallback-DZCNq0Gg.js";import"./SkeletonBar-DyvtAZ1q.js";import"./LoadingCell-C9sMEV6k.js";import"./ColumnConfigDialog-CCDthIHA.js";import"./DraggableList-CqWC8oEM.js";import"./search-BYBW1CEy.js";import"./Input-Dc5nJgGF.js";import"./useControlled-40F8gIyz.js";import"./Button-DiZtkqKs.js";import"./small-cross-CUKjKhkC.js";import"./ActionButton-ABdmTgM9.js";import"./Checkbox-xERkEuYE.js";import"./useValueChanged-CIVU-p1z.js";import"./CollapsiblePanel-B4bl4mBR.js";import"./MultiColumnSortDialog-U_EzV9Kr.js";import"./MenuTrigger-DZh473oa.js";import"./CompositeItem-6maKJylY.js";import"./ToolbarRootContext-CAbW4J_e.js";import"./getDisabledMountTransitionStyles-BKzkpdmr.js";import"./getPseudoElementBounds-BYX5JyBU.js";import"./chevron-down-DG4gq9Kw.js";import"./index-C6hYmHGr.js";import"./error-Cp32RNcr.js";import"./BaseCbacBanner-DXgTdQpZ.js";import"./makeExternalStore-DOGp9SoX.js";import"./Tooltip-DsvfSe4i.js";import"./PopoverPopup-DlIAjFIG.js";import"./debounce-CqpSqGTT.js";import"./useOsdkClient-5XyyZIRW.js";import"./tick--0CHJ2Jw.js";import"./DropdownField-4kbww5nN.js";import"./isEqual-O4AuTBeS.js";import"./withOsdkMetrics-DGJIUSZ9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
