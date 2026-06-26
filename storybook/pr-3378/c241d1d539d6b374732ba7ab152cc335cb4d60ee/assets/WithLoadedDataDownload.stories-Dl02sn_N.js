import{f as b,j as a,r as i}from"./iframe-CfrMZuVj.js";import{O as u}from"./object-table-BHv5GzIF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5fAXmjS.js";import"./Table-XqXrSMRG.js";import"./index-DYVq1j9X.js";import"./Dialog-BtWpVA49.js";import"./cross-3f22uQ-C.js";import"./svgIconContainer-C95DDcxX.js";import"./useBaseUiId-DdoKUeod.js";import"./InternalBackdrop-C619luLx.js";import"./composite-B4aiyj7A.js";import"./index-CbrxzA2c.js";import"./index-DE3GyER6.js";import"./index-DgU_G9ed.js";import"./useEventCallback-BxrnMlsn.js";import"./SkeletonBar-BPhvKtKC.js";import"./LoadingCell-D1XnBPGA.js";import"./ColumnConfigDialog-BJSVM1nP.js";import"./DraggableList-CTGQHeiT.js";import"./search-C7dfYjlW.js";import"./Input-BKTzM7mP.js";import"./useControlled-DUCqzd58.js";import"./Button-D8f87WjA.js";import"./small-cross-C99u7UYJ.js";import"./ActionButton-C5wwx6qq.js";import"./Checkbox-DmEgRxs2.js";import"./minus-y7sHBYHO.js";import"./tick-W0MLuzjr.js";import"./useValueChanged-rn3XEx0l.js";import"./caret-down-CKfiu5tH.js";import"./CollapsiblePanel-ZUlxkIGy.js";import"./MultiColumnSortDialog-B8Mh5Yt0.js";import"./MenuTrigger-CkWMDOBx.js";import"./CompositeItem-DZvjn6Tw.js";import"./ToolbarRootContext-BMBxxppn.js";import"./getDisabledMountTransitionStyles-tWkUFA-G.js";import"./getPseudoElementBounds-Dqv9oT7A.js";import"./chevron-down-BqqOGFpy.js";import"./index-CZV25uKZ.js";import"./error-vsyFXbHa.js";import"./BaseCbacBanner-BQVcW4RK.js";import"./makeExternalStore-Bw-HdF_K.js";import"./Tooltip-BLQ0kGR7.js";import"./PopoverPopup-DtkD25v3.js";import"./toNumber-CoMOoahI.js";import"./useOsdkClient-BdDwho6F.js";import"./DropdownField-B7hsuZof.js";import"./withOsdkMetrics-BaK8lHbo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
