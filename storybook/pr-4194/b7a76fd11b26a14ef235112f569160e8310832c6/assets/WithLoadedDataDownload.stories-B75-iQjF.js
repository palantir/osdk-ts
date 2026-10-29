import{f as b,j as a,r as i}from"./iframe-DZdi5qVl.js";import{O as u}from"./object-table-Dr3v4Q9V.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Uouo8HcN.js";import"./Table-CsSEBtiU.js";import"./index-Bg61eIIa.js";import"./Dialog-Dfj1ftg0.js";import"./cross-B9sTw1kj.js";import"./svgIconContainer-DxhMpPws.js";import"./useBaseUiId-Mz3L6_Ly.js";import"./InternalBackdrop-vWueL81t.js";import"./composite-D3C2nmMl.js";import"./index-CVgHOiGf.js";import"./index-DFxmPpXp.js";import"./index-CK_zKJ7H.js";import"./useEventCallback-CHzTdRmo.js";import"./SkeletonBar-D7h-d6LQ.js";import"./LoadingCell-BrgECPSf.js";import"./ColumnConfigDialog-DmwZm_qS.js";import"./DraggableList-DH_4vMJj.js";import"./search-1yJPrdVL.js";import"./Input-I_C95g_4.js";import"./useControlled-BxMGJ1iI.js";import"./Button-Bc-yRCfH.js";import"./small-cross-DP0jWCcr.js";import"./ActionButton-Dh4c5JV5.js";import"./Checkbox-zPHJVy23.js";import"./useValueChanged-4m8KuuR6.js";import"./CollapsiblePanel-CaTF9gHO.js";import"./MultiColumnSortDialog-CF5fTjri.js";import"./MenuTrigger-BYxKKEja.js";import"./CompositeItem-CidR49nz.js";import"./ToolbarRootContext-CRfH5r80.js";import"./getDisabledMountTransitionStyles-Bgmfz7Hi.js";import"./getPseudoElementBounds-CVv7wXsz.js";import"./chevron-down-DWbMZGTs.js";import"./index-BNarussk.js";import"./error-CzW1HZwX.js";import"./BaseCbacBanner-C7-OfbFz.js";import"./makeExternalStore-COQibzUC.js";import"./Tooltip-CUbiiQ57.js";import"./PopoverPopup-CSHu41HL.js";import"./debounce-BSOX5tNy.js";import"./useOsdkClient-D0sO6BtF.js";import"./tick-CSSMXgbf.js";import"./DropdownField-xv8_ACXP.js";import"./isEqual-B8EeTfoX.js";import"./withOsdkMetrics-CA01Qt6R.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
