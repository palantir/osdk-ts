import{f as b,j as a,r as i}from"./iframe-q8TqaLH3.js";import{O as u}from"./object-table-Du6BlrzP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DW1Ev6LV.js";import"./Table-BYuHhB_Z.js";import"./index-BYCDoymk.js";import"./Dialog-7PnlGPiI.js";import"./cross-CC6OhIc-.js";import"./svgIconContainer-Dw59Q1hS.js";import"./useBaseUiId-CEQxwZKC.js";import"./InternalBackdrop--UCUdWww.js";import"./composite-DwvjAbMd.js";import"./index-CzfA3f8l.js";import"./index-BA8MKOgZ.js";import"./index-gnsaR6Uu.js";import"./useEventCallback-B4W_Onhb.js";import"./SkeletonBar-DqiAtf8L.js";import"./LoadingCell-DUy1iEUv.js";import"./ColumnConfigDialog-D4d7vU4L.js";import"./DraggableList-C-mgkqp0.js";import"./search-4HwTJMyt.js";import"./Input-DydicY3I.js";import"./useControlled-B4XgETbD.js";import"./Button-Cf0RXVA2.js";import"./small-cross-DvbT-Lty.js";import"./ActionButton-LZnsky5E.js";import"./Checkbox-b7LEJiYE.js";import"./useValueChanged-d_s2F3nd.js";import"./CollapsiblePanel-BS7S2lzj.js";import"./MultiColumnSortDialog-DJ1Kn_Ji.js";import"./MenuTrigger-BGwKkoMp.js";import"./CompositeItem-BoyD2Qd7.js";import"./ToolbarRootContext-BVkFyPPc.js";import"./getDisabledMountTransitionStyles-5oGVyyuS.js";import"./getPseudoElementBounds-BCT9ycAq.js";import"./chevron-down-DObWy-ia.js";import"./index-BiU-aGVE.js";import"./error-ClxxhlMY.js";import"./BaseCbacBanner-DTBo9MQF.js";import"./makeExternalStore-DCFTRovx.js";import"./Tooltip-AsdusrkJ.js";import"./PopoverPopup-B86RQsKi.js";import"./debounce-CCkbSKz6.js";import"./useOsdkClient-Ci_ciLOY.js";import"./tick-Dip5FQjE.js";import"./DropdownField-BJ7jRxa-.js";import"./isEqual-DK8wF8M6.js";import"./withOsdkMetrics-CEeAFO7b.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
