import{f as b,j as a,r as i}from"./iframe-DJYB1qk1.js";import{O as u}from"./object-table-CnQonoY8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DtuV8K9F.js";import"./Table-B90HPOGg.js";import"./index-DonW1mkl.js";import"./Dialog-DPxIre9H.js";import"./cross-Bpub1NfR.js";import"./svgIconContainer-BbsWyzEj.js";import"./useBaseUiId-DL-SGNBR.js";import"./InternalBackdrop-eBfWZ-MD.js";import"./composite-CC6F0Qsz.js";import"./index-D8Ycj_o4.js";import"./index-Ca9Z72uB.js";import"./index-CvaTYoMt.js";import"./useEventCallback-uzRZFC7Y.js";import"./SkeletonBar-BLD3bcxm.js";import"./LoadingCell-Dgc9EthY.js";import"./ColumnConfigDialog-DeLr0uma.js";import"./DraggableList-MrlrcOkU.js";import"./search-5CkafOxN.js";import"./Input-1LkIvDzf.js";import"./useControlled-oyOM-Xp0.js";import"./isEqual-CewC2dRg.js";import"./isObject-CljKLLYD.js";import"./Button-Duzr31W4.js";import"./ActionButton-4WynwJXW.js";import"./Checkbox-D-pUxlIv.js";import"./useValueChanged-DbwZIZqR.js";import"./CollapsiblePanel-CKCvm0v6.js";import"./MultiColumnSortDialog-DJ_irqfG.js";import"./MenuTrigger-HGLe02pf.js";import"./CompositeItem-CUawBViA.js";import"./ToolbarRootContext-CV2B82ef.js";import"./getDisabledMountTransitionStyles-bi6UcqkV.js";import"./getPseudoElementBounds-qT7EHfZ1.js";import"./chevron-down-BBFBeDj_.js";import"./index-C2FWrg77.js";import"./error-BpmsLSMo.js";import"./BaseCbacBanner-B5alV3yj.js";import"./makeExternalStore-CkRVjc78.js";import"./Tooltip-CPTKLQ5G.js";import"./PopoverPopup-CyeyM8PS.js";import"./toNumber-CNd-iZ3r.js";import"./useOsdkClient-BLf8vx4g.js";import"./tick-BQV3GL8y.js";import"./DropdownField-CLncidES.js";import"./withOsdkMetrics-B_Dkj_nQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
