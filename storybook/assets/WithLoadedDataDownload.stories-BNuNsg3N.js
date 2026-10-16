import{f as b,j as a,r as i}from"./iframe-DW0pXrl1.js";import{O as u}from"./object-table-Dp9lxibM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D1BnlE3x.js";import"./index-DnR9sAsk.js";import"./Dialog-Bs48vNjw.js";import"./cross-f1t5SerR.js";import"./svgIconContainer-ClnaI19G.js";import"./useBaseUiId-C-Q4_wXv.js";import"./InternalBackdrop-BluWwehb.js";import"./composite-xGDnWfXU.js";import"./index-Dqs-eX79.js";import"./index-CXBUMHcq.js";import"./index-CKqF8zbs.js";import"./useEventCallback-DL9-47i7.js";import"./SkeletonBar-BpEqfrSc.js";import"./LoadingCell-Cppq0E1m.js";import"./ColumnConfigDialog-u_l00hF8.js";import"./DraggableList-sUVbYsIz.js";import"./search-3LJjcIJ7.js";import"./Input-Bw5OahtG.js";import"./useControlled-DHwMcBbK.js";import"./Button-LBvMHfI5.js";import"./small-cross-lYSE0QnW.js";import"./ActionButton-CTtqOwIe.js";import"./Checkbox-DXCrM2qY.js";import"./useValueChanged-DrIs_yVV.js";import"./CollapsiblePanel-B1iD119e.js";import"./MultiColumnSortDialog-CsLtwpVu.js";import"./MenuTrigger-CbGb6_wD.js";import"./CompositeItem-DTleMZzr.js";import"./ToolbarRootContext-Bl9OtRZB.js";import"./getDisabledMountTransitionStyles-BtEjnFuL.js";import"./getPseudoElementBounds-Bb3qgbg4.js";import"./chevron-down-DdU7H-NS.js";import"./index-DL2Pb_FC.js";import"./error-Dy3r5qvO.js";import"./BaseCbacBanner-CVDb6F7f.js";import"./makeExternalStore-D-CdOqwo.js";import"./Tooltip-CnMi1Qb4.js";import"./PopoverPopup-DP21wBfL.js";import"./debounce-BxUvnR7-.js";import"./useOsdkClient-d2bN7B2D.js";import"./tick-BYqbPGZh.js";import"./DropdownField-Cdnzgg6h.js";import"./isEqual-Orknfn15.js";import"./withOsdkMetrics-DX22MNhQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
