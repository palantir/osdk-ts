import{f as b,j as a,r as i}from"./iframe-CEcdsVJq.js";import{O as u}from"./object-table-kly_C4hy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CwdDwPFb.js";import"./Table-BuBnqDbM.js";import"./index-CYAMjkkg.js";import"./Dialog-BcKkBsF0.js";import"./cross-MZ6bg35c.js";import"./svgIconContainer-CM3Ra624.js";import"./useBaseUiId-DGCtOfjA.js";import"./InternalBackdrop-CrdF0gp5.js";import"./composite-Bw-yzexU.js";import"./index-ByC2L83v.js";import"./index-Dt5JenlP.js";import"./index-BqhjR31D.js";import"./useEventCallback-CoOaDXAk.js";import"./SkeletonBar-B0hbq4FE.js";import"./LoadingCell-DelqVOB6.js";import"./ColumnConfigDialog-Dl-d7U0a.js";import"./DraggableList-B5vt0VaS.js";import"./search-DyPNv9j0.js";import"./Input-tSgTwGI-.js";import"./useControlled-oPldRElz.js";import"./Button-DE6hvZhq.js";import"./small-cross-BAIe5upx.js";import"./ActionButton-O2R9i3U9.js";import"./Checkbox-CQCkwFw-.js";import"./useValueChanged-HH9MPtoe.js";import"./CollapsiblePanel-CfmGyi20.js";import"./MultiColumnSortDialog-CB7cRcpw.js";import"./MenuTrigger-DIyqzTda.js";import"./CompositeItem-DPYzCgzB.js";import"./ToolbarRootContext-CHwqmaMQ.js";import"./getDisabledMountTransitionStyles-CU0LRjik.js";import"./getPseudoElementBounds-CdIwqNAh.js";import"./chevron-down-C-qVIMYg.js";import"./index-BWNvfyzP.js";import"./error-B4aXreAp.js";import"./BaseCbacBanner-CFSt_HvR.js";import"./makeExternalStore-BPRH1LKG.js";import"./Tooltip-bo6C_98m.js";import"./PopoverPopup-DUz2sdVN.js";import"./debounce-CoMjtpmw.js";import"./useOsdkClient-BdsS4ftD.js";import"./tick-CP_0B18b.js";import"./DropdownField-ZmhVFUXY.js";import"./isEqual-BMJgaJ9U.js";import"./withOsdkMetrics-Mp4Rwj5-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
