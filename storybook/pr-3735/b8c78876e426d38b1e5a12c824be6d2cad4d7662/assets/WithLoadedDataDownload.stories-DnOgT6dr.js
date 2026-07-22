import{f as b,j as a,r as i}from"./iframe-BRxXnNeA.js";import{O as u}from"./object-table-BWXmHScr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ZwpNBDck.js";import"./Table-DjTRGd0n.js";import"./index-DnUdziE3.js";import"./Dialog-BGn3Kbow.js";import"./cross-p5C9R9_r.js";import"./svgIconContainer-BOuRuwJr.js";import"./useBaseUiId-iHLM7QjT.js";import"./InternalBackdrop-BwZQ0gYG.js";import"./composite-BmCm4IKS.js";import"./index-BMsxRPaK.js";import"./index-V95TsBfL.js";import"./index-DF9ZbJ2O.js";import"./useEventCallback-Dk8Q5KrO.js";import"./SkeletonBar-aCQi_r5v.js";import"./LoadingCell-DwHEwjqu.js";import"./ColumnConfigDialog-CTTwBk2B.js";import"./DraggableList-X9V4ye4K.js";import"./search-DKQ2rHbj.js";import"./Input-CGTuhK0d.js";import"./useControlled-StFrWOwS.js";import"./isEqual-ObeORAz7.js";import"./isObject-GLs1X9xy.js";import"./Button-CLHyeJxI.js";import"./ActionButton-ChbUphi7.js";import"./Checkbox-BWcBAjrk.js";import"./useValueChanged-DWJn24ga.js";import"./CollapsiblePanel-t1PtKIC8.js";import"./MultiColumnSortDialog-BwKtyIja.js";import"./MenuTrigger-o17AnMiN.js";import"./CompositeItem-01NlXsRP.js";import"./ToolbarRootContext-DTrfrJro.js";import"./getDisabledMountTransitionStyles-QcZ-leHz.js";import"./getPseudoElementBounds-Df0V2yLr.js";import"./chevron-down-DBKWZy9U.js";import"./index-CYoRdqfZ.js";import"./error-BFvdxdQn.js";import"./BaseCbacBanner-Dalh-T5O.js";import"./makeExternalStore-DmpDAepm.js";import"./Tooltip-p4FUIbO3.js";import"./PopoverPopup-Bhv815cX.js";import"./toNumber-rktqZQ-g.js";import"./useOsdkClient-CTu4hncc.js";import"./tick-_elaQ7T9.js";import"./DropdownField-DLY5-bws.js";import"./withOsdkMetrics-DEkYj1jo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
