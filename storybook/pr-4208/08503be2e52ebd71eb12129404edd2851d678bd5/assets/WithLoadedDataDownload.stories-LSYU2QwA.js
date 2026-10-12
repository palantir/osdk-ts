import{f as b,j as a,r as i}from"./iframe-Bg9VnJHM.js";import{O as u}from"./object-table-amVzFco4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-m1Y4Llv5.js";import"./Table-BuldsrKU.js";import"./index-CrJT52a7.js";import"./Dialog-DUK3wWA4.js";import"./cross-DEexlnSb.js";import"./svgIconContainer-B5yPj85L.js";import"./useBaseUiId-CYMqm51-.js";import"./InternalBackdrop-CeTJdNJ6.js";import"./composite-CF0kxpXB.js";import"./index-B_gLEwxs.js";import"./index-CG5WNHLL.js";import"./index-P4YHC7Tt.js";import"./useEventCallback-ZjhazvKS.js";import"./SkeletonBar-bBmFROmS.js";import"./LoadingCell-BJt2EPmy.js";import"./ColumnConfigDialog-UV8R_Qk-.js";import"./DraggableList-TKA3_RUd.js";import"./search-B3ctgFIA.js";import"./Input--DCIJnB7.js";import"./useControlled-CD1625aB.js";import"./Button-bC6hWzK9.js";import"./small-cross-OY9xNRBI.js";import"./ActionButton-B6dXjYLE.js";import"./Checkbox-Cg65FgW0.js";import"./useValueChanged-DRlc2qqv.js";import"./CollapsiblePanel-DSo0JsvZ.js";import"./MultiColumnSortDialog-qjN4KhlD.js";import"./MenuTrigger-Duemy2Ih.js";import"./CompositeItem-Doe6baU0.js";import"./ToolbarRootContext-CPQhz84F.js";import"./getDisabledMountTransitionStyles-bhI1sbqZ.js";import"./getPseudoElementBounds-C_Awe47M.js";import"./chevron-down-DMUuxvLr.js";import"./index-LhIP_XZe.js";import"./error-Cbas_szk.js";import"./BaseCbacBanner-BrC_F4yF.js";import"./makeExternalStore-CC5GqevO.js";import"./Tooltip-2G34amcZ.js";import"./PopoverPopup-chqgajPg.js";import"./debounce-GP3wjz1k.js";import"./useOsdkClient-BIv1liKI.js";import"./tick-y1MkAvoV.js";import"./DropdownField-BLKPA1Pt.js";import"./isEqual-DX2mLbEy.js";import"./withOsdkMetrics-UJO3eOQJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
