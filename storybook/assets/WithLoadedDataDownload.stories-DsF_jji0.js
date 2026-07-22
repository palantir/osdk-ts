import{f as b,j as a,r as i}from"./iframe-431E4LQg.js";import{O as u}from"./object-table-dPGcdVPh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BWpivP1v.js";import"./index-BbWCzhmW.js";import"./Dialog-t_1XK8Zx.js";import"./cross-BpRFgWFZ.js";import"./svgIconContainer-CV2TKJDI.js";import"./useBaseUiId-PrWN03i5.js";import"./InternalBackdrop-C20WJJcT.js";import"./composite-DF9yjivc.js";import"./index-DVf7JyOD.js";import"./index-DPQeQcQk.js";import"./index-zToJB9eW.js";import"./useEventCallback-mmCmp6GS.js";import"./SkeletonBar-CnxFqsDt.js";import"./LoadingCell-B41IYy0N.js";import"./ColumnConfigDialog-ramoj-HC.js";import"./DraggableList-D714YOMH.js";import"./search-D9nf6d3V.js";import"./Input-DR9taV_j.js";import"./useControlled-M9mWr4jz.js";import"./isEqual-Bt2mz_A2.js";import"./isObject-BT_9R7CO.js";import"./Button-DQim2McI.js";import"./ActionButton-BpX1YI-D.js";import"./Checkbox-Zhrb63ez.js";import"./useValueChanged-XFoHlAeQ.js";import"./CollapsiblePanel-DK1pS9nS.js";import"./MultiColumnSortDialog-BgDhXipL.js";import"./MenuTrigger-Mes3dX_c.js";import"./CompositeItem-Bx4DSMlZ.js";import"./ToolbarRootContext-Dar9nRMQ.js";import"./getDisabledMountTransitionStyles-B4qWDZrz.js";import"./getPseudoElementBounds-DnBd_onX.js";import"./chevron-down-aSGYZFUK.js";import"./index-BvAj92lD.js";import"./error-C_C4jw6J.js";import"./BaseCbacBanner-BYVkt7RO.js";import"./makeExternalStore-D34wlhpf.js";import"./Tooltip-DE2xFsIG.js";import"./PopoverPopup-661pYevp.js";import"./toNumber-DD6_Axav.js";import"./useOsdkClient-BQsPso7c.js";import"./tick-PwUMxNNd.js";import"./DropdownField-D5zPM2-4.js";import"./withOsdkMetrics-BRYSsTVO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
