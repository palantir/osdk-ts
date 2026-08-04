import{f as b,j as a,r as i}from"./iframe-QFYCOUfb.js";import{O as u}from"./object-table-B2DYjUEt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvwAeipT.js";import"./Table-Bu_7BoL1.js";import"./index-r2m1MzwO.js";import"./Dialog-Bfc7HWT_.js";import"./cross-lN9Ye2mz.js";import"./svgIconContainer-BTKuLZDT.js";import"./useBaseUiId-CWCv1RJ1.js";import"./InternalBackdrop-pmr-irU1.js";import"./composite-0JPHK5U6.js";import"./index-CFtpFERN.js";import"./index-p1_Aw4sU.js";import"./index-BYeoZqW9.js";import"./useEventCallback-BvukxHI1.js";import"./SkeletonBar-T8DUjg20.js";import"./LoadingCell-BDvbN2hs.js";import"./ColumnConfigDialog-BkXWINBS.js";import"./DraggableList-ihgDUqV9.js";import"./search-A6D3Nphw.js";import"./Input-XI1xCScB.js";import"./useControlled-DvS8LHTQ.js";import"./isEqual-WnM2x0h8.js";import"./isObject-B9e3BPlM.js";import"./Button-CCCx6o1T.js";import"./ActionButton-1xA6c8aW.js";import"./Checkbox-DBnhpo7E.js";import"./useValueChanged-DnV0Ju92.js";import"./CollapsiblePanel-1WpAY5PZ.js";import"./MultiColumnSortDialog-D1F5VEBP.js";import"./MenuTrigger-zbuTgZkT.js";import"./CompositeItem-BzxfLAiE.js";import"./ToolbarRootContext-DxtjrKYm.js";import"./getDisabledMountTransitionStyles-B4wrMBNf.js";import"./getPseudoElementBounds-C-0UF2Q5.js";import"./chevron-down-8j45KwVK.js";import"./index-nzm4ayqk.js";import"./error-DkSBwZqT.js";import"./BaseCbacBanner-CeATJGkx.js";import"./makeExternalStore-jT5LUsaV.js";import"./Tooltip-CKjmDpHV.js";import"./PopoverPopup-DUtHyKME.js";import"./toNumber-5VBp_Htu.js";import"./useOsdkClient-D2V1bKMi.js";import"./tick-C1D_7X95.js";import"./DropdownField-CcWDIdAB.js";import"./withOsdkMetrics-BwOMOUV-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
