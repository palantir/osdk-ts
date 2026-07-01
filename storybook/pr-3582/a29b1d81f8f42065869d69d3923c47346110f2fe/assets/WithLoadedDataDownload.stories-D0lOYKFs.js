import{f as b,j as a,r as i}from"./iframe-DPif3BCt.js";import{O as u}from"./object-table-Iv7prqEu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BbPxCDmH.js";import"./Table-Demlu3JR.js";import"./index-DlKJyA6f.js";import"./Dialog-BpUk9Kra.js";import"./cross-B3XRATNr.js";import"./svgIconContainer-CMyuo72G.js";import"./useBaseUiId-1LP5pxZR.js";import"./InternalBackdrop-BH3ffLIu.js";import"./composite-Du3vYNL-.js";import"./index-CS7wiWS2.js";import"./index-C2K5BBQe.js";import"./index-Dqv9wJPn.js";import"./useEventCallback-CpZVQ1Ue.js";import"./SkeletonBar-dyl00LAj.js";import"./LoadingCell-B8_QdiuR.js";import"./ColumnConfigDialog-DZ3Manz0.js";import"./DraggableList-BAk8YP9w.js";import"./search-HlRbx8Td.js";import"./Input-ChIFSgLe.js";import"./useControlled-bK4vBxg8.js";import"./Button-DL74wRaw.js";import"./small-cross-2_WpjdP5.js";import"./ActionButton-DOsUHU-M.js";import"./Checkbox-CrlYuceh.js";import"./minus-CWzGHwBR.js";import"./tick-C9OBaJst.js";import"./useValueChanged-9MjCYZh3.js";import"./caret-down-CaHd8l-E.js";import"./CollapsiblePanel-DIrgxipF.js";import"./MultiColumnSortDialog-PYDVMeT7.js";import"./MenuTrigger-BmxDvXRQ.js";import"./CompositeItem-C-6zUN9Y.js";import"./ToolbarRootContext-DNYYxNIX.js";import"./getDisabledMountTransitionStyles-Cp9ZYZ-J.js";import"./getPseudoElementBounds-DuPFuyhJ.js";import"./chevron-down-OrYSk-BY.js";import"./index-CG_fuOXb.js";import"./error-B3gLJ4JV.js";import"./BaseCbacBanner-B0mpa29W.js";import"./makeExternalStore-Dol0aQuG.js";import"./Tooltip-1ooB755L.js";import"./PopoverPopup-B6Vo2Hrh.js";import"./toNumber-GPSVm8kL.js";import"./useOsdkClient-B6Jz84Od.js";import"./DropdownField-Ct3f7Muw.js";import"./withOsdkMetrics-BbG2_MZe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
