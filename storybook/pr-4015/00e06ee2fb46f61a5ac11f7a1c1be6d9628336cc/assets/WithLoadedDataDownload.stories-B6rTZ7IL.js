import{f as b,j as a,r as i}from"./iframe-BqB00GiJ.js";import{O as u}from"./object-table-C2NKZ5Ei.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CBNowE1F.js";import"./Table-YLFb9JTa.js";import"./index-B6ljFb81.js";import"./Dialog-DxiqR021.js";import"./cross-NroKy72c.js";import"./svgIconContainer-BKScRVgJ.js";import"./useBaseUiId-BOd5ixEm.js";import"./InternalBackdrop-BrgH0B3m.js";import"./composite-pnQuH5Q_.js";import"./index-HDQn5rHu.js";import"./index-Bn4ERW5E.js";import"./index-9yoITr-1.js";import"./useEventCallback-D3Kfk8Ap.js";import"./SkeletonBar-CqIDeBXY.js";import"./LoadingCell-BZUln8hk.js";import"./ColumnConfigDialog-Bm9Omtos.js";import"./DraggableList-DQlXK6nA.js";import"./search-Bz2m71mS.js";import"./Input-BuKObC1x.js";import"./useControlled-BB4FINPW.js";import"./Button-UzxjVW7Z.js";import"./small-cross-DuiafL3Y.js";import"./ActionButton-DkxsgQ7J.js";import"./Checkbox-Cxps6qHC.js";import"./useValueChanged-vVuVXkf4.js";import"./CollapsiblePanel-Dm2x088n.js";import"./MultiColumnSortDialog-D4aqIUgF.js";import"./MenuTrigger-Dmunabbl.js";import"./CompositeItem-E84gf2Yn.js";import"./ToolbarRootContext-B0-kN55K.js";import"./getDisabledMountTransitionStyles-BLzEUkBl.js";import"./getPseudoElementBounds-DPHULfcE.js";import"./chevron-down-DmxY4RQH.js";import"./index-DIoCyghZ.js";import"./error-D0GZGtsZ.js";import"./BaseCbacBanner-ChsHyYrj.js";import"./makeExternalStore-CanGYDv6.js";import"./Tooltip-NtIdK9rB.js";import"./PopoverPopup-9AX7mF7M.js";import"./debounce-DJYw4rW8.js";import"./useOsdkClient-TXFw7McP.js";import"./tick-km-CKWcD.js";import"./DropdownField-DMGNppZZ.js";import"./isEqual-B_bGdX-y.js";import"./withOsdkMetrics-D9LjqIyU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
