import{f as b,j as a,r as i}from"./iframe-Cl8eJGqQ.js";import{O as u}from"./object-table-CBXQIJzE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1sGFP9D.js";import"./Table-C7Znw18S.js";import"./index-DN50PQh-.js";import"./Dialog-Bc2UmNyM.js";import"./cross-CCvLdnS1.js";import"./svgIconContainer-CHD9Zlbf.js";import"./useBaseUiId-BNd5VFWN.js";import"./InternalBackdrop-Cv0OocJC.js";import"./composite-sB4cBqnX.js";import"./index-CHnn2mMS.js";import"./index-BRo-G0NH.js";import"./index-BrCDZNAH.js";import"./useEventCallback-BW5i4Ipb.js";import"./SkeletonBar-CDZ2VAQF.js";import"./LoadingCell-CCpiJtu8.js";import"./ColumnConfigDialog-BYPSwPU8.js";import"./DraggableList-Cwg1nno2.js";import"./search-DE_gr0Gd.js";import"./Input-Cjk_GJyv.js";import"./useControlled-morME-0h.js";import"./Button-B_F0tOoM.js";import"./small-cross-BmXi7_ZD.js";import"./ActionButton-DMJmWu3H.js";import"./Checkbox-BDW_HtJC.js";import"./minus-oiDwDlbL.js";import"./tick-oKNoz2_0.js";import"./useValueChanged-J-zWfSBU.js";import"./caret-down-DDQ4kVst.js";import"./CollapsiblePanel-CtoCqxYe.js";import"./MultiColumnSortDialog-Xt7HLORa.js";import"./MenuTrigger-LYG29s82.js";import"./CompositeItem-DGV1adBP.js";import"./ToolbarRootContext-BgUoIskF.js";import"./getDisabledMountTransitionStyles-WGVEYmzV.js";import"./getPseudoElementBounds-B4dEW2X9.js";import"./chevron-down-DdkVAd_U.js";import"./index-DM-Qy-J0.js";import"./error-DBlAgSRV.js";import"./BaseCbacBanner-GlKHF98e.js";import"./makeExternalStore-CF-LNVVA.js";import"./Tooltip-DvsSlIW0.js";import"./PopoverPopup-RJY6AEdV.js";import"./toNumber-DDT2r3AW.js";import"./useOsdkClient-BCTYC4Xc.js";import"./DropdownField-CLUwmI_g.js";import"./withOsdkMetrics-TyrIMJ16.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
