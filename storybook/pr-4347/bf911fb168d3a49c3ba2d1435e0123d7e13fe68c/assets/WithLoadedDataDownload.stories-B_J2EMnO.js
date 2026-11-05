import{f as b,j as a,r as i}from"./iframe-Deuk3WWS.js";import{O as u}from"./object-table-sRmdC6uV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BBagj194.js";import"./Table-ZZV9SBNc.js";import"./index-6Crz7A4k.js";import"./Dialog-BrM9AM2P.js";import"./cross-BVTbes25.js";import"./svgIconContainer-B5ALG4eV.js";import"./useBaseUiId-C0TzrPg5.js";import"./InternalBackdrop-BSAjnJ8q.js";import"./composite-CHecoTnn.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./index-DdVo18Pi.js";import"./useEventCallback-Cb6Txe3l.js";import"./SkeletonBar-DSTTd06h.js";import"./LoadingCell-C4glawo5.js";import"./ColumnConfigDialog-DWZYx-xr.js";import"./DraggableList-8AUjWbzX.js";import"./search-CbQ17IfG.js";import"./Input-DB3pzys-.js";import"./useControlled-Ck5NZ_4o.js";import"./Button-NLGJUEdX.js";import"./small-cross-B4XcSwLB.js";import"./ActionButton-DFvwDNjB.js";import"./Checkbox-DDVVlV2I.js";import"./useValueChanged-BgV54nDS.js";import"./CollapsiblePanel-4fPAfwdp.js";import"./MultiColumnSortDialog-DaRilF2v.js";import"./MenuTrigger-Cmuj0DWR.js";import"./CompositeItem-D95IUf9G.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./getDisabledMountTransitionStyles-jk1RFGGJ.js";import"./getPseudoElementBounds-BDKVNpp1.js";import"./chevron-down-CzdIHmMJ.js";import"./index-BOxz8-qW.js";import"./error-kMW-uU3e.js";import"./BaseCbacBanner-6dmNgK7x.js";import"./makeExternalStore-C0hhujMA.js";import"./Tooltip-BV34caG_.js";import"./PopoverPopup-Bqj9UCPW.js";import"./debounce-BRZYJGiS.js";import"./useOsdkClient-CXg2SlsO.js";import"./tick-DMuR0LZC.js";import"./DropdownField-BUzKXDS6.js";import"./isEqual-DR-npGts.js";import"./withOsdkMetrics-ZZvmUZ78.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
