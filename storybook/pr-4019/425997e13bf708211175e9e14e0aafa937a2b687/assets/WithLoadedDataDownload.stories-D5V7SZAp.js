import{f as b,j as a,r as i}from"./iframe-CN_vvEvV.js";import{O as u}from"./object-table-DX7CTvjQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-WuzznOu3.js";import"./Table-xHkxr4dJ.js";import"./index-Yn_grBDh.js";import"./Dialog-DFIKjt_b.js";import"./cross-BTNfX9AB.js";import"./svgIconContainer-Cuv7eTan.js";import"./useBaseUiId-D6GNKrv7.js";import"./InternalBackdrop-cUW2sy_R.js";import"./composite-Dgt1ShdF.js";import"./index-DmpSrWu6.js";import"./index-BZSZGkip.js";import"./index-CCC1qb5m.js";import"./useEventCallback-CKtb97LM.js";import"./SkeletonBar-DfT678KI.js";import"./LoadingCell-DO8BK_3m.js";import"./ColumnConfigDialog-jxRXajs0.js";import"./DraggableList-EI0d774X.js";import"./search-BL454ash.js";import"./Input-D-TN7H1o.js";import"./useControlled-DY8zlZhG.js";import"./Button-GYys4WHS.js";import"./small-cross-Bnuet9W-.js";import"./ActionButton-DNB_8X09.js";import"./Checkbox-CgSh6FsU.js";import"./useValueChanged-BAUdQdKF.js";import"./CollapsiblePanel-Btx1XCpX.js";import"./MultiColumnSortDialog-Cq5nIQkj.js";import"./MenuTrigger-BJCiSHbj.js";import"./CompositeItem-CUoXO_HL.js";import"./ToolbarRootContext-DFFN_XcR.js";import"./getDisabledMountTransitionStyles-BMjHeHnL.js";import"./getPseudoElementBounds-Blrc2Fw3.js";import"./chevron-down-CuRI24Zn.js";import"./index-e9J7zdgf.js";import"./error-DJd0ydtA.js";import"./BaseCbacBanner-pbTMe1h8.js";import"./makeExternalStore-DNuR4f-v.js";import"./Tooltip-CEURmlww.js";import"./PopoverPopup-B_u8qz4L.js";import"./debounce-DK3ARArn.js";import"./useOsdkClient-DrtQRBcg.js";import"./tick-DRndoMTx.js";import"./DropdownField-D5NveR3K.js";import"./isEqual-Z4hf267W.js";import"./withOsdkMetrics-C7EoGoEb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
