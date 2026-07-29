import{f as b,j as a,r as i}from"./iframe-Bd4e_c4C.js";import{O as u}from"./object-table-sly2e-tG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5bsUCg0y.js";import"./Table-CNH_eGsv.js";import"./index-8zwV4JUV.js";import"./Dialog-DEQVfX7H.js";import"./cross-B6r_yiO_.js";import"./svgIconContainer-BwBQeW3J.js";import"./useBaseUiId-D-nOoqcA.js";import"./InternalBackdrop-D11e-4ud.js";import"./composite-TNcbR0Nf.js";import"./index-BATG7eU0.js";import"./index-B9pqn0Jn.js";import"./index-B4Au2E_k.js";import"./useEventCallback-Dv1ISW2D.js";import"./SkeletonBar-CGRRWBoy.js";import"./LoadingCell-_fu5dlf1.js";import"./ColumnConfigDialog-DV-15hD4.js";import"./DraggableList-Dy5FEl4U.js";import"./Input-Bilv7Eok.js";import"./useControlled-DIwphUIH.js";import"./Button-DE7Oat1u.js";import"./small-cross-SaE41ys6.js";import"./ActionButton-B6pqGZXy.js";import"./Checkbox-BlyeG0Ha.js";import"./minus-BkvQoQv2.js";import"./useValueChanged-BiGPMkku.js";import"./caret-down-BNY2yMZ0.js";import"./CollapsiblePanel-CKyoqKgB.js";import"./MultiColumnSortDialog-C1OXbBcl.js";import"./MenuTrigger-DTuvcBTt.js";import"./CompositeItem-DUtJM4r4.js";import"./ToolbarRootContext-BYX2mIW9.js";import"./getDisabledMountTransitionStyles-TpgpatO9.js";import"./getPseudoElementBounds-DmO1g42_.js";import"./chevron-down-BKImZJXc.js";import"./index--xQC6urW.js";import"./error-BToHOsa4.js";import"./Tooltip-CmetGJSG.js";import"./PopoverPopup-D6KrByqC.js";import"./toNumber-CSGohdG4.js";import"./useOsdkClient-DDPUNe_A.js";import"./DropdownField-BrMhbPiO.js";import"./makeExternalStore-_jwnLTC5.js";import"./withOsdkMetrics-DdhctzSj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],be={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const he=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,he as __namedExportsOrder,be as default};
