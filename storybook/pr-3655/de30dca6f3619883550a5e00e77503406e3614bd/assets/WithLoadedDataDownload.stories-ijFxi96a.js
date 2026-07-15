import{f as b,j as a,r as i}from"./iframe-DWzCX6-u.js";import{O as u}from"./object-table-B6JBP5lr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bs5f62Fj.js";import"./Table-CAvSA7OO.js";import"./index-olyefH4j.js";import"./Dialog-CSciZBIA.js";import"./cross-Ba2KcsSF.js";import"./svgIconContainer-Cei3XUPp.js";import"./useBaseUiId-DwbVetPl.js";import"./InternalBackdrop-B3wubLEm.js";import"./composite-Bu4Kb6op.js";import"./index-BweUTSSM.js";import"./index-BxBdE1lP.js";import"./index-CFxsS7p4.js";import"./useEventCallback-dqR8Kvrx.js";import"./SkeletonBar-DCfUsF2R.js";import"./LoadingCell-B4q5uFKe.js";import"./ColumnConfigDialog-v97jH0hL.js";import"./DraggableList-hh95Po1l.js";import"./search-B_4Qd157.js";import"./Input-DU8RlMQy.js";import"./useControlled-DZa9xgJF.js";import"./Button-CCcd_o0O.js";import"./small-cross-RYPdEO1J.js";import"./ActionButton-jZLIATZw.js";import"./Checkbox-DO2WI8HQ.js";import"./useValueChanged-DXNrg4b0.js";import"./CollapsiblePanel-9jMHH2lT.js";import"./MultiColumnSortDialog-CSze0t6c.js";import"./MenuTrigger-CH5Sn9K_.js";import"./CompositeItem-DIcJ9YLb.js";import"./ToolbarRootContext-IwK3YXju.js";import"./getDisabledMountTransitionStyles-CFKQxgrf.js";import"./getPseudoElementBounds-DBe-hi8x.js";import"./chevron-down-CXhUHAc-.js";import"./index-BULJ_7AJ.js";import"./error-FXATP8Qk.js";import"./BaseCbacBanner-RA7hfInc.js";import"./makeExternalStore-DSrWS5Uq.js";import"./Tooltip-O8od385D.js";import"./PopoverPopup-PsSoVdzH.js";import"./toNumber-BFHe0Rjl.js";import"./useOsdkClient-CpwJLGE-.js";import"./tick-JiDtWQVc.js";import"./DropdownField-DyhBRemz.js";import"./withOsdkMetrics-DoMBRpSv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
