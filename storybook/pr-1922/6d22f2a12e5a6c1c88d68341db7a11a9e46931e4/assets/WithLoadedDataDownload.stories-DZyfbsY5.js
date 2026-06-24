import{f as b,j as a,r as i}from"./iframe-BjvUzf2G.js";import{O as u}from"./object-table-D_bjeG7_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ChLujkjw.js";import"./Table-CNErRvuw.js";import"./index-CV0Q9dls.js";import"./Dialog-CICC-dma.js";import"./cross-BJGvmtHL.js";import"./svgIconContainer-BTyMbHu3.js";import"./useBaseUiId-BDbPswOv.js";import"./InternalBackdrop-BspcLizJ.js";import"./composite-Dw0QnQGe.js";import"./index-DkF1GDTM.js";import"./index-Dm9fU4ht.js";import"./index-4Hwrm4LE.js";import"./useEventCallback-nNO1KyCy.js";import"./SkeletonBar-DHfXQi-V.js";import"./LoadingCell-CMEkGJIT.js";import"./ColumnConfigDialog-CyI8AV0L.js";import"./DraggableList-CtND3hQF.js";import"./Input-BejOJn9A.js";import"./useControlled-BcrqOuKT.js";import"./Button-DQrgiRWU.js";import"./small-cross-BKzf_I6Q.js";import"./ActionButton-CVluJmJb.js";import"./Checkbox-Cv4viYXI.js";import"./minus-C1rQ-HqY.js";import"./useValueChanged-u5wL3ef5.js";import"./caret-down-CEel9IAR.js";import"./CollapsiblePanel-DfcaEtSo.js";import"./MultiColumnSortDialog-BPY4Hx6U.js";import"./MenuTrigger-CaN9mlDl.js";import"./CompositeItem-BERBQGWk.js";import"./ToolbarRootContext-ogdKOFIs.js";import"./getDisabledMountTransitionStyles-C1QLonNx.js";import"./getPseudoElementBounds-C3Zs4NyR.js";import"./chevron-down-09WpJW4h.js";import"./index-CvRtYV7l.js";import"./error-jQ1aYYgr.js";import"./BaseCbacBanner-vTyNau1Y.js";import"./makeExternalStore-FnGaZI7s.js";import"./Tooltip-BGo2_7vp.js";import"./PopoverPopup-GpCLf6HQ.js";import"./toNumber-3XwE11wB.js";import"./useOsdkClient-IhYIX5bE.js";import"./DropdownField-CKKTIiys.js";import"./withOsdkMetrics-Bd8w39f_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
