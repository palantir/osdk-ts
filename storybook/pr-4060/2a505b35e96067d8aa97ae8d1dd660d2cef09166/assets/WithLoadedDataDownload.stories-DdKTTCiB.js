import{f as b,j as a,r as i}from"./iframe-DYP6I0EJ.js";import{O as u}from"./object-table-DMM2jzgg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-sS4hYFkK.js";import"./Table-CuYv3cn2.js";import"./index-DIhwEquj.js";import"./Dialog-BjY_b077.js";import"./cross-bDPWwylA.js";import"./svgIconContainer-C4jga87M.js";import"./useBaseUiId-BZiJrEE8.js";import"./InternalBackdrop-71TCmGDX.js";import"./composite-DQKMgq2L.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./index-Bu9lWdWG.js";import"./useEventCallback-viQBOCoU.js";import"./SkeletonBar-BcB8RILE.js";import"./LoadingCell-BACnWh3V.js";import"./ColumnConfigDialog-12MNYR_s.js";import"./DraggableList-ka3cAseo.js";import"./search-DC-q2Fvd.js";import"./Input-CX9B7mOe.js";import"./useControlled-CBcSqYsQ.js";import"./Button-BBpZA8JE.js";import"./small-cross--hwGWXHG.js";import"./ActionButton-BWEQ465S.js";import"./Checkbox-C66Slb1i.js";import"./useValueChanged-DYyvPFZ9.js";import"./CollapsiblePanel-gA7_qpOX.js";import"./MultiColumnSortDialog--pqZCkrG.js";import"./MenuTrigger-DaJlolSj.js";import"./CompositeItem-BuWL3KPI.js";import"./ToolbarRootContext-6dERQM_o.js";import"./getDisabledMountTransitionStyles-_04rz-EH.js";import"./getPseudoElementBounds-pXf6ipeD.js";import"./chevron-down-DgAcZbyD.js";import"./index-Bbf985kl.js";import"./error-BJ0QSSt_.js";import"./BaseCbacBanner-Dh6gG5qi.js";import"./makeExternalStore-DN0LusY8.js";import"./Tooltip-BRru9_rR.js";import"./PopoverPopup-BtgbBgDL.js";import"./debounce-BaQbuarC.js";import"./useOsdkClient-Cplqkh8-.js";import"./tick-Clj_LCer.js";import"./DropdownField-CjaSoiXx.js";import"./isEqual-CZ5dkiZB.js";import"./withOsdkMetrics-1ciRu-eY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
