import{f as b,j as a,r as i}from"./iframe-BdwSD-4g.js";import{O as u}from"./object-table-Dkf_Wsl_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Q7k08PSu.js";import"./Table-PC-pI0ZM.js";import"./index-DOSkW-9K.js";import"./Dialog-C2jm4GPq.js";import"./cross-ALmhnM-F.js";import"./svgIconContainer-DA4wNVnR.js";import"./useBaseUiId-Dw0luXrm.js";import"./InternalBackdrop-D1YI8GOv.js";import"./composite-5NyIARcH.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./index-CxgrbPDy.js";import"./useEventCallback-DfqzSU5_.js";import"./SkeletonBar-D6TZf1Z5.js";import"./LoadingCell-CptRX9Y8.js";import"./ColumnConfigDialog-CzZ4BQy7.js";import"./DraggableList-C1r11s45.js";import"./search-zOT-eX5y.js";import"./Input-DFvD33w1.js";import"./useControlled-D1Q7B9_S.js";import"./Button-DT6t-JAZ.js";import"./small-cross-vRrhE9Ne.js";import"./ActionButton-CSVrvW6D.js";import"./Checkbox-p54CWvtE.js";import"./useValueChanged-CIIin2AA.js";import"./CollapsiblePanel-XzAfxH9Z.js";import"./MultiColumnSortDialog-C4bbbTVf.js";import"./MenuTrigger-CuNIwuZO.js";import"./CompositeItem-_wAlG9yG.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./getDisabledMountTransitionStyles-B9XqalxW.js";import"./getPseudoElementBounds-BdDow4jC.js";import"./chevron-down-Dn6L64Ru.js";import"./index-gxw3sShd.js";import"./error-BrVGJ7z5.js";import"./BaseCbacBanner-C59qxhDp.js";import"./makeExternalStore-BaL0IM38.js";import"./Tooltip-BeEpEYbq.js";import"./PopoverPopup-CkTzI9ep.js";import"./debounce-Bij6cuiB.js";import"./useOsdkClient-BNfS8Hn2.js";import"./tick-BCAUztTc.js";import"./DropdownField-BLDXBK7q.js";import"./isEqual-B34gs6iF.js";import"./withOsdkMetrics-De7Bt3A9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
