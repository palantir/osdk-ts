import{f as b,j as a,r as i}from"./iframe-BStx9yPR.js";import{O as u}from"./object-table-lkWTNthX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-UySgbcUR.js";import"./Table-D_gkiTYP.js";import"./index-Be1ULEOR.js";import"./Dialog-M9vpxV1b.js";import"./cross-FejrogDo.js";import"./svgIconContainer-B-Cpa4mV.js";import"./useBaseUiId-Bdm4fxvS.js";import"./InternalBackdrop-Cy4bnIED.js";import"./composite-Bd-v3I4o.js";import"./index-D47MGgQl.js";import"./index-CaXF2RA4.js";import"./index-C9UU_q_g.js";import"./useEventCallback-Bfd-jSTK.js";import"./SkeletonBar-DRw9PMp9.js";import"./LoadingCell-CB140HhJ.js";import"./ColumnConfigDialog-DH8SQcof.js";import"./DraggableList-4zd_qQ0H.js";import"./search-TPtYigE2.js";import"./Input-C7L8al23.js";import"./useControlled-DvySd0Ik.js";import"./Button-CvmdNRYB.js";import"./small-cross-CBxSdqg6.js";import"./ActionButton-BMs_YNH8.js";import"./Checkbox-CLWXSJkK.js";import"./useValueChanged-NROW4tL0.js";import"./CollapsiblePanel-vL_dQymU.js";import"./MultiColumnSortDialog-CbT9P8a7.js";import"./MenuTrigger-B5m-10ic.js";import"./CompositeItem-C63RKcL1.js";import"./ToolbarRootContext-bupG8LBJ.js";import"./getDisabledMountTransitionStyles-DaQS-FmV.js";import"./getPseudoElementBounds-s339g_vL.js";import"./chevron-down-BRbRhHVp.js";import"./index-yZu2NWSV.js";import"./error-KbCjfx82.js";import"./BaseCbacBanner-D0gQoWUH.js";import"./makeExternalStore-H8C5w62L.js";import"./Tooltip-DjBHr9yw.js";import"./PopoverPopup-DEZsTE-l.js";import"./toNumber-PgdLcTzy.js";import"./useOsdkClient-DRQhdCG2.js";import"./tick-By3v2mMw.js";import"./DropdownField-BXjq2rNB.js";import"./withOsdkMetrics-DOJw4LH5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
