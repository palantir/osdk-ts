import{f as b,j as a,r as i}from"./iframe-DU2asgHi.js";import{O as u}from"./object-table-BTUn_pwM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DsqXxi_A.js";import"./Table-BK6MjrbR.js";import"./index-DFhnaaAr.js";import"./Dialog-D7SQA5eP.js";import"./cross-C6UrNyea.js";import"./svgIconContainer-BKWt3i43.js";import"./useBaseUiId-BPYAUhe_.js";import"./InternalBackdrop-LSfiQ1uI.js";import"./composite-BO_QtSwT.js";import"./index-B61C-7go.js";import"./index-BBpWeKP6.js";import"./index-BnK_3hJb.js";import"./useEventCallback-C0eCyfdL.js";import"./SkeletonBar-CT9vipnR.js";import"./LoadingCell-B6hALW9X.js";import"./ColumnConfigDialog-DH7bwzAf.js";import"./DraggableList-DVsqBxmX.js";import"./search-Bj-aA1ip.js";import"./Input-CFKQAvGp.js";import"./useControlled-B_Wddgsf.js";import"./isEqual-BcmiWPbF.js";import"./isObject-C5VixieA.js";import"./Button-BoKqauNA.js";import"./ActionButton-Cs3dTYSO.js";import"./Checkbox-Nd9Czb6o.js";import"./useValueChanged-CrnYbGOp.js";import"./CollapsiblePanel-_UOx9Pfc.js";import"./MultiColumnSortDialog-DH9XT3S7.js";import"./MenuTrigger-CV4AFa8u.js";import"./CompositeItem-j9eZ3SSA.js";import"./ToolbarRootContext-DOV4hBBf.js";import"./getDisabledMountTransitionStyles-C9THsZem.js";import"./getPseudoElementBounds-BZyMsPoL.js";import"./chevron-down-BwlEqaIf.js";import"./index-BIeU9ja5.js";import"./error-BLPZYUEH.js";import"./BaseCbacBanner-CowZ5QYH.js";import"./makeExternalStore-C5_0kV4g.js";import"./Tooltip-BrdrfLc0.js";import"./PopoverPopup-CIZMrB5x.js";import"./toNumber-B0EPJkG9.js";import"./useOsdkClient-YrAbT238.js";import"./tick-Bg_EfLqB.js";import"./DropdownField-BNrrHq5s.js";import"./withOsdkMetrics-B4h2Vzuy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
