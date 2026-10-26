import{f as b,j as a,r as i}from"./iframe-CoFJxwHv.js";import{O as u}from"./object-table-BqrQ0y8E.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-SgnzBV.js";import"./Table-BYQbvbey.js";import"./index--Ea47wZq.js";import"./Dialog-WY18wqP5.js";import"./cross-OzyUyhBS.js";import"./svgIconContainer-DEFqmnfP.js";import"./useBaseUiId-2pTyOHN-.js";import"./InternalBackdrop-CW-JCB6u.js";import"./composite-D_cfAskA.js";import"./index-Cisz4sZL.js";import"./index-DB_u2R0T.js";import"./index-Bm20SrpM.js";import"./useEventCallback-S_u0-aCp.js";import"./SkeletonBar-qgco6YeA.js";import"./LoadingCell-CsadYx2G.js";import"./ColumnConfigDialog-Cul_FFgo.js";import"./DraggableList-BW_0kdA5.js";import"./search-XDurstN3.js";import"./Input-DKwzPwJ8.js";import"./useControlled-BYI1O7tr.js";import"./Button-2n8pstyv.js";import"./small-cross-CkY1R3ge.js";import"./ActionButton-NKKyQGHP.js";import"./Checkbox-Dt5HZSzU.js";import"./useValueChanged-Bzeit28k.js";import"./CollapsiblePanel-0TCT3zQ_.js";import"./MultiColumnSortDialog-B8a_YiXG.js";import"./MenuTrigger-CGyqBT_S.js";import"./CompositeItem-Ca1TKgPn.js";import"./ToolbarRootContext-wMltP8Ko.js";import"./getDisabledMountTransitionStyles-5g03uBQa.js";import"./getPseudoElementBounds-C6R4Oz02.js";import"./chevron-down-BlDOgSlD.js";import"./index-DqO9YIyX.js";import"./error-D5A6w5ju.js";import"./BaseCbacBanner-Dxfw8WWQ.js";import"./makeExternalStore-w2_wLIak.js";import"./Tooltip-U-nAk7Io.js";import"./PopoverPopup-B30sWIBx.js";import"./debounce-OWWmpWc0.js";import"./useOsdkClient-u5ILwDJn.js";import"./tick-BeCAXAuB.js";import"./DropdownField-CBHpKdZq.js";import"./isEqual-DVlAt4ne.js";import"./withOsdkMetrics-CWJx0Uh8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
