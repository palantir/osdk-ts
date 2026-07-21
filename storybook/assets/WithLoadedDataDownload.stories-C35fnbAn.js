import{f as b,j as a,r as i}from"./iframe-BLfBkU7c.js";import{O as u}from"./object-table-C3vL0bmg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D0FiUjlS.js";import"./index-Cd1weDkz.js";import"./Dialog-CndgrS_6.js";import"./cross-6JE2X0ld.js";import"./svgIconContainer-Cf593s56.js";import"./useBaseUiId-CLtvZEwH.js";import"./InternalBackdrop-B5NPQxjE.js";import"./composite-Cbye_36A.js";import"./index-D2H6BtrG.js";import"./index-B0gO-SUD.js";import"./index-Bi_iR8lV.js";import"./useEventCallback-nzF3QAZh.js";import"./SkeletonBar-UDkcjDRx.js";import"./LoadingCell-DNBt0Nkn.js";import"./ColumnConfigDialog-DHShmpxi.js";import"./DraggableList-D08tIHrT.js";import"./search-0LJGK5RR.js";import"./Input-DOxnnVCU.js";import"./useControlled-CjKAHLhK.js";import"./isEqual-wVa2de3W.js";import"./isObject-CsnjC0Hk.js";import"./Button-6ROdSkPj.js";import"./ActionButton-CIkn4yRo.js";import"./Checkbox-Dvmw7P4e.js";import"./useValueChanged-3nqKGhDz.js";import"./CollapsiblePanel-TDWzc7x-.js";import"./MultiColumnSortDialog-Csd8vrCM.js";import"./MenuTrigger-Bx9pFTch.js";import"./CompositeItem-24AhdNq5.js";import"./ToolbarRootContext-ByAIklDJ.js";import"./getDisabledMountTransitionStyles-CRs-vJXf.js";import"./getPseudoElementBounds-BT7D927s.js";import"./chevron-down-CNVJHkYO.js";import"./index-_yx_jyGy.js";import"./error-DVQkpXV7.js";import"./BaseCbacBanner-DT5NKK48.js";import"./makeExternalStore-Bgc2loVA.js";import"./Tooltip-C5OsiSM2.js";import"./PopoverPopup-c9m39GkN.js";import"./toNumber-Dq1Rhjak.js";import"./useOsdkClient-Q5Gc6Pva.js";import"./tick-Co3kNQ_O.js";import"./DropdownField-CCXPVpR7.js";import"./withOsdkMetrics-BHPjsBct.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
