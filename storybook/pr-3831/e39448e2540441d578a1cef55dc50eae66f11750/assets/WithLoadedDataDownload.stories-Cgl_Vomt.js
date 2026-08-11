import{f as b,j as a,r as i}from"./iframe-BAzoJD_n.js";import{O as u}from"./object-table-CXjRtA9s.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DSHDaNkC.js";import"./Table-D_rBRk7V.js";import"./index-s4lAOVrs.js";import"./Dialog-CR639lRj.js";import"./cross-Cz9X-8vp.js";import"./svgIconContainer-DcEtiJnJ.js";import"./useBaseUiId-X8JbO_jF.js";import"./InternalBackdrop-BEz-Het1.js";import"./composite-C2ZeH-nt.js";import"./index-DnptcgYz.js";import"./index-BMCs90I6.js";import"./index-D9L2mjOB.js";import"./useEventCallback-ClbdUzWy.js";import"./SkeletonBar-JSA8ez91.js";import"./LoadingCell-4aetjgV8.js";import"./ColumnConfigDialog-BY9NBeIW.js";import"./DraggableList-CluNiQuA.js";import"./search-BX5F8_z_.js";import"./Input-DvNrW-kH.js";import"./useControlled-cRyxw0TO.js";import"./isEqual-DiTVCVI3.js";import"./isObject-BRC3jVhz.js";import"./Button-C6-5CX8D.js";import"./ActionButton-xm3OfMXt.js";import"./Checkbox-D82zXn1s.js";import"./useValueChanged-B_BD_Ppi.js";import"./CollapsiblePanel-BOrVcuXG.js";import"./MultiColumnSortDialog-B8YCTi_s.js";import"./MenuTrigger-C2dbIgFm.js";import"./CompositeItem-Dx_RF7XZ.js";import"./ToolbarRootContext-DHhHK4Vd.js";import"./getDisabledMountTransitionStyles-alpHjjXx.js";import"./getPseudoElementBounds-0QkKzEQT.js";import"./chevron-down-BgJhhOtE.js";import"./index-RB9l46zQ.js";import"./error-3n0FpK4k.js";import"./BaseCbacBanner-C9TiEwDc.js";import"./makeExternalStore-C_ctE6bz.js";import"./Tooltip-D3twPyS2.js";import"./PopoverPopup-dsU5wvNs.js";import"./toNumber-Bt6DwShw.js";import"./useOsdkClient-Bfmyk2Eg.js";import"./tick-C3Hz3Jzx.js";import"./DropdownField-DTwMjcEt.js";import"./withOsdkMetrics-CiR7QeDt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
