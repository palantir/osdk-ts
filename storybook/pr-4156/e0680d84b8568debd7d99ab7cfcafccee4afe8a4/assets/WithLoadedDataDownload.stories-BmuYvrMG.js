import{f as b,j as a,r as i}from"./iframe-CvX9Pygi.js";import{O as u}from"./object-table-BUtrTjpN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BB8WBYsV.js";import"./Table-QxYBnfC2.js";import"./index-BZTqeQuD.js";import"./Dialog-Cwq31CHt.js";import"./cross-a0pxU8ye.js";import"./svgIconContainer-Cik9z__5.js";import"./useBaseUiId-BW2Ufhyw.js";import"./InternalBackdrop-KsToEN62.js";import"./composite-B1Ef3_vs.js";import"./index-C3D6pCjL.js";import"./index-EBKlSRA8.js";import"./index-BRzHUjU3.js";import"./useEventCallback-Cd4IUoh5.js";import"./SkeletonBar-Bnfzc4A1.js";import"./LoadingCell-EkqPT1cA.js";import"./ColumnConfigDialog-C2V8ttfd.js";import"./DraggableList-OvqbjDr_.js";import"./search-D9_8mB8g.js";import"./Input-B4YDDaMi.js";import"./useControlled-qJqObmnH.js";import"./Button-D5Y-liWD.js";import"./small-cross-BfYBNzN7.js";import"./ActionButton-BG0rIOTw.js";import"./Checkbox-B_3kZLWz.js";import"./useValueChanged-CN40AKPX.js";import"./CollapsiblePanel-DiQ0neqE.js";import"./MultiColumnSortDialog-khzDAYAw.js";import"./MenuTrigger-D9EQbsZv.js";import"./CompositeItem-LESBwLaD.js";import"./ToolbarRootContext-BT80oNNA.js";import"./getDisabledMountTransitionStyles-Oyv5nHgL.js";import"./getPseudoElementBounds-vWAS2NT6.js";import"./chevron-down-o9sdxfCV.js";import"./index-w6IpT_oR.js";import"./error-B2uabQYe.js";import"./BaseCbacBanner-BxOuxwtm.js";import"./makeExternalStore-M2yjAWof.js";import"./Tooltip-Bd17w1nK.js";import"./PopoverPopup-CFZCCanB.js";import"./debounce-BfCJX0Ug.js";import"./useOsdkClient-BkDk9PCS.js";import"./tick-Cu_c34Lw.js";import"./DropdownField-5zyXtgzR.js";import"./isEqual-CY1gbDwB.js";import"./withOsdkMetrics-DTO1kugV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
