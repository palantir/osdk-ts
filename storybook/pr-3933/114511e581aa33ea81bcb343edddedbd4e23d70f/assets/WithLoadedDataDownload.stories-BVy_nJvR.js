import{f as b,j as a,r as i}from"./iframe-CV9AnRvZ.js";import{O as u}from"./object-table-BR5aerbJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-7FfFv9ik.js";import"./Table-DPmXaC0p.js";import"./index-Di1ZWUkk.js";import"./Dialog-CKK99e0E.js";import"./cross-DhIejhWj.js";import"./svgIconContainer-CNjSdOBT.js";import"./useBaseUiId-C1_GlfkL.js";import"./InternalBackdrop-COZpaA8l.js";import"./composite-qPADmGy9.js";import"./index-igmFT0OY.js";import"./index-CmKxkFU5.js";import"./index-C2F-6H3e.js";import"./useEventCallback-Bna_B7Jk.js";import"./SkeletonBar-CY_yprKK.js";import"./LoadingCell-C0a-a0Kd.js";import"./ColumnConfigDialog-Cx50unOT.js";import"./DraggableList-BWZfvIec.js";import"./search-DNk3MK5-.js";import"./Input-dv3PsiKp.js";import"./useControlled-D-7JcRiN.js";import"./Button-DxiXB_zs.js";import"./small-cross-DErCO5W1.js";import"./ActionButton-C0FEiRhP.js";import"./Checkbox-DYoZLqBR.js";import"./useValueChanged-m-oZ9Q-6.js";import"./CollapsiblePanel-CkzmNhCo.js";import"./MultiColumnSortDialog-BO3I_Guk.js";import"./MenuTrigger-B0_EOu_h.js";import"./CompositeItem-Bf5YN-0d.js";import"./ToolbarRootContext-BhRNTtAp.js";import"./getDisabledMountTransitionStyles-uluusgZc.js";import"./getPseudoElementBounds-CKcwYVgn.js";import"./chevron-down-DqetHEHw.js";import"./index-B4-YpXrf.js";import"./error-BkY5gQM6.js";import"./BaseCbacBanner-C58alHRF.js";import"./makeExternalStore-DGTggbnP.js";import"./Tooltip-Ba2b5c4L.js";import"./PopoverPopup-Dbah9SzS.js";import"./debounce-DQFz88Lj.js";import"./useOsdkClient-Balcrs_g.js";import"./tick-DkCBUQtK.js";import"./DropdownField-CnQNM4ni.js";import"./isEqual-DFiSRrhR.js";import"./withOsdkMetrics-zIgNwk4v.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
