import{f as b,j as a,r as i}from"./iframe-2J5FrKrg.js";import{O as u}from"./object-table-BjSwGXl6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-1KHcGwA2.js";import"./Table-zF77GmYS.js";import"./index-DdQFZN0A.js";import"./Dialog-p_DiZkyI.js";import"./cross-C3qjpKNn.js";import"./svgIconContainer-C5u_HnP9.js";import"./useBaseUiId-BvE4vbB0.js";import"./InternalBackdrop-C54DBojs.js";import"./composite-BbUTZOvt.js";import"./index-CoGmcCzI.js";import"./index-bAdLuKNp.js";import"./index-BWJlDcPZ.js";import"./useEventCallback-LZLaGDRe.js";import"./SkeletonBar-BN0PV5wz.js";import"./LoadingCell-B6TmGQE1.js";import"./ColumnConfigDialog-BgDTGJHS.js";import"./DraggableList-sdzFfl77.js";import"./search-fHZBvfeM.js";import"./Input-BEKgo6O6.js";import"./useControlled-BRuPwTnE.js";import"./Button-CtoNW8MW.js";import"./small-cross-BBZdbk9L.js";import"./ActionButton-DWjB7yZw.js";import"./Checkbox-ChMOarzF.js";import"./useValueChanged-DXaGf5Gs.js";import"./CollapsiblePanel-C-9b8GqA.js";import"./MultiColumnSortDialog-BlPs5WlI.js";import"./MenuTrigger-CWG7noKe.js";import"./CompositeItem-yS3I_oZm.js";import"./ToolbarRootContext-CzvAPQX5.js";import"./getDisabledMountTransitionStyles-BNeqbgtt.js";import"./getPseudoElementBounds-C-mj8-g1.js";import"./chevron-down-DfTNwrQT.js";import"./index-CXuKETzB.js";import"./error-55u3yHQS.js";import"./BaseCbacBanner-aYjX9m9G.js";import"./makeExternalStore-B7uL5LnD.js";import"./Tooltip-C8NnOdy1.js";import"./PopoverPopup-CgQ4X2Ge.js";import"./debounce-CrX5_LDj.js";import"./useOsdkClient-dszr35NK.js";import"./tick-w61hFyp6.js";import"./DropdownField-CV1IThhY.js";import"./isEqual-BtLImdWH.js";import"./withOsdkMetrics-4gfK0oWP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
