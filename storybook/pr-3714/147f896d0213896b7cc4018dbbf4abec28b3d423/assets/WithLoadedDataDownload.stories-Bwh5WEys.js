import{f as b,j as a,r as i}from"./iframe-BSifmcVk.js";import{O as u}from"./object-table-DKmmrjUP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVMAG18C.js";import"./Table-DkA4sIRB.js";import"./index-st0q4RoU.js";import"./Dialog-BGTjbFoM.js";import"./cross-DtUxBPT6.js";import"./svgIconContainer-CxUaEimp.js";import"./useBaseUiId-CpWLPULh.js";import"./InternalBackdrop-CeH086xI.js";import"./composite-IeMIDoM7.js";import"./index-DeMvH6kN.js";import"./index-xZryAjRG.js";import"./index-DX8lv5jY.js";import"./useEventCallback-CqljEom0.js";import"./SkeletonBar-hY9eSZBd.js";import"./LoadingCell-Dwy_GmrN.js";import"./ColumnConfigDialog-Ca-DeiWk.js";import"./DraggableList-CkNmAXZg.js";import"./search-Dj6xnLC7.js";import"./Input-Cq8S2xQC.js";import"./useControlled-DF0sXW0s.js";import"./isEqual-moNqE_If.js";import"./isObject-Ds2yKFI9.js";import"./Button-DXGQ07LV.js";import"./ActionButton-UE2H2jZ7.js";import"./Checkbox-C9dr3May.js";import"./useValueChanged-Cra7GySa.js";import"./CollapsiblePanel-CoT0h3JZ.js";import"./MultiColumnSortDialog-CZnGEQ8u.js";import"./MenuTrigger-HHsPQ3Hl.js";import"./CompositeItem-Xoq0cONq.js";import"./ToolbarRootContext-BJ4u2SIV.js";import"./getDisabledMountTransitionStyles-DMErhwac.js";import"./getPseudoElementBounds-DpeXWKZv.js";import"./chevron-down-4OBhYoLd.js";import"./index-szwaSOAB.js";import"./error-CL7low_w.js";import"./BaseCbacBanner-XQSjlqj-.js";import"./makeExternalStore-B_REPPMn.js";import"./Tooltip-axatK9O2.js";import"./PopoverPopup-Bx-V2EgX.js";import"./toNumber-BoTrHgLZ.js";import"./useOsdkClient-Dn_U9-Sj.js";import"./tick-BdtrcJ-0.js";import"./DropdownField-DMLIkq2P.js";import"./withOsdkMetrics-BmxutiwK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
