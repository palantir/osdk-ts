import{f as b,j as a,r as i}from"./iframe-CVgWx_mk.js";import{O as u}from"./object-table-F8273WKJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CFfBa7BD.js";import"./Table-ee8B848t.js";import"./index-KhqTHjvK.js";import"./Dialog-DbMkWdGC.js";import"./cross-Ch2oGVZP.js";import"./svgIconContainer-MI5luthc.js";import"./useBaseUiId-B0ovho4b.js";import"./InternalBackdrop-w-gmvkMd.js";import"./composite-mrQGTihx.js";import"./index-Dj_0AH5M.js";import"./index-kHlCzxdB.js";import"./index-xvBWe_nZ.js";import"./useEventCallback-KGEKy1Kp.js";import"./SkeletonBar-DSJVYfMY.js";import"./LoadingCell-C4Fh_PtS.js";import"./ColumnConfigDialog-rdQ95Jra.js";import"./DraggableList-N7PPscOJ.js";import"./search-BdiQZg80.js";import"./Input-B_ebmuiE.js";import"./useControlled-CmMjx2zB.js";import"./Button-BdWA5AOv.js";import"./small-cross-Ct--V4I5.js";import"./ActionButton-CMmqUJoP.js";import"./Checkbox-DUqXmOBs.js";import"./useValueChanged-BbKX3ggH.js";import"./CollapsiblePanel-CjrlksH3.js";import"./MultiColumnSortDialog-CB3-aHjQ.js";import"./MenuTrigger-BqO-RbZe.js";import"./CompositeItem-CCjIa2t2.js";import"./ToolbarRootContext-CaqtX5pJ.js";import"./getDisabledMountTransitionStyles-BU3lkCAL.js";import"./getPseudoElementBounds-BHTi51r7.js";import"./chevron-down-DTQ9C7Jw.js";import"./index-Bo_a2b3D.js";import"./error-aoO-9vvY.js";import"./BaseCbacBanner-dCyQbW6T.js";import"./makeExternalStore-Dyx7TWX2.js";import"./Tooltip-DP4ZeHkc.js";import"./PopoverPopup-X41W4tQB.js";import"./debounce-BtFrK_-r.js";import"./useOsdkClient-9IMUcDL7.js";import"./tick-BnV8UH-j.js";import"./DropdownField-BXwDMn-1.js";import"./isEqual-Csoq5Do4.js";import"./withOsdkMetrics-DoeckjWh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
