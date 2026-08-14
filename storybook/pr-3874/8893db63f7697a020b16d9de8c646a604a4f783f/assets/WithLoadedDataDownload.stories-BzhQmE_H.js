import{f as b,j as a,r as i}from"./iframe-BS39yabj.js";import{O as u}from"./object-table-BG2HpV_Z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BlmF7poY.js";import"./Table-NR-u2LQJ.js";import"./index-azX0WN20.js";import"./Dialog-BdDEc9ZK.js";import"./cross-bmcz7kaq.js";import"./svgIconContainer-CNsteYTu.js";import"./useBaseUiId-D6zQUJH2.js";import"./InternalBackdrop-DdLVr0rp.js";import"./composite-CrL6ee8J.js";import"./index-DNFWNz_b.js";import"./index-DG4fpTh9.js";import"./index-PhutVXJ9.js";import"./useEventCallback-DbJ-5CM3.js";import"./SkeletonBar-D2_rdQx4.js";import"./LoadingCell-DLSxxkpW.js";import"./ColumnConfigDialog-BI7Wk6ld.js";import"./DraggableList-3XvF_fmY.js";import"./search-DAe8-jYH.js";import"./Input-D3GthuCR.js";import"./useControlled-BtFTec_4.js";import"./Button-iYAVh6AY.js";import"./small-cross-1NinHjR6.js";import"./ActionButton-pdu1jtw7.js";import"./Checkbox-BOw-3iNT.js";import"./useValueChanged-Cv2_6DC2.js";import"./CollapsiblePanel-BpV10IyX.js";import"./MultiColumnSortDialog-DF9I3qiO.js";import"./MenuTrigger-B-q30BGy.js";import"./CompositeItem-9rYzgPbG.js";import"./ToolbarRootContext-CI8IZR11.js";import"./getDisabledMountTransitionStyles-CAstZq8O.js";import"./getPseudoElementBounds-CWt6eGsw.js";import"./chevron-down-DlL6v6RD.js";import"./index-COrNsrGV.js";import"./error-BIF0zaRT.js";import"./BaseCbacBanner-0uknKwVN.js";import"./makeExternalStore-CRPXUjA_.js";import"./Tooltip-BrBmFfM2.js";import"./PopoverPopup-ByPglwJA.js";import"./debounce-BAByceoi.js";import"./useOsdkClient-BEiGHmPL.js";import"./tick-BLEDxvEm.js";import"./DropdownField--vh2Xda9.js";import"./isEqual-Dw_0jNQy.js";import"./withOsdkMetrics-D0DSfH2H.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
