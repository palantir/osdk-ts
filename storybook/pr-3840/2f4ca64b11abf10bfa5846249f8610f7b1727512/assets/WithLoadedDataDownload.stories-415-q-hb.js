import{f as b,j as a,r as i}from"./iframe-BYn0Dbkf.js";import{O as u}from"./object-table-B0lAPirf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bs3XUXmU.js";import"./Table-9ofcA_L-.js";import"./index-DAPmu22T.js";import"./Dialog-a20WTzra.js";import"./cross-BXV7hkb7.js";import"./svgIconContainer-BVGjJ7Ho.js";import"./useBaseUiId-BF9dGCHt.js";import"./InternalBackdrop-C6QQSOU_.js";import"./composite-DJ1g0dtg.js";import"./index-XbPpfGjN.js";import"./index-3eUfjQeA.js";import"./index-k0LAveS5.js";import"./useEventCallback-C2Vv72P0.js";import"./SkeletonBar-B8UnVDE_.js";import"./LoadingCell-CXCaMwdV.js";import"./ColumnConfigDialog-Crc9dj67.js";import"./DraggableList-DX3N03Ic.js";import"./search-BHLX4gDD.js";import"./Input-JHNZlMmd.js";import"./useControlled-BjeGab0J.js";import"./isEqual-C6o1lCTI.js";import"./isObject-D59ADqrH.js";import"./Button-SDlJ1SYG.js";import"./ActionButton-3OKX3KKo.js";import"./Checkbox-Cw8U-R78.js";import"./useValueChanged-lInqvc-E.js";import"./CollapsiblePanel-CS8vV5wB.js";import"./MultiColumnSortDialog-DxC7E4Cw.js";import"./MenuTrigger-B6ffxhp1.js";import"./CompositeItem-D_irOX6v.js";import"./ToolbarRootContext-CIeppiht.js";import"./getDisabledMountTransitionStyles-BFmswiN_.js";import"./getPseudoElementBounds-DddCY1gg.js";import"./chevron-down-CkcBV-EM.js";import"./index-BcYpOZ5o.js";import"./error-Ca0TYJkV.js";import"./BaseCbacBanner-CbvQ2cnZ.js";import"./makeExternalStore-yw69iLs7.js";import"./Tooltip--_7id-zF.js";import"./PopoverPopup-BtDf8BBC.js";import"./toNumber-BIk96f3L.js";import"./useOsdkClient-DwNUV0Zv.js";import"./tick-CGOrJa2L.js";import"./DropdownField-DYO0cR2M.js";import"./withOsdkMetrics-C6gKOAoe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
