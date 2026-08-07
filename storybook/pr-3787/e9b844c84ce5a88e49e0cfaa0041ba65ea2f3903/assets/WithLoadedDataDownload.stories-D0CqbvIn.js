import{f as b,j as a,r as i}from"./iframe-B0W1tjyx.js";import{O as u}from"./object-table-ByW0iRN4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-9BNFzYVn.js";import"./Table-CDqAze49.js";import"./index-B0ZI_T4A.js";import"./Dialog-1Hc8hvmW.js";import"./cross-Bvf_hoCy.js";import"./svgIconContainer-JVsHGGQJ.js";import"./useBaseUiId-Dg0EtU88.js";import"./InternalBackdrop-pkhhExjC.js";import"./composite-BvCgECMb.js";import"./index-0JUS0bl9.js";import"./index-D_b8RHzl.js";import"./index-9KlYwXLT.js";import"./useEventCallback-D2l6XFwH.js";import"./SkeletonBar-SdaBCFfG.js";import"./LoadingCell-Cyl597ns.js";import"./ColumnConfigDialog-CEm1F5GG.js";import"./DraggableList-BIlxskkh.js";import"./search-BdvsCHgj.js";import"./Input-CJ9Yoyko.js";import"./useControlled-CFQJO6Op.js";import"./isEqual-kHHHMxlJ.js";import"./isObject-CEG66Ysn.js";import"./Button-CllyD5Fk.js";import"./ActionButton-FCYoe6pd.js";import"./Checkbox-ClP_IzO-.js";import"./useValueChanged-B7WAZ2Po.js";import"./CollapsiblePanel-C1SH974_.js";import"./MultiColumnSortDialog-BUH-mu_E.js";import"./MenuTrigger-DidihynY.js";import"./CompositeItem-B3C1me1o.js";import"./ToolbarRootContext-D6BYbpCQ.js";import"./getDisabledMountTransitionStyles-ClGEvYNq.js";import"./getPseudoElementBounds-S5ZjmQl8.js";import"./chevron-down-BO0Ma7WA.js";import"./index-B26rJ8sm.js";import"./error-hxPE7cUz.js";import"./BaseCbacBanner-BT_ehWB_.js";import"./makeExternalStore-s1PuIN2e.js";import"./Tooltip-ft-HOAV-.js";import"./PopoverPopup-DZUhAEPi.js";import"./toNumber-CjgDMmjI.js";import"./useOsdkClient-BzN2he8l.js";import"./tick-BHbmMwuf.js";import"./DropdownField-D86cVelw.js";import"./withOsdkMetrics-Dl2A3XwS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
