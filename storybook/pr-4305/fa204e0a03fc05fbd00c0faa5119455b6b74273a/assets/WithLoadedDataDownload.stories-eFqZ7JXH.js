import{f as b,j as a,r as i}from"./iframe-Dxf7pqeg.js";import{O as u}from"./object-table-CAmbjs-n.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CF9q8wC-.js";import"./Table-Dqkj2dN7.js";import"./index-wDaQCgfa.js";import"./Dialog-C-C7J_C5.js";import"./cross-jA7YlUXs.js";import"./svgIconContainer-DeyZ4zWj.js";import"./useBaseUiId-DVv5YeQ_.js";import"./InternalBackdrop-0R1WE3fv.js";import"./composite-DX7eZJ2_.js";import"./index-6J7TyXcf.js";import"./index-BoUI8uiT.js";import"./index-BwEpBM25.js";import"./useEventCallback-B4KD4d9L.js";import"./SkeletonBar-CbuQfCLG.js";import"./LoadingCell-BumJxikK.js";import"./ColumnConfigDialog-CpetANnK.js";import"./DraggableList-DwJkQy_K.js";import"./search-n-Z5MtR9.js";import"./Input-B-AK0ISA.js";import"./useControlled-COWGSBWf.js";import"./Button-C2uuxQ9H.js";import"./small-cross-DYWSmTGJ.js";import"./ActionButton-BDiX3ANK.js";import"./Checkbox-CugdzikF.js";import"./useValueChanged-hug1LV6U.js";import"./CollapsiblePanel-C66-rvaM.js";import"./MultiColumnSortDialog-CC2PzkiA.js";import"./MenuTrigger-O60ZG2Mr.js";import"./CompositeItem-DXqXcqtg.js";import"./ToolbarRootContext-DwNvvDcu.js";import"./getDisabledMountTransitionStyles-BObfekIg.js";import"./getPseudoElementBounds-D9abS4hX.js";import"./chevron-down-CeBUa0jW.js";import"./index-COpT5bPe.js";import"./error-LTA79L0B.js";import"./BaseCbacBanner-DbDDCNA_.js";import"./makeExternalStore-B474c-YK.js";import"./Tooltip-BjgMSx3f.js";import"./PopoverPopup-BKxQctdQ.js";import"./debounce-CKRCdOlE.js";import"./useOsdkClient-BclyzzCm.js";import"./tick-Cm8FJ6ZM.js";import"./DropdownField-CGNqz11o.js";import"./isEqual-_UBNmDUY.js";import"./withOsdkMetrics-BVzotg80.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
