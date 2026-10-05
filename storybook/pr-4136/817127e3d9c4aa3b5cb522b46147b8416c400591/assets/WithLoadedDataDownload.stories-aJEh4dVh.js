import{f as b,j as a,r as i}from"./iframe-DM2lbhq3.js";import{O as u}from"./object-table-BahOgCWX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVlRJCQ4.js";import"./Table-D8aaq1ON.js";import"./index-BxgMbwQW.js";import"./Dialog-D6Sy0Hei.js";import"./cross-C6M-wOmQ.js";import"./svgIconContainer-DawECmqq.js";import"./useBaseUiId-D_FvUqqy.js";import"./InternalBackdrop-hyoEPQMb.js";import"./composite-iccYdnrf.js";import"./index-CCN1yxkK.js";import"./index-Bpwngerd.js";import"./index-BBAnTYss.js";import"./useEventCallback-CKRLND5s.js";import"./SkeletonBar-B2B70iHE.js";import"./LoadingCell-Cpy76GMo.js";import"./ColumnConfigDialog-d9r3q5wS.js";import"./DraggableList-BJxXS1Me.js";import"./search-B5W8bLyf.js";import"./Input-CY0qF8uS.js";import"./useControlled-Ca36YxvC.js";import"./Button-XbpukpvP.js";import"./small-cross-BKA-Ml9N.js";import"./ActionButton-_pm_iS5i.js";import"./Checkbox-CsYoJ4b7.js";import"./useValueChanged-BxW-Xkhx.js";import"./CollapsiblePanel-DpDskcR4.js";import"./MultiColumnSortDialog-D-GYz7Kr.js";import"./MenuTrigger-BKsdj5VU.js";import"./CompositeItem-BFuIVpH0.js";import"./ToolbarRootContext-Bg6hLVB6.js";import"./getDisabledMountTransitionStyles-CcD-BZKR.js";import"./getPseudoElementBounds-CzHg-ye1.js";import"./chevron-down-DyskK5Yf.js";import"./index-BCS5K0iy.js";import"./error-DJU2sF2P.js";import"./BaseCbacBanner-DdVdOUAf.js";import"./makeExternalStore-BiR7BXmk.js";import"./Tooltip-DbczZTzH.js";import"./PopoverPopup-CX9LkjiZ.js";import"./debounce-vAXahSDb.js";import"./useOsdkClient-BLFd6qg6.js";import"./tick-_p_7zkXC.js";import"./DropdownField-d-diOJrZ.js";import"./isEqual-CZuKKajL.js";import"./withOsdkMetrics-URzhtFq2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
