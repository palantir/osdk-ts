import{f as b,j as a,r as i}from"./iframe-CMiiEF1b.js";import{O as u}from"./object-table-oQWMyJiq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-2rscAx0o.js";import"./Table-DXwxQvdR.js";import"./index-DRZQ1ZuZ.js";import"./Dialog-BGwEB59l.js";import"./cross-DmjzAf0-.js";import"./svgIconContainer-DmZ8fHpX.js";import"./useBaseUiId-EgPXNEt2.js";import"./InternalBackdrop-U0kfyJ5Z.js";import"./composite-DqjfxZG9.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./index-vCHhqi_x.js";import"./useEventCallback-e3py3zZO.js";import"./SkeletonBar-D_pLrG8I.js";import"./LoadingCell-DegLzQmp.js";import"./ColumnConfigDialog-B6kG6pez.js";import"./DraggableList-qXLjxEkd.js";import"./search-0aDkREOD.js";import"./Input-B0ji1_35.js";import"./useControlled-CaNRytWe.js";import"./Button-CDnIVBQ_.js";import"./small-cross-DGkNWAjz.js";import"./ActionButton-B5NjKg_P.js";import"./Checkbox-evxW-yIF.js";import"./useValueChanged-hWOBB7lU.js";import"./CollapsiblePanel-DHD1Piul.js";import"./MultiColumnSortDialog-B7lXp9Me.js";import"./MenuTrigger-yrWPKLRn.js";import"./CompositeItem-D4B_FL8U.js";import"./ToolbarRootContext-UxomdOwp.js";import"./getDisabledMountTransitionStyles-MJ90XzR7.js";import"./getPseudoElementBounds-TefPeSXP.js";import"./chevron-down-BtRtOYI2.js";import"./index-DVpvfzZ8.js";import"./error-IdCbvwbX.js";import"./BaseCbacBanner-klveZ2h3.js";import"./makeExternalStore-BeAQwjdH.js";import"./Tooltip-Dg78gXhb.js";import"./PopoverPopup-DAxHwasP.js";import"./debounce-DhU-bxB_.js";import"./useOsdkClient-DkekLomq.js";import"./tick-CPg-6I2-.js";import"./DropdownField-B_Y4KBs-.js";import"./isEqual-DpDCxrI8.js";import"./withOsdkMetrics-BucKtTdS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
