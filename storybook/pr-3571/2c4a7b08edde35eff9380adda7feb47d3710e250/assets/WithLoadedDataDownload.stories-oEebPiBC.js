import{f as b,j as a,r as i}from"./iframe-B3--SWXh.js";import{O as u}from"./object-table-DwSQDkDk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DbC-e6ij.js";import"./Table-BOxDgHun.js";import"./index-COk_zlCt.js";import"./Dialog-BlHDAPNu.js";import"./cross-CgmvkO1B.js";import"./svgIconContainer-CZ-MqUJE.js";import"./useBaseUiId-unxoeY_a.js";import"./InternalBackdrop-B__o5AWh.js";import"./composite-BGS0ODQ2.js";import"./index-BgSZhSEQ.js";import"./index-zyXz2MZS.js";import"./index-COvE_MKU.js";import"./useEventCallback-DcEFlSv0.js";import"./SkeletonBar-B5XZ7NBd.js";import"./LoadingCell-abMpKQSw.js";import"./ColumnConfigDialog-69IsMT36.js";import"./DraggableList-BcXW1_ME.js";import"./Input-C13vaZFn.js";import"./useControlled-CSj0MddA.js";import"./Button-BjF4Tn_i.js";import"./small-cross-CeQ6jTlB.js";import"./ActionButton-BV2J17JR.js";import"./Checkbox-DCmZOLRJ.js";import"./minus-CU6mo5-V.js";import"./useValueChanged-BUplCMtl.js";import"./caret-down-CTE-lYwS.js";import"./CollapsiblePanel-WyHhnCBf.js";import"./MultiColumnSortDialog-U5kWtT6_.js";import"./MenuTrigger-BjeFwV-t.js";import"./CompositeItem-BjuMxKOc.js";import"./ToolbarRootContext-C0ro7PA0.js";import"./getDisabledMountTransitionStyles-MdJKV5_C.js";import"./getPseudoElementBounds-8rodhleB.js";import"./chevron-down-DhSqywVB.js";import"./index-C5JyokLV.js";import"./error-Bps8jrjC.js";import"./BaseCbacBanner-y_pF5Ytp.js";import"./makeExternalStore-D54BXTfz.js";import"./Tooltip-DovQ5GwH.js";import"./PopoverPopup-DZZO3JSW.js";import"./toNumber-C6bWzmr5.js";import"./useOsdkClient-bVJKNro-.js";import"./DropdownField-D_1exK6s.js";import"./withOsdkMetrics-C9hxi18Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
