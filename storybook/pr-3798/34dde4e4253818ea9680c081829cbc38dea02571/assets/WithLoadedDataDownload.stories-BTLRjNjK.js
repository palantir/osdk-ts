import{f as b,j as a,r as i}from"./iframe-BuzOoOHv.js";import{O as u}from"./object-table-CvbZDzOi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C765uWVj.js";import"./Table-B8zOSGXI.js";import"./index-_6ysS2yV.js";import"./Dialog-C2Q4iKQk.js";import"./cross-BV3IGYpC.js";import"./svgIconContainer-SORA5KtX.js";import"./useBaseUiId-DqalFV8v.js";import"./InternalBackdrop-BtuRLE2O.js";import"./composite-BIVAp0zR.js";import"./index-DCrRq_5A.js";import"./index-hW3Ke2NY.js";import"./index-jehAm6Kk.js";import"./useEventCallback-bOVx3wI8.js";import"./SkeletonBar-O0oSg_B7.js";import"./LoadingCell-CRfMmV_r.js";import"./ColumnConfigDialog-BkRlh8kU.js";import"./DraggableList-tTG2ePWi.js";import"./search-DqLYnKdd.js";import"./Input-BO7emUuh.js";import"./useControlled-uHrHxuUf.js";import"./isEqual-3xf8jPCh.js";import"./isObject-Bvw6a01i.js";import"./Button-D1sJFP36.js";import"./ActionButton-ThhIHAJM.js";import"./Checkbox-BUs9gT7T.js";import"./useValueChanged-Emqhaa8x.js";import"./CollapsiblePanel-BnQCoUWm.js";import"./MultiColumnSortDialog-9Fqkz69M.js";import"./MenuTrigger-DsVfygqB.js";import"./CompositeItem-TlDrHws6.js";import"./ToolbarRootContext-jg392USi.js";import"./getDisabledMountTransitionStyles-BvPtMGe8.js";import"./getPseudoElementBounds-BUW3HczB.js";import"./chevron-down-CTN4fjxa.js";import"./index-9Om4LNln.js";import"./error-h4XEWJuh.js";import"./BaseCbacBanner-BuJZW5To.js";import"./makeExternalStore-CsXJf4mV.js";import"./Tooltip-BPMSggV3.js";import"./PopoverPopup-DwCdko6-.js";import"./toNumber-C0gEFUc5.js";import"./useOsdkClient-BVdLtTfj.js";import"./tick-AKA0MUCM.js";import"./DropdownField-CiJb6Zx4.js";import"./withOsdkMetrics-BAnTF50z.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
