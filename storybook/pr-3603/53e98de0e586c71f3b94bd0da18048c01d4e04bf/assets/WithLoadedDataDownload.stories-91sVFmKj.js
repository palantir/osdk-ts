import{f as b,j as a,r as i}from"./iframe-D1ccwbwU.js";import{O as u}from"./object-table-BKIuKo0s.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-6W13E3.js";import"./Table-Be5FiA5d.js";import"./index-_DOpC_8N.js";import"./Dialog-CG4IC7UU.js";import"./cross-BMef0xJB.js";import"./svgIconContainer-Cr6kNKv_.js";import"./useBaseUiId-Clr8kPvs.js";import"./InternalBackdrop-BoTze6QF.js";import"./composite-DWIzRXre.js";import"./index-BL_AcbNT.js";import"./index-CVRon0Pv.js";import"./index-B-rSIqKA.js";import"./useEventCallback-D5kk2RVq.js";import"./SkeletonBar-BIHDViRC.js";import"./LoadingCell-CY-93stn.js";import"./ColumnConfigDialog-DcVA4MZO.js";import"./DraggableList-C7NaMQTh.js";import"./search-CsdxFzkr.js";import"./Input-B3NMUZ09.js";import"./useControlled-Dx6d83cc.js";import"./Button-BVSBHIRR.js";import"./small-cross-Dmllr_po.js";import"./ActionButton-Dh6CUNTx.js";import"./Checkbox-MzFZagAk.js";import"./minus-COQXhc_S.js";import"./tick-BtpAyNBR.js";import"./useValueChanged-H-TEbZOy.js";import"./caret-down-DOrJ6n-X.js";import"./CollapsiblePanel-ROvkXdEl.js";import"./MultiColumnSortDialog-D_BSy6iR.js";import"./MenuTrigger-HbXay-PC.js";import"./CompositeItem-BpdYb2R3.js";import"./ToolbarRootContext-CmhDo6DX.js";import"./getDisabledMountTransitionStyles-gTuOm429.js";import"./getPseudoElementBounds-BR-Ygay5.js";import"./chevron-down-nYDTPiJL.js";import"./index-BMEVSxUh.js";import"./error-BqWL9tH5.js";import"./BaseCbacBanner-n_27XJfI.js";import"./makeExternalStore-Dii7ZLIe.js";import"./Tooltip-CwHuiRIr.js";import"./PopoverPopup-LB2Rk61G.js";import"./toNumber-Dw359r28.js";import"./useOsdkClient-D65mP1tz.js";import"./DropdownField-CQgTIugi.js";import"./withOsdkMetrics-6KXZf89b.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
