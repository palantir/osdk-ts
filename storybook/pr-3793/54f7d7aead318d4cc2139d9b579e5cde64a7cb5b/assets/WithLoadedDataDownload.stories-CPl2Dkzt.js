import{f as b,j as a,r as i}from"./iframe-DHvAViPR.js";import{O as u}from"./object-table-D-9flvkC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dr0qt1Io.js";import"./Table-FpwJusy2.js";import"./index-Bu8HbTmD.js";import"./Dialog-CW9JkQdy.js";import"./cross-jMdHsiQa.js";import"./svgIconContainer-DlMS91CX.js";import"./useBaseUiId-DC8JngT2.js";import"./InternalBackdrop-DocgtOsD.js";import"./composite-BqPomtbs.js";import"./index-C-uf0j7T.js";import"./index-BK9f1euG.js";import"./index-C0SFg9My.js";import"./useEventCallback-Mkp6eG4i.js";import"./SkeletonBar-CWpkfD4i.js";import"./LoadingCell-zT2gHZcw.js";import"./ColumnConfigDialog-BtvhjzuN.js";import"./DraggableList-CSoZ-IJ0.js";import"./search-CslhogKf.js";import"./Input-BahMzRfS.js";import"./useControlled-DhJY5-ob.js";import"./isEqual-BF6ez8mI.js";import"./isObject-DN-_A1Sa.js";import"./Button-CRVZcrRv.js";import"./ActionButton-C21ouRUL.js";import"./Checkbox-DwtHAgLP.js";import"./useValueChanged-BPn_zts2.js";import"./CollapsiblePanel-oahSC77k.js";import"./MultiColumnSortDialog-CCYfQtt4.js";import"./MenuTrigger-BS7gNlfS.js";import"./CompositeItem-DFHh1YHK.js";import"./ToolbarRootContext-D6av5NKs.js";import"./getDisabledMountTransitionStyles-Cm1DkgqH.js";import"./getPseudoElementBounds-BVHhalps.js";import"./chevron-down-m5ZtkVRt.js";import"./index-CFJ8T4c9.js";import"./error-ChBbUgez.js";import"./BaseCbacBanner-Dp4nf7jM.js";import"./makeExternalStore-hiekBPtY.js";import"./Tooltip-D-DaL636.js";import"./PopoverPopup-CQo59VTy.js";import"./toNumber-DrkGwxOv.js";import"./useOsdkClient-CHv6FTUh.js";import"./tick-CdE1sA9u.js";import"./DropdownField-KeSCUBSh.js";import"./withOsdkMetrics-CU3cEKz5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
