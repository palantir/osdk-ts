import{f as b,j as a,r as i}from"./iframe-Bg0i_UAO.js";import{O as u}from"./object-table-CAxIaCCb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bomzM5Jo.js";import"./Table-CGrH-X0a.js";import"./index-iuNvYGUj.js";import"./Dialog-TKFKzbdM.js";import"./cross-DYXULJqv.js";import"./svgIconContainer-458A5wVg.js";import"./useBaseUiId-Dy2tLJKh.js";import"./InternalBackdrop-CVk0rAPJ.js";import"./composite-DU2hn-v2.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./index-Ce8RK2-k.js";import"./useEventCallback-DQN4LN3R.js";import"./SkeletonBar-C9Q9W8wl.js";import"./LoadingCell-CEhAQo9k.js";import"./ColumnConfigDialog-CJ9aQ0gr.js";import"./DraggableList-D5_UR4g5.js";import"./search-FIM5R_Xb.js";import"./Input-DGqcQ9G-.js";import"./useControlled-BYTWKxAR.js";import"./Button-BG7UnPBU.js";import"./small-cross-CCjOzjzK.js";import"./ActionButton-DnfLk4MD.js";import"./Checkbox-eD26ecQs.js";import"./useValueChanged-B-bZoMqO.js";import"./CollapsiblePanel-CQh_sS0z.js";import"./MultiColumnSortDialog-CnlpFVmC.js";import"./MenuTrigger-D1u63OZL.js";import"./CompositeItem-DcA0lzjF.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./getDisabledMountTransitionStyles-DmbZ1RCY.js";import"./getPseudoElementBounds-HKqm4JQP.js";import"./chevron-down-WqwXZksn.js";import"./index-DdfZaivF.js";import"./error-DVM1iMsf.js";import"./BaseCbacBanner-DVJrTKK6.js";import"./makeExternalStore-DXmjaos-.js";import"./Tooltip-De8rcIwq.js";import"./PopoverPopup-BF-Javiq.js";import"./debounce-BL-pXwMa.js";import"./useOsdkClient-r7ETv_l7.js";import"./tick-CXF_8gMW.js";import"./DropdownField-DD3uTne1.js";import"./isEqual-CUS3cLoh.js";import"./withOsdkMetrics-CcEO5U0p.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
