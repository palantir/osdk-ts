import{f as b,j as a,r as i}from"./iframe-Cm8T158U.js";import{O as u}from"./object-table-Cb3Keis5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dg6khx2b.js";import"./Table-DuOLMAs1.js";import"./index-CgyhAk5D.js";import"./Dialog-xyprgOLS.js";import"./cross-DRMZ0Z7-.js";import"./svgIconContainer-CwvpItZa.js";import"./useBaseUiId-DOlC9YEi.js";import"./InternalBackdrop-BGasJMVv.js";import"./composite-BF9l_TFl.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./index-B9yl0hZC.js";import"./useEventCallback-Dlv37ysr.js";import"./SkeletonBar-BQgWCrnN.js";import"./LoadingCell-Ch4zihh6.js";import"./ColumnConfigDialog-DMzj1S3_.js";import"./DraggableList-BxTxZMPB.js";import"./search-C5kq4KUb.js";import"./Input-CwlN5ff_.js";import"./useControlled-2KbdkYL7.js";import"./Button-CDJirsdr.js";import"./small-cross-CuC0UbdT.js";import"./ActionButton-CRZRMee5.js";import"./Checkbox-CKEyXbhH.js";import"./useValueChanged-DPtvyx-N.js";import"./CollapsiblePanel-CQcWGRlg.js";import"./MultiColumnSortDialog-_qM0Xd-W.js";import"./MenuTrigger-DMBZfMn5.js";import"./CompositeItem-DdfovVZg.js";import"./ToolbarRootContext-81tt_rrb.js";import"./getDisabledMountTransitionStyles-FM8gFJSe.js";import"./getPseudoElementBounds-Dy-hiku1.js";import"./chevron-down-CcWrtqn6.js";import"./index-D9OySAXe.js";import"./error-W0yg1EoP.js";import"./BaseCbacBanner-tcWoxYJS.js";import"./makeExternalStore-Bwp5qgF6.js";import"./Tooltip-f6_C30K5.js";import"./PopoverPopup-CIDF2QJi.js";import"./debounce-DlkYXKLI.js";import"./useOsdkClient-D7ijOYA2.js";import"./tick-qL-0oQVk.js";import"./DropdownField-Dl8m0YJt.js";import"./isEqual-D4LaE-Zu.js";import"./withOsdkMetrics-By5xofqX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
