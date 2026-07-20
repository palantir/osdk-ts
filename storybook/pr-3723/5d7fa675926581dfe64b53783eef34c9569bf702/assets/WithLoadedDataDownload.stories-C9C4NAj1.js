import{f as b,j as a,r as i}from"./iframe-BKuJ3YK-.js";import{O as u}from"./object-table-DHaxzXV0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DYAnbvQu.js";import"./Table-Cih1Tdmn.js";import"./index-DOC-3Q2e.js";import"./Dialog-CZqNO7Eg.js";import"./cross-5zQYDp4L.js";import"./svgIconContainer-CO4uzBXb.js";import"./useBaseUiId-CmjMaZif.js";import"./InternalBackdrop-BZn_v4Ut.js";import"./composite-CMqWpSV4.js";import"./index-CyPxhMS0.js";import"./index-BL-28NIt.js";import"./index-BFx5rq6J.js";import"./useEventCallback-B2aBdiyc.js";import"./SkeletonBar-DXKKYns-.js";import"./LoadingCell-C_pgEUHE.js";import"./ColumnConfigDialog-BebTZ2cs.js";import"./DraggableList-Bhng7sIV.js";import"./search-C2R58gu2.js";import"./Input-BuPE6di9.js";import"./useControlled-Dgcubknr.js";import"./isEqual-Rmzr3cyu.js";import"./isObject-h0cx7wZc.js";import"./Button-KVWxQo2x.js";import"./ActionButton-CH1Ap5aa.js";import"./Checkbox-SaWrWDGR.js";import"./useValueChanged-C_zWLVba.js";import"./CollapsiblePanel-CwuQzP9G.js";import"./MultiColumnSortDialog-Dnx81jDn.js";import"./MenuTrigger-EiKSStXQ.js";import"./CompositeItem-Dhhm1Ue0.js";import"./ToolbarRootContext-Dcjq1toe.js";import"./getDisabledMountTransitionStyles-D27tB-TO.js";import"./getPseudoElementBounds-5nfaJR8T.js";import"./chevron-down-Qa4DBKkN.js";import"./index-D-Lytb1C.js";import"./error-xCvq0iiE.js";import"./BaseCbacBanner-YzGFCsRR.js";import"./makeExternalStore-CPmwp_9o.js";import"./Tooltip-DsFcxZJX.js";import"./PopoverPopup-DbASKmrn.js";import"./toNumber-C7IgeiT8.js";import"./useOsdkClient-D7rVmd37.js";import"./tick-DmvAo7xh.js";import"./DropdownField-8Usq9D88.js";import"./withOsdkMetrics-BsN0QIgz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
