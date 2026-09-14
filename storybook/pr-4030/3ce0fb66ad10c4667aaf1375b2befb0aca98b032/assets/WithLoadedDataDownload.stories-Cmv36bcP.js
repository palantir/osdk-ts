import{f as b,j as a,r as i}from"./iframe-BpUcg2zG.js";import{O as u}from"./object-table-BXzXnMPi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2UTcXFP.js";import"./Table-C8Mqu-X6.js";import"./index-7N6MUyxI.js";import"./Dialog-B6nwdW0S.js";import"./cross-Qiz9Cl6T.js";import"./svgIconContainer-g6F9ILDM.js";import"./useBaseUiId-Bv3X91q5.js";import"./InternalBackdrop-DMk-kvEU.js";import"./composite-CFjjm5Bq.js";import"./index-DI63_yx7.js";import"./index-CvEJHu1s.js";import"./index-C3OHRfdp.js";import"./useEventCallback-CpJFT7Nx.js";import"./SkeletonBar-YHGj4uus.js";import"./LoadingCell-0KwxVok-.js";import"./ColumnConfigDialog-DfxH2UYm.js";import"./DraggableList-DhI9Nd92.js";import"./search-BLWHV2Ka.js";import"./Input-DaPfruQG.js";import"./useControlled-DdOa4Phy.js";import"./Button-DFuiuLIT.js";import"./small-cross-Bb_UEV9u.js";import"./ActionButton-daXbDUYm.js";import"./Checkbox-KmgOVCCy.js";import"./useValueChanged-DQZMmpA-.js";import"./CollapsiblePanel-Dn0E0YbQ.js";import"./MultiColumnSortDialog-C-lsqtR_.js";import"./MenuTrigger-DddfjYoS.js";import"./CompositeItem-C2o4b7lZ.js";import"./ToolbarRootContext-J_sWFt16.js";import"./getDisabledMountTransitionStyles-sJoPqg4c.js";import"./getPseudoElementBounds-BdWd26b0.js";import"./chevron-down-C_xyEVbG.js";import"./index-jSPKquLn.js";import"./error-DVz4lqLc.js";import"./BaseCbacBanner-Dgd3clMy.js";import"./makeExternalStore-Cwp1LGPC.js";import"./Tooltip-kYiBGujl.js";import"./PopoverPopup-CyIGwRoM.js";import"./debounce-CXzI_OHH.js";import"./useOsdkClient-Dnj4xecm.js";import"./tick-B3uICQ16.js";import"./DropdownField-Br3l3qOB.js";import"./isEqual-BE6QLmil.js";import"./withOsdkMetrics-D52jnuF5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
