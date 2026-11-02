import{f as b,j as a,r as i}from"./iframe-BCqrjcZp.js";import{O as u}from"./object-table-C_GnPGDg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-IP6Q7Lp8.js";import"./Table-C1ZLuF4G.js";import"./index-D0jlJMeY.js";import"./Dialog-CViBcxvF.js";import"./cross-B5B9w1fn.js";import"./svgIconContainer-DwsnB4Bh.js";import"./useBaseUiId-BHV9sQZt.js";import"./InternalBackdrop-CTTwd3gc.js";import"./composite-D7-rpd9b.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./index-DXLbvv5i.js";import"./useEventCallback-CVpAOZ4R.js";import"./SkeletonBar-DCUOzX1s.js";import"./LoadingCell-CJKgeEY6.js";import"./ColumnConfigDialog-5BjgoD7j.js";import"./DraggableList-ghEwlwg0.js";import"./search-uqqKBKCA.js";import"./Input-CuKouNDL.js";import"./useControlled-Bzb-P5Sw.js";import"./Button-u7PTjF0v.js";import"./small-cross-uBxq7RBA.js";import"./ActionButton-BeKm1dws.js";import"./Checkbox--_dd5ccs.js";import"./useValueChanged-Xw3hkMdy.js";import"./CollapsiblePanel-jE2vmdzP.js";import"./MultiColumnSortDialog-DVas1kCG.js";import"./MenuTrigger-C0DYfKbf.js";import"./CompositeItem-CI0_kgLB.js";import"./ToolbarRootContext-gONCPNww.js";import"./getDisabledMountTransitionStyles-fk6vko0H.js";import"./getPseudoElementBounds-BFSuywVY.js";import"./chevron-down-ClwDZxr-.js";import"./index-C-VgWq2f.js";import"./error--BdktMRw.js";import"./BaseCbacBanner-C-Bmu30y.js";import"./makeExternalStore-IQ_ZHFEU.js";import"./Tooltip-BZ1-8qFM.js";import"./PopoverPopup-lQJBNDjd.js";import"./debounce-KOiwrhH1.js";import"./useOsdkClient-DPRWmwVD.js";import"./tick-Mmlb1_fs.js";import"./DropdownField-DR9iVX7L.js";import"./isEqual-Bdex3d6x.js";import"./withOsdkMetrics-C5LHIkEx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
