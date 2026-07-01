import{f as b,j as a,r as i}from"./iframe-DzqL76g_.js";import{O as u}from"./object-table-CP_c08kj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DmG9dd1J.js";import"./Table-BLWJYCos.js";import"./index-C7_zXXHU.js";import"./Dialog-CLvHkKkD.js";import"./cross-JNlRAt1Y.js";import"./svgIconContainer-C4c3U1tJ.js";import"./useBaseUiId-BMxeAaRK.js";import"./InternalBackdrop-Bm0TLdpS.js";import"./composite-ZwiEyvb2.js";import"./index-DrZY_AQx.js";import"./index-MULyq74S.js";import"./index-SN9vA9md.js";import"./useEventCallback-BKpvKtpZ.js";import"./SkeletonBar-BlDXEKTY.js";import"./LoadingCell-DLXuxj2v.js";import"./ColumnConfigDialog-xUo5R8Ak.js";import"./DraggableList-B7JDgkpz.js";import"./search-o3G2SKWf.js";import"./Input-BLrL7N-3.js";import"./useControlled-CL8CCR_w.js";import"./Button-DchrC9Fa.js";import"./small-cross-BEToCHFc.js";import"./ActionButton-hyPTWY7z.js";import"./Checkbox-B57TDEC6.js";import"./minus-BDz0q1GT.js";import"./tick-bMcg0jQb.js";import"./useValueChanged-BBjvMJVi.js";import"./caret-down-Bbns_mqK.js";import"./CollapsiblePanel-Dnqvcilk.js";import"./MultiColumnSortDialog-Ct02ryPU.js";import"./MenuTrigger-BktJHoyZ.js";import"./CompositeItem-Bg5Dmo8o.js";import"./ToolbarRootContext-Bk0YX5FX.js";import"./getDisabledMountTransitionStyles-BFXtb6nh.js";import"./getPseudoElementBounds-CEURjEPE.js";import"./chevron-down-Bi_yQRGc.js";import"./index-CwKZ4F6H.js";import"./error-58l_8lT3.js";import"./BaseCbacBanner-Dkit4g9P.js";import"./makeExternalStore-C-OCQZvs.js";import"./Tooltip-D18JH_jw.js";import"./PopoverPopup-CNRKd4Dm.js";import"./toNumber-3RW3e6E1.js";import"./useOsdkClient-DgU1yLb6.js";import"./DropdownField-Cng5fwE5.js";import"./withOsdkMetrics-Cb699rWq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
