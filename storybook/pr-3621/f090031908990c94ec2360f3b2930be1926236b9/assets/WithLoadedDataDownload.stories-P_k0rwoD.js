import{f as b,j as a,r as i}from"./iframe-BuaThpCY.js";import{O as u}from"./object-table-_KjG2PoH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DDPJP__E.js";import"./Table-S_Q083n6.js";import"./index-Bfa5fFlh.js";import"./Dialog-fyprW7_d.js";import"./cross-DRuNW182.js";import"./svgIconContainer-1C1jOQ0R.js";import"./useBaseUiId-DSybLx0z.js";import"./InternalBackdrop-CSZFyIzx.js";import"./composite-BsEo-LBr.js";import"./index-CccI9Mtb.js";import"./index-Bopn5WYv.js";import"./index-7T4oSQIU.js";import"./useEventCallback-Bud9vefP.js";import"./SkeletonBar-B8GA1hUw.js";import"./LoadingCell-C6_CSUZA.js";import"./ColumnConfigDialog-DrYkqIFL.js";import"./DraggableList-BM2oW5cB.js";import"./search-D5LGh93M.js";import"./Input-DauCBVrW.js";import"./useControlled-CX-ZF3Hm.js";import"./Button-DDFnyr2M.js";import"./small-cross-D33YLf1A.js";import"./ActionButton-B3AJr4-F.js";import"./Checkbox-DrrngAn8.js";import"./useValueChanged-zhEpBd3F.js";import"./CollapsiblePanel-BgSv5-PI.js";import"./MultiColumnSortDialog-B9NhSVDk.js";import"./MenuTrigger-DIlEvoUR.js";import"./CompositeItem-UqhqC17s.js";import"./ToolbarRootContext-DfriOFVL.js";import"./getDisabledMountTransitionStyles-CTxR0o8M.js";import"./getPseudoElementBounds-zoqz-8A0.js";import"./chevron-down-DaBbmd4Q.js";import"./index-ByWKtKHT.js";import"./error-Cb1Tru8b.js";import"./BaseCbacBanner-BHI3EQ-z.js";import"./makeExternalStore-CpuGo_RY.js";import"./Tooltip-Ds-EooAn.js";import"./PopoverPopup-HV-P1tpi.js";import"./toNumber-CWN_nL8d.js";import"./useOsdkClient-BfjJVEnp.js";import"./tick-6w-RVTpg.js";import"./DropdownField-CHvOboTA.js";import"./withOsdkMetrics-LCqWI8sO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
