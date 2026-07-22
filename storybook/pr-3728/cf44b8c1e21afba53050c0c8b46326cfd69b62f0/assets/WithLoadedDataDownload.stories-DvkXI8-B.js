import{f as b,j as a,r as i}from"./iframe-CpIscZhw.js";import{O as u}from"./object-table-DExIUaKs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKL1SrJi.js";import"./Table-F8M0h7uG.js";import"./index-Bbg2WkYK.js";import"./Dialog-BTfwXurt.js";import"./cross-BiY2PLN4.js";import"./svgIconContainer-Bo0dryoI.js";import"./useBaseUiId-DKFRz7u_.js";import"./InternalBackdrop-DkfJf7KJ.js";import"./composite-BSkicZqF.js";import"./index-_k1fg5w-.js";import"./index-BSRo_UIf.js";import"./index-Cc37kO7c.js";import"./useEventCallback-CwEBZdvn.js";import"./SkeletonBar-DYQqnMcF.js";import"./LoadingCell-DLGuhZNX.js";import"./ColumnConfigDialog-CeqYFQqR.js";import"./DraggableList-CO69zXRQ.js";import"./search-Jceajqon.js";import"./Input-DvSM-OUx.js";import"./useControlled-CGunv8o7.js";import"./isEqual-y3kPmhQZ.js";import"./isObject-DbGkaUtb.js";import"./Button-ww1sLsLD.js";import"./ActionButton-D0mwK-Bb.js";import"./Checkbox-C5lZzT3T.js";import"./useValueChanged-GbbRLuPy.js";import"./CollapsiblePanel-BuxUZF0q.js";import"./MultiColumnSortDialog-CqOE6Xvl.js";import"./MenuTrigger-Up7T0qhd.js";import"./CompositeItem-Cx9E9PGy.js";import"./ToolbarRootContext-fuyfjlA6.js";import"./getDisabledMountTransitionStyles-D4XulON5.js";import"./getPseudoElementBounds-DSJANOQW.js";import"./chevron-down-BGZmvdK2.js";import"./index-4TzoUCSY.js";import"./error-CrZCprMy.js";import"./BaseCbacBanner-CKmAeuc6.js";import"./makeExternalStore-CrqilYoq.js";import"./Tooltip-fOOaPNmW.js";import"./PopoverPopup-D52RNKHy.js";import"./toNumber-BMg14M0e.js";import"./useOsdkClient-BLWyt4h8.js";import"./tick-CMTsFQi4.js";import"./DropdownField-C6iFv2wj.js";import"./withOsdkMetrics-9iqcjCiu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
