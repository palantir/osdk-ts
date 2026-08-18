import{f as b,j as a,r as i}from"./iframe-HdL12gTW.js";import{O as u}from"./object-table-Dm2p3ksP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DuPhqSoR.js";import"./Table-DM2mI30K.js";import"./index-BLRoaiA0.js";import"./Dialog-maDReMa_.js";import"./cross-DXB0ggN8.js";import"./svgIconContainer-B7UNNoek.js";import"./useBaseUiId-ekw91PLD.js";import"./InternalBackdrop-BzYwFOtS.js";import"./composite-DN4TbWMs.js";import"./index-BtcGM-tQ.js";import"./index-DHnE9wbz.js";import"./index-BnY5tXhK.js";import"./useEventCallback-DsocUe2O.js";import"./SkeletonBar-7Iz5xNHa.js";import"./LoadingCell-BktCs9cO.js";import"./ColumnConfigDialog-CptZU2bV.js";import"./DraggableList-BDuY8vCU.js";import"./search-LcQw2NsK.js";import"./Input-BmrCOBDc.js";import"./useControlled-m8IrfiDX.js";import"./Button-fEp34dTs.js";import"./small-cross-hkiI0RO2.js";import"./ActionButton-AfJiByN3.js";import"./Checkbox-DRKvpEu_.js";import"./useValueChanged-CUzoMdeB.js";import"./CollapsiblePanel-BEkD3v9B.js";import"./MultiColumnSortDialog-DyXAvFZp.js";import"./MenuTrigger-CPsb2KOa.js";import"./CompositeItem-CdqweP-g.js";import"./ToolbarRootContext-o0MDLjcb.js";import"./getDisabledMountTransitionStyles-B_rqla-j.js";import"./getPseudoElementBounds-CUJmWWSF.js";import"./chevron-down-DW1_9o68.js";import"./index-CYZ7Zb3G.js";import"./error-C0h-qjZV.js";import"./BaseCbacBanner-BsFqezX1.js";import"./makeExternalStore-CFSL0hnp.js";import"./Tooltip-COBWUS2T.js";import"./PopoverPopup-p-ySQVE6.js";import"./debounce-CxoOeoZ7.js";import"./useOsdkClient-BVXwSViH.js";import"./tick-BulVH2kt.js";import"./DropdownField-ub_2LB2G.js";import"./isEqual-BV43QIc9.js";import"./withOsdkMetrics-Bvqw_Q6i.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
