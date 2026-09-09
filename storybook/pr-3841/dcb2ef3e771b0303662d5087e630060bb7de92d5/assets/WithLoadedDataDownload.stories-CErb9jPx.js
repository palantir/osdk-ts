import{f as b,j as a,r as i}from"./iframe-BYf_OhJ0.js";import{O as u}from"./object-table-NEoJVSjw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CMb40c8b.js";import"./Table-BNhjkCw_.js";import"./index-D24vcPYb.js";import"./Dialog-C2jKXI3g.js";import"./cross-937OAABn.js";import"./svgIconContainer-CLNhy3XP.js";import"./useBaseUiId-BV6TRjLb.js";import"./InternalBackdrop-C9IU7SA-.js";import"./composite-Czk5304D.js";import"./index-Cfn6IIi-.js";import"./index-C0REXx9G.js";import"./index-BUkZX9cq.js";import"./useEventCallback-B4MxpH1S.js";import"./SkeletonBar-hbjfgvT2.js";import"./LoadingCell-BSv2ov2l.js";import"./ColumnConfigDialog-JMRVff0D.js";import"./DraggableList-Dw0_e9Nv.js";import"./search-CG-g63hT.js";import"./Input-jGJDNg7d.js";import"./useControlled-D82M4IV8.js";import"./Button-HH_9r5OW.js";import"./small-cross-DiOHh5rF.js";import"./ActionButton-Deb6A0x0.js";import"./Checkbox-B8FrTbPR.js";import"./useValueChanged-D_qKRuH6.js";import"./CollapsiblePanel-BS-j2JIg.js";import"./MultiColumnSortDialog-CteiIVyV.js";import"./MenuTrigger-Bv0LSSPW.js";import"./CompositeItem-CptL6v0D.js";import"./ToolbarRootContext-U6rUTj3k.js";import"./getDisabledMountTransitionStyles-Dbvx_1LF.js";import"./getPseudoElementBounds-DTEyIocp.js";import"./chevron-down-BFyWQHOE.js";import"./index-DGCG5Etv.js";import"./error-IoYBerAI.js";import"./BaseCbacBanner-DBesyPHX.js";import"./makeExternalStore-xpSL_Msm.js";import"./Tooltip-C2Ov1JFy.js";import"./PopoverPopup-DKUxgHWp.js";import"./debounce-Cx3iNRX1.js";import"./useOsdkClient-BLIl6zwO.js";import"./tick-C0Y_aYcJ.js";import"./DropdownField-CKAAt-ca.js";import"./isEqual-BoWnJhtt.js";import"./withOsdkMetrics-D932jFv2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
