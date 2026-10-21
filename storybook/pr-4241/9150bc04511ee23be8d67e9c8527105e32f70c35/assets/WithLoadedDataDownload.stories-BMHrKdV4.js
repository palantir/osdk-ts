import{f as b,j as a,r as i}from"./iframe-81je18Ik.js";import{O as u}from"./object-table-BvQWIhZK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRAEXExV.js";import"./Table-CATOd2mE.js";import"./index-Ch4IN5aI.js";import"./Dialog-bzSxmtfs.js";import"./cross-Cc4GvHBG.js";import"./svgIconContainer-CkaRT57i.js";import"./useBaseUiId-BZJB2Tlb.js";import"./InternalBackdrop-C65WwkrS.js";import"./composite-B4jPeedW.js";import"./index-F2YzzidU.js";import"./index-CJX1bs1L.js";import"./index-CbMHVh08.js";import"./useEventCallback-DQ9am-6U.js";import"./SkeletonBar-Dw-ewOea.js";import"./LoadingCell-D0Zburhd.js";import"./ColumnConfigDialog-Cet9ZvNQ.js";import"./DraggableList-5Ave0405.js";import"./search-DL20J9IV.js";import"./Input-Dw0afNfi.js";import"./useControlled-B3eKfZiB.js";import"./Button-DMrFAQQL.js";import"./small-cross-Bkj0uCyB.js";import"./ActionButton-B6EeJUTi.js";import"./Checkbox-BvqadCb6.js";import"./useValueChanged-CSH2H_LU.js";import"./CollapsiblePanel-BZXNDPDr.js";import"./MultiColumnSortDialog-C9gRh8VL.js";import"./MenuTrigger-BtxN9ewG.js";import"./CompositeItem-CGRjueKi.js";import"./ToolbarRootContext-Bevviuy2.js";import"./getDisabledMountTransitionStyles-Baxpj6ZK.js";import"./getPseudoElementBounds-CsA6tpz4.js";import"./chevron-down-ea9DRGVa.js";import"./index-BZr2ycyZ.js";import"./error-v2_eLjNd.js";import"./BaseCbacBanner-DH9rtQ5g.js";import"./makeExternalStore-C42KheMu.js";import"./Tooltip-ZUJ8p7GH.js";import"./PopoverPopup-CJ53N5Gn.js";import"./debounce-C0dFA0mS.js";import"./useOsdkClient-DOUL53LR.js";import"./tick-C3zDCHaR.js";import"./DropdownField-_ZfRXRml.js";import"./isEqual-DOga7zoS.js";import"./withOsdkMetrics-DpvfaYrl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
