import{f as b,j as a,r as i}from"./iframe-CMeM9J6Y.js";import{O as u}from"./object-table-DjwC2agM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BE9t9w6w.js";import"./Table-B4aRPA0o.js";import"./index-DPhtRpPE.js";import"./Dialog-x-7GDQNX.js";import"./cross-BaQL3xgP.js";import"./svgIconContainer-oyAS0UWq.js";import"./useBaseUiId-DI9dP7QZ.js";import"./InternalBackdrop-CpHEPDe1.js";import"./composite-CY3k6TM7.js";import"./index-DTL2R8mN.js";import"./index-CdeTLK2Z.js";import"./index-DG1I6Kuc.js";import"./useEventCallback-BmsWUEZb.js";import"./SkeletonBar-B_4k99nJ.js";import"./LoadingCell-dz77DxK9.js";import"./ColumnConfigDialog-BpoO_LuJ.js";import"./DraggableList-CSVgP4Nh.js";import"./search-BAh8pYQa.js";import"./Input-B3BEXVhr.js";import"./useControlled-BSYDrQ5g.js";import"./Button-D3pZGYFY.js";import"./small-cross-sbaskDMM.js";import"./ActionButton-Bmi_tL1_.js";import"./Checkbox-BO0fGKwh.js";import"./useValueChanged-Rc2T5ip3.js";import"./CollapsiblePanel-Cq_em0cq.js";import"./MultiColumnSortDialog-CeFw10As.js";import"./MenuTrigger-COGf48-Y.js";import"./CompositeItem-Dj-DsIKf.js";import"./ToolbarRootContext-vSWj9GvP.js";import"./getDisabledMountTransitionStyles-DKjONRHa.js";import"./getPseudoElementBounds-BmBcIQWB.js";import"./chevron-down-DMwhZAyE.js";import"./index-Bpq4QA1l.js";import"./error-C1BVHOGO.js";import"./BaseCbacBanner-DWOaA_Qm.js";import"./makeExternalStore-D-x3UNlI.js";import"./Tooltip-AM4FOqG-.js";import"./PopoverPopup-dRUcZtBs.js";import"./toNumber-BbYikte9.js";import"./useOsdkClient-Bi-6TkqA.js";import"./tick-DeCcXAH6.js";import"./DropdownField-An8P0DUV.js";import"./withOsdkMetrics-ro0U0fU-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
