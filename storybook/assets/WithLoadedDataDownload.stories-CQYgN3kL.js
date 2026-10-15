import{f as b,j as a,r as i}from"./iframe-D1DnRXYH.js";import{O as u}from"./object-table-DES2_u1T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DmqLzT5l.js";import"./index-BOVyYsBB.js";import"./Dialog-BVX3oafM.js";import"./cross-CSUtUBCJ.js";import"./svgIconContainer-CThNxl0n.js";import"./useBaseUiId-BdlOppAL.js";import"./InternalBackdrop-CwDFLT3m.js";import"./composite-DS57evVk.js";import"./index-fjVXZ-V0.js";import"./index-eqepVRHL.js";import"./index-DxsfHjKY.js";import"./useEventCallback-Ca0KASNd.js";import"./SkeletonBar-DphPqPis.js";import"./LoadingCell-Bmf3DHQl.js";import"./ColumnConfigDialog-BBuwqElm.js";import"./DraggableList-QdJNJkWo.js";import"./search-BbGlGWkG.js";import"./Input-BXJLgeNm.js";import"./useControlled-BDwxO80n.js";import"./Button-7tq21DzM.js";import"./small-cross-B-R6m80e.js";import"./ActionButton-Bf99j7AG.js";import"./Checkbox-Das4oVA6.js";import"./useValueChanged-BH0A2zFp.js";import"./CollapsiblePanel-B-RyYn8y.js";import"./MultiColumnSortDialog-LhxyCZ9I.js";import"./MenuTrigger-B6EI5r-J.js";import"./CompositeItem-COpco4va.js";import"./ToolbarRootContext-B2fwojw5.js";import"./getDisabledMountTransitionStyles-DPsiGUxU.js";import"./getPseudoElementBounds-DM5-UIyf.js";import"./chevron-down-CE6TeLM9.js";import"./index-CRDubvT7.js";import"./error-PWaSqDvq.js";import"./BaseCbacBanner-DeWdVL1r.js";import"./makeExternalStore-RyYPhhMJ.js";import"./Tooltip-DQWisYIT.js";import"./PopoverPopup-CCyG4Nmv.js";import"./debounce-CV-5WpHu.js";import"./useOsdkClient-BcNSxg1j.js";import"./tick-thvbYd_R.js";import"./DropdownField-BddjJbE_.js";import"./isEqual-Bkx8zYSE.js";import"./withOsdkMetrics-BIY3fItA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
