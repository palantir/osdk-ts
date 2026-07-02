import{f as b,j as a,r as i}from"./iframe-CkYkhnUO.js";import{O as u}from"./object-table-BSdVNHfY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5bVl3pR5.js";import"./Table-DWRQ6ExA.js";import"./index-DBMthAic.js";import"./Dialog--VFGwdiJ.js";import"./cross-_AQ0EykC.js";import"./svgIconContainer-DcgYw830.js";import"./useBaseUiId-D7Fmfn3S.js";import"./InternalBackdrop-CeWoB8sd.js";import"./composite-C_MwASkq.js";import"./index-B28k0r7n.js";import"./index--kthvSpz.js";import"./index-D4lpnIIG.js";import"./useEventCallback-Xa_UTItV.js";import"./SkeletonBar-C9zXGMXT.js";import"./LoadingCell-hdJBGuy0.js";import"./ColumnConfigDialog-BoXqRYcP.js";import"./DraggableList-MY4aI91U.js";import"./search-g7eaTWrQ.js";import"./Input-D00RBv5_.js";import"./useControlled-CbXaJr7B.js";import"./Button-Dx3FpDnS.js";import"./small-cross-CHW25LXq.js";import"./ActionButton-Z0EfrB5b.js";import"./Checkbox-CAWIXuR2.js";import"./minus-CfbDzYng.js";import"./tick-BT6Y8LEg.js";import"./useValueChanged-CqPMNcio.js";import"./caret-down-DtfFh680.js";import"./CollapsiblePanel-BXZEn2w8.js";import"./MultiColumnSortDialog-DuLLnBIX.js";import"./MenuTrigger-Dfg_SvnI.js";import"./CompositeItem-BfoIkqzQ.js";import"./ToolbarRootContext-msZgpn0v.js";import"./getDisabledMountTransitionStyles-C1FICNhy.js";import"./getPseudoElementBounds-CaR5Ho7-.js";import"./chevron-down-CiZvCI1x.js";import"./index-Bi8vhfCA.js";import"./error-DIvhNdA5.js";import"./BaseCbacBanner-DePlpgO_.js";import"./makeExternalStore-D4dfw71_.js";import"./Tooltip-CreqE3lj.js";import"./PopoverPopup-DJ2fHEgA.js";import"./toNumber-DFpbyy5U.js";import"./useOsdkClient-B49LCL8p.js";import"./DropdownField-QijyChjV.js";import"./withOsdkMetrics-xePCT_7C.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
