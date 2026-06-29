import{f as b,j as a,r as i}from"./iframe-LgxWIvAh.js";import{O as u}from"./object-table-BFg660tq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKTxyjMX.js";import"./Table-hsiDr8Iu.js";import"./index-jVQz_y1l.js";import"./Dialog-BsQqfM1P.js";import"./cross-BmrQP5kf.js";import"./svgIconContainer-C4LlDx6S.js";import"./useBaseUiId-B0JyaV1q.js";import"./InternalBackdrop-BqNyqvBG.js";import"./composite-X3e3esOg.js";import"./index-6NU5zT2x.js";import"./index-aRK4Hsgt.js";import"./index-C3CwG81C.js";import"./useEventCallback-CRWCCZfC.js";import"./SkeletonBar-zVCwDn-w.js";import"./LoadingCell-GecFMksB.js";import"./ColumnConfigDialog-CHpi_f0c.js";import"./DraggableList-DhFW50Iy.js";import"./search-QryvcXV_.js";import"./Input-DSuaLQwi.js";import"./useControlled-BnUeF2hJ.js";import"./Button-DCWDV2eA.js";import"./small-cross-C_V7eeNC.js";import"./ActionButton-rYHZ04kC.js";import"./Checkbox-avMRRqVL.js";import"./minus-DyqblHDT.js";import"./tick-BCtGjsjJ.js";import"./useValueChanged-D8AI1hQb.js";import"./caret-down-BLQIBKY7.js";import"./CollapsiblePanel-A2oh8V26.js";import"./MultiColumnSortDialog-BsFmexQw.js";import"./MenuTrigger-DmK_fzSi.js";import"./CompositeItem-DotNC9t1.js";import"./ToolbarRootContext-DgJAa3hM.js";import"./getDisabledMountTransitionStyles-vdDCKDAv.js";import"./getPseudoElementBounds-DwkHoVxt.js";import"./chevron-down-DUJVW_to.js";import"./index-DPpg187b.js";import"./error-DiWpnJ3I.js";import"./BaseCbacBanner-CQ--Jo3U.js";import"./makeExternalStore-Bz-MMEvb.js";import"./Tooltip-VZAJDVgp.js";import"./PopoverPopup-R9G0vBQ6.js";import"./toNumber-D-rou-je.js";import"./useOsdkClient-C3KWVWRV.js";import"./DropdownField-CTNk2jql.js";import"./withOsdkMetrics-Bb7B8tU3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
