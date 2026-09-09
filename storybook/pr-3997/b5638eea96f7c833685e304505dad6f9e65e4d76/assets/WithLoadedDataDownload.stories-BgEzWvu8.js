import{f as b,j as a,r as i}from"./iframe-9-OswRKS.js";import{O as u}from"./object-table-wpL3Cm1K.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DYL5InEO.js";import"./Table-CvGw4i9O.js";import"./index-SvIFWBde.js";import"./Dialog-C30pJrHD.js";import"./cross-C9OnvPLu.js";import"./svgIconContainer-DVdpIesk.js";import"./useBaseUiId-CXx1U6Z5.js";import"./InternalBackdrop-B8-pARTC.js";import"./composite-BDc56zIL.js";import"./index-HMIJrenA.js";import"./index-D2h7VYDA.js";import"./index-CgAEYrry.js";import"./useEventCallback-Jrhf3FEf.js";import"./SkeletonBar-B0TH4rTw.js";import"./LoadingCell-OeZp9zKS.js";import"./ColumnConfigDialog-CKJWMH1q.js";import"./DraggableList-IWsi11_u.js";import"./search-DPzUsQds.js";import"./Input-0npSrlPh.js";import"./useControlled-CGEFCoiG.js";import"./Button-gzjofzeF.js";import"./small-cross-zc5ZGHVz.js";import"./ActionButton-mnEAQH7e.js";import"./Checkbox-QBMXMF1z.js";import"./useValueChanged-D0cvyeOe.js";import"./CollapsiblePanel-DZN0B05J.js";import"./MultiColumnSortDialog-Qc0ZudeP.js";import"./MenuTrigger-Ql2c4oyO.js";import"./CompositeItem-TZo4ZNUL.js";import"./ToolbarRootContext-DtmptTL0.js";import"./getDisabledMountTransitionStyles-B9CzyLp8.js";import"./getPseudoElementBounds-CkUMfr4i.js";import"./chevron-down-B8yYoTwv.js";import"./index-D44_FbgA.js";import"./error-BLLqk3sD.js";import"./BaseCbacBanner-BSIiSJcU.js";import"./makeExternalStore-D5luXUgx.js";import"./Tooltip-BCzkmJcH.js";import"./PopoverPopup-KmKJk9qz.js";import"./debounce-Bb1Cpy72.js";import"./useOsdkClient-B_1Wh43n.js";import"./tick-DBm-RnL7.js";import"./DropdownField-BZtIeQpR.js";import"./isEqual-CSlBgnD1.js";import"./withOsdkMetrics-DVJybCh6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
