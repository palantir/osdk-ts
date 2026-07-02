import{f as b,j as a,r as i}from"./iframe-DCYRL4H9.js";import{O as u}from"./object-table-CU0VUOP7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DhNa-SfY.js";import"./Table-B641_0Xj.js";import"./index-BadqSvra.js";import"./Dialog-DxYNRIhT.js";import"./cross-MTDmMIYo.js";import"./svgIconContainer-yymEYtFs.js";import"./useBaseUiId-C40ePuZs.js";import"./InternalBackdrop-CCy8ddHm.js";import"./composite-DP2g4oyM.js";import"./index-0HeaUW6Z.js";import"./index-DseVM04U.js";import"./index-KeYTcCWE.js";import"./useEventCallback-DTO9K2A3.js";import"./SkeletonBar-C0C_a3Ju.js";import"./LoadingCell-CIT8EZ1T.js";import"./ColumnConfigDialog-BOVVoi2U.js";import"./DraggableList-Bhui0FWk.js";import"./search-DVQZ78U2.js";import"./Input-CytECBC7.js";import"./useControlled-DQQBI8PS.js";import"./Button-DY07Ql1q.js";import"./small-cross-B-Qk9TWM.js";import"./ActionButton-BeTo5Dky.js";import"./Checkbox-DYOH_fyF.js";import"./minus-Driyk1S9.js";import"./tick-efq2W7lq.js";import"./useValueChanged-0YgopMI9.js";import"./caret-down-BTCVMUSQ.js";import"./CollapsiblePanel-DWo4YYA0.js";import"./MultiColumnSortDialog-DIIlNI7P.js";import"./MenuTrigger-D0X6HjqR.js";import"./CompositeItem-Dr8bPHFw.js";import"./ToolbarRootContext-BkZzFyoX.js";import"./getDisabledMountTransitionStyles-Dyl_S-GD.js";import"./getPseudoElementBounds-BifiGWEk.js";import"./chevron-down-DjFwRC7H.js";import"./index-19uHMXQL.js";import"./error-CqjxyM1J.js";import"./BaseCbacBanner-D82oSXVY.js";import"./makeExternalStore-COlEuZuC.js";import"./Tooltip-DsxmPYKf.js";import"./PopoverPopup-BtQSgJ5F.js";import"./toNumber-CblXtSEU.js";import"./useOsdkClient-BgiuS7Wk.js";import"./DropdownField-GH1G-4Q-.js";import"./withOsdkMetrics-wzS6tx1u.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
