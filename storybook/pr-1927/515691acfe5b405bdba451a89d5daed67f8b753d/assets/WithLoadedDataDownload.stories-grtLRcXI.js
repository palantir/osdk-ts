import{f as b,j as a,r as i}from"./iframe-DOKsSIoF.js";import{O as u}from"./object-table-CNgp4EiJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DIcDZjtS.js";import"./Table-etEm7Ywu.js";import"./index-_xXvNYcY.js";import"./Dialog-BbwWD5pu.js";import"./cross-D475DauV.js";import"./svgIconContainer-Dpin5oqd.js";import"./useBaseUiId-DGSgOirr.js";import"./InternalBackdrop-B4AaEj4N.js";import"./composite-DQ6AxwFj.js";import"./index-BvLhZQjl.js";import"./index-DhP_5L9k.js";import"./index-dUaqq4Fq.js";import"./useEventCallback-Bf7s2Mxp.js";import"./SkeletonBar-DqSYWxQm.js";import"./LoadingCell-_akYhzPq.js";import"./ColumnConfigDialog-123MZYmZ.js";import"./DraggableList-B4HYopJH.js";import"./search-BcWq1pIm.js";import"./Input-Do1A5iUq.js";import"./useControlled-B82oHfdu.js";import"./isEqual-C6NR7xGt.js";import"./isObject-eWIrV8l-.js";import"./Button-CR4Jq5Wr.js";import"./ActionButton-C0SV8vyY.js";import"./Checkbox-DfUnlU1Y.js";import"./useValueChanged-DjjpCRBs.js";import"./CollapsiblePanel-G5gSfGtG.js";import"./MultiColumnSortDialog-Dlkwq0zz.js";import"./MenuTrigger-RF-8Atpf.js";import"./CompositeItem-C0yPEj0b.js";import"./ToolbarRootContext-BPvqgk36.js";import"./getDisabledMountTransitionStyles-B3Ro6IiM.js";import"./getPseudoElementBounds-B1JJ3_Zd.js";import"./chevron-down-DsDR74iP.js";import"./index-Db4L4DG0.js";import"./error-0smIlLow.js";import"./BaseCbacBanner-Dn9SakR8.js";import"./makeExternalStore-DJgCcd_q.js";import"./Tooltip-DMiQsrpr.js";import"./PopoverPopup-CKQaqJiX.js";import"./toNumber-CB6N3auG.js";import"./useOsdkClient-D9i1t7RY.js";import"./tick-WOBuXuXo.js";import"./DropdownField-Cd10dKpj.js";import"./withOsdkMetrics-DxFA8_hv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
