import{f as b,j as a,r as i}from"./iframe-DnKJB4tf.js";import{O as u}from"./object-table-C1EFZykX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CP_4LH1y.js";import"./Table-BxHlqKtI.js";import"./index-DsLBK2rD.js";import"./Dialog-wSWridY8.js";import"./cross-DHc1nhB3.js";import"./svgIconContainer-hyFCaOzG.js";import"./useBaseUiId-c0a-O2p9.js";import"./InternalBackdrop-CUfu8VR0.js";import"./composite-C2dHrzPG.js";import"./index-BpSxxceB.js";import"./index-j9hUGQ3G.js";import"./index-pErbuvTi.js";import"./useEventCallback-D6uXJzwq.js";import"./SkeletonBar-Csc7ye5b.js";import"./LoadingCell-CD4kKy_z.js";import"./ColumnConfigDialog-TqLGX3m0.js";import"./DraggableList-_9im8dfe.js";import"./search-CrLHj3lH.js";import"./Input-B_8ntroz.js";import"./useControlled-B1Myh9nv.js";import"./Button-BWPawo9O.js";import"./small-cross-vh0TUX8p.js";import"./ActionButton-DEVGqOyJ.js";import"./Checkbox-CJ8upm9E.js";import"./useValueChanged-EFrN1WVj.js";import"./CollapsiblePanel-QlGR2gN6.js";import"./MultiColumnSortDialog-BUS2iRVU.js";import"./MenuTrigger-C_MxNlys.js";import"./CompositeItem-CIW_zvxP.js";import"./ToolbarRootContext-BFuYTsvJ.js";import"./getDisabledMountTransitionStyles-C9ZpfH2M.js";import"./getPseudoElementBounds-7RnfUn4Y.js";import"./chevron-down-DxcIi4ej.js";import"./index-CvgbtZHK.js";import"./error-CY06xBhW.js";import"./BaseCbacBanner-D9R3z_bm.js";import"./makeExternalStore-BP2lWOFo.js";import"./Tooltip-BOXvelZX.js";import"./PopoverPopup-Bl30bmsT.js";import"./toNumber-7l8ccKfF.js";import"./useOsdkClient-W6WOMDdE.js";import"./tick-Y9OoKt_9.js";import"./DropdownField-BD-7FPuc.js";import"./withOsdkMetrics-Dg_o3KRg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
