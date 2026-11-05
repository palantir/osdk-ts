import{f as b,j as a,r as i}from"./iframe-BK35Aetk.js";import{O as u}from"./object-table-CkCnEar3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSbGcA9T.js";import"./Table-DGVjD7XG.js";import"./index-CRoVE56T.js";import"./Dialog-COzctyK2.js";import"./cross-B0y6D7Iy.js";import"./svgIconContainer-CSIx5hfy.js";import"./useBaseUiId-wzcWLuni.js";import"./InternalBackdrop-Ch6GACCQ.js";import"./composite-BC1NOOFJ.js";import"./index-DW1QNimG.js";import"./index-CMsvzF6c.js";import"./index-CS1BdUz3.js";import"./useEventCallback-BMEbCQj6.js";import"./SkeletonBar-BmOvAKiB.js";import"./LoadingCell-CctttUKX.js";import"./ColumnConfigDialog-D8jneHNT.js";import"./DraggableList-CA5PY4G1.js";import"./search-BlafU9EC.js";import"./Input-BBffaDeP.js";import"./useControlled-Dh0EQZ-9.js";import"./Button-DM8aYBS9.js";import"./small-cross-BMXPDC9b.js";import"./ActionButton-kIs-FADX.js";import"./Checkbox-Bb9DIJfr.js";import"./useValueChanged-Dhfv4x3U.js";import"./CollapsiblePanel-DrdyzccY.js";import"./MultiColumnSortDialog-D0ulr6k9.js";import"./MenuTrigger-9ezUGiea.js";import"./CompositeItem-1I2WlbJ9.js";import"./ToolbarRootContext-BdRYVpKL.js";import"./getDisabledMountTransitionStyles-CWWRm8ZG.js";import"./getPseudoElementBounds-Bmg_H6Mu.js";import"./chevron-down-CyfgKJCg.js";import"./index-DhoMcwTi.js";import"./error-DLnzRR-1.js";import"./BaseCbacBanner-DJTrs5I0.js";import"./makeExternalStore-CRBaxVJ6.js";import"./Tooltip-D-esBjUo.js";import"./PopoverPopup-DNHFOhuU.js";import"./debounce-DaJCVt97.js";import"./useOsdkClient-xrzUDYQQ.js";import"./tick-Cdslhrb5.js";import"./DropdownField-Bdh0YP6p.js";import"./isEqual-DiF47LLT.js";import"./withOsdkMetrics-BZ06iEbV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
