import{f as b,j as a,r as i}from"./iframe-BNNKx1qJ.js";import{O as u}from"./object-table-DTvxL5D4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FnBR9pZ5.js";import"./Table-BYRVBYgU.js";import"./index-Cso6cHcG.js";import"./Dialog-BzLkyBZa.js";import"./cross-CYeOoUlc.js";import"./svgIconContainer-UXVuHS9c.js";import"./useBaseUiId-BTWwbLF7.js";import"./InternalBackdrop-DDDwcH62.js";import"./composite-CjX4rbqZ.js";import"./index-C5NImRQU.js";import"./index-naqArDfz.js";import"./index-Bq05Celt.js";import"./useEventCallback-DmnJBcoN.js";import"./SkeletonBar-BiKZHr81.js";import"./LoadingCell-Bwj73zl4.js";import"./ColumnConfigDialog-mkapnhM_.js";import"./DraggableList-D-UNchOv.js";import"./search-BLPbXJjN.js";import"./Input-D9LGNIE_.js";import"./useControlled-BVIookUm.js";import"./Button-C2urmu83.js";import"./small-cross-BLIvQRhO.js";import"./ActionButton-CZaknvG-.js";import"./Checkbox-Cu9aPbPK.js";import"./minus-C5nbNPz7.js";import"./tick-WZPX0pfq.js";import"./useValueChanged-eDJgqJMG.js";import"./caret-down-B7MLxcyP.js";import"./CollapsiblePanel-Dhrhn5WT.js";import"./MultiColumnSortDialog-D1-svnga.js";import"./MenuTrigger-CcHVPV18.js";import"./CompositeItem-PKzlPPnP.js";import"./ToolbarRootContext-BT3UeKOd.js";import"./getDisabledMountTransitionStyles-CGo-Dn6l.js";import"./getPseudoElementBounds-BFvaMIWl.js";import"./chevron-down-BY5TKFMU.js";import"./index-DrES_4Zr.js";import"./error-DAV0owaw.js";import"./BaseCbacBanner-Cwu2E8z6.js";import"./makeExternalStore-DDcVP2eY.js";import"./Tooltip-IyluTrsV.js";import"./PopoverPopup-BvIJjfkN.js";import"./toNumber-mtdIjC2h.js";import"./useOsdkClient-DnVrniqS.js";import"./DropdownField-RmdTnwHT.js";import"./withOsdkMetrics-CRQzHWgS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
