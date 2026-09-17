import{f as b,j as a,r as i}from"./iframe-bxHnXZZE.js";import{O as u}from"./object-table-BcKyIo6e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-7NwT3r5e.js";import"./Table-DcAq6LRL.js";import"./index-C6fHHFsn.js";import"./Dialog-BZhGaz9Z.js";import"./cross-BUbLZE-A.js";import"./svgIconContainer-DFa2cGRe.js";import"./useBaseUiId-QHeSB_uY.js";import"./InternalBackdrop-DBcnV2IB.js";import"./composite-16NtQKdD.js";import"./index-fMg1ul0K.js";import"./index-pscJp3QG.js";import"./index-Dx6jXTMT.js";import"./useEventCallback-wa1M1mLo.js";import"./SkeletonBar-DXwufme4.js";import"./LoadingCell-CtHiQ1DJ.js";import"./ColumnConfigDialog-DnaJrZAI.js";import"./DraggableList-BEfI0o-j.js";import"./search-B9cWql5S.js";import"./Input-DlQ75Tiv.js";import"./useControlled-DQ7SFQLa.js";import"./Button-CnrUq9Aa.js";import"./small-cross-rdg52v-X.js";import"./ActionButton-CgLa61YP.js";import"./Checkbox-DpXzlc6c.js";import"./useValueChanged-LREb8VW3.js";import"./CollapsiblePanel-BIKCw0VK.js";import"./MultiColumnSortDialog-CeNOFipN.js";import"./MenuTrigger-r7a7qy8M.js";import"./CompositeItem-Dt9_APYR.js";import"./ToolbarRootContext-BNi8FLUA.js";import"./getDisabledMountTransitionStyles-2zUc2nSg.js";import"./getPseudoElementBounds-B5V39s0c.js";import"./chevron-down-MvzNfmay.js";import"./index-B3lVa8tN.js";import"./error-5Rk85rBd.js";import"./BaseCbacBanner-Bs9cyiER.js";import"./makeExternalStore-BU1dPe3S.js";import"./Tooltip-B1qA2z5a.js";import"./PopoverPopup-B4w-OJGK.js";import"./debounce-BCNGKG7N.js";import"./useOsdkClient-CZNO-BM3.js";import"./tick-C0QgRHXL.js";import"./DropdownField-D9Q5H1vn.js";import"./isEqual-vsTmSx-f.js";import"./withOsdkMetrics-iUvejygz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
