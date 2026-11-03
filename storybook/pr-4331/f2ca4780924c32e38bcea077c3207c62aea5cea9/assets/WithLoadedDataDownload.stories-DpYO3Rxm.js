import{f as b,j as a,r as i}from"./iframe-B1KRdkhO.js";import{O as u}from"./object-table-VH9o08u7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bnxkxvgo.js";import"./Table-DFRPqef8.js";import"./index-BSlreuwL.js";import"./Dialog-vBDXh0ed.js";import"./cross-I1O1eUVR.js";import"./svgIconContainer-B6SQl79i.js";import"./useBaseUiId-Cr74IIpt.js";import"./InternalBackdrop-DVl-y0rc.js";import"./composite-JDw4eSYM.js";import"./index-bzttAU4r.js";import"./index-DTJULArL.js";import"./index-Guz5zGoB.js";import"./useEventCallback-CfkBWOSK.js";import"./SkeletonBar-QeVp58Hy.js";import"./LoadingCell-D9O9FL6a.js";import"./ColumnConfigDialog-BsnhR79I.js";import"./DraggableList-D6vwU-jG.js";import"./search-C904-bBJ.js";import"./Input-B2oruy_a.js";import"./useControlled-CLV8A8ub.js";import"./Button-D76Gdss_.js";import"./small-cross-Cap9qk1X.js";import"./ActionButton-BFe9pmTu.js";import"./Checkbox-DYj6I-LQ.js";import"./useValueChanged-CXerxiwd.js";import"./CollapsiblePanel-CFp75AIt.js";import"./MultiColumnSortDialog-C_4Aabvc.js";import"./MenuTrigger-B-Rbw3mG.js";import"./CompositeItem-Bkqt9gor.js";import"./ToolbarRootContext-Bfq07vZg.js";import"./getDisabledMountTransitionStyles-wREHFmKX.js";import"./getPseudoElementBounds-CJIzvOat.js";import"./chevron-down-CnakN8OV.js";import"./index-BdAFUNX5.js";import"./error-DulRH5vX.js";import"./BaseCbacBanner-CisfZHjv.js";import"./makeExternalStore-YXTpwul9.js";import"./Tooltip-CtbVHmv4.js";import"./PopoverPopup-C0hcd2Vi.js";import"./debounce-BqZLsoFx.js";import"./useOsdkClient-Cr05SL_1.js";import"./tick-DN0jUzW_.js";import"./DropdownField-fIw7AjbO.js";import"./isEqual-DHHyDIZe.js";import"./withOsdkMetrics-BnkJio_O.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
