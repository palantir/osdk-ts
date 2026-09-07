import{f as b,j as a,r as i}from"./iframe-BRcSfazb.js";import{O as u}from"./object-table-CveJ5maX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BThzV-GG.js";import"./Table-DBKYzQPw.js";import"./index-DySxQINm.js";import"./Dialog-BfW2k7mq.js";import"./cross-CzKOFjwP.js";import"./svgIconContainer-DFKBkWeR.js";import"./useBaseUiId-BZvlmCQ4.js";import"./InternalBackdrop-CPNW_N8S.js";import"./composite-AJQkq8yV.js";import"./index-Bj7tQvH9.js";import"./index-C16WPibF.js";import"./index-Cvqq4wj-.js";import"./useEventCallback-yfWQdhbU.js";import"./SkeletonBar-CBiF5c3x.js";import"./LoadingCell-V9JYgXpH.js";import"./ColumnConfigDialog-8s7pSmnr.js";import"./DraggableList-_03NYpNz.js";import"./search-BmQN2RwS.js";import"./Input-Dlwmy4kD.js";import"./useControlled-DVF1OsTI.js";import"./isEqual-CoVSWq5v.js";import"./isObject-CPVVSD5k.js";import"./Button-B_Mp1Nhv.js";import"./ActionButton-CAEW5VU9.js";import"./Checkbox-Bp57gTcy.js";import"./useValueChanged-Cf_8cs-A.js";import"./CollapsiblePanel-G_UPH1_-.js";import"./MultiColumnSortDialog-TN06HLk6.js";import"./MenuTrigger-mo6qcJt4.js";import"./CompositeItem-BZBUwPb5.js";import"./ToolbarRootContext-nXfAGVO2.js";import"./getDisabledMountTransitionStyles-CvYowRBO.js";import"./getPseudoElementBounds-CpVepoIM.js";import"./chevron-down-g3mf6yyW.js";import"./index-C7jMOB_Z.js";import"./error-CmdKI6uR.js";import"./BaseCbacBanner-VAO8jA4f.js";import"./makeExternalStore-B5f_GCis.js";import"./Tooltip-C0DB0uEe.js";import"./PopoverPopup-C_mRv8Tw.js";import"./toNumber-BrTFY869.js";import"./useOsdkClient-B3E6OW-I.js";import"./tick-D9nOZ42t.js";import"./DropdownField-BfzIcpjx.js";import"./withOsdkMetrics-jypHlMPF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
