import{f as b,j as a,r as i}from"./iframe-DFHLrRxy.js";import{O as u}from"./object-table-D4G82KrZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D3OFW4Wp.js";import"./Table-D-QUNYES.js";import"./index-lMBTNEhC.js";import"./Dialog-DXYHXN26.js";import"./cross-CvONLWGq.js";import"./svgIconContainer-CWuGvQcW.js";import"./useBaseUiId-D2rxFRGv.js";import"./InternalBackdrop-DWPCMmWX.js";import"./composite-nDV_ik1F.js";import"./index-CWojmVv7.js";import"./index-DCHHusj_.js";import"./index-DO2q5FSh.js";import"./useEventCallback-DMNzBcY_.js";import"./SkeletonBar-7Q4DLrdr.js";import"./LoadingCell-D5c1JBqa.js";import"./ColumnConfigDialog-9FkD48W3.js";import"./DraggableList-BrCUlwbj.js";import"./search-DQslwNpY.js";import"./Input-CI74CICo.js";import"./useControlled-DfjEV_zy.js";import"./Button-yx5bONTn.js";import"./small-cross-CtE4NcWg.js";import"./ActionButton-njAVZN5A.js";import"./Checkbox-DXwFG2JQ.js";import"./useValueChanged-BakNeGfp.js";import"./CollapsiblePanel-DAe7qxxF.js";import"./MultiColumnSortDialog-Do2k26Dx.js";import"./MenuTrigger-B1pp25EB.js";import"./CompositeItem-BYZr26cD.js";import"./ToolbarRootContext-BjfNF6P-.js";import"./getDisabledMountTransitionStyles-Dk_YrDen.js";import"./getPseudoElementBounds-O3DfICBX.js";import"./chevron-down-DoelWXMj.js";import"./index-DPVYsjbh.js";import"./error-C-yk3J4q.js";import"./BaseCbacBanner-BonkgzmJ.js";import"./makeExternalStore-D-LxbjRt.js";import"./Tooltip-XUDsdyce.js";import"./PopoverPopup-hcZaO1Rb.js";import"./debounce-Bd8h-BFs.js";import"./useOsdkClient-CEmmd5-D.js";import"./tick-D7elqOw7.js";import"./DropdownField-Dh5_GV1H.js";import"./isEqual-C1QUTfWi.js";import"./withOsdkMetrics-BEBmRKsA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
