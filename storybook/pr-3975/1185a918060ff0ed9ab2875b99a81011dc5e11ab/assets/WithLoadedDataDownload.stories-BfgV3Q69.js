import{f as b,j as a,r as i}from"./iframe-CraWtfc_.js";import{O as u}from"./object-table-CqUIyxj-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2ygN63P.js";import"./Table-KtYOXFQq.js";import"./index-uggTCp7M.js";import"./Dialog-Y6nV2B8-.js";import"./cross-DBeI7hzA.js";import"./svgIconContainer-C4_0pLg-.js";import"./useBaseUiId-B3gf6Rgr.js";import"./InternalBackdrop-Dg25XYUo.js";import"./composite-DStzulLq.js";import"./index-C7ILWK60.js";import"./index-CE8B_DUN.js";import"./index-DNCvPjCM.js";import"./useEventCallback-DgbAS9H5.js";import"./SkeletonBar-C0h9i0be.js";import"./LoadingCell-D8YQtYke.js";import"./ColumnConfigDialog-BfEFElLi.js";import"./DraggableList-DgvxE2sP.js";import"./search-BX2x7npa.js";import"./Input-BXsVCVWI.js";import"./useControlled-C2EFnSRK.js";import"./Button-CzW3iwgW.js";import"./small-cross-DYP0x5Vu.js";import"./ActionButton-DURMVT6a.js";import"./Checkbox-DeMSOIgB.js";import"./useValueChanged-cqUllIYD.js";import"./CollapsiblePanel-DVQXLfG-.js";import"./MultiColumnSortDialog-CfwBUaEm.js";import"./MenuTrigger-BUKgLqic.js";import"./CompositeItem-D5jj9W4Y.js";import"./ToolbarRootContext-BqVmfek1.js";import"./getDisabledMountTransitionStyles-CLSya5zn.js";import"./getPseudoElementBounds-aRlZ5-U9.js";import"./chevron-down-B7zCZjZp.js";import"./index-KL6FZw16.js";import"./error-CwgXbJjF.js";import"./BaseCbacBanner-BNQ8ukia.js";import"./makeExternalStore-CprYBPlM.js";import"./Tooltip-DzUvCExT.js";import"./PopoverPopup-DG4Ey1uv.js";import"./debounce-DhP8Rurz.js";import"./useOsdkClient-BiolEA8f.js";import"./tick-Daa0kwHZ.js";import"./DropdownField-DO8Lcsso.js";import"./isEqual-Dh2DvVI3.js";import"./withOsdkMetrics-D5fF38B3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
