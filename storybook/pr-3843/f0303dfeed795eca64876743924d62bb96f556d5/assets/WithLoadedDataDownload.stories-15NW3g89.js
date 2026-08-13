import{f as b,j as a,r as i}from"./iframe-dW7ZySVo.js";import{O as u}from"./object-table-DpTS8D6-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ietlItcG.js";import"./Table-B9djy5zR.js";import"./index-CyX_mbZv.js";import"./Dialog-DoD6CH3Q.js";import"./cross-BV4X4rJT.js";import"./svgIconContainer-De3VosTd.js";import"./useBaseUiId-CltpoqoE.js";import"./InternalBackdrop-OnfUmyRP.js";import"./composite-yun7E3H0.js";import"./index-NFcKjdXW.js";import"./index-BUDv2oUY.js";import"./index-B9U1zr68.js";import"./useEventCallback-CTf3PETg.js";import"./SkeletonBar-C0qNZ57m.js";import"./LoadingCell-D2Nn0dkn.js";import"./ColumnConfigDialog-BOj2sQSf.js";import"./DraggableList-CjL1Zeyb.js";import"./search-BVLxwhoK.js";import"./Input-BEPGpKmX.js";import"./useControlled--a4EJP-K.js";import"./isEqual-B26u38ta.js";import"./isObject-Bq6JsHLJ.js";import"./Button-BjotpDzx.js";import"./ActionButton-DXVIhKZW.js";import"./Checkbox-BUcGvUET.js";import"./useValueChanged-BNUhKGYr.js";import"./CollapsiblePanel-7EbWsdAY.js";import"./MultiColumnSortDialog-DxbnrFRY.js";import"./MenuTrigger-DpEpaw3t.js";import"./CompositeItem-B9fLtNsk.js";import"./ToolbarRootContext-Cx1oPDzo.js";import"./getDisabledMountTransitionStyles-BJhCKUOQ.js";import"./getPseudoElementBounds-BE0VWDCU.js";import"./chevron-down-D0s0iZJp.js";import"./index-CiitfvmC.js";import"./error-CUjzZGeI.js";import"./BaseCbacBanner-BziABg8b.js";import"./makeExternalStore-p_MVbTGu.js";import"./Tooltip-BdcEiRfO.js";import"./PopoverPopup-B41CZPnS.js";import"./toNumber-boKe2Guz.js";import"./useOsdkClient-D9vq8O0M.js";import"./tick-DhgI4Zis.js";import"./DropdownField-C86F5zQw.js";import"./withOsdkMetrics-CzRWl-u7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
