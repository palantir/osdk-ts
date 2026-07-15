import{f as b,j as a,r as i}from"./iframe-CQwY6mO4.js";import{O as u}from"./object-table-D7g2z9YZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CG_nRBE5.js";import"./Table-B7vrLjio.js";import"./index-wtEpLbyR.js";import"./Dialog-DFe9H-CM.js";import"./cross-BwbamFqn.js";import"./svgIconContainer-uS1_fq8T.js";import"./useBaseUiId-CHDIn64B.js";import"./InternalBackdrop-CKjTB2OQ.js";import"./composite-DyRwYDBq.js";import"./index-Dmoy23Ww.js";import"./index-D_1Blimg.js";import"./index-B8nE2ZAt.js";import"./useEventCallback-DEVDqVRn.js";import"./SkeletonBar-B4NILhpG.js";import"./LoadingCell-CL3DDJJX.js";import"./ColumnConfigDialog-DpQeRmDv.js";import"./DraggableList-UdKpY5ai.js";import"./search-GVl2c2Dm.js";import"./Input-DVkCs8b8.js";import"./useControlled-CJq6D1v1.js";import"./Button-kJ1MHZUd.js";import"./small-cross-CoG2wqrt.js";import"./ActionButton-UwgbqG4O.js";import"./Checkbox-B7fyvHtg.js";import"./useValueChanged-DfoeKdsy.js";import"./CollapsiblePanel-Do_G1fsY.js";import"./MultiColumnSortDialog-BvKG0pxZ.js";import"./MenuTrigger-D0hj7Js1.js";import"./CompositeItem-4f9J1wU9.js";import"./ToolbarRootContext-De19NDdj.js";import"./getDisabledMountTransitionStyles-COxm13Os.js";import"./getPseudoElementBounds-BZucl2yJ.js";import"./chevron-down-Dml-bxcm.js";import"./index-Cd4rZEU7.js";import"./error-zMG-nmVh.js";import"./BaseCbacBanner-BUjods3E.js";import"./makeExternalStore-D84SWLxJ.js";import"./Tooltip-BPawDsea.js";import"./PopoverPopup-DGBpcJER.js";import"./toNumber-vDRB5vep.js";import"./useOsdkClient-BSPBXs5E.js";import"./tick-CrpY_CWh.js";import"./DropdownField-DYjsXzNH.js";import"./withOsdkMetrics-DTJ-q1xq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
