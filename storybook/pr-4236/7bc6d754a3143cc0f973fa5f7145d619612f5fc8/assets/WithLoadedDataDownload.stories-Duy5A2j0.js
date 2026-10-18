import{f as b,j as a,r as i}from"./iframe-D826lLui.js";import{O as u}from"./object-table-B_uBeT-f.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CGkAb-Wu.js";import"./Table-BUFGUybT.js";import"./index-DxNlvLAd.js";import"./Dialog-BOe-rnhW.js";import"./cross-9ZGBzaem.js";import"./svgIconContainer-BjuGxCIz.js";import"./useBaseUiId-CcA6f0Di.js";import"./InternalBackdrop-D8CCCsk7.js";import"./composite-D5SkMTiw.js";import"./index-e93ICMyG.js";import"./index-Dt4QZQ1m.js";import"./index-BjybkpAS.js";import"./useEventCallback-Ef5EfyWq.js";import"./SkeletonBar-DI4OC7oE.js";import"./LoadingCell-DfPckAF8.js";import"./ColumnConfigDialog-wVrsPA1W.js";import"./DraggableList-FEYECt2n.js";import"./search-BEeF_4Rd.js";import"./Input-D8Q7l-gb.js";import"./useControlled-D2sq1Iv_.js";import"./Button-DOLHRrn6.js";import"./small-cross-Dy0HqjGX.js";import"./ActionButton-BGwu0aco.js";import"./Checkbox-Ba70wUOE.js";import"./useValueChanged-D4utz3wv.js";import"./CollapsiblePanel-B3fFT0gn.js";import"./MultiColumnSortDialog-DgVM5Z_C.js";import"./MenuTrigger-f-DXw5qg.js";import"./CompositeItem-DW0wn-NB.js";import"./ToolbarRootContext-DY8S7jf3.js";import"./getDisabledMountTransitionStyles-CWVYXsPM.js";import"./getPseudoElementBounds-DvlgftUk.js";import"./chevron-down-C1HuiRtn.js";import"./index-T95LEHG2.js";import"./error-DNLlyci1.js";import"./BaseCbacBanner-DtsQhcu9.js";import"./makeExternalStore-B82ZGGVu.js";import"./Tooltip-DJDeXhNg.js";import"./PopoverPopup-B6kEvXUf.js";import"./debounce-cNU0CJPI.js";import"./useOsdkClient-Bbo5pAbB.js";import"./tick-DxttFOXl.js";import"./DropdownField-JiLo16C6.js";import"./isEqual-DIp8qzW1.js";import"./withOsdkMetrics--xMNvw5Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
