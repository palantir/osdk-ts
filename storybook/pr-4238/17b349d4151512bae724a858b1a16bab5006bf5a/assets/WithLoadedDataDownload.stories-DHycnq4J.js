import{f as b,j as a,r as i}from"./iframe-3DYs7LO7.js";import{O as u}from"./object-table-BfsItrmr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRkpYDH.js";import"./Table-s5fahLWh.js";import"./index-Dksq0QWW.js";import"./Dialog-BmuFHVtK.js";import"./cross-BiEQYoFR.js";import"./svgIconContainer-E5ErPZjm.js";import"./useBaseUiId-CeE4102D.js";import"./InternalBackdrop-CPdSJMpf.js";import"./composite-BCO-9Moa.js";import"./index-Bg_CqW7M.js";import"./index-DNpL3p8G.js";import"./index-CJTVlVv5.js";import"./useEventCallback-DwsRMbJG.js";import"./SkeletonBar-BfJniFPr.js";import"./LoadingCell-C8da80wj.js";import"./ColumnConfigDialog-CYE3ysbI.js";import"./DraggableList-C9SO0dZm.js";import"./search-D5yGPAlT.js";import"./Input-Bbtubjan.js";import"./useControlled-LDymMyjQ.js";import"./Button-Co786LuF.js";import"./small-cross-DdM0FPfO.js";import"./ActionButton-Cbyc9XzM.js";import"./Checkbox-BStnP9ea.js";import"./useValueChanged-BQpMrMLa.js";import"./CollapsiblePanel-DVs4UHLN.js";import"./MultiColumnSortDialog-Bvn13wQo.js";import"./MenuTrigger-BFaeTz7M.js";import"./CompositeItem-D-tb1HU0.js";import"./ToolbarRootContext-CEG1pZ6f.js";import"./getDisabledMountTransitionStyles-CfKy3gzP.js";import"./getPseudoElementBounds-RIT9EOF5.js";import"./chevron-down-DLvTPfQ9.js";import"./index-HJUPOpns.js";import"./error-B7nnIe8L.js";import"./BaseCbacBanner-Bopiba_z.js";import"./makeExternalStore-DOhtyVO-.js";import"./Tooltip-RwDgrf4M.js";import"./PopoverPopup-BfUZB0MB.js";import"./debounce-Dx93VxJF.js";import"./useOsdkClient-CWVCE7e7.js";import"./tick-lA4emHrS.js";import"./DropdownField-BfdPwUa1.js";import"./isEqual-DsvzyOCy.js";import"./withOsdkMetrics-Dte6-FPa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
