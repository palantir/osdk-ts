import{f as b,j as a,r as i}from"./iframe-DLVNMlqD.js";import{O as u}from"./object-table-FWe8TjV-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dpu4tGQ7.js";import"./Table-CIlWsgEp.js";import"./index-VZIxZIF4.js";import"./Dialog-CAARrEHX.js";import"./cross-DEoL_1fn.js";import"./svgIconContainer-BQaiUdVM.js";import"./useBaseUiId-D4E9zkR8.js";import"./InternalBackdrop-B_aXZ12_.js";import"./composite-BtSnV65G.js";import"./index-CBkAsu_e.js";import"./index-D03cC0b_.js";import"./index-CMtJSffD.js";import"./useEventCallback-Bv8pgc5p.js";import"./SkeletonBar-CMH6Ozoz.js";import"./LoadingCell-CQ0QvG97.js";import"./ColumnConfigDialog-BuM8qhhy.js";import"./DraggableList-B489iYot.js";import"./search-BXKZxdce.js";import"./Input-DbTBrNHr.js";import"./useControlled-DoRwBFfs.js";import"./isEqual-B-qzCJDx.js";import"./isObject-DjWQcncp.js";import"./Button-BjyA60hN.js";import"./ActionButton-DVTDTT3m.js";import"./Checkbox-BEyktdgG.js";import"./useValueChanged-BXM3MVnH.js";import"./CollapsiblePanel-80X5v1m7.js";import"./MultiColumnSortDialog-C3IFy6Vn.js";import"./MenuTrigger-Cx-VDgni.js";import"./CompositeItem-BrPdeWN4.js";import"./ToolbarRootContext-vV9AatFj.js";import"./getDisabledMountTransitionStyles-ebTCWWjP.js";import"./getPseudoElementBounds-Co5KUif2.js";import"./chevron-down-BD05PCKj.js";import"./index-CjoRvmvv.js";import"./error-e1L3uW56.js";import"./BaseCbacBanner-DWgHcs1U.js";import"./makeExternalStore-Zo0GiL4s.js";import"./Tooltip-ydrCJDLe.js";import"./PopoverPopup-Bu6cU69Y.js";import"./toNumber-DDHkQghJ.js";import"./useOsdkClient-DtH9je__.js";import"./tick-BtSDBhHS.js";import"./DropdownField-aSG_pch6.js";import"./withOsdkMetrics-44cOR7GP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
