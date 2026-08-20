import{f as b,j as a,r as i}from"./iframe-h16HHsM3.js";import{O as u}from"./object-table-xqURJh5c.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DaEiocuo.js";import"./Table-DfRyO5iW.js";import"./index-CrB-SZ6W.js";import"./Dialog-Cn9Xude-.js";import"./cross-C6l_8oJj.js";import"./svgIconContainer-2LoSh7EW.js";import"./useBaseUiId-DtIpLIKv.js";import"./InternalBackdrop-CZNkgGhI.js";import"./composite-BwI4rJIn.js";import"./index-CipRFOUY.js";import"./index-nhGpddHL.js";import"./index-tn1N1V8Y.js";import"./useEventCallback-BaRk7d5C.js";import"./SkeletonBar-CfkyuI7W.js";import"./LoadingCell-BjpZOFne.js";import"./ColumnConfigDialog-DKcGC0Ez.js";import"./DraggableList-C4-NVipL.js";import"./search-CZeSsUn4.js";import"./Input-ChQNdq7z.js";import"./useControlled-D3_Mgr2o.js";import"./Button-CjFV-Dce.js";import"./small-cross-BxYzY9qu.js";import"./ActionButton-DXWSGFwc.js";import"./Checkbox-D_ZBnArb.js";import"./useValueChanged-Cb7pRHYy.js";import"./CollapsiblePanel-NLrvE2ll.js";import"./MultiColumnSortDialog-CuZO7D6b.js";import"./MenuTrigger-Bo1EWOk3.js";import"./CompositeItem-CVw8v154.js";import"./ToolbarRootContext-C6_QoO8-.js";import"./getDisabledMountTransitionStyles-BKP-kwJh.js";import"./getPseudoElementBounds-BzrJDmxL.js";import"./chevron-down-DBNf4w5W.js";import"./index-B6f5OL8k.js";import"./error-BNk7qWdS.js";import"./BaseCbacBanner-C3VxDk8H.js";import"./makeExternalStore-CTbMnN4W.js";import"./Tooltip-81xTGUJp.js";import"./PopoverPopup-lU-t8jRv.js";import"./debounce-DC5xO3vV.js";import"./useOsdkClient-XH_I9KtB.js";import"./tick-DTeb65_f.js";import"./DropdownField-yuiTwcT9.js";import"./isEqual-D_gZtz0S.js";import"./withOsdkMetrics-CxgNfRWd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
