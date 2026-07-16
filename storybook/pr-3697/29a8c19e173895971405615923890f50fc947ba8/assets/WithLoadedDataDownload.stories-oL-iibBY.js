import{f as b,j as a,r as i}from"./iframe-DvMdQBvd.js";import{O as u}from"./object-table-CkPv6kLx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BjpjdvaZ.js";import"./Table-1ll3WyGn.js";import"./index-HPU5XEkS.js";import"./Dialog-B-gt5OQR.js";import"./cross-C9iQ620L.js";import"./svgIconContainer-Bsqq_-j9.js";import"./useBaseUiId-DUxEP0JG.js";import"./InternalBackdrop-iVNi1anK.js";import"./composite-WNMviQTM.js";import"./index-D4pRvPWl.js";import"./index--x_DOZdN.js";import"./index-DdeminYl.js";import"./useEventCallback-nCJ_FhbV.js";import"./SkeletonBar-BUj4djnK.js";import"./LoadingCell-B5m1Qbcm.js";import"./ColumnConfigDialog-BlfTfiKq.js";import"./DraggableList-CNAW2mRU.js";import"./search-BL-w9WEV.js";import"./Input-Ce190kRT.js";import"./useControlled-uyqWxroq.js";import"./Button-4P7Cih8_.js";import"./small-cross-C6Yae1r4.js";import"./ActionButton-D_h45E7x.js";import"./Checkbox-_hFnS6qQ.js";import"./useValueChanged-0oGrLz5h.js";import"./CollapsiblePanel-D5sMxpZl.js";import"./MultiColumnSortDialog-jEkGCSao.js";import"./MenuTrigger-9MebFH6s.js";import"./CompositeItem-hputHC9b.js";import"./ToolbarRootContext--8pzFarC.js";import"./getDisabledMountTransitionStyles-CcNac6LD.js";import"./getPseudoElementBounds-DD74Ap2v.js";import"./chevron-down-E3rxB9-r.js";import"./index-DFO59pxo.js";import"./error-NZ2vfALl.js";import"./BaseCbacBanner-BglMFTPN.js";import"./makeExternalStore-Bvm_N1o6.js";import"./Tooltip-XrMuYqxH.js";import"./PopoverPopup-CvnN1Q6W.js";import"./toNumber-CwW_ilZy.js";import"./useOsdkClient-CyaHFuc4.js";import"./tick-B_bPqavH.js";import"./DropdownField-k9CuJn0r.js";import"./withOsdkMetrics-Dpcl__Mh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
