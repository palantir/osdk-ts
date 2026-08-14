import{f as b,j as a,r as i}from"./iframe-vUigHa_R.js";import{O as u}from"./object-table-DGwgE45W.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-y4UwMW9A.js";import"./Table-C_3YDv9s.js";import"./index-D23DfkwD.js";import"./Dialog-DolWiMuS.js";import"./cross-4LijBnZ1.js";import"./svgIconContainer-B9kPsCJD.js";import"./useBaseUiId-B_Xr74Hh.js";import"./InternalBackdrop-wWroyLHr.js";import"./composite-B5_hjWtY.js";import"./index-M84BU-nW.js";import"./index-Bhvq4vDE.js";import"./index-BxUjSB8i.js";import"./useEventCallback-Df0Uw9vc.js";import"./SkeletonBar-w0o065Tr.js";import"./LoadingCell-BdCRpTF3.js";import"./ColumnConfigDialog-BpVTnDJZ.js";import"./DraggableList-CMXagTEH.js";import"./search-Du0pQ6pL.js";import"./Input-Ca0Q4NVt.js";import"./useControlled-7ZCh4KeY.js";import"./Button-B9LxW1HS.js";import"./small-cross-C7JwLoUr.js";import"./ActionButton-C98XASXJ.js";import"./Checkbox-BSEISqRZ.js";import"./useValueChanged-TqXgw_xj.js";import"./CollapsiblePanel-Dwu8tjuK.js";import"./MultiColumnSortDialog-Dvt2-75n.js";import"./MenuTrigger-CroGNNa4.js";import"./CompositeItem-N7hxfDs2.js";import"./ToolbarRootContext-hmB3Z2ti.js";import"./getDisabledMountTransitionStyles-FRxSr_Lg.js";import"./getPseudoElementBounds-BhLD9aHH.js";import"./chevron-down-Dk583wTX.js";import"./index-adjP72nR.js";import"./error-DkxPnmmW.js";import"./BaseCbacBanner-9KRL944L.js";import"./makeExternalStore-DzBHK_Wg.js";import"./Tooltip-TZFzUmuz.js";import"./PopoverPopup-B0Qqbtvx.js";import"./debounce-BibzVj7i.js";import"./useOsdkClient-oBZ78Nx2.js";import"./tick-Ci_qLFZl.js";import"./DropdownField-DfPQW3Lm.js";import"./isEqual-f0kfjnzR.js";import"./withOsdkMetrics-DO0ZWj9H.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
