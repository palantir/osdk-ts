import{f as b,j as a,r as i}from"./iframe-BJcI6I7N.js";import{O as u}from"./object-table-BFK3o9VN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-t8YjvYIO.js";import"./Table-COi2UZK5.js";import"./index-ciSMf65j.js";import"./Dialog-qZDZtUTL.js";import"./cross-BXeyHaO7.js";import"./svgIconContainer-ChDR1isz.js";import"./useBaseUiId-DEblu5yn.js";import"./InternalBackdrop-zWlD-uj6.js";import"./composite-idv80Jfn.js";import"./index-2EHDOsjj.js";import"./index-CwTnZiyW.js";import"./index-C7gjBbhW.js";import"./useEventCallback-D2AFx3Tw.js";import"./SkeletonBar-Bb1sSD9X.js";import"./LoadingCell-CMKDwxYN.js";import"./ColumnConfigDialog-BYMbCCuR.js";import"./DraggableList-DalDAJj1.js";import"./search-c-uEdInI.js";import"./Input-kyBh5Wk4.js";import"./useControlled-CouybXNc.js";import"./Button-0eHUW9F4.js";import"./small-cross-p3VCPLe0.js";import"./ActionButton-ClWqSrJc.js";import"./Checkbox-BsUCCShW.js";import"./useValueChanged-C92q1_Gi.js";import"./CollapsiblePanel-C_sKcFRB.js";import"./MultiColumnSortDialog-F7srt2ws.js";import"./MenuTrigger-BlR6vsHK.js";import"./CompositeItem-DBn217Rb.js";import"./ToolbarRootContext-Dl2ojvsq.js";import"./getDisabledMountTransitionStyles-CufsIM65.js";import"./getPseudoElementBounds-B6bLm4lL.js";import"./chevron-down-BrRIIpof.js";import"./index-CRh5r80N.js";import"./error-llhgzFId.js";import"./BaseCbacBanner-D2kp_nW7.js";import"./makeExternalStore-DeicAe6-.js";import"./Tooltip-Dl2lUrm5.js";import"./PopoverPopup-CgNtTmRS.js";import"./debounce-wJHHfadf.js";import"./useOsdkClient-Jr33iov8.js";import"./tick-BazIxijd.js";import"./DropdownField-kCDd1U-6.js";import"./isEqual-CAWOzucC.js";import"./withOsdkMetrics-Da2pPJDy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
