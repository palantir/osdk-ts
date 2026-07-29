import{f as b,j as a,r as i}from"./iframe-CXKHHYLj.js";import{O as u}from"./object-table-C-UwNqvm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVmJRszq.js";import"./Table-W5IIET3m.js";import"./index-CcpRadK6.js";import"./Dialog-CAN554hv.js";import"./cross-DqveAx_d.js";import"./svgIconContainer-CErO790I.js";import"./useBaseUiId-sRSDtUX0.js";import"./InternalBackdrop-BJeEEIis.js";import"./composite-CQ5AwT36.js";import"./index-tIN8Ghiw.js";import"./index-CEcCMYWW.js";import"./index-GQhNXkfW.js";import"./useEventCallback-DE2DORP9.js";import"./SkeletonBar-BmUDjSgF.js";import"./LoadingCell-ClBWMtHS.js";import"./ColumnConfigDialog-BLLIAmXq.js";import"./DraggableList-DkIwYCgF.js";import"./Input-DXCo2306.js";import"./useControlled-DpK_7PC-.js";import"./Button-DG69O4ak.js";import"./small-cross-Cx6Nelda.js";import"./ActionButton-DnwhiAZj.js";import"./Checkbox-CuCRFo8j.js";import"./minus-65RMZA8q.js";import"./useValueChanged-DvUV9gP2.js";import"./caret-down-CI8Lni03.js";import"./CollapsiblePanel-D9Uhp2wb.js";import"./MultiColumnSortDialog-bKEcDhA0.js";import"./MenuTrigger-C5fHUx3p.js";import"./CompositeItem-ByYO2P41.js";import"./ToolbarRootContext-DnSk_TJc.js";import"./getDisabledMountTransitionStyles-xsBoC8uM.js";import"./getPseudoElementBounds-DnNkxRot.js";import"./chevron-down-O_5oUEll.js";import"./index-8EWYRpn4.js";import"./error-XQLskqQi.js";import"./BaseCbacBanner-BWf2SfQb.js";import"./makeExternalStore-BZvbDwgv.js";import"./Tooltip-iuJswzdd.js";import"./PopoverPopup-CjEbdYgG.js";import"./toNumber-Dmq6I6RA.js";import"./useOsdkClient--Rtm53GF.js";import"./DropdownField-Df2KwPRn.js";import"./withOsdkMetrics-BZzkS8BC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
