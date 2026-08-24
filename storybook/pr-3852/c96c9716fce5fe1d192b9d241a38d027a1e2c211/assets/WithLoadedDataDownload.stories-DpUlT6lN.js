import{f as b,j as a,r as i}from"./iframe-DzT5j6tC.js";import{O as u}from"./object-table-BCMniGH5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B-8AR-WS.js";import"./Table-BK9mPHED.js";import"./index-Du12mPUJ.js";import"./Dialog-Ddsywm3S.js";import"./cross-D85Hg8OP.js";import"./svgIconContainer-Bzq4qT7m.js";import"./useBaseUiId-CpQ8jfP-.js";import"./InternalBackdrop-BCahMtwn.js";import"./composite-BCA7ssjy.js";import"./index-DAVqPwR5.js";import"./index-CTNdmRCH.js";import"./index-C-UHVdd5.js";import"./useEventCallback-BqydB81L.js";import"./SkeletonBar-DNThCLH9.js";import"./LoadingCell-CpIup8j7.js";import"./ColumnConfigDialog-BLnr_Ssi.js";import"./DraggableList-Q1AkYwIE.js";import"./search-DpfM7OJ3.js";import"./Input-MtWlDuZi.js";import"./useControlled-dRwpZLWP.js";import"./Button-CbXsMpDo.js";import"./small-cross-BdXSABdt.js";import"./ActionButton-Bikf6G7r.js";import"./Checkbox-BK8rsuCR.js";import"./useValueChanged-D95RiMEI.js";import"./CollapsiblePanel-qsyp5uP7.js";import"./MultiColumnSortDialog-CrFxJwbI.js";import"./MenuTrigger-Cd_2Jq9c.js";import"./CompositeItem-BHaHERWU.js";import"./ToolbarRootContext-BTqh8qKL.js";import"./getDisabledMountTransitionStyles-q1RxA6aN.js";import"./getPseudoElementBounds-DUGfes6K.js";import"./chevron-down-DCGqt8p6.js";import"./index-DVvQaOMD.js";import"./error-DhCIc3En.js";import"./BaseCbacBanner-CSMzJcXJ.js";import"./makeExternalStore-B9-sDT_L.js";import"./Tooltip-DFuWFTMp.js";import"./PopoverPopup-DZI317gO.js";import"./debounce-Ble3VJ_v.js";import"./useOsdkClient-qXeZXSCS.js";import"./tick-Dk_XebTk.js";import"./DropdownField-CEnTX5QL.js";import"./isEqual-BHNs_CPb.js";import"./withOsdkMetrics-BwVYFtll.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
