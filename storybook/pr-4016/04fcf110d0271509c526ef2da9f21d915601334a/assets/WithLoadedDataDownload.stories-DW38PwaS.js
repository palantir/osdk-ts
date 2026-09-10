import{f as b,j as a,r as i}from"./iframe-DCMw_0TW.js";import{O as u}from"./object-table-Ccj31N5H.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-nzNuDSAv.js";import"./Table-Dm-UUELM.js";import"./index-tQLNAeTv.js";import"./Dialog-Dnb7OeiM.js";import"./cross-orOEa1Of.js";import"./svgIconContainer-BuqYbofr.js";import"./useBaseUiId-D30K99H9.js";import"./InternalBackdrop-BB5KU1pv.js";import"./composite-BEUqKf6u.js";import"./index-Dk4-JQXx.js";import"./index-Xc5_iOPx.js";import"./index-DGqnKBQq.js";import"./useEventCallback-Dlb3_nai.js";import"./SkeletonBar-DGgKxMsR.js";import"./LoadingCell-Bo92g5D3.js";import"./ColumnConfigDialog-svntpNOd.js";import"./DraggableList-dWs199Tn.js";import"./search-3SCesORj.js";import"./Input-Ct67CszU.js";import"./useControlled-glFhf02I.js";import"./Button-DrHRwo7L.js";import"./small-cross-bQOb3ZfY.js";import"./ActionButton-CqBl5clt.js";import"./Checkbox-CC3H_6dm.js";import"./useValueChanged-BExaB3du.js";import"./CollapsiblePanel-udeHAS2R.js";import"./MultiColumnSortDialog-Z4gbQ2sB.js";import"./MenuTrigger-BHi5YxlN.js";import"./CompositeItem-DAFo6DYX.js";import"./ToolbarRootContext-DAgpPS14.js";import"./getDisabledMountTransitionStyles-DePFxOFo.js";import"./getPseudoElementBounds-DTBnQrKu.js";import"./chevron-down-CwIymZzb.js";import"./index-B3cn-YUq.js";import"./error-CThwrDAU.js";import"./BaseCbacBanner-HqMibrZO.js";import"./makeExternalStore-CaxsUcIE.js";import"./Tooltip-BIR0svY2.js";import"./PopoverPopup-D-oy58Yh.js";import"./debounce-B-rnFVFg.js";import"./useOsdkClient-wDDgD5tN.js";import"./tick-DWb-Pi96.js";import"./DropdownField-5tJgHFby.js";import"./isEqual-eGrV7ep1.js";import"./withOsdkMetrics-Cz4cYYHT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
