import{f as b,j as a,r as i}from"./iframe-CF2-Sj3u.js";import{O as u}from"./object-table-D-9dfsCF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGiL_0YC.js";import"./Table-D5cZPvIc.js";import"./index-Di6vk80_.js";import"./Dialog-DneW6gao.js";import"./cross-DovANZKV.js";import"./svgIconContainer-Eu_OnahF.js";import"./useBaseUiId-DnMjxbKf.js";import"./InternalBackdrop-Dc8B1tjA.js";import"./composite-ozsOFMJN.js";import"./index-B1Ce7KrJ.js";import"./index-DbSzIC9m.js";import"./index-Q0yV-jk7.js";import"./useEventCallback-CR7__PSV.js";import"./SkeletonBar-DNrk08YG.js";import"./LoadingCell-BrDcRP63.js";import"./ColumnConfigDialog-BJjBF2Xa.js";import"./DraggableList-D3frEl9E.js";import"./search-CO3O3W7D.js";import"./Input-DNRQ_uyR.js";import"./useControlled-C2elAlNO.js";import"./Button-D2M1A0dK.js";import"./small-cross-BEhouiho.js";import"./ActionButton-cYrzvlHk.js";import"./Checkbox-DZ7FSXRm.js";import"./minus-C2Q4EcYx.js";import"./tick-Dngje7AH.js";import"./useValueChanged-Blvtj1na.js";import"./caret-down-D8GRaOiX.js";import"./CollapsiblePanel-D8mD9U6B.js";import"./MultiColumnSortDialog-D0GW8XBQ.js";import"./MenuTrigger-Circ_f3U.js";import"./CompositeItem-Dtsy8NtD.js";import"./ToolbarRootContext-BO6LBivU.js";import"./getDisabledMountTransitionStyles-BT30iXD2.js";import"./getPseudoElementBounds-BSP39vYn.js";import"./chevron-down-CC6GeuYy.js";import"./index-DdqxCR7f.js";import"./error-C2rzVhaz.js";import"./BaseCbacBanner-B36dg4_6.js";import"./makeExternalStore-CjotNSjE.js";import"./Tooltip-CRbx97MV.js";import"./PopoverPopup-1OuglnAz.js";import"./toNumber-DOnmS6H9.js";import"./useOsdkClient-Cbyr9xhF.js";import"./DropdownField-B8snf_lP.js";import"./withOsdkMetrics-B_gFNDRY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
