import{f as b,j as a,r as i}from"./iframe-Bnq7KqyA.js";import{O as u}from"./object-table-BwpDc25B.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3THyb-s.js";import"./Table-OWEu-GPE.js";import"./index-Cp8jliQ7.js";import"./Dialog-DTomyIuC.js";import"./cross-CZ44W-gs.js";import"./svgIconContainer-v0UJxJ5s.js";import"./useBaseUiId-BLC23AR8.js";import"./InternalBackdrop-BNxRDTPk.js";import"./composite-DHkFKHco.js";import"./index-BjxSMAWD.js";import"./index-CAaYrkDS.js";import"./index-forTTHlP.js";import"./useEventCallback-Cv-IdHMI.js";import"./SkeletonBar-BH2Vcofq.js";import"./LoadingCell-D-VOauVN.js";import"./ColumnConfigDialog-vebwNUAA.js";import"./DraggableList-Bc3IwPLk.js";import"./search-BWQsUNEv.js";import"./Input-DqyWCSM_.js";import"./useControlled-lHaiJfgn.js";import"./Button-DTZ1WQtp.js";import"./small-cross-DHVafU_w.js";import"./ActionButton-kJY-Pi0n.js";import"./Checkbox-Ac1xA8sH.js";import"./useValueChanged-DgUwSG6f.js";import"./CollapsiblePanel-DA0tn_f0.js";import"./MultiColumnSortDialog-CJ5ZRoXQ.js";import"./MenuTrigger-DU9Lx3Ha.js";import"./CompositeItem-kZs7JwNO.js";import"./ToolbarRootContext-BytsqpZq.js";import"./getDisabledMountTransitionStyles-DQbfHBKK.js";import"./getPseudoElementBounds-BJWXZAWi.js";import"./chevron-down-Der9zcUh.js";import"./index-CcX-LmS8.js";import"./error-CzhS-DQY.js";import"./BaseCbacBanner-RaTrx7BD.js";import"./makeExternalStore-0aoYVRXh.js";import"./Tooltip-JLD8LHly.js";import"./PopoverPopup-CHUD5U3W.js";import"./debounce-B3lN2MVP.js";import"./useOsdkClient-DLVTWwhI.js";import"./tick-BYRbYgVJ.js";import"./DropdownField-C_c9mkH4.js";import"./isEqual-CwzDsxAX.js";import"./withOsdkMetrics-NPZms2--.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
