import{f as b,j as a,r as i}from"./iframe-CxBuRuZT.js";import{O as u}from"./object-table-BJVwag-m.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKlLlV4L.js";import"./Table-7l1ILzWy.js";import"./index-Dm1AhSPd.js";import"./Dialog-DZ5PAB7i.js";import"./cross-eZd0XRRK.js";import"./svgIconContainer-BN5I9dUw.js";import"./useBaseUiId-B_g5EDL1.js";import"./InternalBackdrop-RdaR9FzT.js";import"./composite-DgJMS31U.js";import"./index-PgXnUZ6T.js";import"./index-Bf9pteT-.js";import"./index-tLZVhYtz.js";import"./useEventCallback-CM2a10EJ.js";import"./SkeletonBar-B8kqLyt4.js";import"./LoadingCell-Cfrq_bQw.js";import"./ColumnConfigDialog-C1ZrB3kd.js";import"./DraggableList-BJfm7tsC.js";import"./search-bomuUYil.js";import"./Input-u_JFcwHL.js";import"./useControlled-Cp0M8Tx1.js";import"./Button-D6Lf0eZd.js";import"./small-cross-BgCy3Ley.js";import"./ActionButton-DtFu6F6B.js";import"./Checkbox-4XdcM4Kd.js";import"./useValueChanged-CClMU3p4.js";import"./CollapsiblePanel-YQGI0brq.js";import"./MultiColumnSortDialog-BxaAmnnt.js";import"./MenuTrigger-YM1HyDEF.js";import"./CompositeItem-CsypoJ1W.js";import"./ToolbarRootContext-2U_PyGcG.js";import"./getDisabledMountTransitionStyles-BP-hllXX.js";import"./getPseudoElementBounds-vYhEf5F8.js";import"./chevron-down-jocrG32E.js";import"./index-BkU9QJkZ.js";import"./error-BQE7CTFl.js";import"./BaseCbacBanner-urKV_0P9.js";import"./makeExternalStore-BD3oFxaN.js";import"./Tooltip-BtrECgMK.js";import"./PopoverPopup-C_KjtFJ3.js";import"./toNumber-DX_-oLKs.js";import"./useOsdkClient-BgeTWPax.js";import"./tick-DXorhXkh.js";import"./DropdownField-B3CQjxCI.js";import"./withOsdkMetrics-C0xfDblt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
