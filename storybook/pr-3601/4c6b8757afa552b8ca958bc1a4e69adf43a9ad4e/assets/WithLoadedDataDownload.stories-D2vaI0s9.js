import{f as b,j as a,r as i}from"./iframe-Dd1szrMe.js";import{O as u}from"./object-table-ByyVStWL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ZyFS72ZM.js";import"./Table-CmCk-nxt.js";import"./index-CAgK9jdg.js";import"./Dialog-D3nB_ru_.js";import"./cross-BeLIa3lb.js";import"./svgIconContainer-DPEIWJyX.js";import"./useBaseUiId-CdR77v15.js";import"./InternalBackdrop-DoaG4Rx0.js";import"./composite-CRt9kzf5.js";import"./index-xmtrJ4Wy.js";import"./index-DVO_ZVIo.js";import"./index-KowEa9Wo.js";import"./useRole-CzpuBIVL.js";import"./useEventCallback-DEA-eNwN.js";import"./SkeletonBar-CzkqjuZY.js";import"./LoadingCell-DMRfmPxw.js";import"./ColumnConfigDialog-CbQ0y6Xr.js";import"./DraggableList-BIDN5R6H.js";import"./Input-Q-5ZuT0B.js";import"./useControlled-BTPSGAsV.js";import"./Button-l18qNjs5.js";import"./small-cross-JpTA8Rh3.js";import"./ActionButton-D3a_ECys.js";import"./Checkbox-C9s3WWQo.js";import"./minus-Bf1z5Rn7.js";import"./useValueChanged-S_evbTp3.js";import"./FieldItemContext-J9aJqATq.js";import"./caret-down-DQiaAbiM.js";import"./CollapsiblePanel-CRhgB0vs.js";import"./MultiColumnSortDialog-N7_-sFLH.js";import"./MenuTrigger-CMgqmmuh.js";import"./useCompositeListItem-v6wc-tSZ.js";import"./ToolbarRootContext-BkGiyAqi.js";import"./getDisabledMountTransitionStyles-DAaVavr6.js";import"./safePolygon-KnWuve3F.js";import"./getPseudoElementBounds-uH9JAnTs.js";import"./CompositeItem-DUaJ13IJ.js";import"./chevron-down-3KBMvkMf.js";import"./index-B2yaQToS.js";import"./error-CopeXtfB.js";import"./BaseCbacBanner-CrRDEtby.js";import"./makeExternalStore-zyoeQ_fU.js";import"./Tooltip-DcK9HFHA.js";import"./PopoverPopup-B-PflWL9.js";import"./toNumber-CsUJxXbS.js";import"./useOsdkClient-CkCBiAip.js";import"./Combobox-CshTXg-9.js";import"./DropdownField-Bw0I1LOg.js";import"./useOsdkObjects-OuzqvCbg.js";import"./withOsdkMetrics-lY_6dVPX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ge={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,je as __namedExportsOrder,ge as default};
