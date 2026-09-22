import{f as b,j as a,r as i}from"./iframe-D6GK-HvP.js";import{O as u}from"./object-table-c5-yuc1V.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFH31g1G.js";import"./Table-KaTG4LsG.js";import"./index-B8Opp0Aq.js";import"./Dialog-BMlaZ5OW.js";import"./cross-Dd2BFVFf.js";import"./svgIconContainer-CSrNgshe.js";import"./useBaseUiId-8c0vpIbF.js";import"./InternalBackdrop-HHAKufKS.js";import"./composite-CrjUHFOu.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./index-BnURt9pi.js";import"./useEventCallback-SOIvlHLC.js";import"./SkeletonBar-F48-D9OO.js";import"./LoadingCell-CnqEJ9mH.js";import"./ColumnConfigDialog-DC09W4dG.js";import"./DraggableList-pqCMT3mz.js";import"./search-BIJa8P83.js";import"./Input-CEqlI-vi.js";import"./useControlled-DuFMSGQq.js";import"./Button-oq6XXTdR.js";import"./small-cross-poVqs8u3.js";import"./ActionButton-Bub0N-0E.js";import"./Checkbox-CyQO4MFp.js";import"./useValueChanged-re7ueQpT.js";import"./CollapsiblePanel-Cj9OvKAd.js";import"./MultiColumnSortDialog-uinvQw2f.js";import"./MenuTrigger-2Gpj1hX5.js";import"./CompositeItem-XBxLSQGB.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./getDisabledMountTransitionStyles-CPvJg8iL.js";import"./getPseudoElementBounds-DSxspgXt.js";import"./chevron-down-B7x3jao1.js";import"./index-C08EsZev.js";import"./error-CecGBnpf.js";import"./BaseCbacBanner-BVqhNcwk.js";import"./makeExternalStore-DeRAagV9.js";import"./Tooltip-xOoakjaD.js";import"./PopoverPopup-YhXneox5.js";import"./debounce-Cn0q10eM.js";import"./useOsdkClient-B41IHrdM.js";import"./tick-BvUp_jCe.js";import"./DropdownField-BocBrIvP.js";import"./isEqual-BDeh4Ts9.js";import"./withOsdkMetrics-D368-fbW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
