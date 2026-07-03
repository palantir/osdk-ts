import{f as b,j as a,r as i}from"./iframe-jMWcMx3M.js";import{O as u}from"./object-table-rQJQAseZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSXSsBVj.js";import"./Table-CYjsXePD.js";import"./index-CNFmk-Ka.js";import"./Dialog-DqlrEXet.js";import"./cross-CGegxKx_.js";import"./svgIconContainer-Cl_c0nbT.js";import"./useBaseUiId-BzPi_F_r.js";import"./InternalBackdrop-DIZ6AHFE.js";import"./composite-CsXyl166.js";import"./index-DXrPGVIO.js";import"./index-ILeGXsSD.js";import"./index-CAuTQroX.js";import"./useEventCallback-Ciy0K5ww.js";import"./SkeletonBar-CxesU5Fs.js";import"./LoadingCell-B1z3DppB.js";import"./ColumnConfigDialog-nRhHRL9V.js";import"./DraggableList-CzZNSBHY.js";import"./search-CErA-aqQ.js";import"./Input-DFBBZ04U.js";import"./useControlled-DfdvD25L.js";import"./Button-DwXiKTO2.js";import"./small-cross-C3vvtMOc.js";import"./ActionButton-CVzqmHRI.js";import"./Checkbox-CiE8Ccsr.js";import"./useValueChanged-Cg-cyLt1.js";import"./CollapsiblePanel-CPqRqFF-.js";import"./MultiColumnSortDialog-BdYeBbcu.js";import"./MenuTrigger-0RZ23arB.js";import"./CompositeItem-24qPgnKd.js";import"./ToolbarRootContext-B_AoYUT0.js";import"./getDisabledMountTransitionStyles-BY_6pXbg.js";import"./getPseudoElementBounds-DFHgxWAt.js";import"./chevron-down-CQNSuwwo.js";import"./index-DLeNEXQ6.js";import"./error-DMe8Y5ev.js";import"./BaseCbacBanner-DWjil8ev.js";import"./makeExternalStore-DnspD3NQ.js";import"./Tooltip-BxL1QfHA.js";import"./PopoverPopup-Cbagboeh.js";import"./toNumber-BDv1GoSe.js";import"./useOsdkClient-BsdLM7L0.js";import"./tick-BKghoLo0.js";import"./DropdownField-DJ8VCAsr.js";import"./withOsdkMetrics-Bd6JOpY_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
