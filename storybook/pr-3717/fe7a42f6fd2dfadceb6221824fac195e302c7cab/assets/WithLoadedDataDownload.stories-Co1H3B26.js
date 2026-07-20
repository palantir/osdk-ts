import{f as b,j as a,r as i}from"./iframe-kEXttPrj.js";import{O as u}from"./object-table-0MIo_6Sc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJYrSKst.js";import"./Table-I_3QcKU9.js";import"./index-DMqv5uwI.js";import"./Dialog-DOe7j3Sx.js";import"./cross-CbZpIeeo.js";import"./svgIconContainer-CCezkQSK.js";import"./useBaseUiId-DK-jOoPS.js";import"./InternalBackdrop-D3ZvJAJz.js";import"./composite-Csa0CmWK.js";import"./index-C0DdVeXZ.js";import"./index-B2GAgXCG.js";import"./index-CW-Fm-5S.js";import"./useEventCallback-VaHJRmXc.js";import"./SkeletonBar-CjXdDZfC.js";import"./LoadingCell-BfSwA2o7.js";import"./ColumnConfigDialog-BApoVLRn.js";import"./DraggableList-DgPFEf9J.js";import"./search-C15Jk0fn.js";import"./Input-BZuor96n.js";import"./useControlled-3Mte2FdL.js";import"./isEqual-DmyfgjcA.js";import"./isObject-BI_ppbPO.js";import"./Button-CenD0bzg.js";import"./ActionButton-DF8mIS_c.js";import"./Checkbox-TscXg7Pq.js";import"./useValueChanged-DZg1QFEW.js";import"./CollapsiblePanel-B1vu12kO.js";import"./MultiColumnSortDialog-NOqwcBJS.js";import"./MenuTrigger-BFWjx5xE.js";import"./CompositeItem-D1ks_FDg.js";import"./ToolbarRootContext-Dfgo4ZFi.js";import"./getDisabledMountTransitionStyles-VQYjUlYt.js";import"./getPseudoElementBounds-BTzCvEd1.js";import"./chevron-down-DDhDIBpv.js";import"./index-D7SejJKZ.js";import"./error-B8yv3Sxe.js";import"./BaseCbacBanner-hSgTL9TS.js";import"./makeExternalStore-bAuKHDUj.js";import"./Tooltip-BtidPf63.js";import"./PopoverPopup-0rjXswB5.js";import"./toNumber-BMvwO_Tb.js";import"./useOsdkClient-QIryAGdw.js";import"./tick-ix1uygb2.js";import"./DropdownField-qu2AnMlj.js";import"./withOsdkMetrics-DjZwTYaT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
