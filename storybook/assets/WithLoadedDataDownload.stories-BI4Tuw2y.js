import{f as b,j as a,r as i}from"./iframe-BrGo9N9-.js";import{O as u}from"./object-table-Bi_LN2NS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D_Jn-Q8N.js";import"./index-jSRXXJ9w.js";import"./Dialog-AY3J_z1T.js";import"./cross-CqGcj1UP.js";import"./svgIconContainer-C2wfJlD0.js";import"./useBaseUiId-DRzpYMsL.js";import"./InternalBackdrop-H-W5c9Tc.js";import"./composite-BaZ5NPlu.js";import"./index-DDVUHOhP.js";import"./index-0jm5AiV8.js";import"./index-D_R5KUUI.js";import"./useEventCallback-CjQgYfgn.js";import"./SkeletonBar-CTB96FiY.js";import"./LoadingCell-DhKZJqLA.js";import"./ColumnConfigDialog-BEWosdsI.js";import"./DraggableList-DYw0g3m7.js";import"./search-BU8Oy9oR.js";import"./Input-DwliOy2I.js";import"./useControlled-BYX3tO_t.js";import"./Button-lkehQ9sU.js";import"./small-cross-BV2K9RPo.js";import"./ActionButton-BeguVoFM.js";import"./Checkbox-DH6yRrvl.js";import"./useValueChanged-COlcOgxu.js";import"./CollapsiblePanel-DkIS-X1G.js";import"./MultiColumnSortDialog-COK6ImCv.js";import"./MenuTrigger-B_YPwqIO.js";import"./CompositeItem-CK4axcp7.js";import"./ToolbarRootContext-DalYOUw7.js";import"./getDisabledMountTransitionStyles-DHm4QR3G.js";import"./getPseudoElementBounds-DYIfKLY8.js";import"./chevron-down-oLGHrpyq.js";import"./index-DtdHIG9x.js";import"./error-DfpVQDIj.js";import"./BaseCbacBanner-BxhdxHoy.js";import"./makeExternalStore-CajjYTod.js";import"./Tooltip-B_6YM8Q6.js";import"./PopoverPopup-qFUKYGhR.js";import"./debounce-B1TxOqEe.js";import"./useOsdkClient-Skidvwv_.js";import"./tick-HO2XmYO7.js";import"./DropdownField-CSmWHkMO.js";import"./isEqual-DIYgUhnB.js";import"./withOsdkMetrics-CWKbU0FT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
