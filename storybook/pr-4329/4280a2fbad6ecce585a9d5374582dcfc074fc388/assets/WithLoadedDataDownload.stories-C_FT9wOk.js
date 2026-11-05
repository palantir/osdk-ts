import{f as b,j as a,r as i}from"./iframe-BPE8geBj.js";import{O as u}from"./object-table-BUSbSmjJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fxHDaWWz.js";import"./Table-BEgmw1vD.js";import"./index-BSCIcc2m.js";import"./Dialog-BDaN3rPU.js";import"./cross-BmJ5axqh.js";import"./svgIconContainer-Ch3CgPVe.js";import"./useBaseUiId-S4ycFjYQ.js";import"./InternalBackdrop-Dj4dXGlo.js";import"./composite-CvIKG9hN.js";import"./index-BOd13PhS.js";import"./index-D5QkM80p.js";import"./index-NexOwd4z.js";import"./useEventCallback-BGn_PaqW.js";import"./SkeletonBar-D2dwSU1W.js";import"./LoadingCell-D_WdiVbu.js";import"./ColumnConfigDialog-vVtlFWXW.js";import"./DraggableList-CSB3L_Q1.js";import"./search-D5bB9k-q.js";import"./Input-RElBojM0.js";import"./useControlled-C86FBi_K.js";import"./Button-DB75dhIR.js";import"./small-cross-BIQb8x3u.js";import"./ActionButton-BhhH_yCm.js";import"./Checkbox-BW3oz--1.js";import"./useValueChanged-CvoSBU76.js";import"./CollapsiblePanel-Dsa02cUE.js";import"./MultiColumnSortDialog-BpXI002I.js";import"./MenuTrigger-Dr4S107K.js";import"./CompositeItem-DoL9OBNh.js";import"./ToolbarRootContext-Cyb9Wm9w.js";import"./getDisabledMountTransitionStyles-BiO89QFU.js";import"./getPseudoElementBounds-bxwDp6fo.js";import"./chevron-down-CqglXqG-.js";import"./index-Da6xMdfJ.js";import"./error-BXvIUBOQ.js";import"./BaseCbacBanner-Bkw0yDve.js";import"./makeExternalStore-Bb0lbQEV.js";import"./Tooltip-CXKx2My9.js";import"./isObject-CIH_inO5.js";import"./debounce-CqZnwFp7.js";import"./useOsdkClient-BdzCkRzQ.js";import"./tick-BSHV8J2-.js";import"./DropdownField-D2YaoN7_.js";import"./isEqual-CHAxf8OA.js";import"./_baseIsEqual-B-Mt0Kfj.js";import"./withOsdkMetrics-BtOTCRxI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
