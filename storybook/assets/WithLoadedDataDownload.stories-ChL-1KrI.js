import{f as b,j as a,r as i}from"./iframe-9OpC_N8y.js";import{O as u}from"./object-table-YQ6rNkeJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B7sghAV5.js";import"./index-DSxditmY.js";import"./Dialog-DkBx-FR1.js";import"./cross-BfZJOFYH.js";import"./svgIconContainer-oJMft6mx.js";import"./useBaseUiId-DBqP-0QL.js";import"./InternalBackdrop-CpFIES9m.js";import"./composite-CrXso5kT.js";import"./index-BYheStGz.js";import"./index-BWMAAzDl.js";import"./index-OPaHrZDF.js";import"./useEventCallback-CZw_6uow.js";import"./SkeletonBar-O0q8dBq8.js";import"./LoadingCell-n49qRtbT.js";import"./ColumnConfigDialog-C7U7c6EQ.js";import"./DraggableList-lRzakoV6.js";import"./search-TnHR6DGv.js";import"./Input-22pjcFCD.js";import"./useControlled-B9BwmRqN.js";import"./Button-CEDTBjQ9.js";import"./small-cross-CDqdsFm-.js";import"./ActionButton-FY_WWuvt.js";import"./Checkbox-DE0s0SIE.js";import"./useValueChanged-hzDLPvi0.js";import"./CollapsiblePanel-ACU3l7Tu.js";import"./MultiColumnSortDialog-BwRCQV-y.js";import"./MenuTrigger-oZth-qms.js";import"./CompositeItem-BQvPBjhd.js";import"./ToolbarRootContext-D8Su1VOS.js";import"./getDisabledMountTransitionStyles-DmxHVaGO.js";import"./getPseudoElementBounds-DWUvgXva.js";import"./chevron-down-DRK_INXA.js";import"./index-BDwZVFt2.js";import"./error-BFjtkE9z.js";import"./BaseCbacBanner-8Bsxco84.js";import"./makeExternalStore-Dcb2I-X9.js";import"./Tooltip-BSdinWV1.js";import"./PopoverPopup-y0Wo_ssq.js";import"./debounce-CUmYTyYO.js";import"./useOsdkClient-nTvUHUDa.js";import"./tick-CTciLGmY.js";import"./DropdownField-D6KYcCTh.js";import"./isEqual-pgyVw8bX.js";import"./withOsdkMetrics-BMtD0lPR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
