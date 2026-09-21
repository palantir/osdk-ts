import{f as b,j as a,r as i}from"./iframe-Cp1ziXca.js";import{O as u}from"./object-table-B4OAQ-UM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ca6LY0_H.js";import"./Table-585gS7_y.js";import"./index-CCsyzFvm.js";import"./Dialog-DwEy_EvY.js";import"./cross-ByCUwATg.js";import"./svgIconContainer-DXlIscgi.js";import"./useBaseUiId-Bt37xHZm.js";import"./InternalBackdrop-21zmjWfP.js";import"./composite-B4QegilG.js";import"./index-DSsYOOxm.js";import"./index-DFQVNtXJ.js";import"./index-BCU2lpd0.js";import"./useEventCallback-CvDmftxl.js";import"./SkeletonBar-CFBwD_lg.js";import"./LoadingCell-Ba8qx18j.js";import"./ColumnConfigDialog-Bn0yFfei.js";import"./DraggableList-Bo6GGCwe.js";import"./search-DKOFfaqB.js";import"./Input-BUxEsfiE.js";import"./useControlled-DfLwj8uM.js";import"./Button-B9LauqrE.js";import"./small-cross-DPfWhWYm.js";import"./ActionButton-B-aL526Q.js";import"./Checkbox-BRBYWefK.js";import"./useValueChanged-CImdLC5I.js";import"./CollapsiblePanel-Bwq_8Vuv.js";import"./MultiColumnSortDialog-C3hGMjSR.js";import"./MenuTrigger-CkLfyBAc.js";import"./CompositeItem-B97tQNhx.js";import"./ToolbarRootContext-C7YmkdWj.js";import"./getDisabledMountTransitionStyles-BCOhgOHp.js";import"./getPseudoElementBounds-BiAN2Dz2.js";import"./chevron-down-BiBmRA_9.js";import"./index-Ccm7niur.js";import"./error-Cklok7wh.js";import"./BaseCbacBanner-7-OvX_lg.js";import"./makeExternalStore-UGtoi_Zp.js";import"./Tooltip-Dhj5CmPc.js";import"./PopoverPopup-CJh3mGTg.js";import"./debounce-Rxf64P7W.js";import"./useOsdkClient-BehGkUju.js";import"./tick-3VVcevUT.js";import"./DropdownField-BX9F8fxz.js";import"./isEqual-CjzvEKy0.js";import"./withOsdkMetrics-CXAPHKM8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
