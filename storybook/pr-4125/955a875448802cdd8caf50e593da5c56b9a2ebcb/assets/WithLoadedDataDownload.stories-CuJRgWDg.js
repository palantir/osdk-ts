import{f as b,j as a,r as i}from"./iframe-CJUVjq4K.js";import{O as u}from"./object-table-9j7hJKGq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DSClUnrb.js";import"./Table-BHtfhcbt.js";import"./index-GE7urbEt.js";import"./Dialog-BuLoeA1I.js";import"./cross-B9ZydxGz.js";import"./svgIconContainer-CvZRP5Wc.js";import"./useBaseUiId-CYXUYH1v.js";import"./InternalBackdrop-C3RvedXC.js";import"./composite-DKgrSWPF.js";import"./index-Cy6fVwoK.js";import"./index-Bf3fiI44.js";import"./index-DebWIRa-.js";import"./useEventCallback-BIZx9_-2.js";import"./SkeletonBar-B9k800l5.js";import"./LoadingCell-BMMxeSXI.js";import"./ColumnConfigDialog-D97QBTu9.js";import"./DraggableList-BVcfWvj2.js";import"./search-DE0VchUk.js";import"./Input-CRzIer8e.js";import"./useControlled-CmmcI5hz.js";import"./Button-3MSado4D.js";import"./small-cross-CVDb-HU5.js";import"./ActionButton-DVQysWwt.js";import"./Checkbox-CZkvMdfq.js";import"./useValueChanged-XTKnjh2G.js";import"./CollapsiblePanel-8s1IX430.js";import"./MultiColumnSortDialog-DVQqUNoO.js";import"./MenuTrigger-DuK6ZS-3.js";import"./CompositeItem-Dt49eISw.js";import"./ToolbarRootContext-BC2o7QKp.js";import"./getDisabledMountTransitionStyles-CJ0sEwK5.js";import"./getPseudoElementBounds-5mjFlJzS.js";import"./chevron-down-CQOxC3pu.js";import"./index-CnwddG-W.js";import"./error-Qoo-TgP1.js";import"./BaseCbacBanner-ClYJmr6A.js";import"./makeExternalStore-X814geH6.js";import"./Tooltip-DWTM9fE9.js";import"./PopoverPopup-BSqbMmuQ.js";import"./debounce-Ckmd3QDC.js";import"./useOsdkClient-Bn_kWgls.js";import"./tick-Dnvepkck.js";import"./DropdownField-2TmnJYIn.js";import"./isEqual-CaNBV33-.js";import"./withOsdkMetrics-_5PcUp3d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
