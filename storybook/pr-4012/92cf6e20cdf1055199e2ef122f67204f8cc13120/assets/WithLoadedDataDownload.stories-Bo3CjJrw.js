import{f as b,j as a,r as i}from"./iframe-ClXV96ol.js";import{O as u}from"./object-table-CDlU6gyI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-GIvq9Fgh.js";import"./Table-Bibtya0A.js";import"./index-BS_93M16.js";import"./Dialog-B1iIak_-.js";import"./cross-DTt9RaJo.js";import"./svgIconContainer-BzIt4vSD.js";import"./useBaseUiId-CeQ_TKpW.js";import"./InternalBackdrop-BOzPpyjM.js";import"./composite-C0Fpedst.js";import"./index-Bkk5ODU2.js";import"./index-CLBh2Emm.js";import"./index-BLOk9I5e.js";import"./useEventCallback-CSmRluI9.js";import"./SkeletonBar-uZMzevzj.js";import"./LoadingCell-DzMkXgiz.js";import"./ColumnConfigDialog-6XQXVFz4.js";import"./DraggableList-Be7V3q25.js";import"./search-C1vc_KSz.js";import"./Input-CzDuGki_.js";import"./useControlled-Bvg52cep.js";import"./Button-DpTMspMt.js";import"./small-cross-DI0ePjHj.js";import"./ActionButton-dXKws96p.js";import"./Checkbox-5mv4ru67.js";import"./useValueChanged-BOSK5wJR.js";import"./CollapsiblePanel-YRb-6JkX.js";import"./MultiColumnSortDialog-sM5RqFSy.js";import"./MenuTrigger-5DVlRwvj.js";import"./CompositeItem-UA3lXUwr.js";import"./ToolbarRootContext-dOFs4mME.js";import"./getDisabledMountTransitionStyles-Dzb55fqZ.js";import"./getPseudoElementBounds-Y4TxrJ4m.js";import"./chevron-down-BtcKUO_9.js";import"./index-BEQyJeIH.js";import"./error-JR-fCQaz.js";import"./BaseCbacBanner-Cw-Inebf.js";import"./makeExternalStore-CMtJRYT9.js";import"./Tooltip-Cp6NNLht.js";import"./PopoverPopup-BfnU-QCF.js";import"./debounce-DTKHa4Ak.js";import"./useOsdkClient-ptfwTLa8.js";import"./tick-CPeibzQx.js";import"./DropdownField-Cf9jSBwq.js";import"./isEqual-D5sVeEdH.js";import"./withOsdkMetrics-CY10LFb-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
