import{f as b,j as a,r as i}from"./iframe-88cR0Kb6.js";import{O as u}from"./object-table-sPJ6fNUO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YlgatCnn.js";import"./Table-CsDV1Dux.js";import"./index-B3iu9Z4K.js";import"./Dialog-DqUj8fbX.js";import"./cross-vHFr3mSH.js";import"./svgIconContainer-BWrQPgSJ.js";import"./useBaseUiId-DM5phI6w.js";import"./InternalBackdrop-DdO1TR54.js";import"./composite-D2yt_gez.js";import"./index-m81VPS-N.js";import"./index-CGLm8TXz.js";import"./index-TuaMuo_5.js";import"./useEventCallback-BY6bNS44.js";import"./SkeletonBar-DL6i_PYS.js";import"./LoadingCell-Q6oUQvVQ.js";import"./ColumnConfigDialog-Cdup8hG_.js";import"./DraggableList-BSEACjIX.js";import"./search-D2eeLv3Q.js";import"./Input-CBeXc1FM.js";import"./useControlled-B1WACGZl.js";import"./Button-CfFrXY9_.js";import"./small-cross-TgiDvwiu.js";import"./ActionButton-DilKZ_dk.js";import"./Checkbox-DTID00qk.js";import"./useValueChanged-CKD-6pQy.js";import"./CollapsiblePanel-LjlawlAT.js";import"./MultiColumnSortDialog-C2L2JOK1.js";import"./MenuTrigger-B6iDWpHK.js";import"./CompositeItem-x-J85oX3.js";import"./ToolbarRootContext-B6xb1eEg.js";import"./getDisabledMountTransitionStyles-EWMBCi1t.js";import"./getPseudoElementBounds-CBBgF56s.js";import"./chevron-down-J3WtM_eJ.js";import"./index-CIeymtFj.js";import"./error-B6tbVTJ_.js";import"./BaseCbacBanner-MFdFNXXS.js";import"./makeExternalStore-DzZ4mLu7.js";import"./Tooltip-BDliEVDr.js";import"./PopoverPopup-CPw-5q_W.js";import"./debounce-R5snSJSd.js";import"./useOsdkClient-CQKftRkO.js";import"./tick-BXAWhEKb.js";import"./DropdownField-C6Sig76U.js";import"./isEqual-D3N0BFL-.js";import"./withOsdkMetrics-BByVeH1n.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
