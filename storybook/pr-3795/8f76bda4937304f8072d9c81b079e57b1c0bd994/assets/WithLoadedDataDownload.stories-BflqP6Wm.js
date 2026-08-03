import{f as b,j as a,r as i}from"./iframe-DyXeoGwO.js";import{O as u}from"./object-table-DE7Sj6ly.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0PKvm90.js";import"./Table-BBQPugP-.js";import"./index-4Nqwzpvt.js";import"./Dialog-BQmjQitq.js";import"./cross-DTaTjAMm.js";import"./svgIconContainer-CCZ_a6ls.js";import"./useBaseUiId-9gwfWVJK.js";import"./InternalBackdrop-C4D46pwb.js";import"./composite-Yz-mnVT0.js";import"./index-CmKnfhTb.js";import"./index-Cxn1_saB.js";import"./index-DWWiASO0.js";import"./useEventCallback-CTiFkA1l.js";import"./SkeletonBar-DBij0pOc.js";import"./LoadingCell-BC3K9zFE.js";import"./ColumnConfigDialog-Cr3dELxt.js";import"./DraggableList-CzNfUaab.js";import"./search-Bb8GWAj-.js";import"./Input-Co_ozBSv.js";import"./useControlled-bhCIZURY.js";import"./isEqual-B29kTtlj.js";import"./isObject-DwlzPnNm.js";import"./Button-XiNhMhnD.js";import"./ActionButton-D7w_sh8l.js";import"./Checkbox-Bgz3S2Ey.js";import"./useValueChanged-BV0XQf5l.js";import"./CollapsiblePanel-CurIuftZ.js";import"./MultiColumnSortDialog-DXi1qJXQ.js";import"./MenuTrigger-B82V7p-S.js";import"./CompositeItem-D5uWMXLy.js";import"./ToolbarRootContext-NSuMsQk4.js";import"./getDisabledMountTransitionStyles-D3_etIrj.js";import"./getPseudoElementBounds-b8HcpjfA.js";import"./chevron-down-DlMyCTIX.js";import"./index-Btsx4sMw.js";import"./error-lrLb-CbY.js";import"./BaseCbacBanner-BbSgloor.js";import"./makeExternalStore-DcczwIex.js";import"./Tooltip-BNvyozEt.js";import"./PopoverPopup-CctUCuUJ.js";import"./toNumber-C_IGtKbm.js";import"./useOsdkClient-EbzbD1EX.js";import"./tick-BEKrCP22.js";import"./DropdownField-DvxFRQn7.js";import"./withOsdkMetrics-DX8ITSGp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
