import{f as b,j as a,r as i}from"./iframe-iH6aGZ-L.js";import{O as u}from"./object-table-a7ZsLNno.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJtpjaOC.js";import"./Table-OPJM8E9j.js";import"./index-B4R4MaYX.js";import"./Dialog-DKmYBsKh.js";import"./cross-CkFkh41g.js";import"./svgIconContainer-BL1fQZ1j.js";import"./useBaseUiId-BSDhHAYa.js";import"./InternalBackdrop-CtbdD6NE.js";import"./composite-DeLDawp0.js";import"./index-DyyqAmyq.js";import"./index-2xFQTGFl.js";import"./index-CLkrj7OE.js";import"./useEventCallback-BK2MNF3p.js";import"./SkeletonBar-DBSXSsw6.js";import"./LoadingCell-DWNG52ui.js";import"./ColumnConfigDialog-DVcO7s43.js";import"./DraggableList-qKzNY3pF.js";import"./search-2at2vqv1.js";import"./Input-D14Qdbql.js";import"./useControlled-Ciw2H6Dm.js";import"./Button-7Khz_S_G.js";import"./small-cross-BwgZyYIG.js";import"./ActionButton-CFvcoen5.js";import"./Checkbox-DPj4VBsw.js";import"./useValueChanged-CAss3vNn.js";import"./CollapsiblePanel-DU6yeCre.js";import"./MultiColumnSortDialog-DisDwWOC.js";import"./MenuTrigger-CZGwNbbc.js";import"./CompositeItem-DWpKdWiQ.js";import"./ToolbarRootContext-BUYtkzjr.js";import"./getDisabledMountTransitionStyles-BgzHU7dJ.js";import"./getPseudoElementBounds-CoVHCcVm.js";import"./chevron-down-Uo9hPIsv.js";import"./index-CoSy4Fag.js";import"./error-UygG0IL8.js";import"./BaseCbacBanner-y2xs3-H5.js";import"./makeExternalStore-DoAAt5DI.js";import"./Tooltip-y6ddxL_Q.js";import"./PopoverPopup-BjYwELlB.js";import"./debounce-DZlmqeaB.js";import"./useOsdkClient-B8seCst5.js";import"./tick-B6XK7voc.js";import"./DropdownField-Dx9t1Lmw.js";import"./isEqual-Q3Pmqr9o.js";import"./withOsdkMetrics-B5j3Cgvy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
