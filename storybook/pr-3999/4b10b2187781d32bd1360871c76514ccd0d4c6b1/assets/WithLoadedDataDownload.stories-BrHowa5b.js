import{f as b,j as a,r as i}from"./iframe-DBZ29Q89.js";import{O as u}from"./object-table-DFAMzKrH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cu7dcQLx.js";import"./Table-BgsXMa7R.js";import"./index-DBtD-XxF.js";import"./Dialog-Dq9MvlvH.js";import"./cross-B-xCEuKH.js";import"./svgIconContainer-DNY9aQZJ.js";import"./useBaseUiId-RGrTJ31h.js";import"./InternalBackdrop-BHcPYEam.js";import"./composite-DRG53mMw.js";import"./index-Bo8FiFc5.js";import"./index-Bc39kNYP.js";import"./index-jB4e8NNE.js";import"./useEventCallback-Bph5gx73.js";import"./SkeletonBar-DCuWvPdX.js";import"./LoadingCell-DmomVXl7.js";import"./ColumnConfigDialog-DvnjzPVi.js";import"./DraggableList-CRrQ_cz3.js";import"./search-DFnGvI6Z.js";import"./Input-BW9ftY3W.js";import"./useControlled-CAV9tSJk.js";import"./Button-TF5qO5TO.js";import"./small-cross-DoWs3x27.js";import"./ActionButton-tF-VFP1u.js";import"./Checkbox-AhlW4bmz.js";import"./useValueChanged-g3rU1sEt.js";import"./CollapsiblePanel-BuR1KRlC.js";import"./MultiColumnSortDialog-B7k8x7Cw.js";import"./MenuTrigger-DMDl84wG.js";import"./CompositeItem-CnzplN5I.js";import"./ToolbarRootContext-BDMXA8FN.js";import"./getDisabledMountTransitionStyles-CJavuumC.js";import"./getPseudoElementBounds-CMANdjLh.js";import"./chevron-down-m8Go69fz.js";import"./index-D7JuEvow.js";import"./error-DYp6MgYM.js";import"./BaseCbacBanner-C8d8ZFfK.js";import"./makeExternalStore-Dhyr5JD9.js";import"./Tooltip-DIxNlKyb.js";import"./PopoverPopup-vY89NdJ2.js";import"./debounce-B-C3MBB0.js";import"./useOsdkClient-Cjx5o-tv.js";import"./tick-6gOcudBG.js";import"./DropdownField-ZZtn-RZ5.js";import"./isEqual-I0TXraMo.js";import"./withOsdkMetrics-DDr2NyM9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
