import{f as b,j as a,r as i}from"./iframe-DMEeR_A6.js";import{O as u}from"./object-table-DpPdg6rC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSwxJ2Qu.js";import"./Table-BVtLGRs-.js";import"./index-BqSwH6BS.js";import"./Dialog-Bmg5t_Rv.js";import"./cross-D1DQ-gsn.js";import"./svgIconContainer-BjNsgw11.js";import"./useBaseUiId-C_keuJD_.js";import"./InternalBackdrop-Du4XsI-F.js";import"./composite-c9YX8hZx.js";import"./index-DfbVa9Ua.js";import"./index-BNsZDNUv.js";import"./index-D8V__r46.js";import"./useEventCallback-jLitOrjn.js";import"./SkeletonBar-fcVlNLZ8.js";import"./LoadingCell-Cz--n1SX.js";import"./ColumnConfigDialog-Cx9qj5Wo.js";import"./DraggableList-CYLi03tu.js";import"./search-C4awjolY.js";import"./Input-DNu0XTv_.js";import"./useControlled-JgK447yP.js";import"./isEqual-C5BtzEHg.js";import"./isObject-BwRGfctU.js";import"./Button-D8YP-W_J.js";import"./ActionButton-DBLagc9K.js";import"./Checkbox-BbDJ4RQ9.js";import"./useValueChanged-Snwakmnu.js";import"./CollapsiblePanel-k2iQjFFp.js";import"./MultiColumnSortDialog-Yn5zCMWH.js";import"./MenuTrigger-B1D8mTKr.js";import"./CompositeItem-BjD7sfVu.js";import"./ToolbarRootContext-DUcwU7Eq.js";import"./getDisabledMountTransitionStyles-CbEoBQbW.js";import"./getPseudoElementBounds-CSLBYaMJ.js";import"./chevron-down-CQJ4c2jJ.js";import"./index-BDKCNXPL.js";import"./error-B_Co1YFo.js";import"./BaseCbacBanner-BxYeTs4u.js";import"./makeExternalStore-lRhVC4OU.js";import"./Tooltip-CbgggMzF.js";import"./PopoverPopup-DprMQeHB.js";import"./debounce-D3f1Scy_.js";import"./useOsdkClient-CGfWHfWZ.js";import"./tick-BROod1D6.js";import"./DropdownField-CGgIhePw.js";import"./withOsdkMetrics-CPkWaZWg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
