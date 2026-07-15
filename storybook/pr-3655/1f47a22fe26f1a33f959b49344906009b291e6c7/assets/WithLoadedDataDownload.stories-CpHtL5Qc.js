import{f as b,j as a,r as i}from"./iframe-CrtK0oGg.js";import{O as u}from"./object-table-Csf-HNoz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUgvGLym.js";import"./Table-DWvIgvR2.js";import"./index-uDVvSurO.js";import"./Dialog-CzwhW7t7.js";import"./cross-BMeZsGb9.js";import"./svgIconContainer-BH74CJql.js";import"./useBaseUiId-iQl3YAIc.js";import"./InternalBackdrop-BZTNmoGD.js";import"./composite-C8gWpdiy.js";import"./index-DWFWT__H.js";import"./index-Crs6qkTJ.js";import"./index-uLu2sTPF.js";import"./useEventCallback-B_RZXuIt.js";import"./SkeletonBar-7pNzP4NQ.js";import"./LoadingCell-ZNbkC37r.js";import"./ColumnConfigDialog-DSu-GvIL.js";import"./DraggableList-Bzq9dkuT.js";import"./search-CtEzcMEF.js";import"./Input-Ba_HuI20.js";import"./useControlled-DlabaPsQ.js";import"./Button-6viTJ86W.js";import"./small-cross-6oWW93l8.js";import"./ActionButton-B9xqTVQ2.js";import"./Checkbox-DJTlOYa2.js";import"./useValueChanged-CnGECoDf.js";import"./CollapsiblePanel-B1uDIxCl.js";import"./MultiColumnSortDialog-DCKejx9Y.js";import"./MenuTrigger-BKlZVebT.js";import"./CompositeItem-Co2yt5E5.js";import"./ToolbarRootContext-Dz3VmV3-.js";import"./getDisabledMountTransitionStyles-Bpnc2Hcz.js";import"./getPseudoElementBounds-cn-iOE0y.js";import"./chevron-down-CsjhBaNM.js";import"./index-BkAsY935.js";import"./error-CUWTP8Pf.js";import"./BaseCbacBanner-CG78Rh2O.js";import"./makeExternalStore-8MSmvfdO.js";import"./Tooltip-9t3WSCcY.js";import"./PopoverPopup-DNx20VEC.js";import"./toNumber-DTsh0hDe.js";import"./useOsdkClient-Bpo5kVX2.js";import"./tick-DNwJ6E0Y.js";import"./DropdownField-BnyAf3cA.js";import"./withOsdkMetrics-DfAdNawF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
