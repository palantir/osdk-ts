import{f as b,j as a,r as i}from"./iframe-BHP--iSv.js";import{O as u}from"./object-table-CiDmmhiS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-4Y0sWPF7.js";import"./Table-DQpHWODC.js";import"./index-CuQOASnK.js";import"./Dialog-BKKVoGn9.js";import"./cross-D3_DOx--.js";import"./svgIconContainer-XMK9JozI.js";import"./useBaseUiId-txgvadn-.js";import"./InternalBackdrop-BaP5BEVm.js";import"./composite-CY1_GtTz.js";import"./index-BMZH6GYS.js";import"./index-CjU2x-RF.js";import"./index-_cBTnAHR.js";import"./useEventCallback-By_yXujH.js";import"./SkeletonBar-3dHEcipt.js";import"./LoadingCell-DsG_X0ml.js";import"./ColumnConfigDialog-BT6S1fEv.js";import"./DraggableList-CaUaYMqt.js";import"./search-gxC0SZFk.js";import"./Input-DBfp7isZ.js";import"./useControlled-DACQJINy.js";import"./Button-cuAOjsWC.js";import"./small-cross-CT1xO2rS.js";import"./ActionButton-CgEHLRCh.js";import"./Checkbox-CrRIvHD3.js";import"./useValueChanged-MdzQIZy9.js";import"./CollapsiblePanel-BStH85wc.js";import"./MultiColumnSortDialog-xA9xRG8E.js";import"./MenuTrigger-BwG1oPrV.js";import"./CompositeItem-QqJnKLYC.js";import"./ToolbarRootContext-i6dOGAi5.js";import"./getDisabledMountTransitionStyles-D9c4uTR_.js";import"./getPseudoElementBounds-CL-DWHCc.js";import"./chevron-down-BptITD6J.js";import"./index-C-eIeMvP.js";import"./error-Bl2IH4zy.js";import"./BaseCbacBanner-tJbKI--4.js";import"./makeExternalStore-nAPJO73f.js";import"./Tooltip-B6i-uyb3.js";import"./PopoverPopup-sbiZa-o-.js";import"./debounce-B6E0h1Dy.js";import"./useOsdkClient-Bt205Lro.js";import"./tick-Dy2Ajo8a.js";import"./DropdownField-CdixWEkP.js";import"./isEqual-BuHIXC9x.js";import"./withOsdkMetrics-xpnG9elc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
