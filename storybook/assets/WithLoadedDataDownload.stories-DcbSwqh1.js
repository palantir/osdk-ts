import{f as b,j as a,r as i}from"./iframe-C0mJUu02.js";import{O as u}from"./object-table-D2cdIFzH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DoryacO7.js";import"./index-BgwdINoS.js";import"./Dialog-tP3X38Yx.js";import"./cross-DPybMDd2.js";import"./svgIconContainer-yhd967y-.js";import"./useBaseUiId-BXPJ6r5s.js";import"./InternalBackdrop-eV_wPgn6.js";import"./composite-CB0JAGdL.js";import"./index-B2I4cR14.js";import"./index-DL4f1cc2.js";import"./index-DfMLpjjw.js";import"./useEventCallback-Go0TpDk5.js";import"./SkeletonBar-Cwj6yEmN.js";import"./LoadingCell-DB4P3gjt.js";import"./ColumnConfigDialog-DCN35aA4.js";import"./DraggableList-BLMJj-GZ.js";import"./search-ChZtyXnw.js";import"./Input-BJLSSZ1M.js";import"./useControlled-Duq1LKsB.js";import"./Button-HM7yt_S2.js";import"./small-cross-DGjfl0CA.js";import"./ActionButton-UXEDUDgA.js";import"./Checkbox-Bay8w4Q5.js";import"./useValueChanged-E55TGlmx.js";import"./CollapsiblePanel-Puvnaw0n.js";import"./MultiColumnSortDialog-DqOI8I1U.js";import"./MenuTrigger-B0ZVbhVt.js";import"./CompositeItem-C1iJEhPv.js";import"./ToolbarRootContext-B3CoPmT-.js";import"./getDisabledMountTransitionStyles-BcnwoO2Y.js";import"./getPseudoElementBounds-DDWeSkyh.js";import"./chevron-down-C8QI49Qk.js";import"./index-Bn8nuryg.js";import"./error-Bl2kJhtX.js";import"./BaseCbacBanner-D4-iRmww.js";import"./makeExternalStore-D0DchU2u.js";import"./Tooltip-iAzktKwE.js";import"./PopoverPopup-BHh_CyIv.js";import"./toNumber-BOeMspUR.js";import"./useOsdkClient-DVIB83SB.js";import"./tick-BG3TNuWf.js";import"./DropdownField-CTKYY4zi.js";import"./withOsdkMetrics-CpF1vmZL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
