import{f as b,j as a,r as i}from"./iframe-BHGDbtGe.js";import{O as u}from"./object-table-PLsUGZhh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D5OaizyV.js";import"./Table-qmoBiGzY.js";import"./index-BGbjnL0r.js";import"./Dialog-DBvGyyq5.js";import"./cross-DV8hBvU3.js";import"./svgIconContainer-CZX0yke1.js";import"./useBaseUiId-BxePW4ZZ.js";import"./InternalBackdrop-DcMO0k_5.js";import"./composite-DLWXPmjE.js";import"./index-Q7uht_3R.js";import"./index-DOkphcqk.js";import"./index-CIyc8_0F.js";import"./useEventCallback-D9XTGJn3.js";import"./SkeletonBar-D49d_fWs.js";import"./LoadingCell-BJv2-NGK.js";import"./ColumnConfigDialog-BUcZT3_2.js";import"./DraggableList-D4cXgHW3.js";import"./search-D5NN5dep.js";import"./Input-CI0ds8FO.js";import"./useControlled-CIItNp9c.js";import"./isEqual-DuvxfOEa.js";import"./isObject-DmYI6OMl.js";import"./Button-CWnsWqv5.js";import"./ActionButton-BVvCW9xD.js";import"./Checkbox-CzEGHWa7.js";import"./useValueChanged-BbD1lFs3.js";import"./CollapsiblePanel-Dpzjda5A.js";import"./MultiColumnSortDialog-BhFY8IBd.js";import"./MenuTrigger-8djQiS6H.js";import"./CompositeItem-C05Q1deB.js";import"./ToolbarRootContext-Dd8UM72f.js";import"./getDisabledMountTransitionStyles-B6WkCrv_.js";import"./getPseudoElementBounds-ZMPNX3ba.js";import"./chevron-down-Ddfl__cg.js";import"./index-BIC30L0-.js";import"./error-DTLowD9G.js";import"./BaseCbacBanner-q8yPTdnN.js";import"./makeExternalStore-BcDoXpGE.js";import"./Tooltip-C2epuRfV.js";import"./PopoverPopup-Da7vYhnj.js";import"./toNumber-CbxdLfR-.js";import"./useOsdkClient-Ckca3cDS.js";import"./tick-DA3-zK9O.js";import"./DropdownField-DO_St2lf.js";import"./withOsdkMetrics-BNlgOp0v.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
