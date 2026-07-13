import{f as b,j as a,r as i}from"./iframe-Ezmn3SpD.js";import{O as u}from"./object-table-jkITdLt1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1sYuYBN.js";import"./Table-DQJoOAmw.js";import"./index-Dvdston6.js";import"./Dialog-wiu3zspj.js";import"./cross-DSxhrQdq.js";import"./svgIconContainer-D8jweW8c.js";import"./useBaseUiId-DpAA4MUF.js";import"./InternalBackdrop-CPmZM3DF.js";import"./composite-BJqFUzwo.js";import"./index-Cka30kGH.js";import"./index-D74pndlv.js";import"./index-CwbpdQqh.js";import"./useEventCallback-SPCUyqSn.js";import"./SkeletonBar-1qffMjRv.js";import"./LoadingCell-qeFxWN0E.js";import"./ColumnConfigDialog-B_Z7CU6Y.js";import"./DraggableList-B1aMCaHM.js";import"./search-BuE3nooh.js";import"./Input-mfyhe4pd.js";import"./useControlled-CyVTukR4.js";import"./Button-DHPNKO3h.js";import"./small-cross-C_p6btAG.js";import"./ActionButton-Dw2TvSwZ.js";import"./Checkbox-DC_XMr11.js";import"./useValueChanged-Drcgmxk4.js";import"./CollapsiblePanel-Cd39eH2_.js";import"./MultiColumnSortDialog-ewQoQt_o.js";import"./MenuTrigger-DPd2HAYL.js";import"./CompositeItem-BryZKdtO.js";import"./ToolbarRootContext-BKo8VDoh.js";import"./getDisabledMountTransitionStyles-lYQ5Tu-y.js";import"./getPseudoElementBounds-DM2qIU3_.js";import"./chevron-down-rI_3aJAm.js";import"./index-DInb5O-C.js";import"./error-kPlzrDKd.js";import"./BaseCbacBanner-D9ywO_q4.js";import"./makeExternalStore-CHWv51JV.js";import"./Tooltip-DGvqjDv3.js";import"./PopoverPopup-BanAwc_9.js";import"./toNumber-BFhbbpeU.js";import"./useOsdkClient-DiDAub41.js";import"./tick-Bq_imMdP.js";import"./DropdownField-CTo4OggT.js";import"./withOsdkMetrics--KcbetR1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
