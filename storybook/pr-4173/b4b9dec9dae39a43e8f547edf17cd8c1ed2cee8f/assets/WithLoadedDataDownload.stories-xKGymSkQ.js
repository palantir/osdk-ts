import{f as b,j as a,r as i}from"./iframe-CQxG3cCC.js";import{O as u}from"./object-table-CEnnfMHs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BQhDaTv1.js";import"./Table-DCPdNfEv.js";import"./index-DxGOzCTx.js";import"./Dialog-zCLS7zrb.js";import"./cross-csp5HbTE.js";import"./svgIconContainer-BhtEOhwo.js";import"./useBaseUiId-Dt5sayHU.js";import"./InternalBackdrop-BDvtcNtG.js";import"./composite-UnoLR2xI.js";import"./index-srIEGZLU.js";import"./index-B8ySRxPM.js";import"./index-CevcsHHZ.js";import"./useEventCallback-BWLI-kIT.js";import"./SkeletonBar-D53oWcoz.js";import"./LoadingCell-D065Pqzq.js";import"./ColumnConfigDialog-CfGoxzT9.js";import"./DraggableList-BOE3DziB.js";import"./search-XsOT8fX6.js";import"./Input-IKU9NsaD.js";import"./useControlled-DBmpvbx5.js";import"./Button-D1svI8Md.js";import"./small-cross-Di7hpAGJ.js";import"./ActionButton-DEiZAioH.js";import"./Checkbox-CGOgc_Ub.js";import"./useValueChanged-BuXo7lzh.js";import"./CollapsiblePanel-DXkCbcz8.js";import"./MultiColumnSortDialog-bnt2o6ZC.js";import"./MenuTrigger-DyhMK_-E.js";import"./CompositeItem-D3C5uQt7.js";import"./ToolbarRootContext-Dp2y2zy-.js";import"./getDisabledMountTransitionStyles-BMquo6lw.js";import"./getPseudoElementBounds-DyrNCMLJ.js";import"./chevron-down-C-j45_ex.js";import"./index-DRHTc7Po.js";import"./error-DvI5aFF7.js";import"./BaseCbacBanner-zZK_yycM.js";import"./makeExternalStore-ez4Tjxbk.js";import"./Tooltip-Ci2fxdP1.js";import"./PopoverPopup-eKDhhN4E.js";import"./debounce-BJEoAQfk.js";import"./useOsdkClient-rcUQfTvQ.js";import"./tick-gN8njJQM.js";import"./DropdownField-9ziBfdgv.js";import"./isEqual-CvFNBvPf.js";import"./withOsdkMetrics-CA86lKjW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
