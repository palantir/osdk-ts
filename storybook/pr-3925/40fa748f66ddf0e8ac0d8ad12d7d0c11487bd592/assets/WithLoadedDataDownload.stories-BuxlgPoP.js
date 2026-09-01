import{f as b,j as a,r as i}from"./iframe-uWQw-aoo.js";import{O as u}from"./object-table-Dp7GhjPI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVjylv8h.js";import"./Table-DqmlfuPq.js";import"./index-00plDTMi.js";import"./Dialog-C0KqFrbo.js";import"./cross-BoNTQ4Rv.js";import"./svgIconContainer-DmbccLJt.js";import"./useBaseUiId-Ck6WuZAw.js";import"./InternalBackdrop-iaD87yNq.js";import"./composite-DHcKfgn9.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./index-CmHx58Lo.js";import"./useEventCallback-BkpTty7v.js";import"./SkeletonBar-BkINP_NN.js";import"./LoadingCell-CoOvoRuy.js";import"./ColumnConfigDialog-1DwLq4p-.js";import"./DraggableList-Co2N2rmb.js";import"./search-BdK0N4i0.js";import"./Input--UpB7VqG.js";import"./useControlled-DUIvla77.js";import"./Button-BmUOiVqe.js";import"./small-cross-BTOgfizl.js";import"./ActionButton-Dpwzo-DI.js";import"./Checkbox-CylUXUJ3.js";import"./useValueChanged-DEC2s52_.js";import"./CollapsiblePanel-DXjJkxFh.js";import"./MultiColumnSortDialog-CmlJzOx5.js";import"./MenuTrigger-4-VSJB-3.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./getDisabledMountTransitionStyles-Cvh2Xj1v.js";import"./getPseudoElementBounds-wBDFt1eN.js";import"./chevron-down-CbHcQ9sT.js";import"./index-DTQn9lDq.js";import"./error-GxXvf_3k.js";import"./BaseCbacBanner-CAAHt1df.js";import"./makeExternalStore-DeeFkPyS.js";import"./Tooltip-BcY8Te_I.js";import"./PopoverPopup-6m2VIyOL.js";import"./debounce-DrqyD1Dz.js";import"./useOsdkClient-CJzg9cBw.js";import"./tick-dsXhEjae.js";import"./DropdownField-Co3vy8Yb.js";import"./isEqual-LeAy7veH.js";import"./withOsdkMetrics-YSsi8cLt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
