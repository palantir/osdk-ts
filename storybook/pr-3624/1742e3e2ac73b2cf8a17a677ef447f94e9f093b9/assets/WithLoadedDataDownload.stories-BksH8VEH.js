import{f as b,j as a,r as i}from"./iframe-BeCKStTi.js";import{O as u}from"./object-table-BuDALHzo.js";import{E as h}from"./Employee-BBLL99Vm.js";import"./preload-helper-BICrzKRt.js";import"./Table-C5VSqhJw.js";import"./index-BfYzXW_3.js";import"./Dialog-sahsqXct.js";import"./cross-DDXI9CZ5.js";import"./svgIconContainer-D-9_AOAs.js";import"./useBaseUiId-COsIpFVh.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./index-ya4S42ZF.js";import"./useEventCallback-g6xh18Ck.js";import"./SkeletonBar-Cbjlo5SH.js";import"./LoadingCell-B04qx1eN.js";import"./ColumnConfigDialog-DdaKJmFv.js";import"./DraggableList-CTKpXlM5.js";import"./search-CZf2_gwq.js";import"./Input-fr7UgVSn.js";import"./useControlled-5Cxw9uoZ.js";import"./Button-to0u69wN.js";import"./small-cross-BWK0DWdF.js";import"./ActionButton-BABms-rZ.js";import"./Checkbox-B6cs6clj.js";import"./useValueChanged-BYmOXC78.js";import"./CollapsiblePanel-DkIfNruL.js";import"./MultiColumnSortDialog-JV7B42df.js";import"./MenuTrigger-Boxj4qRh.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./getDisabledMountTransitionStyles-CyUadLiF.js";import"./getPseudoElementBounds-DW-1RV5o.js";import"./chevron-down-BtABU6Ff.js";import"./index-DWv9wz-O.js";import"./error-DvUULirA.js";import"./BaseCbacBanner-DAo4gLE_.js";import"./makeExternalStore-WWCfiCZx.js";import"./Tooltip-CzbeK7mV.js";import"./PopoverPopup-eHRJK0-R.js";import"./toNumber-DLFKNsjO.js";import"./useOsdkClient-BYjQakhT.js";import"./tick-DR0G5XTI.js";import"./DropdownField-DPTs74yS.js";import"./withOsdkMetrics-DoKVZacI.js";const f=5,y={backgroundColor:"#3b82f6",border:"none",borderRadius:"4px",color:"white",cursor:"pointer",padding:"8px 16px"},w=[{columnName:"Full name",locator:{id:"fullName",type:"property"},renderCell:e=>a.jsx("strong",{children:e.fullName})},{columnName:"Email",locator:{id:"emailPrimaryWork",type:"property"}},{columnName:"Job title",locator:{id:"jobTitle",type:"property"}},{columnName:"Department",locator:{id:"department",type:"property"}},{columnName:"City",locator:{id:"locationCity",type:"property"}}],he={component:u,parameters:{msw:{handlers:[...b.handlers]}},tags:["beta"],title:"Components/ObjectTable/Recipes"},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{display:"flex",flexDirection:"column",height:"600px"},children:[a.jsx("div",{style:{marginBottom:8,padding:"8px 0"},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
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
