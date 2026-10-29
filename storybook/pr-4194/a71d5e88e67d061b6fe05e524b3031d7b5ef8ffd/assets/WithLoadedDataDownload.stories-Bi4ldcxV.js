import{f as b,j as a,r as i}from"./iframe-BGwIwWEh.js";import{O as u}from"./object-table-BbALfnP_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DaJMqj_l.js";import"./Table-DV7qKTD_.js";import"./index-IqKqgeW3.js";import"./Dialog-60LtrDUL.js";import"./cross-CCJ4Erjw.js";import"./svgIconContainer-o0yAa7DN.js";import"./useBaseUiId-Bx0PVkvu.js";import"./InternalBackdrop-BceHrAMg.js";import"./composite-B2YG03DA.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./index-DVuyxqwK.js";import"./useEventCallback-Bp5P_gp0.js";import"./SkeletonBar-Cicsnuhb.js";import"./LoadingCell-C7ev7AcJ.js";import"./ColumnConfigDialog-DYQQN3rc.js";import"./DraggableList-DZJjmD7T.js";import"./search-BpQNC6sv.js";import"./Input-D41ZdIt3.js";import"./useControlled-DZytncd1.js";import"./Button-BhV9_fzg.js";import"./small-cross-DWE0gQPB.js";import"./ActionButton-BX1OZitO.js";import"./Checkbox-CS9_YEgp.js";import"./useValueChanged-DzKjeiR-.js";import"./CollapsiblePanel-CuJlxl5T.js";import"./MultiColumnSortDialog-wpz2VgHC.js";import"./MenuTrigger-D1DOTVk2.js";import"./CompositeItem-D-aFyv1W.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./getDisabledMountTransitionStyles-fuWoY_wo.js";import"./getPseudoElementBounds-DNrhWm0z.js";import"./chevron-down-Bm6Tj7Z6.js";import"./index-CTSacj2z.js";import"./error-D5T_pCuL.js";import"./BaseCbacBanner-Z8GzQNLS.js";import"./makeExternalStore-BRaFC0yj.js";import"./Tooltip-D5vtKM_y.js";import"./PopoverPopup-DYOwTnyz.js";import"./debounce-BJo4Ztyn.js";import"./useOsdkClient-B5DU8aU4.js";import"./tick-DNfwJYjk.js";import"./DropdownField-QuxoTji1.js";import"./isEqual-CJsdcYTp.js";import"./withOsdkMetrics-_pxO3ZE7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
