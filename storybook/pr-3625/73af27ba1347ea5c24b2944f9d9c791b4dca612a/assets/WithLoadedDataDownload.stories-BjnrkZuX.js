import{f as b,j as a,r as i}from"./iframe-BP06dXdo.js";import{O as u}from"./object-table-CrO5x6Fp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DlEWCR1V.js";import"./Table-B_QiHPMn.js";import"./index-Dk34pG-E.js";import"./Dialog-D2ZTAgHe.js";import"./cross-iCTpuXAP.js";import"./svgIconContainer-Bj0iQopz.js";import"./useBaseUiId-Bp1v_4Yt.js";import"./InternalBackdrop-DBhFUDFj.js";import"./composite-DNi76Wdx.js";import"./index-C57lYKpt.js";import"./index-CYXBz4-d.js";import"./index-CBTyXAWh.js";import"./useEventCallback-LqziPIT0.js";import"./SkeletonBar-Df-hyMAC.js";import"./LoadingCell-DQ3mNlFT.js";import"./ColumnConfigDialog-Chu7xqSw.js";import"./DraggableList-BvCKlgax.js";import"./search-CiYrMFGj.js";import"./Input-DiSzpbBK.js";import"./useControlled-CuXn7b8T.js";import"./Button-DHAp4sQQ.js";import"./small-cross-C6zUY2-s.js";import"./ActionButton-P8oOlYwA.js";import"./Checkbox-Cs65MOhs.js";import"./useValueChanged-B5UIJYsO.js";import"./CollapsiblePanel-D4pZRCJg.js";import"./MultiColumnSortDialog-BVZ5Gmpw.js";import"./MenuTrigger-CmrelIfQ.js";import"./CompositeItem-11-57Byd.js";import"./ToolbarRootContext-CkfiVBkK.js";import"./getDisabledMountTransitionStyles-fAUcSgax.js";import"./getPseudoElementBounds-CcUEz73Y.js";import"./chevron-down-Cwji13S3.js";import"./index-szmPUtPW.js";import"./error-C76gCqBT.js";import"./BaseCbacBanner-EkKNp9Lg.js";import"./makeExternalStore-ry9lHCgm.js";import"./Tooltip-RYydFl2v.js";import"./PopoverPopup-B-2gcJXU.js";import"./toNumber-CG88qEY1.js";import"./useOsdkClient-Clg0gIGI.js";import"./tick-BrfiGO94.js";import"./DropdownField-BTUMGsxj.js";import"./withOsdkMetrics-BtYhTnlX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
