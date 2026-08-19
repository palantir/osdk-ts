import{f as b,j as a,r as i}from"./iframe-CCxrc5uu.js";import{O as u}from"./object-table-DI19Dn93.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9q9R3OD.js";import"./Table-DuVW994G.js";import"./index-qDidCFPc.js";import"./Dialog-C1rBLM2C.js";import"./cross-BmJWQ0-J.js";import"./svgIconContainer-CkLZQvG4.js";import"./useBaseUiId-BGcK0dYJ.js";import"./InternalBackdrop-BUKfKa7j.js";import"./composite-BPcLlFHy.js";import"./index-XpQZglWM.js";import"./index-DgxjKFwf.js";import"./index-uaSS-Si1.js";import"./useEventCallback-Ca7G1v-t.js";import"./SkeletonBar-CkGNgeFP.js";import"./LoadingCell-BW3EJQ88.js";import"./ColumnConfigDialog-BKcwryLe.js";import"./DraggableList-2wkOenVS.js";import"./search-jlcS54Ws.js";import"./Input-D9VrK1lm.js";import"./useControlled-zCfwXGMX.js";import"./Button-BxUO2cyH.js";import"./small-cross-DApQCxhT.js";import"./ActionButton-uMqfk8wS.js";import"./Checkbox-sIgy0-j4.js";import"./useValueChanged-Ba8hJIzP.js";import"./CollapsiblePanel-DTBD66wd.js";import"./MultiColumnSortDialog-B5Q9y3_f.js";import"./MenuTrigger-XXFcNZty.js";import"./CompositeItem-D76iKrer.js";import"./ToolbarRootContext-BnL2264j.js";import"./getDisabledMountTransitionStyles-Cmze2BdL.js";import"./getPseudoElementBounds-CvKBTt7E.js";import"./chevron-down-uBVJdRCo.js";import"./index-C_rJszoR.js";import"./error-ecSZs2U2.js";import"./BaseCbacBanner-CLEl47kq.js";import"./makeExternalStore-B_4U4xcV.js";import"./Tooltip-GkxQYuKb.js";import"./PopoverPopup-anKkxbKl.js";import"./debounce-Q7kSSS8k.js";import"./useOsdkClient-CdQYDJKp.js";import"./tick-DZ9D5jnu.js";import"./DropdownField-ei5pUXuj.js";import"./isEqual-KlKetUCi.js";import"./withOsdkMetrics-jldHoxNz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
