import{f as b,j as a,r as i}from"./iframe-MD_hxJ5J.js";import{O as u}from"./object-table-BysSjEUR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CxmPmWZ8.js";import"./Table-C0PNNGWc.js";import"./index-64-1SNr_.js";import"./Dialog-D69y0_7h.js";import"./cross-D46twNIG.js";import"./svgIconContainer-BvauezIc.js";import"./useBaseUiId-ChxOhtPS.js";import"./InternalBackdrop-Cqjgz7i6.js";import"./composite-C2KSVEv8.js";import"./index-BZUy6kD9.js";import"./index-Cg6AvCFD.js";import"./index-D4y1rNQs.js";import"./useEventCallback-C5sJ9WEe.js";import"./SkeletonBar-Hr-KZlfW.js";import"./LoadingCell-CsGyK1hi.js";import"./ColumnConfigDialog-BYmJzKVj.js";import"./DraggableList-CPFfWHpr.js";import"./search-7pK9Rle0.js";import"./Input-0PB2eg3D.js";import"./useControlled-C8cjmXAr.js";import"./isEqual-tprnv5r8.js";import"./isObject-DUcirasF.js";import"./Button-DTHIbyog.js";import"./ActionButton-B6Tvr6s_.js";import"./Checkbox-Gr2j_OCE.js";import"./useValueChanged-BooVG2Ea.js";import"./CollapsiblePanel-B36qfma4.js";import"./MultiColumnSortDialog-CsWcyhKj.js";import"./MenuTrigger-DRuvgmkE.js";import"./CompositeItem-CADo38Yn.js";import"./ToolbarRootContext-BSmt9IfE.js";import"./getDisabledMountTransitionStyles-CtRo1WPu.js";import"./getPseudoElementBounds-XHz08wL-.js";import"./chevron-down-BLw2RaDz.js";import"./index-Bke-1tqH.js";import"./error-BL4ywDu6.js";import"./BaseCbacBanner-C8xLY8Qd.js";import"./makeExternalStore-CQNZO13J.js";import"./Tooltip-CEMJXePV.js";import"./PopoverPopup-BiefuPNN.js";import"./toNumber-CZGYHYtn.js";import"./useOsdkClient-DKSwjyPJ.js";import"./tick-5aivGE4p.js";import"./DropdownField-TiPjHrlF.js";import"./withOsdkMetrics-DoESnEyg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
