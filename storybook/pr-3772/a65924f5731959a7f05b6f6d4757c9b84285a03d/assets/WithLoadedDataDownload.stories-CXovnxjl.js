import{f as b,j as a,r as i}from"./iframe-5Yblr-NW.js";import{O as u}from"./object-table-c1GWaMPj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Btewyy37.js";import"./Table-BGKldzvB.js";import"./index-DhSuFMxY.js";import"./Dialog-yZxDZi1G.js";import"./cross-AcYogNoU.js";import"./svgIconContainer-C-JdNNRF.js";import"./useBaseUiId-CAIjkwyZ.js";import"./InternalBackdrop-CN9NhUNj.js";import"./composite-koNAMkMV.js";import"./index-CCrwpy9x.js";import"./index-Dy445fm6.js";import"./index-DhxqCc18.js";import"./useEventCallback-CxKTPJzO.js";import"./SkeletonBar-DiM1XXxY.js";import"./LoadingCell-BEZh4DfC.js";import"./ColumnConfigDialog-BJcXMY0A.js";import"./DraggableList-BzD4-3db.js";import"./search-D1uGJSkA.js";import"./Input-BOhHHxG9.js";import"./useControlled-CA2G7MeH.js";import"./Button-MK9UA-SJ.js";import"./small-cross-BffCLWOx.js";import"./ActionButton-d6xzy603.js";import"./Checkbox-Cc-NsMO8.js";import"./useValueChanged-m37Rn1H6.js";import"./CollapsiblePanel-BBxBNB35.js";import"./MultiColumnSortDialog-DuiPARGk.js";import"./MenuTrigger-C2DN0Qlf.js";import"./CompositeItem-DP9Ij0vi.js";import"./ToolbarRootContext-Cm13ddJg.js";import"./getDisabledMountTransitionStyles-7aMNvG5X.js";import"./getPseudoElementBounds-BQ6Zc3zn.js";import"./chevron-down-CwlGMO0g.js";import"./index-D3dVTsWE.js";import"./error-CKIF3yHX.js";import"./BaseCbacBanner-MGoalnpS.js";import"./makeExternalStore-CdX6NCF6.js";import"./Tooltip-0zkur8B8.js";import"./PopoverPopup-CendakA5.js";import"./debounce-ZeZufrM2.js";import"./useOsdkClient-CmlS7muK.js";import"./tick-Bb3E6T37.js";import"./DropdownField-DD-cuKca.js";import"./isEqual-Wc-dAf2j.js";import"./withOsdkMetrics-QG2B1sMI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
