import{f as b,j as a,r as i}from"./iframe-CQ8GnM4F.js";import{O as u}from"./object-table-BPqZt8Xh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DTHymVTT.js";import"./Table-BqwFxCuG.js";import"./index-D-qb5elk.js";import"./Dialog-BiR9_kSU.js";import"./cross-B-B76LsO.js";import"./svgIconContainer-CFj_QVpE.js";import"./useBaseUiId-DNylri0h.js";import"./InternalBackdrop-Bnpz9z3C.js";import"./composite-D8Op5omk.js";import"./index-CBfM1eTV.js";import"./index-vRbi-hPZ.js";import"./index-CWxTPRvQ.js";import"./useEventCallback-CwBNysST.js";import"./SkeletonBar-Co95I2t2.js";import"./LoadingCell-DWloxnsX.js";import"./ColumnConfigDialog-CruqBtkT.js";import"./DraggableList-QH52Hljs.js";import"./search-BD7N_Px9.js";import"./Input-DxXc3FHJ.js";import"./useControlled-Nzu8rvWU.js";import"./Button-D03uZiM4.js";import"./small-cross-Dd0EKvPu.js";import"./ActionButton-C1IWap4H.js";import"./Checkbox-CG60OHSc.js";import"./useValueChanged--dnQ0E3_.js";import"./CollapsiblePanel-CjOn5bi3.js";import"./MultiColumnSortDialog-CtGjZ3gI.js";import"./MenuTrigger-BkjkPR8E.js";import"./CompositeItem-DUQ-QWk-.js";import"./ToolbarRootContext-Cuym0TD9.js";import"./getDisabledMountTransitionStyles-COIZu6QW.js";import"./getPseudoElementBounds-_QKh0K1T.js";import"./chevron-down-ELLpGOmV.js";import"./index-Il0eZ9cQ.js";import"./error-BTrU7oox.js";import"./BaseCbacBanner-D8j1QTMP.js";import"./makeExternalStore-DtmpZgSb.js";import"./Tooltip-CrdnIALV.js";import"./PopoverPopup-Bw_tKaRO.js";import"./debounce-Drhc6M_Y.js";import"./useOsdkClient-DswCZ-gI.js";import"./tick-YtV6mj8r.js";import"./DropdownField--HKs-g6O.js";import"./isEqual-CfQIWlQk.js";import"./withOsdkMetrics-D2yFydsJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
