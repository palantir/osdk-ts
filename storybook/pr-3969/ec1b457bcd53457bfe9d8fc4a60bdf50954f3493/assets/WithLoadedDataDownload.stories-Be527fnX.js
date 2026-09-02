import{f as b,j as a,r as i}from"./iframe-DT3Pq7Dk.js";import{O as u}from"./object-table-g1XMDFd-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D2GrK1CJ.js";import"./Table-Bh-9mYaq.js";import"./index-AT_VLJBX.js";import"./Dialog-l-bas76Q.js";import"./cross-CW5vZ7KQ.js";import"./svgIconContainer-TdCO8fzr.js";import"./useBaseUiId-Laeorjq3.js";import"./InternalBackdrop--c_GjfBN.js";import"./composite-BLTBB5ty.js";import"./index-DzCFWbuW.js";import"./index-fPrU9AoD.js";import"./index-CN1cNOfe.js";import"./useEventCallback-BxHIphzr.js";import"./SkeletonBar-fo9N7Mio.js";import"./LoadingCell-i4o0PZ76.js";import"./ColumnConfigDialog-DCZ2hIsl.js";import"./DraggableList-CyEH8jAj.js";import"./search-riKbdAfC.js";import"./Input-Bb6sqNmB.js";import"./useControlled-CytQjpOe.js";import"./Button-DyNME9ua.js";import"./small-cross-DVimoYxF.js";import"./ActionButton-CB14cvAW.js";import"./Checkbox-BYlPaTiv.js";import"./useValueChanged-DaOIj_Om.js";import"./CollapsiblePanel-DKE9kt7B.js";import"./MultiColumnSortDialog-V1bLreRv.js";import"./MenuTrigger-DRejejB5.js";import"./CompositeItem-DwUvkpMk.js";import"./ToolbarRootContext-BXZtSj06.js";import"./getDisabledMountTransitionStyles-sPoOQ_E8.js";import"./getPseudoElementBounds-yDZ97H6Z.js";import"./chevron-down-puCe9vK2.js";import"./index-Cm0FOdoZ.js";import"./error-CJNV9pQn.js";import"./BaseCbacBanner-VqYtHkBJ.js";import"./makeExternalStore-Do_G056M.js";import"./Tooltip-DCOTkgJf.js";import"./PopoverPopup-qAtb92MM.js";import"./debounce-CfPojQAv.js";import"./useOsdkClient-CGIMjlzr.js";import"./tick-Dt4R6xeY.js";import"./DropdownField-C5cLUDqt.js";import"./isEqual-DHwQUV_q.js";import"./withOsdkMetrics-Bxhj5aXe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
