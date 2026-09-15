import{f as b,j as a,r as i}from"./iframe-yBf-ojhu.js";import{O as u}from"./object-table-BOMqJs_O.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CGYiisRB.js";import"./Table-wxABhy6h.js";import"./index-CdRKjNXW.js";import"./Dialog-fHOO5fq8.js";import"./cross-CpqgxsIm.js";import"./svgIconContainer-DzKsK3pp.js";import"./useBaseUiId-CZtNEuC3.js";import"./InternalBackdrop-CSsFLgHu.js";import"./composite-BhJud1YY.js";import"./index-BHACjACD.js";import"./index-CsTimawz.js";import"./index-Dzg0FXju.js";import"./useEventCallback-BnKVbXQ1.js";import"./SkeletonBar-CgzkWc0c.js";import"./LoadingCell-Dql00YBl.js";import"./ColumnConfigDialog-qA8wMTWY.js";import"./DraggableList-DK0Kd-EX.js";import"./search-BZ0OOikS.js";import"./Input-IJnkzHlh.js";import"./useControlled-DEWrsH1j.js";import"./Button-CqafgKxL.js";import"./small-cross-Kn8vx_NT.js";import"./ActionButton-C7HMH6t8.js";import"./Checkbox-CaAT9v9q.js";import"./useValueChanged-gQZ0oDOl.js";import"./CollapsiblePanel-Dv1dlGER.js";import"./MultiColumnSortDialog-CjusWDNY.js";import"./MenuTrigger-DORfdr2z.js";import"./CompositeItem-BMY8zStj.js";import"./ToolbarRootContext-CnGnSWc3.js";import"./getDisabledMountTransitionStyles-CSwVJeOc.js";import"./getPseudoElementBounds-D2L7paF4.js";import"./chevron-down-C0-Ffhm_.js";import"./index-DXSY2W-l.js";import"./error-C4tONck9.js";import"./BaseCbacBanner-BrmvnQoe.js";import"./makeExternalStore-BJgD01DS.js";import"./Tooltip-Clch_Qe4.js";import"./PopoverPopup-wI-K4VZI.js";import"./debounce-B2jafETK.js";import"./useOsdkClient-Bw9VJD_N.js";import"./tick-BXpIlGo8.js";import"./DropdownField-CBnk-NYj.js";import"./isEqual-Bj0FLhJj.js";import"./withOsdkMetrics-CxM1E0kE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
