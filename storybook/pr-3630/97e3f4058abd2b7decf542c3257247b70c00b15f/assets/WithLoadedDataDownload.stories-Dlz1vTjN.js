import{f as b,j as a,r as i}from"./iframe-CUJD_feO.js";import{O as u}from"./object-table-B-1zA8Hj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CwMci636.js";import"./Table-XJYprrUY.js";import"./index-dod05_4l.js";import"./Dialog-B7U3fBEV.js";import"./cross-ByES0shH.js";import"./svgIconContainer-Bz-Xjm7j.js";import"./useBaseUiId-DBPD4Etj.js";import"./InternalBackdrop-C4qyaeJG.js";import"./composite-D39qFuWe.js";import"./index-Bu5v0TuY.js";import"./index-W8ATP_2c.js";import"./index-AfxA9EgT.js";import"./useEventCallback-kWqPZdVn.js";import"./SkeletonBar-XEE4WzKg.js";import"./LoadingCell-DgamI9l2.js";import"./ColumnConfigDialog-DwdE96ou.js";import"./DraggableList-BLYTsKtf.js";import"./search-dJzbdeML.js";import"./Input-BUE8rj0W.js";import"./useControlled-CKQPn_St.js";import"./Button-Dz5hys-D.js";import"./small-cross-Benw3npw.js";import"./ActionButton-CS3AgV9d.js";import"./Checkbox-DlU46lNw.js";import"./useValueChanged-D2Qhmq7T.js";import"./CollapsiblePanel-ljGVY6Ut.js";import"./MultiColumnSortDialog-BPBKnrWa.js";import"./MenuTrigger-DW2pizGd.js";import"./CompositeItem-CHPYeA1T.js";import"./ToolbarRootContext-KbzTQeVs.js";import"./getDisabledMountTransitionStyles-Bvu2dbPZ.js";import"./getPseudoElementBounds-Cd7q6M-o.js";import"./chevron-down-BKDgpmvX.js";import"./index-r_ox1X8s.js";import"./error-FGAi1Ish.js";import"./BaseCbacBanner-BnuVyEHc.js";import"./makeExternalStore-CcDXnPev.js";import"./Tooltip-BzGK_ZFb.js";import"./PopoverPopup-iUbZPEIi.js";import"./toNumber-C5Sl5_fT.js";import"./useOsdkClient-7gDPeBEw.js";import"./tick-CEb5nYmY.js";import"./DropdownField-BW3O-Mov.js";import"./withOsdkMetrics-gtUsoLlW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
