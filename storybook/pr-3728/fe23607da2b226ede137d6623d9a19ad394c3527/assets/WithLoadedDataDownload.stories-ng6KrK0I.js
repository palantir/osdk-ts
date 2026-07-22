import{f as b,j as a,r as i}from"./iframe-CG2OFJ7I.js";import{O as u}from"./object-table-BTZtTzyg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DaORRuYu.js";import"./Table-CHWzpC4Y.js";import"./index-Dby7DClp.js";import"./Dialog-BdXv6i_m.js";import"./cross-DefaB_M5.js";import"./svgIconContainer-CODCypXK.js";import"./useBaseUiId-DLohyEQW.js";import"./InternalBackdrop-DcsR0gWC.js";import"./composite-Blgk7ack.js";import"./index-DJbFUgNQ.js";import"./index-Ddd2yW-8.js";import"./index-DY-JcPJo.js";import"./useEventCallback-C0AthRpJ.js";import"./SkeletonBar-Zqdos3L-.js";import"./LoadingCell-CpSe00QM.js";import"./ColumnConfigDialog-BdLDKrll.js";import"./DraggableList-KAEqiJR3.js";import"./search-D1bpzPZZ.js";import"./Input-CDAk9ihG.js";import"./useControlled-DemSZ3bp.js";import"./isEqual-DZaCZx1y.js";import"./isObject-h-39pN0s.js";import"./Button-DvJGIvnq.js";import"./ActionButton-9uH5V4MK.js";import"./Checkbox-Cm9752ML.js";import"./useValueChanged-D2Q9nhS9.js";import"./CollapsiblePanel-CtLmbdwe.js";import"./MultiColumnSortDialog-Vm3Vi4WE.js";import"./MenuTrigger-BgkpRvSr.js";import"./CompositeItem-B4vKrZ_I.js";import"./ToolbarRootContext-eFJIvnUU.js";import"./getDisabledMountTransitionStyles-F7H9ZnTa.js";import"./getPseudoElementBounds-DOpDgg5c.js";import"./chevron-down-BIj16iZg.js";import"./index-DeBLm_yC.js";import"./error-mpWotWR3.js";import"./BaseCbacBanner-BmkX61oi.js";import"./makeExternalStore-2EXNFTlz.js";import"./Tooltip-5mQixMzC.js";import"./PopoverPopup-Byv-mINe.js";import"./toNumber-Dd0U1AAD.js";import"./useOsdkClient-Cs9GgSAw.js";import"./tick-B9E6c3pz.js";import"./DropdownField-D-kHFxb-.js";import"./withOsdkMetrics-CUzNioJX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
