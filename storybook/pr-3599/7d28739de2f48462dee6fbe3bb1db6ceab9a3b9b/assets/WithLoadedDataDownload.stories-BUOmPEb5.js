import{f as b,j as a,r as i}from"./iframe-DWsQ1LUa.js";import{O as u}from"./object-table-0J09JQzw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fiqd5K5n.js";import"./Table-Bf8pRJgF.js";import"./index-CWvV8Hb_.js";import"./Dialog-B3mg_Qt3.js";import"./cross-B7a2Hn3X.js";import"./svgIconContainer-lDiEyAag.js";import"./useBaseUiId-CZqpQVxb.js";import"./InternalBackdrop-BaU73lj5.js";import"./composite-B0Mu8PWO.js";import"./index-D0qoHOWD.js";import"./index-B_thgqpa.js";import"./index-DFkZzoNr.js";import"./useEventCallback-9qu1FVD3.js";import"./SkeletonBar-CMApSRFY.js";import"./LoadingCell-CPOg_5Pf.js";import"./ColumnConfigDialog-BUfgtOlf.js";import"./DraggableList-B7UWmE0S.js";import"./search-NrlmniVl.js";import"./Input-VXafaHMn.js";import"./useControlled-CmT34W1I.js";import"./Button-C-T5uRcP.js";import"./small-cross-DJKunNUc.js";import"./ActionButton-BbfClv2_.js";import"./Checkbox-DKctoKQh.js";import"./minus-DNwqRfyN.js";import"./tick-CzB9_uan.js";import"./useValueChanged-sCqwkB8G.js";import"./caret-down-Cj15OnJY.js";import"./CollapsiblePanel-EavfHdrf.js";import"./MultiColumnSortDialog-CMP3CIaK.js";import"./MenuTrigger-DcNa2x0Y.js";import"./CompositeItem-CnAQaBgX.js";import"./ToolbarRootContext-Cp0z_F8h.js";import"./getDisabledMountTransitionStyles-NN3Yn49p.js";import"./getPseudoElementBounds-C6u9GBmN.js";import"./chevron-down-5gvvazAJ.js";import"./index-Dsxa_rz9.js";import"./error-aZs5Xspb.js";import"./BaseCbacBanner-DKuCOBxx.js";import"./makeExternalStore-B6MahPy8.js";import"./Tooltip-B0CF57Jj.js";import"./PopoverPopup-DHN5IGxu.js";import"./toNumber-CCjZRCf_.js";import"./useOsdkClient-CE4ULwfV.js";import"./DropdownField-DVJBvOq1.js";import"./withOsdkMetrics-Ocz7dUJD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
