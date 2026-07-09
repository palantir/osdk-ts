import{f as b,j as a,r as i}from"./iframe-CWUGZUf-.js";import{O as u}from"./object-table-tECkYFeZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DPiZGhTq.js";import"./index-C_lPUxQk.js";import"./Dialog-HE8MScm-.js";import"./cross-D3cic8ur.js";import"./svgIconContainer-BVl7iIFx.js";import"./useBaseUiId-rQsTKa8n.js";import"./InternalBackdrop-cB--nlkL.js";import"./composite-DcPHzi1h.js";import"./index-CtVEBM7t.js";import"./index-B-UXWbow.js";import"./index-DxFYHr3P.js";import"./useEventCallback-DWZwpR1_.js";import"./SkeletonBar-BJmuTneL.js";import"./LoadingCell-ICsTVPu8.js";import"./ColumnConfigDialog-Dw3wfbxb.js";import"./DraggableList-oftxM9Y4.js";import"./search-C9SH_QQG.js";import"./Input-DYPJq1YJ.js";import"./useControlled-BK_JVOej.js";import"./Button-CfMcT41P.js";import"./small-cross-DSKoNLHw.js";import"./ActionButton-R--2eAYv.js";import"./Checkbox-BgCKkZEq.js";import"./useValueChanged-DneB0amX.js";import"./CollapsiblePanel-D6AN7hTs.js";import"./MultiColumnSortDialog-D7bwbWx-.js";import"./MenuTrigger-DwnMCmfb.js";import"./CompositeItem-BJx-fZxp.js";import"./ToolbarRootContext-BpsY1BVI.js";import"./getDisabledMountTransitionStyles-BHbzk6vW.js";import"./getPseudoElementBounds-CEK_WQCp.js";import"./chevron-down-KWweqKS6.js";import"./index-Fa5PUE1e.js";import"./error-CQ2hgZnJ.js";import"./BaseCbacBanner-MzR5itUd.js";import"./makeExternalStore-wd6o7Thy.js";import"./Tooltip-YubE5DkR.js";import"./PopoverPopup-CGzqcLVA.js";import"./toNumber-Dc5bG2MO.js";import"./useOsdkClient-DYpUSblW.js";import"./tick-CRydnjq8.js";import"./DropdownField-D2-CPQa5.js";import"./withOsdkMetrics-CdfjuVxc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
