import{f as b,j as a,r as i}from"./iframe-BHEMD7tl.js";import{O as u}from"./object-table-9JUtvRcU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9vvsdXl.js";import"./Table-CgHBZ9-U.js";import"./index-DZ514iDh.js";import"./Dialog-B407VpGc.js";import"./cross-CnuckHrQ.js";import"./svgIconContainer-czks9Ze_.js";import"./useBaseUiId-Bjqi_A68.js";import"./InternalBackdrop-BOOTBUHJ.js";import"./composite-CMjg4bD9.js";import"./index-CHTCcjpb.js";import"./index-BOLGOaBy.js";import"./index-COKjoxNM.js";import"./useEventCallback-C8xM2aMu.js";import"./SkeletonBar-CaP9thrl.js";import"./LoadingCell-Bi5n_cGp.js";import"./ColumnConfigDialog-4N1t5nOQ.js";import"./DraggableList-B_ZoJH4b.js";import"./search-BnYzLcC3.js";import"./Input-C6SEChBH.js";import"./useControlled-AgsGiueD.js";import"./Button-B8tVf1VG.js";import"./small-cross-CSiRE0ih.js";import"./ActionButton-D5jnFT3t.js";import"./Checkbox-Kf2cnlWj.js";import"./useValueChanged-B3jGbwyp.js";import"./CollapsiblePanel-D9e8UMK0.js";import"./MultiColumnSortDialog-DCIEhd8n.js";import"./MenuTrigger-BTN0l8ID.js";import"./CompositeItem-D521EeHU.js";import"./ToolbarRootContext-DbG-Pccc.js";import"./getDisabledMountTransitionStyles-BTxtuE3h.js";import"./getPseudoElementBounds-B18hrTO2.js";import"./chevron-down-fhI62sWj.js";import"./index-DUmTXUBR.js";import"./error-7ZQ1PwUq.js";import"./BaseCbacBanner-C_gcv04e.js";import"./makeExternalStore-Bvzg9kOq.js";import"./Tooltip-PgaxHJZr.js";import"./PopoverPopup-BSMX4lRh.js";import"./debounce-Bwjf3tf_.js";import"./useOsdkClient-Bww5s5cX.js";import"./tick-DMMXPGVM.js";import"./DropdownField-CHsTBEnv.js";import"./isEqual-miRlTJwc.js";import"./withOsdkMetrics-DXQf1Gwd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
