import{f as b,j as a,r as i}from"./iframe-DQJqbOkg.js";import{O as u}from"./object-table-C42cD1W9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bx382jd8.js";import"./Table-BUKSbL-S.js";import"./index-DDju5qND.js";import"./Dialog-BvZa6S-z.js";import"./cross-CBKiDiFM.js";import"./svgIconContainer-Dh-If8bk.js";import"./useBaseUiId-Cd3DALKZ.js";import"./InternalBackdrop-CyA0gD-i.js";import"./composite-DJx5EpfC.js";import"./index-DcZTfGla.js";import"./index-BykRpjW_.js";import"./index-Bfev5bb1.js";import"./useEventCallback-9HlASw1I.js";import"./SkeletonBar-Cp-aCJOp.js";import"./LoadingCell-BmL71oDn.js";import"./ColumnConfigDialog-PodIpnSt.js";import"./DraggableList-uPaACmur.js";import"./search-BNWaEN5a.js";import"./Input-DfLnd1PA.js";import"./useControlled-B7roseIi.js";import"./Button-BsBGFSm4.js";import"./small-cross-CejGNC_3.js";import"./ActionButton-C4DfXQxH.js";import"./Checkbox-CFiLEo_f.js";import"./useValueChanged-CXcqZkjl.js";import"./CollapsiblePanel-BqmcF9l-.js";import"./MultiColumnSortDialog-NC9pVnrh.js";import"./MenuTrigger-VbMNUulM.js";import"./CompositeItem-DiI8zPAV.js";import"./ToolbarRootContext-QT_ZGINr.js";import"./getDisabledMountTransitionStyles-Cdyen_86.js";import"./getPseudoElementBounds-CTw6d2gi.js";import"./chevron-down-B4870N35.js";import"./index-BRXV0LIo.js";import"./error-BPF4Md4s.js";import"./BaseCbacBanner-BF9_Hyqe.js";import"./makeExternalStore-mpHw7kxu.js";import"./Tooltip-B_fuddTn.js";import"./PopoverPopup-CtZRJF9a.js";import"./debounce-s5XAQu68.js";import"./useOsdkClient-Buf3pzB5.js";import"./tick-Dvoh1BGs.js";import"./DropdownField-B4gCR3Np.js";import"./isEqual-DQglmP2C.js";import"./withOsdkMetrics-q_Jd76KJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
