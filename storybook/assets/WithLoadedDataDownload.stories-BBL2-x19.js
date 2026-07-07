import{f as b,j as a,r as i}from"./iframe-rsNkHZI8.js";import{O as u}from"./object-table-DoG_riAj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D8b9H-lm.js";import"./index-CGI_aBYs.js";import"./Dialog-D6cToeEE.js";import"./cross-DbbG_peE.js";import"./svgIconContainer-BZthJgoq.js";import"./useBaseUiId-BUl6pw-H.js";import"./InternalBackdrop-B7IWOY2b.js";import"./composite-XCitygaR.js";import"./index-BkJWDSh0.js";import"./index-CLHdUyO3.js";import"./index-CAsnxy9P.js";import"./useEventCallback-Dfv3a-Iz.js";import"./SkeletonBar-BcRxO3Po.js";import"./LoadingCell-CqRn8oKP.js";import"./ColumnConfigDialog-CwHJlUtp.js";import"./DraggableList-eEomo4ok.js";import"./search-CgZRPEt7.js";import"./Input-D8yDtZTG.js";import"./useControlled-D3vnxyt3.js";import"./Button-Bum5P5Nf.js";import"./small-cross-9X9VTSQu.js";import"./ActionButton-C4V7iFjI.js";import"./Checkbox-DYcAm_UR.js";import"./useValueChanged-DihpoPFc.js";import"./CollapsiblePanel-iQecx7jn.js";import"./MultiColumnSortDialog-DhSF4uLu.js";import"./MenuTrigger-DGA2G8MK.js";import"./CompositeItem-DDmeFsyN.js";import"./ToolbarRootContext-C0g8uHuL.js";import"./getDisabledMountTransitionStyles-VGahHJv5.js";import"./getPseudoElementBounds-DTvVzO4W.js";import"./chevron-down-DMoNOrUS.js";import"./index-D1xOPTpB.js";import"./error-B0gTN4Dr.js";import"./BaseCbacBanner-BIhJob0L.js";import"./makeExternalStore-DADMh7-t.js";import"./Tooltip-DvSRYP1I.js";import"./PopoverPopup-DVvc-z1R.js";import"./toNumber-Bhv3ET3D.js";import"./useOsdkClient-DVGLrA5j.js";import"./tick-BebInx4R.js";import"./DropdownField-BiWQVxwF.js";import"./withOsdkMetrics-DN3Tt0ZW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
