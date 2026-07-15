import{f as b,j as a,r as i}from"./iframe-DeTIsQxL.js";import{O as u}from"./object-table-DIwXgxvx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CB0krISm.js";import"./Table-DTzqkUCL.js";import"./index-DJCw2I8F.js";import"./Dialog-DCNas4Nc.js";import"./cross-B6qSpTyB.js";import"./svgIconContainer-DRoX0Vsv.js";import"./useBaseUiId-a2IWdv8a.js";import"./InternalBackdrop-BFPkNs4W.js";import"./composite-tRtN087v.js";import"./index--ckDM66E.js";import"./index-CvmIGShp.js";import"./index-BCN4yWiE.js";import"./useEventCallback-DUTs-5xP.js";import"./SkeletonBar-BsR4HtMd.js";import"./LoadingCell-XDI6bJ8H.js";import"./ColumnConfigDialog-BzX0hTdD.js";import"./DraggableList-BtTQtqUK.js";import"./search-aX2fvTHi.js";import"./Input-DfREMPWD.js";import"./useControlled-CVbfP8LM.js";import"./Button-DVNiVWo0.js";import"./small-cross-CkqlP7gE.js";import"./ActionButton-5BFJfe86.js";import"./Checkbox-CBMaCuwd.js";import"./useValueChanged-BsopS9M5.js";import"./CollapsiblePanel-DtgZ1bmI.js";import"./MultiColumnSortDialog-njno2ygP.js";import"./MenuTrigger-B4N6sM1h.js";import"./CompositeItem-DmMZR4gE.js";import"./ToolbarRootContext-5TGYojqS.js";import"./getDisabledMountTransitionStyles-LlQuwNQB.js";import"./getPseudoElementBounds-BHtGaDtw.js";import"./chevron-down-BmmuVHCT.js";import"./index-BG5hwvad.js";import"./error-MuE1w4dN.js";import"./BaseCbacBanner-DXQFXWoP.js";import"./makeExternalStore-D3ohMW2u.js";import"./Tooltip-DcLqWNBa.js";import"./PopoverPopup-vop4NMBe.js";import"./toNumber-CbH6nT6f.js";import"./useOsdkClient-CSfIOgKC.js";import"./tick-DGx8-vvb.js";import"./DropdownField-DHYJGCOH.js";import"./withOsdkMetrics-CUyQGeFt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
