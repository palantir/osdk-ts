import{f as b,j as a,r as i}from"./iframe-C-mlL1d1.js";import{O as u}from"./object-table-CflN7BW3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BUxDkfWR.js";import"./Table-CrwMjEH3.js";import"./index-B6OYb_DA.js";import"./Dialog-J8erkqPd.js";import"./cross-bL1PiJj_.js";import"./svgIconContainer-DOFv3aDL.js";import"./useBaseUiId-BKlcYEBY.js";import"./InternalBackdrop-Bno6e7cF.js";import"./composite-T8-lg8nr.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./index-ChA1IBqb.js";import"./useEventCallback-BrE-PuVs.js";import"./SkeletonBar-Bg2MXuuJ.js";import"./LoadingCell-CxcZgFpo.js";import"./ColumnConfigDialog-BIS05p60.js";import"./DraggableList-CLfe6gab.js";import"./search-9EoPaIsu.js";import"./Input-DwnchpfY.js";import"./useControlled-Bq8qBaBJ.js";import"./Button-To2COh7T.js";import"./small-cross-B5y9L61C.js";import"./ActionButton-DhCGZoHD.js";import"./Checkbox-CrUAsNNw.js";import"./useValueChanged-Bo5thQ8O.js";import"./CollapsiblePanel-CNKrkZjW.js";import"./MultiColumnSortDialog-sYWUGk65.js";import"./MenuTrigger-CXVAqCWg.js";import"./CompositeItem-CF65Mtg9.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./getDisabledMountTransitionStyles-B16n-yTJ.js";import"./getPseudoElementBounds-0jq6bko3.js";import"./chevron-down-CfvB8SzD.js";import"./index-Bb5I7VlI.js";import"./error-C0XWqrZ2.js";import"./BaseCbacBanner-DBuHYUCN.js";import"./makeExternalStore-Dn2EZb1T.js";import"./Tooltip-JNvzBEcs.js";import"./PopoverPopup-B2DKSbuW.js";import"./debounce-BS-XCJuC.js";import"./useOsdkClient-BSUtxC4C.js";import"./tick-DD6qfwut.js";import"./DropdownField-zYP-JtQg.js";import"./isEqual-BajcDWPI.js";import"./withOsdkMetrics-DYUhhphE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
