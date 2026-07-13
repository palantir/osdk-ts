import{f as b,j as a,r as i}from"./iframe-Cm_EHC51.js";import{O as u}from"./object-table-BNy22QzH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-OCJMeOK-.js";import"./Table-VCR_hh98.js";import"./index-BXlCiAkj.js";import"./Dialog-HsgB1PId.js";import"./cross-BRQRT10E.js";import"./svgIconContainer-y4xcTkAj.js";import"./useBaseUiId-D1vJVKRR.js";import"./InternalBackdrop-DcvVideg.js";import"./composite-CVdzW3sc.js";import"./index-R28diiJ3.js";import"./index-ZKEi5Emz.js";import"./index-ByT02Su5.js";import"./useEventCallback-BY5dWLi4.js";import"./SkeletonBar-DG-TqzL-.js";import"./LoadingCell-DeTmq0lx.js";import"./ColumnConfigDialog-B1HCbaMR.js";import"./DraggableList-CI9PXc0s.js";import"./search-30yIUM2-.js";import"./Input-zz3lOutb.js";import"./useControlled-C-jSpOYm.js";import"./Button-DIH5t_0T.js";import"./small-cross-CoR6pbPL.js";import"./ActionButton-CBsSZfFl.js";import"./Checkbox-BQC_tjU7.js";import"./useValueChanged-6788JLEw.js";import"./CollapsiblePanel-C3IFR7gk.js";import"./MultiColumnSortDialog-B40kjDTS.js";import"./MenuTrigger-Bka2fEUT.js";import"./CompositeItem-Cx7vCAIi.js";import"./ToolbarRootContext-49KFllv_.js";import"./getDisabledMountTransitionStyles-Dyoi0zLm.js";import"./getPseudoElementBounds-DxDUEDyk.js";import"./chevron-down-BSxwOLLx.js";import"./index-ClDcmJ32.js";import"./error-BjF7Kl8A.js";import"./BaseCbacBanner-C_3U-ziW.js";import"./makeExternalStore-BGELqknt.js";import"./Tooltip-CsJDwwY8.js";import"./PopoverPopup-C1-oKCXt.js";import"./toNumber-CQc9hUcP.js";import"./useOsdkClient-CAl79kSD.js";import"./tick-D41Q0Ug7.js";import"./DropdownField-Bdy406Oh.js";import"./withOsdkMetrics-fCWeer_z.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
