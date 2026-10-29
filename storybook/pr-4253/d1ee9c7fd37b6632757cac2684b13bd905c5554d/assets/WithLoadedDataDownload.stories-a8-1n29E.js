import{f as b,j as a,r as i}from"./iframe-C7u8teZW.js";import{O as u}from"./object-table-CyvMeLHX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BksW-fLa.js";import"./Table-CDMydSky.js";import"./index-BhN64Vkr.js";import"./Dialog-DE1Pcah0.js";import"./cross-DxUgqzoH.js";import"./svgIconContainer-BCJkHoyI.js";import"./useBaseUiId-DhUQmONl.js";import"./InternalBackdrop-CiuI9iXh.js";import"./composite-zfEBFY2E.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./index-BfFTxu65.js";import"./useEventCallback-BFNSOXZ0.js";import"./SkeletonBar-Cx2TnRLV.js";import"./LoadingCell-CfumBpKG.js";import"./ColumnConfigDialog-CuV0HQkQ.js";import"./DraggableList-BBkY3ia_.js";import"./search-D1b21RXS.js";import"./Input-CkX7hrVd.js";import"./useControlled-wz_zz6UQ.js";import"./Button-ItUG0RJE.js";import"./small-cross-BXAWZBeP.js";import"./ActionButton-hbhMcRNO.js";import"./Checkbox-CJT7DI4o.js";import"./useValueChanged-BeaCU65z.js";import"./CollapsiblePanel-GTw3JwtT.js";import"./MultiColumnSortDialog-CfXR7DTa.js";import"./MenuTrigger-eEIm7O2K.js";import"./CompositeItem-DBCCEsi2.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./getDisabledMountTransitionStyles-NTCPfN1w.js";import"./getPseudoElementBounds-CERtdroa.js";import"./chevron-down-CkA7RfLP.js";import"./index-CWtS_zs6.js";import"./error-CEH3koMg.js";import"./BaseCbacBanner-D-xiZ6RB.js";import"./makeExternalStore-MBK88X8R.js";import"./Tooltip-CMWksZUd.js";import"./PopoverPopup-20OsJ-7t.js";import"./debounce-CiptvIy5.js";import"./useOsdkClient-C3xSadaC.js";import"./tick-yfLFJlQJ.js";import"./DropdownField-C_ts6lDO.js";import"./isEqual-BH4pI4eI.js";import"./withOsdkMetrics-GebS3Gu5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
