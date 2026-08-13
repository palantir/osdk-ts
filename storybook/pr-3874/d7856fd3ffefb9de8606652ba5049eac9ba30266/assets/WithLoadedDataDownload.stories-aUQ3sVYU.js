import{f as b,j as a,r as i}from"./iframe-C7p8bC4z.js";import{O as u}from"./object-table-rrHUvx8M.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-yARIFMHO.js";import"./Table-BoMUec3S.js";import"./index-BSFFflxO.js";import"./Dialog-Bq7KV9Q4.js";import"./cross-D8SQea4D.js";import"./svgIconContainer-Bh8CNGr-.js";import"./useBaseUiId-D7Bs2_0o.js";import"./InternalBackdrop-CCB2qEvA.js";import"./composite-BOtNh-Av.js";import"./index-z04c2hdv.js";import"./index-c3k5U_lr.js";import"./index-4RswbLak.js";import"./useEventCallback-C2562mvs.js";import"./SkeletonBar-js0bkjyh.js";import"./LoadingCell-Q8eaYLNZ.js";import"./ColumnConfigDialog-C5dmJ6l5.js";import"./DraggableList--CB8Ubap.js";import"./search-D9u2yYuj.js";import"./Input-BAFeVd23.js";import"./useControlled-CwSyNuxB.js";import"./Button-DmUpkepK.js";import"./small-cross-CsyJylh1.js";import"./ActionButton-BxbEt6-S.js";import"./Checkbox-CFWr5Fpb.js";import"./useValueChanged-pEEmrO3V.js";import"./CollapsiblePanel-BeWBa9ma.js";import"./MultiColumnSortDialog-CtUkZIxz.js";import"./MenuTrigger-CIfXbfLR.js";import"./CompositeItem-D2oL3zur.js";import"./ToolbarRootContext-D3hUmd4P.js";import"./getDisabledMountTransitionStyles-DhuueIJo.js";import"./getPseudoElementBounds-BtoukLFj.js";import"./chevron-down-DB23ilQg.js";import"./index-TDqpefMN.js";import"./error-DM0DBmSQ.js";import"./BaseCbacBanner-FJJsg6sF.js";import"./makeExternalStore-DDCjJxWP.js";import"./Tooltip-DejVHDp6.js";import"./PopoverPopup-1qbE86q5.js";import"./debounce-CY32HLro.js";import"./useOsdkClient-BlmAulng.js";import"./tick-n--SCLbF.js";import"./DropdownField-Wa7Oy1zJ.js";import"./isEqual-BGjsRR-O.js";import"./withOsdkMetrics-CpiFq1j5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
