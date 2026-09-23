import{f as b,j as a,r as i}from"./iframe-BUT1Ca21.js";import{O as u}from"./object-table-CalE6Oop.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C3ZTbeOG.js";import"./Table-BXOp49vh.js";import"./index-CEgKTB7y.js";import"./Dialog-CjBCn5Zb.js";import"./cross-Cr9ZjHRZ.js";import"./svgIconContainer-Bompvmw_.js";import"./useBaseUiId-qyGuXCWk.js";import"./InternalBackdrop-CKROOC4c.js";import"./composite-CfgLMjRu.js";import"./index-BKX7kSRn.js";import"./index-Cxye_Vbl.js";import"./index-CAyUZnlL.js";import"./useEventCallback-CDxA8TLn.js";import"./SkeletonBar-DDbomIY0.js";import"./LoadingCell-CU-j_ZUe.js";import"./ColumnConfigDialog-TzJVaYZ7.js";import"./DraggableList-B6VvBpLJ.js";import"./search-wRZY1Zgd.js";import"./Input-VfpuHGrG.js";import"./useControlled-MxpDrEQu.js";import"./Button-jhXvjlOf.js";import"./small-cross-D5yHal12.js";import"./ActionButton-DmPqgqpY.js";import"./Checkbox-tJ5G6VKa.js";import"./useValueChanged-Sx5eg1XK.js";import"./CollapsiblePanel-BxEgYLVa.js";import"./MultiColumnSortDialog-okpUCC_8.js";import"./MenuTrigger-h82n0SIg.js";import"./CompositeItem-Bsqpxv5d.js";import"./ToolbarRootContext-Cefa8MxM.js";import"./getDisabledMountTransitionStyles-Ne5QFwsT.js";import"./getPseudoElementBounds-yw_Voijw.js";import"./chevron-down-DwUo7lxb.js";import"./index-DDeQtpyk.js";import"./error-C95PtJNd.js";import"./BaseCbacBanner-DEFb7mgM.js";import"./makeExternalStore-BZeEFOui.js";import"./Tooltip-ByJbGxVL.js";import"./PopoverPopup-DD5F8aqU.js";import"./debounce-CousxmCd.js";import"./useOsdkClient-DKJPb5Gm.js";import"./tick-Bc2ETXIe.js";import"./DropdownField-CeTN_DiQ.js";import"./isEqual-D-7Pn8zL.js";import"./withOsdkMetrics-CRAr1v2v.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
