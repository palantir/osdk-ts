import{f as b,j as a,r as i}from"./iframe-hYuZ0Daw.js";import{O as u}from"./object-table-Bofbk_iR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-57_0CTpI.js";import"./Table-cFRBmRJ2.js";import"./index-C5Pc6OCn.js";import"./Dialog-BYdhvTEy.js";import"./cross-h0YrhL7d.js";import"./svgIconContainer-D3B1FGG8.js";import"./useBaseUiId-C66Z_YyS.js";import"./InternalBackdrop-jDrrqOsA.js";import"./composite-fETYQEVT.js";import"./index-DCXcCpux.js";import"./index-BzM9XWI0.js";import"./index-fk41aGRq.js";import"./useEventCallback-Bd-msYrl.js";import"./SkeletonBar-jiOUAN0d.js";import"./LoadingCell-CFpl7Izp.js";import"./ColumnConfigDialog-CFE8zval.js";import"./DraggableList-Biqz3FxX.js";import"./search-De2ktKMh.js";import"./Input-BtSxbTtJ.js";import"./useControlled-DfUelnOD.js";import"./Button-BT_Xkrjb.js";import"./small-cross-CuLqv6Wz.js";import"./ActionButton-BrTsNB-1.js";import"./Checkbox-CkDIq4mU.js";import"./useValueChanged-tK-0Emor.js";import"./CollapsiblePanel-CttdpkNm.js";import"./MultiColumnSortDialog-CStIP5Wq.js";import"./MenuTrigger-DbTPPL2i.js";import"./CompositeItem-DDypA9GI.js";import"./ToolbarRootContext-BfU0Mx90.js";import"./getDisabledMountTransitionStyles-nL3e7Gnd.js";import"./getPseudoElementBounds-ChxMx6wv.js";import"./chevron-down-BZn2JFfs.js";import"./index-DmRE2MXK.js";import"./error-C958vJ-j.js";import"./BaseCbacBanner-CN8ED5hd.js";import"./makeExternalStore-CDcr6d7h.js";import"./Tooltip-Db1h8c5N.js";import"./PopoverPopup-BN84gK9-.js";import"./debounce-Qi9LJiOf.js";import"./useOsdkClient-D4ryqRY6.js";import"./tick-C4J5qXpt.js";import"./DropdownField-CotoRe-f.js";import"./isEqual-C6sOs1uU.js";import"./withOsdkMetrics-Bun4Nw5t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
