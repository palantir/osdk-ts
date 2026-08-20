import{f as b,j as a,r as i}from"./iframe-C1kKKYdD.js";import{O as u}from"./object-table-EugYSPRX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C6rhobWF.js";import"./Table-CLbo6gpE.js";import"./index-B1n8gOgb.js";import"./Dialog-D7ukJCKc.js";import"./cross-BR0Y4p7f.js";import"./svgIconContainer-BTr0PbTv.js";import"./useBaseUiId-DXAZbTHW.js";import"./InternalBackdrop-3F3xyHcj.js";import"./composite-ByHxOBay.js";import"./index-DQDP2CQD.js";import"./index-BLcLrxFs.js";import"./index-U-Kwg7sY.js";import"./useEventCallback-CdKhensz.js";import"./SkeletonBar-CPN9tZcc.js";import"./LoadingCell-ClyVakYH.js";import"./ColumnConfigDialog-BgefYkLR.js";import"./DraggableList-CHuZ_t3T.js";import"./search-D608KClO.js";import"./Input-BuF9ZIUF.js";import"./useControlled-unM0ZLUw.js";import"./Button-BSvNohBM.js";import"./small-cross-BIpg1ePk.js";import"./ActionButton-B68xFw_I.js";import"./Checkbox-xlu2pDu0.js";import"./useValueChanged-DFOr3chR.js";import"./CollapsiblePanel-CKUKf9Bh.js";import"./MultiColumnSortDialog-MHmSP81g.js";import"./MenuTrigger-o8CXHElR.js";import"./CompositeItem-BdX0jAKM.js";import"./ToolbarRootContext-BtomAQOF.js";import"./getDisabledMountTransitionStyles-Clu-nqTW.js";import"./getPseudoElementBounds-B5hqRMo8.js";import"./chevron-down-nMTcBTam.js";import"./index-BzLe4OJj.js";import"./error-BDemNBQ2.js";import"./BaseCbacBanner-BUjFwL83.js";import"./makeExternalStore-Cl4nhu8w.js";import"./Tooltip-CWzX8-a-.js";import"./PopoverPopup-BDqDxjcQ.js";import"./debounce-CcUXcLi7.js";import"./useOsdkClient-CK76NQ5O.js";import"./tick-BitGxqRP.js";import"./DropdownField-D9mPTLqi.js";import"./isEqual-CHP7bcZD.js";import"./withOsdkMetrics-BcxhsS6v.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
