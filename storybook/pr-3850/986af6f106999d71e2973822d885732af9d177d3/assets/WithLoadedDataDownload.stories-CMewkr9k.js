import{f as b,j as a,r as i}from"./iframe-B8ePIdgx.js";import{O as u}from"./object-table-BDHL_SDm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CO52apix.js";import"./Table-B3G0R4Ei.js";import"./index-DUi6XBWn.js";import"./Dialog-yiIybKoY.js";import"./cross-Z2WIVKHq.js";import"./svgIconContainer-B5mfSzbk.js";import"./useBaseUiId--yhQINEj.js";import"./InternalBackdrop-Cna5j6JC.js";import"./composite-DrvPRKh9.js";import"./index-DzqwBQvc.js";import"./index-BDjNZM-d.js";import"./index-DJ6GgvW1.js";import"./useEventCallback-CqNNi0CJ.js";import"./SkeletonBar-CWitf-97.js";import"./LoadingCell-tI3Ymnd3.js";import"./ColumnConfigDialog-Bd9fLb8z.js";import"./DraggableList-E3xCY56a.js";import"./search-CRVGvOET.js";import"./Input-D21o8IPI.js";import"./useControlled-DkyHp8L_.js";import"./isEqual-9--5X3Q2.js";import"./isObject-BqZ_5db-.js";import"./Button-B1Ldn3Hf.js";import"./ActionButton-BcBaxta7.js";import"./Checkbox-L4xJmh-b.js";import"./useValueChanged-BNoCYxh2.js";import"./CollapsiblePanel-Bp2Y834B.js";import"./MultiColumnSortDialog-43iZe9aA.js";import"./MenuTrigger-C4fe3BSA.js";import"./CompositeItem-DUbz8YTd.js";import"./ToolbarRootContext-CpKnibLo.js";import"./getDisabledMountTransitionStyles-VYuEU4Z8.js";import"./getPseudoElementBounds-KMVduuX9.js";import"./chevron-down-VVimmYFs.js";import"./index-cjRW8DRN.js";import"./error-Cey_f2IB.js";import"./BaseCbacBanner-BvPN6XVJ.js";import"./makeExternalStore-BIU4uaP7.js";import"./Tooltip-BN01tXVt.js";import"./PopoverPopup-Zr6i6uzp.js";import"./toNumber-BEwV3n-j.js";import"./useOsdkClient-B6g5iTpe.js";import"./tick-C9Ba3a3m.js";import"./DropdownField-DHK94NfU.js";import"./withOsdkMetrics-CXP8M-KN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
