import{f as b,j as a,r as i}from"./iframe-CIOKnh8Y.js";import{O as u}from"./object-table-Dyv94P0V.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CxTGLae-.js";import"./Table-Cj2iUmo0.js";import"./index-DviZ6p37.js";import"./Dialog-jaBftH1d.js";import"./cross-hPNuRJt1.js";import"./svgIconContainer-tgoUQrBB.js";import"./useBaseUiId-BwNnw9h8.js";import"./InternalBackdrop-C9wkpZC1.js";import"./composite-mfuAD7zc.js";import"./index-aDrB57cO.js";import"./index-hV7zgoI_.js";import"./index-CgOajskJ.js";import"./useEventCallback-Do4XcILF.js";import"./SkeletonBar-DgIEwAao.js";import"./LoadingCell-DNrTfp66.js";import"./ColumnConfigDialog-06sELTwT.js";import"./DraggableList-DDIBwIPj.js";import"./search-NPO9ZctR.js";import"./Input-vo-yH0cr.js";import"./useControlled-8pQu5kKy.js";import"./Button-D3qKhovW.js";import"./small-cross-5RV99_q9.js";import"./ActionButton-BjB_08Jl.js";import"./Checkbox-DDWiGnf0.js";import"./useValueChanged-CkgDsemk.js";import"./CollapsiblePanel-CA5ufKdf.js";import"./MultiColumnSortDialog-BUwd9nbF.js";import"./MenuTrigger-BZ5Fxf0s.js";import"./CompositeItem-rwn7_Z3T.js";import"./ToolbarRootContext-SIyYjj0F.js";import"./getDisabledMountTransitionStyles-K5I-PVEW.js";import"./getPseudoElementBounds-C3M2Jrdy.js";import"./chevron-down-BoAnXeYV.js";import"./index-CCsc-d1B.js";import"./error-CFVkJ0Jb.js";import"./BaseCbacBanner-B5jkW8SR.js";import"./makeExternalStore-vt54oNBr.js";import"./Tooltip-a-4wsUgP.js";import"./PopoverPopup-BR-w2poR.js";import"./toNumber-f98vtDU3.js";import"./useOsdkClient-CjeVhyHQ.js";import"./tick-Sja2x-3M.js";import"./DropdownField-Bb70UE_s.js";import"./withOsdkMetrics-C8Dkr2u3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
