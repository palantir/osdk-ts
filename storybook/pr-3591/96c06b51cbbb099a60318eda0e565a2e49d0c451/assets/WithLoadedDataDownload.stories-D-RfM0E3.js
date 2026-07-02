import{f as b,j as a,r as i}from"./iframe-C7ySVT8o.js";import{O as u}from"./object-table-dZdsA0yv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDkQBTym.js";import"./Table-CHMYumax.js";import"./index-CPF4-L8A.js";import"./Dialog-j1g1zABe.js";import"./cross-4Asy9XGe.js";import"./svgIconContainer-oEr_wdi1.js";import"./useBaseUiId-BQjkdaK-.js";import"./InternalBackdrop-3AhCico8.js";import"./composite-BdnZ_3c5.js";import"./index-uf0-eYVm.js";import"./index--LJ-8KIX.js";import"./index-B_8b9Lsh.js";import"./useEventCallback-9VaMr6HM.js";import"./SkeletonBar-C_tERQRK.js";import"./LoadingCell-y3Y98ABk.js";import"./ColumnConfigDialog-ByschaXD.js";import"./DraggableList-d1ERpiWj.js";import"./search-D-8rX3NU.js";import"./Input-waYfT-p9.js";import"./useControlled-DQYP7F2G.js";import"./Button-C5PI83Nd.js";import"./small-cross-NhkxdYba.js";import"./ActionButton-BLBTcGbs.js";import"./Checkbox-CRXALS7l.js";import"./minus-DV8GyOat.js";import"./tick-Bn8YHkca.js";import"./useValueChanged-g0yMaqN7.js";import"./caret-down-8It5xaps.js";import"./CollapsiblePanel-D__zWz31.js";import"./MultiColumnSortDialog-J-ae2-r5.js";import"./MenuTrigger-CiPPkQTa.js";import"./CompositeItem-Pg_quQBf.js";import"./ToolbarRootContext-PcU21RR5.js";import"./getDisabledMountTransitionStyles-Bhz8TiZP.js";import"./getPseudoElementBounds-BzGKZweA.js";import"./chevron-down-C26vSaih.js";import"./index-_7DZxQKg.js";import"./error-LCGwqRYy.js";import"./BaseCbacBanner-AZE0pJoZ.js";import"./makeExternalStore-BjG2YExf.js";import"./Tooltip-CI9ZQ4II.js";import"./PopoverPopup-B6VoWGpC.js";import"./toNumber-Dnd2kO7h.js";import"./useOsdkClient--WrZo_wi.js";import"./DropdownField-BJYygTgZ.js";import"./withOsdkMetrics-BcN72Bo5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
