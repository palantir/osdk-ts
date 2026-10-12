import{f as b,j as a,r as i}from"./iframe-Dm4_VxTL.js";import{O as u}from"./object-table-BRm1lHno.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CLzuKVE9.js";import"./Table-DfRe5ueh.js";import"./index-DPnE6q58.js";import"./Dialog-m-8WzSUm.js";import"./cross-DHCOcICo.js";import"./svgIconContainer-CxeeKywm.js";import"./useBaseUiId-D93ZS7uD.js";import"./InternalBackdrop-BS6ANn3h.js";import"./composite-BJxyUUdi.js";import"./index-BP8U4N-x.js";import"./index-T3ZNqMdJ.js";import"./index-Buyt4UOA.js";import"./useEventCallback-DBHwmb2c.js";import"./SkeletonBar-DhJDhcRv.js";import"./LoadingCell-4LcK7B3q.js";import"./ColumnConfigDialog-CDkZggGo.js";import"./DraggableList-BVEqvSFu.js";import"./search-D_26udtD.js";import"./Input-i9kUqoLh.js";import"./useControlled-B_aXLH8g.js";import"./Button-Bzv6XgGX.js";import"./small-cross-DkNS4-YY.js";import"./ActionButton-CYmCepXw.js";import"./Checkbox-CtXRJU5l.js";import"./useValueChanged-iV7bvjzs.js";import"./CollapsiblePanel-C06Pqxf1.js";import"./MultiColumnSortDialog-BKV7E77X.js";import"./MenuTrigger-0EKBwlog.js";import"./CompositeItem-CY6sGbtS.js";import"./ToolbarRootContext-BL7rYCZY.js";import"./getDisabledMountTransitionStyles-Bt69eCjx.js";import"./getPseudoElementBounds-BBXWE-v2.js";import"./chevron-down-CO8_Do7Y.js";import"./index-c6XPu-54.js";import"./error-D_jQgHrY.js";import"./BaseCbacBanner-BzTMdPsR.js";import"./makeExternalStore-C9EcSKlD.js";import"./Tooltip-uKlMJCx4.js";import"./PopoverPopup-CvZJgDeN.js";import"./debounce-C1x-2e5s.js";import"./useOsdkClient-CcArCLJk.js";import"./tick-CIiArSAU.js";import"./DropdownField-DsklnAii.js";import"./isEqual-CXek_UgW.js";import"./withOsdkMetrics-DBhVFgeV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
