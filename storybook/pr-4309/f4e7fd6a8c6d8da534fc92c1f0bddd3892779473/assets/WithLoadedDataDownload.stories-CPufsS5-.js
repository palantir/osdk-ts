import{f as b,j as a,r as i}from"./iframe-DpkDs-j9.js";import{O as u}from"./object-table-qHXZVdv7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJT4uFVz.js";import"./Table-M8rJDnV8.js";import"./index-BfXl5P7F.js";import"./Dialog-CFkLUvdo.js";import"./cross-CySzb61z.js";import"./svgIconContainer-0YWxOZfe.js";import"./useBaseUiId-BRApLhFH.js";import"./InternalBackdrop-DC1ctXr5.js";import"./composite-CYXI2UHT.js";import"./index-CXFl5eQh.js";import"./index-g8PO-kx8.js";import"./index-NMIlAdCq.js";import"./useEventCallback-BPE_ThAx.js";import"./SkeletonBar-CxtJcPP9.js";import"./LoadingCell-DaxbBC-P.js";import"./ColumnConfigDialog-Ca3Me8kg.js";import"./DraggableList-Bt-2hyGV.js";import"./search-9Dh1YH6c.js";import"./Input-xEESwrVF.js";import"./useControlled-Z-gfVngv.js";import"./Button-DUyzdMzu.js";import"./small-cross-TQik36_V.js";import"./ActionButton-CMt3pcys.js";import"./Checkbox-ClD25Fhc.js";import"./useValueChanged-HHJBGoHs.js";import"./CollapsiblePanel-DEhHFVMb.js";import"./MultiColumnSortDialog-m5T-8CWC.js";import"./MenuTrigger-BwLriEBa.js";import"./CompositeItem-BWOALM-p.js";import"./ToolbarRootContext-BtylWzdM.js";import"./getDisabledMountTransitionStyles-CXfJ9VyR.js";import"./getPseudoElementBounds-BrH_UC6z.js";import"./chevron-down-_hw012xs.js";import"./index-tOaH1qey.js";import"./error-CJpmyc4X.js";import"./BaseCbacBanner-DrLRu2Wj.js";import"./makeExternalStore-DVFvu1DO.js";import"./Tooltip-D5NnoavJ.js";import"./PopoverPopup-4S9R5K2E.js";import"./debounce-D7fYvY9R.js";import"./useOsdkClient-CQh8Mqca.js";import"./tick-BPyaXYcz.js";import"./DropdownField-DHNplSVP.js";import"./isEqual-BF2u6U9o.js";import"./withOsdkMetrics-D7yY5fd-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
