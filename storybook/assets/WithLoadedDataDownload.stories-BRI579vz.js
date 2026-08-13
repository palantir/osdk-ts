import{f as b,j as a,r as i}from"./iframe-C8bv5M5q.js";import{O as u}from"./object-table-qhdt9s5y.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Chlg6owb.js";import"./index-aA6dFdbY.js";import"./Dialog-DwRdr4ua.js";import"./cross-BoinwVnp.js";import"./svgIconContainer-D7NvghIU.js";import"./useBaseUiId-DGJFJt6n.js";import"./InternalBackdrop-DkZ9lOZ_.js";import"./composite-BERdqvW-.js";import"./index-BLJUhLms.js";import"./index-CLxUnHEQ.js";import"./index-B9niMrF8.js";import"./useEventCallback-1iMstHZF.js";import"./SkeletonBar-p-WNn0Z9.js";import"./LoadingCell-DW7fm8TM.js";import"./ColumnConfigDialog-DaQ5Tlvf.js";import"./DraggableList-qn1FuzDp.js";import"./search-Bk10Osf-.js";import"./Input-BEhEtBHk.js";import"./useControlled-BCYGQpmo.js";import"./Button-Cl8oC4P3.js";import"./small-cross-C1TCAk_6.js";import"./ActionButton-eSLUE1ej.js";import"./Checkbox-CaoMOKG9.js";import"./useValueChanged-BqyaZZFZ.js";import"./CollapsiblePanel-jOZBbIzK.js";import"./MultiColumnSortDialog-BP_6eN27.js";import"./MenuTrigger-DC1vFj75.js";import"./CompositeItem-CV5yn9v3.js";import"./ToolbarRootContext-C4tMhNXy.js";import"./getDisabledMountTransitionStyles-CW5p-T8b.js";import"./getPseudoElementBounds-Bre6q9eb.js";import"./chevron-down-C7oxNI6k.js";import"./index-BKjCZT87.js";import"./error-GoMWkPTV.js";import"./BaseCbacBanner-CNYwOnwX.js";import"./makeExternalStore-DYR8gV5O.js";import"./Tooltip-BD8zP9iV.js";import"./PopoverPopup-BeJ93K3k.js";import"./debounce-DAbjvxlH.js";import"./useOsdkClient-BiaSRebG.js";import"./tick-xVgIfTGF.js";import"./DropdownField-CYP0zkSP.js";import"./isEqual-BzbyRYS1.js";import"./withOsdkMetrics-CmCV1Tt1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
