import{f as b,j as a,r as i}from"./iframe-CpomApVZ.js";import{O as u}from"./object-table-h-lpPD96.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BH-Cl0Px.js";import"./Table-CWqwNV1D.js";import"./index-CGC6T-XZ.js";import"./Dialog-DIc-Otj5.js";import"./cross-zY1wytE-.js";import"./svgIconContainer-Be4HJW8v.js";import"./useBaseUiId-DfyKe6Rq.js";import"./InternalBackdrop-CJB_Jkbb.js";import"./composite-YQ6KkaFC.js";import"./index-025Ukm0g.js";import"./index-FygHMFtO.js";import"./index-C1zyx2Sb.js";import"./useEventCallback-FDMVWdrV.js";import"./SkeletonBar-Cy9F7ele.js";import"./LoadingCell-D0L81Ybj.js";import"./ColumnConfigDialog-BVEm-701.js";import"./DraggableList-2su4bhVb.js";import"./search-BQndk-Uq.js";import"./Input-BJIIc0U8.js";import"./useControlled-kFK3RP89.js";import"./Button-DyduBx6s.js";import"./small-cross-B1FteRDJ.js";import"./ActionButton-D3_iys5J.js";import"./Checkbox-B2T17thM.js";import"./useValueChanged-Crdw0YpT.js";import"./CollapsiblePanel-C0nZOj2u.js";import"./MultiColumnSortDialog-TjWk0ICe.js";import"./MenuTrigger-NMVCfVXP.js";import"./CompositeItem-CCUp6l13.js";import"./ToolbarRootContext-Cc1gKAra.js";import"./getDisabledMountTransitionStyles-BZ7M1FTj.js";import"./getPseudoElementBounds-DdoCGM3U.js";import"./chevron-down-BjAEWJUo.js";import"./index-DzfqdwdT.js";import"./error-C9Q2xxx3.js";import"./BaseCbacBanner-DsC8cwdT.js";import"./makeExternalStore-DP3Smuod.js";import"./Tooltip-Dau427Oy.js";import"./PopoverPopup-sMAQlRH9.js";import"./toNumber-CElMxY_5.js";import"./useOsdkClient-3vGePHIC.js";import"./tick-D2gU-ohR.js";import"./DropdownField-BQB8TNk3.js";import"./withOsdkMetrics-BeHwXWGO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
