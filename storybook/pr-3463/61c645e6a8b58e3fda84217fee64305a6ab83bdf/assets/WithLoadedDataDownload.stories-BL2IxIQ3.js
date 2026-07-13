import{f as b,j as a,r as i}from"./iframe-BYDd13Gq.js";import{O as u}from"./object-table-xc7T01Ic.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRTbv9f1.js";import"./Table-C-avvTTV.js";import"./index-DAt4uNWn.js";import"./Dialog-yH7vrVsb.js";import"./cross-BwMj07Lv.js";import"./svgIconContainer-BvVBQY0M.js";import"./useBaseUiId-B7zoNiex.js";import"./InternalBackdrop-CYDSMLn5.js";import"./composite-DAzdDn9M.js";import"./index-C44qydix.js";import"./index-BehHqcOB.js";import"./index-YJP14mKS.js";import"./useEventCallback-3HnlVv7V.js";import"./SkeletonBar-Cr4t3zot.js";import"./LoadingCell-CC7RjzOB.js";import"./ColumnConfigDialog-CdZ2G-Py.js";import"./DraggableList-i2QUxD7v.js";import"./search-BLYcXVNY.js";import"./Input-BTOVlKzv.js";import"./useControlled-DKVNuIG7.js";import"./Button-DogeI-Te.js";import"./small-cross-BJ1ppg1-.js";import"./ActionButton-DhTO3bd9.js";import"./Checkbox-Dg7oBAvB.js";import"./useValueChanged-DF_5t-7A.js";import"./CollapsiblePanel-Cs6zvV7b.js";import"./MultiColumnSortDialog-b9rhvIN-.js";import"./MenuTrigger-Cnsiu6Oz.js";import"./CompositeItem-CxIk05xP.js";import"./ToolbarRootContext-BFhORt-N.js";import"./getDisabledMountTransitionStyles-B0oFx-D2.js";import"./getPseudoElementBounds-BayHO6oP.js";import"./chevron-down-CMlArBeW.js";import"./index-Cmm7LrQU.js";import"./error-BO5I4Xtc.js";import"./BaseCbacBanner-B1mTBqXk.js";import"./makeExternalStore-DK8pW9uJ.js";import"./Tooltip-KwnH0SLv.js";import"./PopoverPopup-OLLvAMMB.js";import"./toNumber-DuVnTaon.js";import"./useOsdkClient-C1S8vH9b.js";import"./tick-YbsD-Kix.js";import"./DropdownField-D-9FWwiH.js";import"./withOsdkMetrics-B8xuGbT0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
